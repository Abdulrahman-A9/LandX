import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { interestRequestApi } from '../../lib/api';
import { TrendingUpIcon, ClockIcon, CheckCircleIcon, XCircleIcon } from '../../components/ui/Icons';

const Investments = () => {
  const { token } = useAuth();
  const { data: investments, loading, error } = useAsyncData(() => interestRequestApi.my(token), [token]);

  const getStatusBadge = (status) => {
    const badges = {
      approved: { label: 'معتمد', className: 'bg-success/10 text-success border-success/30' },
      under_review: { label: 'قيد المراجعة', className: 'bg-warning/10 text-warning border-warning/30' },
      submitted: { label: 'مرسل', className: 'bg-brand/10 text-brand border-brand/30' },
      rejected: { label: 'مرفوض', className: 'bg-danger/10 text-danger border-danger/30' },
    };
    return badges[status] || badges.submitted;
  };

  const getStatusIcon = (status) => {
    const icons = {
      approved: <CheckCircleIcon />,
      under_review: <ClockIcon />,
      submitted: <TrendingUpIcon />,
      rejected: <XCircleIcon />,
    };
    return icons[status] || <ClockIcon />;
  };

  const formatCurrency = (amount) => new Intl.NumberFormat('ar-SA').format(amount || 0);

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل الاستثمارات...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">استثماراتي</h1>
        <p className="mt-2 text-app-text-muted">هذه الشاشة تعرض طلبات الاهتمام الاستثمارية الحقيقية المحفوظة باسمك.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي الطلبات</h3>
            <TrendingUpIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{investments.length}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">تحت المراجعة</h3>
            <ClockIcon className="text-warning" />
          </div>
          <p className="text-3xl font-bold text-warning">{investments.filter((i) => i.status === 'under_review').length}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">قيمة مقترحة</h3>
            <TrendingUpIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-brand">{formatCurrency(investments.reduce((sum, i) => sum + Number(i.proposed_amount || 0), 0))} ر.س</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">المعتمدة</h3>
            <CheckCircleIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{investments.filter((i) => i.status === 'approved').length}</p>
        </Card>
      </div>

      <Card className="bg-card-gradient border border-app-border">
        <div className="p-6 border-b border-app-border">
          <h2 className="text-xl font-bold text-app-text">قائمة الاستثمارات</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {investments.map((investment) => {
              const badge = getStatusBadge(investment.status);
              const icon = getStatusIcon(investment.status);
              return (
                <AnimatedSection key={investment.id}>
                  <div className="flex flex-col justify-between gap-4 rounded-lg border border-app-border bg-app-surface-soft p-4 md:flex-row md:items-center">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-3">
                        <p className="font-bold text-app-text">طلب على الفرصة #{investment.opportunity_id}</p>
                        <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                          {icon}
                          <span className="mr-2">{badge.label}</span>
                        </span>
                      </div>
                      <p className="text-sm text-app-text-muted">{investment.notes || 'لا توجد ملاحظات مضافة.'}</p>
                    </div>
                    <div className="flex gap-6 text-left">
                      <div>
                        <p className="text-xs text-app-text-soft">المبلغ المقترح</p>
                        <p className="font-bold text-app-text">{formatCurrency(investment.proposed_amount)} ر.س</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Investments;
