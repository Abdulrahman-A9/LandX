import React from 'react';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi, municipalityApi, opportunitiesApi } from '../../lib/api';
import { BarChartIcon, DollarSignIcon, LeafIcon, TrendingUpIcon, UsersIcon } from '../../components/ui/Icons';

const AdminAnalytics = () => {
  const { token } = useAuth();
  const { data, loading, error } = useAsyncData(async () => {
    const [stats, municipalities, opportunities] = await Promise.all([
      adminApi.stats(token),
      municipalityApi.list(token),
      opportunitiesApi.list(),
    ]);
    return { stats, municipalities, opportunities };
  }, [token]);

  const formatCurrency = (amount) => new Intl.NumberFormat('ar-SA').format(amount || 0);

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل التحليلات...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  const totalInvestment = data.opportunities.reduce((sum, item) => sum + Number(item.investment_required || 0), 0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">التقارير والتحليلات</h1>
        <p className="mt-2 text-app-text-muted">إحصاءات حقيقية مستخرجة من قاعدة البيانات الحالية.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
        {[
          ['إجمالي الاستثمار', `${formatCurrency(totalInvestment)} ر.س`, <DollarSignIcon className="text-brand" />],
          ['المستخدمون', data.stats.users, <UsersIcon className="text-brand" />],
          ['الفرص', data.stats.opportunities, <LeafIcon className="text-brand" />],
          ['التحليلات', data.stats.analyses, <TrendingUpIcon className="text-brand" />],
        ].map(([label, value, icon]) => (
          <Card key={label} className="p-6 bg-card-gradient border border-app-border">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-medium text-app-text-muted">{label}</h3>
              {icon}
            </div>
            <p className="text-3xl font-bold text-app-text">{value}</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="bg-card-gradient border border-app-border p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-app-text">توزيع الفرص حسب البلدية</h2>
            <BarChartIcon className="text-brand" />
          </div>
          <div className="space-y-4">
            {data.municipalities.map((municipality) => {
              const count = data.opportunities.filter((item) => item.municipality_id === municipality.id).length;
              return (
                <div key={municipality.id} className="flex items-center justify-between rounded-lg border border-app-border bg-app-surface-soft p-4">
                  <span className="text-app-text">{municipality.name}</span>
                  <span className="font-bold text-app-text">{count} فرصة</span>
                </div>
              );
            })}
          </div>
        </Card>

        <Card className="bg-card-gradient border border-app-border p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-app-text">ملخص الأداء</h2>
            <TrendingUpIcon className="text-brand" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-app-border bg-app-surface-soft p-4">
              <div className="text-sm text-app-text-muted">الفرص النشطة</div>
              <div className="mt-2 text-2xl font-bold text-success">{data.stats.active_opportunities}</div>
            </div>
            <div className="rounded-lg border border-app-border bg-app-surface-soft p-4">
              <div className="text-sm text-app-text-muted">طلبات الاهتمام</div>
              <div className="mt-2 text-2xl font-bold text-app-text">{data.stats.interest_requests}</div>
            </div>
            <div className="rounded-lg border border-app-border bg-app-surface-soft p-4">
              <div className="text-sm text-app-text-muted">الاستفسارات</div>
              <div className="mt-2 text-2xl font-bold text-app-text">{data.stats.inquiries}</div>
            </div>
            <div className="rounded-lg border border-app-border bg-app-surface-soft p-4">
              <div className="text-sm text-app-text-muted">البلديات</div>
              <div className="mt-2 text-2xl font-bold text-app-text">{data.stats.municipalities}</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalytics;
