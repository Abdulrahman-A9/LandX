import React from 'react';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi } from '../../lib/api';
import { LeafIcon, EyeIcon, CheckIcon, XIcon, ShieldCheckIcon } from '../../components/ui/Icons';
import { formatCurrency } from '../../lib/formatters';

const AdminOpportunities = () => {
  const { token } = useAuth();
  const { data: opportunities, loading, error } = useAsyncData(() => adminApi.opportunities(token), [token]);

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشطة', className: 'bg-success/10 text-success border-success/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-warning/10 text-warning border-warning/30' },
      draft: { label: 'مسودة', className: 'bg-app-surface-soft text-app-text border-app-border' },
      closed: { label: 'مغلقة', className: 'bg-danger/10 text-danger border-danger/30' },
      rejected: { label: 'مرفوضة', className: 'bg-danger/10 text-danger border-danger/30' },
    };
    return badges[status] || badges.pending;
  };

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جارٍ تحميل الفرص...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-app-text">إشراف الفرص الاستثمارية</h1>
        <p className="mt-2 max-w-3xl text-base leading-8 text-app-text-muted">
          راجع جميع الفرص الاستثمارية المنشورة وحالتها وقيمتها والجهة المعلنة لها.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
        <Card className="border border-app-border bg-card-gradient p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-app-text-muted">إجمالي الفرص</h3>
            <LeafIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{opportunities.length}</p>
        </Card>

        <Card className="border border-app-border bg-card-gradient p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-app-text-muted">الفرص النشطة</h3>
            <CheckIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{opportunities.filter((o) => o.status === 'active').length}</p>
        </Card>

        <Card className="border border-app-border bg-card-gradient p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-app-text-muted">قيد المراجعة</h3>
            <ShieldCheckIcon className="text-warning" />
          </div>
          <p className="text-3xl font-bold text-warning">{opportunities.filter((o) => o.status === 'pending').length}</p>
        </Card>

        <Card className="border border-app-border bg-card-gradient p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-app-text-muted">إجمالي القيمة</h3>
            <LeafIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-brand">
            {formatCurrency(opportunities.reduce((sum, o) => sum + Number(o.investment_required || 0), 0))} ر.س
          </p>
        </Card>
      </div>

      <Card className="border border-app-border bg-card-gradient">
        <div className="border-b border-app-border p-6">
          <h2 className="text-xl font-bold text-app-text">قائمة الفرص</h2>
        </div>
        <div className="overflow-x-auto p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-app-border">
                <th className="px-4 py-3 text-right text-sm font-semibold text-app-text-muted">الفرصة</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-app-text-muted">البلدية</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-app-text-muted">الموقع</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-app-text-muted">الحالة</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-app-text-muted">القيمة</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-app-text-muted">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((opportunity) => {
                const badge = getStatusBadge(opportunity.status);
                return (
                  <tr key={opportunity.id} className="border-b border-app-border hover:bg-app-surface-soft">
                    <td className="px-4 py-4">
                      <p className="font-medium text-app-text">{opportunity.title}</p>
                      <p className="text-sm text-app-text-muted">
                        {opportunity.season || '-'} • {opportunity.area || '-'}
                      </p>
                    </td>
                    <td className="px-4 py-4 text-app-text">{opportunity.municipality_name || `#${opportunity.municipality_id}`}</td>
                    <td className="px-4 py-4 text-app-text">{opportunity.location}</td>
                    <td className="px-4 py-4">
                      <span className={`rounded-full border px-3 py-1 text-xs ${badge.className}`}>{badge.label}</span>
                    </td>
                    <td className="px-4 py-4 text-app-text">{formatCurrency(opportunity.investment_required)} ر.س</td>
                    <td className="px-4 py-4">
                      <div className="flex gap-2">
                        <button className="rounded-lg p-2 transition-colors hover:bg-app-surface-soft" title="عرض">
                          <EyeIcon className="text-app-text-soft" />
                        </button>
                        {opportunity.status === 'pending' ? (
                          <>
                            <button className="rounded-lg p-2 transition-colors hover:bg-success/20" title="موافقة">
                              <CheckIcon className="text-success" />
                            </button>
                            <button className="rounded-lg p-2 transition-colors hover:bg-danger/20" title="رفض">
                              <XIcon className="text-danger" />
                            </button>
                          </>
                        ) : null}
                      </div>
                    </td>
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

export default AdminOpportunities;
