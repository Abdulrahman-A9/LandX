import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import OpportunityCard from '../../components/shared/OpportunityCard';
import { useToast } from '../../context/ToastContext';
import { mockOpportunities } from '../../data/mock/opportunities';
import {
  ArrowRightIcon,
  BuildingIcon,
  CalendarIcon,
  CheckCircleIcon,
  FileTextIcon,
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
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const opportunity = mockOpportunities.find((item) => item.id === Number(id));

  const related = useMemo(() => {
    return mockOpportunities.filter((item) => item.id !== Number(id)).slice(0, 3);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    addToast('تم إرسال طلب الاهتمام بنجاح. سيصلك تواصل خلال وقت قصير.', 'success');
    setTimeout(() => {
      setShowForm(false);
      setSubmitted(false);
    }, 2200);
  };

  if (!opportunity) {
    return (
      <div className="landx-shell py-20">
        <Card className="mx-auto max-w-2xl p-10 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-app-border bg-app-surface-soft text-app-text-soft">
            <SearchIcon className="h-8 w-8" />
          </div>
          <h1 className="mt-5 text-3xl font-black text-app-text">الفرصة غير موجودة</h1>
          <p className="mt-3 text-sm leading-8 text-app-text-muted">
            لم نتمكن من العثور على هذه الفرصة. يمكنك العودة إلى قائمة الفرص واستعراض الفرص المتاحة.
          </p>
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

  const {
    title,
    municipality,
    location,
    season,
    area,
    areaUnit,
    expectedReturn,
    investmentRequired,
    currency,
    status,
    images,
    description,
    features,
  } = opportunity;

  const statusVariant = status === 'active' ? 'success' : 'warning';

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
              <Badge variant={statusVariant}>{statusLabel(status)}</Badge>
              <h1 className="max-w-4xl text-4xl font-black leading-tight text-app-text md:text-5xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg leading-9 text-app-text-muted">
                فرصة تعرض مؤشرات الدخول الأساسية بوضوح: الجهة، الموقع، العائد، والمسار المتوقع
                قبل التقديم أو الاستفسار.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm text-app-text-muted">
                  {municipality}
                </div>
                <div className="rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm text-app-text-muted">
                  {location}
                </div>
                <div className="rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm text-app-text-muted">
                  موسم {seasonLabel(season)}
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
                  <div className="mt-3 text-3xl font-black text-success">{expectedReturn}%</div>
                </div>
                <div className="rounded-2xl border border-brand/20 bg-brand/10 p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <LeafIcon className="h-4 w-4 text-brand" />
                    الاستثمار المطلوب
                  </div>
                  <div className="mt-3 text-lg font-bold leading-7 text-app-text">
                    {formatCurrency(investmentRequired, currency)}
                  </div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <MapPinIcon className="h-4 w-4 text-brand" />
                    المساحة
                  </div>
                  <div className="mt-3 text-lg font-bold text-app-text">
                    {area} {areaUnit}
                  </div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <CalendarIcon className="h-4 w-4 text-brand" />
                    حالة النشر
                  </div>
                  <div className="mt-3 text-lg font-bold text-app-text">{statusLabel(status)}</div>
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
                {images?.length ? (
                  <img src={images[0]} alt={title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <LeafIcon className="h-16 w-16 text-app-text-soft" />
                  </div>
                )}
              </div>
            </Card>

            <Card className="p-6 lg:p-7">
              <h2 className="text-2xl font-bold text-app-text">وصف الفرصة</h2>
              <p className="mt-4 text-sm leading-8 text-app-text-muted">{description}</p>
            </Card>

            <Card className="p-6 lg:p-7">
              <h2 className="text-2xl font-bold text-app-text">ما الذي يميزها؟</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {features.map((feature) => (
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
                  <div className="text-sm text-app-text-soft">نوع القراءة الحالية</div>
                  <div className="mt-2 font-bold text-app-text">قراءة أولية منظمة قبل التواصل</div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="text-sm text-app-text-soft">الجهة المعلنة</div>
                  <div className="mt-2 flex items-center gap-2 font-bold text-app-text">
                    <BuildingIcon className="h-4 w-4 text-brand" />
                    {municipality}
                  </div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="text-sm text-app-text-soft">أفضل خطوة تالية</div>
                  <div className="mt-2 font-bold text-app-text">مراجعة التفاصيل ثم إرسال اهتمام أو استفسار محدد</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text">المسار المقترح</h2>
              <div className="mt-5 space-y-4">
                {[
                  'راجع الوصف والمزايا لتكوين تصور أولي.',
                  'قارن مؤشرات الدخول مع فرص مشابهة داخل المنصة.',
                  'إذا كانت مناسبة، أرسل اهتمامك أو تواصل مع الفريق لاستكمال الإجراء.',
                ].map((item, index) => (
                  <div key={item} className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-7 text-app-text-muted">{item}</p>
                  </div>
                ))}
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
              <h2 className="mt-4 text-3xl font-black text-app-text">نفس مستوى القراءة، خيارات أخرى للمقارنة.</h2>
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
                <p className="mt-1 text-sm text-app-text-muted">أدخل بيانات مختصرة ليتم توجيه الطلب للفريق.</p>
              </div>
              <button
                onClick={() => setShowForm(false)}
                className="rounded-full border border-app-border bg-app-surface-soft px-3 py-2 text-sm font-semibold text-app-text-muted"
              >
                إغلاق
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircleIcon className="mx-auto h-12 w-12 text-success" />
                <h3 className="mt-4 text-xl font-bold text-app-text">تم الإرسال بنجاح</h3>
                <p className="mt-2 text-sm leading-7 text-app-text-muted">
                  سيقوم الفريق بمراجعة الطلب والتواصل معك في أقرب وقت.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                  required
                  placeholder="الاسم الكامل"
                  className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                />
                <input
                  required
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                />
                <input
                  required
                  type="tel"
                  placeholder="رقم الجوال"
                  className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                />
                <textarea
                  rows={4}
                  placeholder="ماذا تريد أن تعرف قبل المتابعة؟"
                  className="w-full resize-none rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" size="lg" className="flex-1">
                    إرسال الطلب
                  </Button>
                  <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setShowForm(false)}>
                    إلغاء
                  </Button>
                </div>
              </form>
            )}
          </Card>
        </div>
      ) : null}
    </div>
  );
};

export default OpportunityDetails;
