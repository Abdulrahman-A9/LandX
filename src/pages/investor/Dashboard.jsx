import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { analysisApi, inquiryApi, interestRequestApi } from '../../lib/api';
import {
  ArrowRightIcon,
  DollarSignIcon,
  FileTextIcon,
  LeafIcon,
  MessageCircleIcon,
  TrendingUpIcon,
  WalletIcon,
} from '../../components/ui/Icons';
import { formatCurrency } from '../../lib/formatters';

const InvestorDashboard = () => {
  const { token } = useAuth();
  const { data, loading, error } = useAsyncData(async () => {
    const [inquiries, interests, analyses] = await Promise.all([
      inquiryApi.my(token),
      interestRequestApi.my(token),
      analysisApi.list(token),
    ]);
    return { inquiries, interests, analyses };
  }, [token]);

  const stats = useMemo(() => {
    const interests = data.interests || [];
    const inquiries = data.inquiries || [];
    const analyses = data.analyses || [];
    const totalInvested = interests.reduce((sum, item) => sum + Number(item.proposed_amount || 0), 0);

    return {
      totalInvestments: interests.length,
      totalInvested,
      pendingInquiries: inquiries.filter((item) => item.status === 'pending').length,
      activeInvestments: interests.filter((item) => item.status === 'under_review' || item.status === 'approved').length,
      analyses: analyses.length,
    };
  }, [data]);

  const nextSteps = [
    {
      title: 'استكشف فرصة جديدة',
      description: 'إذا لم تجد ما يكفي من الطلبات النشطة، عد إلى قائمة الفرص وابدأ من فرص جديدة.',
      to: '/investor/opportunities',
      icon: <LeafIcon className="h-5 w-5" />,
      highlight: !stats.totalInvestments,
    },
    {
      title: 'أنشئ تحليلًا جديدًا',
      description: 'حوّل فكرة غير ناضجة إلى تقرير محفوظ تستطيع الرجوع إليه أو عرضه أمام اللجنة.',
      to: '/investment-analysis',
      icon: <TrendingUpIcon className="h-5 w-5" />,
      highlight: !stats.analyses,
    },
    {
      title: 'راجع استفساراتك',
      description: 'تابع الاستفسارات المفتوحة والردود الواردة من الجهات المعلنة داخل النظام.',
      to: '/investor/inquiries',
      icon: <MessageCircleIcon className="h-5 w-5" />,
      highlight: stats.pendingInquiries > 0,
    },
  ];

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل لوحة المستثمر...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-7">
          <div className="landx-kicker">لوحة قيادة المستثمر</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">ابدأ من هنا ثم تحرك للخطوة التالية بوضوح</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-app-text-muted">
            هذه اللوحة لا تعرض أرقامًا فقط، بل تختصر أين وصلت في المسار وماذا ينبغي أن تفعل بعد ذلك داخل المنصة.
          </p>
        </Card>

        <Card className="p-7">
          <div className="text-sm font-semibold text-app-text-muted">ملخص الجلسة</div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-[#e2c8b2] bg-white/60 p-4">
              <div className="text-xs font-semibold text-app-text-soft">طلبات الاهتمام</div>
              <div className="mt-2 text-3xl font-black text-success">{stats.totalInvestments}</div>
            </div>
            <div className="rounded-2xl border border-[#e2c8b2] bg-white/60 p-4">
              <div className="text-xs font-semibold text-app-text-soft">استفسارات معلقة</div>
              <div className="mt-2 text-3xl font-black text-warning">{stats.pendingInquiries}</div>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'إجمالي الطلبات', value: stats.totalInvestments, helper: 'طلبات اهتمام مسجلة', icon: <WalletIcon className="h-5 w-5" />, tone: 'text-app-text' },
            { label: 'قيد المتابعة', value: stats.activeInvestments, helper: 'تحت المراجعة أو معتمدة', icon: <TrendingUpIcon className="h-5 w-5" />, tone: 'text-success' },
            { label: 'قيمة مقترحة', value: formatCurrency(stats.totalInvested), helper: 'إجمالي المبالغ المسجلة', icon: <DollarSignIcon className="h-5 w-5" />, tone: 'text-brand' },
            { label: 'تقارير التحليل', value: stats.analyses, helper: 'تحليلات محفوظة في القاعدة', icon: <FileTextIcon className="h-5 w-5" />, tone: 'text-warning' },
          ].map((item) => (
            <Card key={item.label} className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-app-text-muted">{item.label}</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                  {item.icon}
                </div>
              </div>
              <div className={`mt-6 text-3xl font-black ${item.tone}`}>{item.value}</div>
              <div className="mt-2 text-sm leading-7 text-app-text-muted">{item.helper}</div>
            </Card>
          ))}
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-app-text">الخطوات المقترحة الآن</h2>
          <p className="mt-2 text-sm leading-7 text-app-text-muted">
            هذه الإجراءات مرتبة لتقودك من الاكتشاف إلى التحليل ثم إلى المتابعة بدون تشتت.
          </p>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {nextSteps.map((item) => (
            <Card key={item.title} className={`p-6 ${item.highlight ? 'border-brand/40' : ''}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                {item.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-app-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-8 text-app-text-muted">{item.description}</p>
              <Link to={item.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                الانتقال الآن
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InvestorDashboard;
