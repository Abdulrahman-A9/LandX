import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import OpportunityCard from '../../components/shared/OpportunityCard';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';
import { mapOpportunity } from '../../lib/adapters';
import { inquiryApi, interestRequestApi, opportunitiesApi } from '../../lib/api';
import {
  ArrowRightIcon,
  BuildingIcon,
  CalendarIcon,
  CheckCircleIcon,
  LeafIcon,
  MapPinIcon,
  MessageCircleIcon,
  PercentIcon,
  SearchIcon,
} from '../../components/ui/Icons';
import { formatCurrency, seasonLabel, statusLabel } from '../../lib/formatters';

const OpportunityDetails = () => {
  const { id } = useParams();
  const { addToast } = useToast();
  const { token, user } = useAuth();
  const [showForm, setShowForm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [opportunity, setOpportunity] = useState(null);
  const [related, setRelated] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const run = async () => {
      try {
        setLoading(true);
        setError('');
        const [detail, list] = await Promise.all([
          opportunitiesApi.getById(id),
          opportunitiesApi.list(),
        ]);
        if (!active) return;
        setOpportunity(mapOpportunity(detail));
        setRelated(list.map(mapOpportunity).filter((item) => item.id !== Number(id)).slice(0, 3));
      } catch (err) {
        if (active) setError(err.message || 'تعذر تحميل تفاصيل الفرصة');
      } finally {
        if (active) setLoading(false);
      }
    };

    run();
    return () => {
      active = false;
    };
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token || user?.role !== 'investor') {
      addToast('سجل الدخول بحساب مستثمر لإرسال طلب اهتمام أو استفسار.', 'error');
      return;
    }

    const formData = new FormData(event.currentTarget);
    const notes = formData.get('notes')?.toString() || '';

    try {
      setSubmitting(true);
      await Promise.all([
        interestRequestApi.create(token, {
          opportunity_id: Number(id),
          notes,
        }),
        inquiryApi.create(token, {
          opportunity_id: Number(id),
          subject: `استفسار بخصوص ${opportunity.title}`,
          message: notes || 'أرغب بالحصول على معلومات إضافية حول هذه الفرصة.',
        }),
      ]);
      addToast('تم تسجيل اهتمامك وإرسال استفسار أولي بنجاح.', 'success');
      setShowForm(false);
    } catch (err) {
      addToast(err.message || 'تعذر إرسال الطلب.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const statusVariant = opportunity?.status === 'active' ? 'success' : 'warning';

  if (loading) {
    return <div className="landx-shell py-20 text-center text-app-text-muted">جاري تحميل تفاصيل الفرصة...</div>;
  }

  if (error || !opportunity) {
    return (
      <div className="landx-shell py-20">
        <Card className="mx-auto max-w-2xl p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-app-border bg-app-surface-soft text-app-text-soft">
            <SearchIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-5 text-3xl font-black text-app-text">الفرصة غير متاحة</h1>
          <p className="mt-3 text-sm leading-8 text-app-text-muted">{error || 'لم نتمكن من العثور على هذه الفرصة.'}</p>
          <Link
            to="/opportunities"
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-brand-deep px-5 py-3 text-sm font-semibold text-app-text"
          >
            العودة إلى الفرص
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div>
      <section className="relative overflow-hidden border-b border-app-border/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,123,69,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(125,47,54,0.12),transparent_26%)]" />
        <div className="landx-shell relative py-14 lg:py-16">
          <Link to="/opportunities" className="inline-flex items-center gap-2 text-sm font-semibold text-app-text-muted hover:text-app-text">
            <ArrowRightIcon className="h-4 w-4" />
            العودة إلى كل الفرص
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <Badge variant={statusVariant}>{statusLabel(opportunity.status)}</Badge>
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-app-text md:text-5xl">{opportunity.title}</h1>
              <p className="max-w-3xl text-lg leading-9 text-app-text-muted">{opportunity.description}</p>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm text-app-text-muted">
                  {opportunity.municipality}
                </div>
                <div className="rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm text-app-text-muted">
                  {opportunity.location}
                </div>
                <div className="rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm text-app-text-muted">
                  موسم {seasonLabel(opportunity.season)}
                </div>
              </div>
            </div>

            <Card className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-success/20 bg-success/10 p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <PercentIcon className="h-4 w-4 text-success" />
                    العائد المتوقع
                  </div>
                  <div className="mt-3 text-3xl font-black text-success">{opportunity.expectedReturn}%</div>
                </div>
                <div className="rounded-2xl border border-brand/20 bg-brand/10 p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <LeafIcon className="h-4 w-4 text-brand" />
                    الاستثمار المطلوب
                  </div>
                  <div className="mt-3 text-lg font-bold leading-7 text-app-text">
                    {formatCurrency(opportunity.investmentRequired, opportunity.currency)}
                  </div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <MapPinIcon className="h-4 w-4 text-brand" />
                    المساحة
                  </div>
                  <div className="mt-3 text-lg font-bold text-app-text">
                    {opportunity.area} {opportunity.areaUnit}
                  </div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <CalendarIcon className="h-4 w-4 text-brand" />
                    حالة النشر
                  </div>
                  <div className="mt-3 text-lg font-bold text-app-text">{statusLabel(opportunity.status)}</div>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <Button size="lg" onClick={() => setShowForm(true)}>
                  أبدِ اهتمامك بهذه الفرصة
                </Button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-app-border bg-app-surface-soft px-5 py-3 text-sm font-semibold text-app-text"
                >
                  تواصل مع الفريق
                  <MessageCircleIcon className="h-4 w-4" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="landx-shell grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8">
            <Card className="overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden bg-app-surface-soft">
                {opportunity.images?.length ? (
                  <img src={opportunity.images[0]} alt={opportunity.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <LeafIcon className="h-16 w-16 text-app-text-soft" />
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6 lg:p-7">
              <h2 className="text-2xl font-bold text-app-text">وصف الفرصة</h2>
              <p className="mt-4 text-sm leading-8 text-app-text-muted">{opportunity.description}</p>
            </Card>

            <Card className="p-6 lg:p-7">
              <h2 className="text-2xl font-bold text-app-text">ما الذي يميزها؟</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {opportunity.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 rounded-2xl border border-app-border bg-app-surface-soft p-4">
                    <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-success" />
                    <span className="text-sm leading-7 text-app-text-muted">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text">ملخص سريع للقرار</h2>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="text-sm text-app-text-soft">الجهة المعلنة</div>
                  <div className="mt-2 flex items-center gap-2 font-bold text-app-text">
                    <BuildingIcon className="h-4 w-4 text-brand" />
                    {opportunity.municipality}
                  </div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="text-sm text-app-text-soft">أفضل خطوة تالية</div>
                  <div className="mt-2 font-bold text-app-text">راجع التفاصيل ثم أرسل اهتمامك أو استفسارك المباشر.</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="pb-16 lg:pb-20">
          <div className="landx-shell space-y-8">
            <div>
              <div className="landx-kicker">فرص مشابهة</div>
              <h2 className="mt-4 text-3xl font-black text-app-text">خيارات أخرى للمقارنة.</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item) => (
                <OpportunityCard key={item.id} opportunity={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {showForm ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
          <Card className="w-full max-w-xl p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-app-text">إبداء اهتمام بالفرصة</h2>
                <p className="mt-1 text-sm text-app-text-muted">سيتم تسجيل طلب اهتمام واستفسار أولي في النظام.</p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="rounded-full border border-app-border bg-app-surface-soft px-3 py-2 text-sm font-semibold text-app-text-muted"
              >
                إغلاق
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <textarea
                rows={4}
                name="notes"
                placeholder="اكتب ما الذي تريد معرفته أو نوع اهتمامك بهذه الفرصة"
                className="w-full resize-none rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
              />
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button type="submit" size="lg" className="flex-1" disabled={submitting}>
                  {submitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setShowForm(false)}>
                  إلغاء
                </Button>
              </div>
            </form>
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default OpportunityDetails;
