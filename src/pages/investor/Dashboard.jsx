import React, { useMemo } from 'react';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { analysisApi, inquiryApi, interestRequestApi } from '../../lib/api';
import { DollarSignIcon, FileTextIcon, TrendingUpIcon, WalletIcon } from '../../components/ui/Icons';
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

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل لوحة المستثمر...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-7">
          <div className="landx-kicker">نظرة عامة</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">لوحة المستثمر</h1>
          <p className="mt-3 max-w-2xl text-sm leading-8 text-app-text-muted">
            هذه اللوحة مرتبطة ببياناتك الحقيقية داخل النظام: طلبات الاهتمام، الاستفسارات، وتقارير التحليل المحفوظة.
          </p>
        </Card>

        <Card className="p-7">
          <div className="text-sm text-app-text-soft">ملخص الجلسة</div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
              <div className="text-xs text-app-text-soft">طلبات الاهتمام</div>
              <div className="mt-2 text-3xl font-black text-success">{stats.totalInvestments}</div>
            </div>
            <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
              <div className="text-xs text-app-text-soft">استفسارات معلقة</div>
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
              <div className="text-sm text-app-text-muted">{item.label}</div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                {item.icon}
              </div>
            </div>
            <div className={`mt-6 text-3xl font-black ${item.tone}`}>{item.value}</div>
            <div className="mt-2 text-sm text-app-text-soft">{item.helper}</div>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default InvestorDashboard;
