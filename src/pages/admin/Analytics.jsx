import React from 'react';
import Card from '../../components/ui/Card';
import { TrendingUpIcon, DollarSignIcon, UsersIcon, LeafIcon, BarChartIcon, PieChartIcon } from '../../components/ui/Icons';

const AdminAnalytics = () => {
  const stats = {
    totalInvestment: 2500000,
    totalUsers: 150,
    totalOpportunities: 25,
    avgReturn: 16,
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  const regionData = [
    { region: 'حائل', opportunities: 8, investment: 800000, percentage: 32 },
    { region: 'القصيم', opportunities: 12, investment: 1200000, percentage: 48 },
    { region: 'تبوك', opportunities: 3, investment: 300000, percentage: 12 },
    { region: 'الجوف', opportunities: 2, investment: 200000, percentage: 8 },
  ];

  const monthlyData = [
    { month: 'يناير', investment: 200000, users: 20 },
    { month: 'فبراير', investment: 350000, users: 35 },
    { month: 'مارس', investment: 450000, users: 45 },
    { month: 'أبريل', investment: 600000, users: 50 },
    { month: 'مايو', investment: 900000, users: 65 },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">التقارير والتحليلات</h1>
        <p className="text-app-text-muted mt-2">نظرة شاملة على أداء المنصة والإحصائيات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي الاستثمار</h3>
              <DollarSignIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-app-text">{formatCurrency(stats.totalInvestment)} ر.س</p>
            <p className="text-sm text-success mt-2">+25% من الشهر الماضي</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">المستخدمين</h3>
              <UsersIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-app-text">{stats.totalUsers}</p>
            <p className="text-sm text-success mt-2">+15 مستخدم جديد</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">الفرص الاستثمارية</h3>
              <LeafIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-app-text">{stats.totalOpportunities}</p>
            <p className="text-sm text-success mt-2">+3 فرص جديدة</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">متوسط العائد</h3>
              <TrendingUpIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-app-text">{stats.avgReturn}%</p>
            <p className="text-sm text-success mt-2">+2% من المعدل السابق</p>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
          <Card className="bg-card-gradient border border-app-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-app-text">توزيع الاستثمار حسب المنطقة</h2>
              <PieChartIcon className="text-brand" />
            </div>
            <div className="space-y-4">
              {regionData.map((region, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-app-text">{region.region}</span>
                    <span className="text-sm text-app-text-muted">
                      {formatCurrency(region.investment)} ر.س ({region.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-app-border rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-brand to-brand-deep h-2 rounded-full transition-all duration-300"
                      style={{ width: `${region.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-card-gradient border border-app-border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-app-text">نمو الاستثمار الشهري</h2>
              <BarChartIcon className="text-brand" />
            </div>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-app-text">{data.month}</span>
                    <span className="text-sm text-app-text-muted">
                      {formatCurrency(data.investment)} ر.س ({data.users} مستخدم)
                    </span>
                  </div>
                  <div className="w-full bg-app-border rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-success to-success/80 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(data.investment / 900000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border p-6">
          <h2 className="text-xl font-bold text-app-text mb-6">أداء الفرص الاستثمارية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-app-surface-soft border border-app-border rounded-lg">
              <h3 className="text-sm font-medium text-app-text-muted mb-2">أعلى عائد</h3>
              <p className="text-2xl font-bold text-success">18%</p>
              <p className="text-sm text-app-text mt-1">سهول القصيم</p>
            </div>
            <div className="p-4 bg-app-surface-soft border border-app-border rounded-lg">
              <h3 className="text-sm font-medium text-app-text-muted mb-2">أكثر طلباً</h3>
              <p className="text-2xl font-bold text-app-text">23</p>
              <p className="text-sm text-app-text mt-1">سهول القصيم</p>
            </div>
            <div className="p-4 bg-app-surface-soft border border-app-border rounded-lg">
              <h3 className="text-sm font-medium text-app-text-muted mb-2">أكبر استثمار</h3>
              <p className="text-2xl font-bold text-app-text">{formatCurrency(1200000)} ر.س</p>
              <p className="text-sm text-app-text mt-1">منطقة القصيم</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminAnalytics;
