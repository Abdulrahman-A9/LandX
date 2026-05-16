import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockOpportunities } from '../../data/mock/opportunities';
import { TrendingUpIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from '../../components/ui/Icons';

const Investments = () => {
  const investments = mockOpportunities.slice(0, 5).map((opp, i) => ({
    ...opp,
    status: i === 0 ? 'active' : i === 1 ? 'pending' : i === 2 ? 'completed' : 'cancelled',
    investedAmount: opp.minInvestment * (i + 1),
    expectedReturn: opp.expectedReturn,
  }));

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-green-500/20 text-green-600 border-green-500/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30' },
      completed: { label: 'مكتمل', className: 'bg-blue-500/20 text-blue-600 border-blue-500/30' },
      cancelled: { label: 'ملغى', className: 'bg-red-500/20 text-red-600 border-red-500/30' },
    };
    return badges[status] || badges.pending;
  };

  const getStatusIcon = (status) => {
    const icons = {
      active: <TrendingUpIcon />,
      pending: <ClockIcon />,
      completed: <CheckCircleIcon />,
      cancelled: <XCircleIcon />,
    };
    return icons[status] || <ClockIcon />;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">استثماراتي</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">تتبع جميع استثماراتك الحالية والسابقة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الاستثمارات</h3>
              <TrendingUpIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{investments.length}</p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">استثمار</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الاستثمارات النشطة</h3>
              <CheckCircleIcon className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              {investments.filter(i => i.status === 'active').length}
            </p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">قيد التنفيذ</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي المبلغ المستثمر</h3>
              <TrendingUpIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">
              {formatCurrency(investments.reduce((sum, i) => sum + i.investedAmount, 0))} ر.س
            </p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">ريال سعودي</p>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" delay={300}>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">قائمة الاستثمارات</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {investments.map((investment, index) => {
                const badge = getStatusBadge(investment.status);
                const icon = getStatusIcon(investment.status);
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-bold text-brown-900 dark:text-stone-100">{investment.title}</p>
                        <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                          {icon}
                          <span className="mr-2">{badge.label}</span>
                        </span>
                      </div>
                      <p className="text-sm text-brown-700 dark:text-stone-400">
                        {investment.location} • {investment.season}
                      </p>
                    </div>
                    <div className="flex gap-6 text-left">
                      <div>
                        <p className="text-xs text-brown-600 dark:text-stone-400">المبلغ المستثمر</p>
                        <p className="font-bold text-brown-900 dark:text-stone-100">
                          {formatCurrency(investment.investedAmount)} ر.س
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-brown-600 dark:text-stone-400">العائد المتوقع</p>
                        <p className="font-bold text-green-600">{investment.expectedReturn}%</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default Investments;
