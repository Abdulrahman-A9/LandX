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
      active: { label: 'نشط', className: 'bg-success/10 text-success border-success/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-warning/10 text-warning border-warning/30' },
      completed: { label: 'مكتمل', className: 'bg-brand/10 text-brand border-brand/30' },
      cancelled: { label: 'ملغى', className: 'bg-danger/10 text-danger border-danger/30' },
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
        <h1 className="text-3xl font-bold text-app-text">استثماراتي</h1>
        <p className="text-app-text-muted mt-2">إدارة ومتابعة استثماراتك الحالية</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي الاستثمارات</h3>
              <TrendingUpIcon className="text-app-text-soft" />
            </div>
            <p className="text-3xl font-bold text-app-text">{investments.length}</p>
            <p className="text-sm text-app-text-soft mt-2">استثمار</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">الاستثمارات النشطة</h3>
              <CheckCircleIcon className="text-success" />
            </div>
            <p className="text-3xl font-bold text-success">
              {investments.filter(i => i.status === 'active').length}
            </p>
            <p className="text-sm text-app-text-soft mt-2">قيد التنفيذ</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي المبلغ المستثمر</h3>
              <TrendingUpIcon className="text-app-text-soft" />
            </div>
            <p className="text-3xl font-bold text-brand">
              {formatCurrency(investments.reduce((sum, i) => sum + i.investedAmount, 0))} ر.س
            </p>
            <p className="text-sm text-app-text-soft mt-2">ريال سعودي</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">الاستثمارات المكتملة</h3>
              <CheckCircleIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-brand">
              {investments.filter(i => i.status === 'completed').length}
            </p>
            <p className="text-sm text-app-text-soft mt-2">مكتملة</p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">قائمة الاستثمارات</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {investments.map((investment, index) => {
                const badge = getStatusBadge(investment.status);
                const icon = getStatusIcon(investment.status);
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-bold text-app-text">{investment.title}</p>
                        <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                          {icon}
                          <span className="mr-2">{badge.label}</span>
                        </span>
                      </div>
                      <p className="text-sm text-app-text-muted">
                        {investment.location} • {investment.season}
                      </p>
                    </div>
                    <div className="flex gap-6 text-left">
                      <div>
                        <p className="text-xs text-app-text-soft">المبلغ المستثمر</p>
                        <p className="font-bold text-app-text">
                          {formatCurrency(investment.investedAmount)} ر.س
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-app-text-soft">العائد المتوقع</p>
                        <p className="font-bold text-success">{investment.expectedReturn}%</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Investments;
