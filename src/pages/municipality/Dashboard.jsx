import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { inquiryApi, opportunitiesApi } from '../../lib/api';
import { CheckIcon, DollarSignIcon, FileTextIcon, LeafIcon, PlusIcon } from '../../components/ui/Icons';
import { formatCurrency } from '../../lib/formatters';

const MunicipalityDashboard = () => {
  const { token, user } = useAuth();
  const { data, loading, error } = useAsyncData(async () => {
    const [inquiries, opportunities] = await Promise.all([inquiryApi.municipality(token), opportunitiesApi.list()]);
    return {
      inquiries,
      platformOpportunities: opportunities,
      opportunities: opportunities.filter((item) => item.municipality_id === user?.municipality_id),
    };
  }, [token, user?.municipality_id]);

  const stats = useMemo(() => {
    const opportunities = data.opportunities || [];
    const inquiries = data.inquiries || [];
    return {
      platformOpportunities: data.platformOpportunities?.length || 0,
      totalOpportunities: opportunities.length,
      activeOpportunities: opportunities.filter((item) => item.status === 'active').length,
      pendingInquiries: inquiries.filter((item) => item.status === 'pending').length,
      totalInvestment: opportunities.reduce((sum, item) => sum + Number(item.investment_required || 0), 0),
    };
  }, [data]);

  const nextSteps = [
    {
      title: 'إضافة فرصة جديدة',
      description: 'أضف فرصة استثمارية جديدة إذا كانت القائمة الحالية لا تعكس كامل الفرص المتاحة في البلدية.',
      to: '/municipality/opportunities/create',
    },
    {
      title: 'مراجعة الاستفسارات',
      description: 'ابدأ بالاستفسارات المفتوحة لأنها أكثر ما يؤثر على تجربة المستثمر ومصداقية الجهة.',
      to: '/municipality/inquiries',
    },
    {
      title: 'تحديث المحتوى المنشور',
      description: 'حدّث أخبارك وإعلاناتك ليبقى المستثمرون على اطلاع بفرص البلدية ومشاريعها.',
      to: '/municipality/news',
    },
  ];

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل لوحة البلدية...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-7">
          <div className="landx-kicker">تشغيل البلدية</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">لوحة البلدية</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-app-text-muted">
            هنا تدير فرص بلديتك وتتابع استفسارات المستثمرين واهتماماتهم.
          </p>
          <div className="mt-5 rounded-2xl border border-[#ead9c7] bg-white/55 p-4 text-sm leading-8 text-app-text-muted">
            تعرض المنصة العامة جميع الفرص المنشورة، بينما تركز مساحة البلدية على الفرص التابعة لها والطلبات الواردة عليها.
          </div>
        </Card>
        <Card className="p-7">
          <div className="text-sm font-semibold text-app-text-muted">أولوية اليوم</div>
          <div className="mt-4 rounded-2xl border border-warning/20 bg-[#fbf1e6] p-5">
            <div className="text-3xl font-black text-warning">{stats.pendingInquiries}</div>
            <div className="mt-2 text-sm leading-7 text-app-text-muted">استفسارات مفتوحة تحتاج فرزًا أو ردًا.</div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'إجمالي المنصة', value: stats.platformOpportunities, helper: 'فرص منشورة للمستثمرين', icon: <LeafIcon className="h-5 w-5" />, tone: 'text-brand' },
          { label: 'إجمالي الفرص', value: stats.totalOpportunities, helper: 'فرص مرتبطة ببلديتك', icon: <LeafIcon className="h-5 w-5" />, tone: 'text-app-text' },
          { label: 'الفرص النشطة', value: stats.activeOpportunities, helper: 'جاهزة للاستعراض', icon: <CheckIcon className="h-5 w-5" />, tone: 'text-success' },
          { label: 'الاستفسارات', value: stats.pendingInquiries, helper: 'بانتظار الرد', icon: <FileTextIcon className="h-5 w-5" />, tone: 'text-warning' },
          { label: 'قيمة الاستثمار', value: formatCurrency(stats.totalInvestment), helper: 'إجمالي فرص بلديتك الحالية', icon: <DollarSignIcon className="h-5 w-5" />, tone: 'text-brand' },
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
          <p className="mt-2 text-sm leading-7 text-app-text-muted">رتب العمل حسب الأولوية: نشر، متابعة، ثم تحسين المحتوى.</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {nextSteps.map((item, index) => (
            <Card key={item.title} className={`p-6 ${index === 1 && stats.pendingInquiries ? 'border-warning/40' : ''}`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                <PlusIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-app-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-8 text-app-text-muted">{item.description}</p>
              <Link to={item.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                الانتقال الآن
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MunicipalityDashboard;
