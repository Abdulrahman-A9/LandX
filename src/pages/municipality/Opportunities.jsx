import React from 'react';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { opportunitiesApi } from '../../lib/api';

const MunicipalityOpportunities = () => {
  const { user } = useAuth();
  const { data: opportunities, loading, error } = useAsyncData(
    () => opportunitiesApi.list(),
    [],
  );

  const ownOpportunities = opportunities.filter((item) => item.municipality_id === user?.municipality_id);

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-success/10 text-success border-success/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-warning/10 text-warning border-warning/30' },
      draft: { label: 'مسودة', className: 'bg-app-surface-soft text-app-text border-app-border' },
      closed: { label: 'مغلق', className: 'bg-danger/10 text-danger border-danger/30' },
    };
    return badges[status] || badges.pending;
  };

  const formatCurrency = (amount) => new Intl.NumberFormat('ar-SA').format(amount || 0);

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل الفرص...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-app-text">إدارة الفرص الاستثمارية</h1>
          <p className="mt-2 text-app-text-muted">هذه القائمة تعرض فقط الفرص التابعة لبلديتك من قاعدة البيانات.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-4">
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h3 className="mb-2 text-sm font-medium text-app-text-muted">إجمالي الفرص</h3>
          <p className="text-3xl font-bold text-app-text">{ownOpportunities.length}</p>
        </Card>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h3 className="mb-2 text-sm font-medium text-app-text-muted">النشطة</h3>
          <p className="text-3xl font-bold text-success">{ownOpportunities.filter((o) => o.status === 'active').length}</p>
        </Card>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h3 className="mb-2 text-sm font-medium text-app-text-muted">قيد المراجعة</h3>
          <p className="text-3xl font-bold text-warning">{ownOpportunities.filter((o) => o.status === 'pending').length}</p>
        </Card>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h3 className="mb-2 text-sm font-medium text-app-text-muted">إجمالي القيمة</h3>
          <p className="text-3xl font-bold text-app-text">{formatCurrency(ownOpportunities.reduce((sum, o) => sum + Number(o.investment_required || 0), 0))}</p>
        </Card>
      </div>

      <Card className="bg-card-gradient border border-app-border">
        <div className="p-6 border-b border-app-border">
          <h2 className="text-xl font-bold text-app-text">قائمة الفرص</h2>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-app-border">
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">الفرصة</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">الموقع</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">الموسم</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">الحالة</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">القيمة</th>
              </tr>
            </thead>
            <tbody>
              {ownOpportunities.map((opportunity) => {
                const badge = getStatusBadge(opportunity.status);
                return (
                  <tr key={opportunity.id} className="border-b border-app-border hover:bg-app-surface-soft">
                    <td className="px-4 py-4 text-app-text">{opportunity.title}</td>
                    <td className="px-4 py-4 text-app-text">{opportunity.location}</td>
                    <td className="px-4 py-4 text-app-text">{opportunity.season || '-'}</td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full border px-3 py-1 text-xs ${badge.className}`}>{badge.label}</span>
                    </td>
                    <td className="px-4 py-4 text-app-text">{formatCurrency(opportunity.investment_required)} ر.س</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default MunicipalityOpportunities;
