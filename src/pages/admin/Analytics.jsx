import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
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
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">التقارير والتحليلات</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">نظرة شاملة على أداء المنصة والإحصائيات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الاستثمار</h3>
              <DollarSignIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{formatCurrency(stats.totalInvestment)} ر.س</p>
            <p className="text-sm text-green-600 mt-2">+25% من الشهر الماضي</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">المستخدمين</h3>
              <UsersIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{stats.totalUsers}</p>
            <p className="text-sm text-green-600 mt-2">+15 مستخدم جديد</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الفرص الاستثمارية</h3>
              <LeafIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{stats.totalOpportunities}</p>
            <p className="text-sm text-green-600 mt-2">+3 فرص جديدة</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">متوسط العائد</h3>
              <TrendingUpIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{stats.avgReturn}%</p>
            <p className="text-sm text-green-600 mt-2">+2% من المعدل السابق</p>
          </Card>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AnimatedSection animation="slideLeft">
          <Card className="bg-card-gradient border border-brown-300 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">توزيع الاستثمار حسب المنطقة</h2>
              <PieChartIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <div className="space-y-4">
              {regionData.map((region, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-brown-900 dark:text-stone-100">{region.region}</span>
                    <span className="text-sm text-brown-700 dark:text-stone-400">
                      {formatCurrency(region.investment)} ر.س ({region.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-brown-200 dark:bg-stone-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-brown-600 to-brown-700 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${region.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="slideRight">
          <Card className="bg-card-gradient border border-brown-300 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">نمو الاستثمار الشهري</h2>
              <BarChartIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-brown-900 dark:text-stone-100">{data.month}</span>
                    <span className="text-sm text-brown-700 dark:text-stone-400">
                      {formatCurrency(data.investment)} ر.س ({data.users} مستخدم)
                    </span>
                  </div>
                  <div className="w-full bg-brown-200 dark:bg-stone-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-600 to-green-700 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(data.investment / 900000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" delay={400}>
        <Card className="bg-card-gradient border border-brown-300 p-6">
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-6">أداء الفرص الاستثمارية</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">أعلى عائد</h3>
              <p className="text-2xl font-bold text-green-600">18%</p>
              <p className="text-sm text-brown-900 dark:text-stone-100 mt-1">سهول القصيم</p>
            </div>
            <div className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">أكثر طلباً</h3>
              <p className="text-2xl font-bold text-brown-900 dark:text-stone-100">23</p>
              <p className="text-sm text-brown-900 dark:text-stone-100 mt-1">سهول القصيم</p>
            </div>
            <div className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">أكبر استثمار</h3>
              <p className="text-2xl font-bold text-brown-900 dark:text-stone-100">{formatCurrency(1200000)} ر.س</p>
              <p className="text-sm text-brown-900 dark:text-stone-100 mt-1">منطقة القصيم</p>
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default AdminAnalytics;
