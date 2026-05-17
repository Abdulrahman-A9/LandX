import React from 'react';
import Card from '../../components/ui/Card';
import { LeafIcon, EyeIcon, CheckIcon, XIcon, ShieldCheckIcon } from '../../components/ui/Icons';

const AdminOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: 'وادي حائل الزراعي',
      municipality: 'أمانة منطقة حائل',
      location: 'حائل',
      season: 'الموسم الشتوي 2024',
      status: 'approved',
      applications: 15,
      area: '500 هكتار',
      minInvestment: 50000,
      expectedReturn: 15,
    },
    {
      id: 2,
      title: 'سهول القصيم',
      municipality: 'أمانة منطقة القصيم',
      location: 'القصيم',
      season: 'الموسم الشتوي 2024',
      status: 'approved',
      applications: 23,
      area: '750 هكتار',
      minInvestment: 75000,
      expectedReturn: 18,
    },
    {
      id: 3,
      title: 'وادي تبوك الجديد',
      municipality: 'أمانة منطقة تبوك',
      location: 'تبوك',
      season: 'الموسم الصيفي 2024',
      status: 'pending',
      applications: 0,
      area: '300 هكتار',
      minInvestment: 30000,
      expectedReturn: 12,
    },
    {
      id: 4,
      title: 'وادي الجوف الزراعي',
      municipality: 'أمانة منطقة الجوف',
      location: 'الجوف',
      season: 'الموسم الشتوي 2024',
      status: 'pending',
      applications: 0,
      area: '400 هكتار',
      minInvestment: 40000,
      expectedReturn: 14,
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      approved: { label: 'موافق عليه', className: 'bg-success/10 text-success border-success/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-warning/10 text-warning border-warning/30' },
      rejected: { label: 'مرفوض', className: 'bg-danger/10 text-danger border-danger/30' },
    };
    return badges[status] || badges.pending;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إشراف الفرص الاستثمارية</h1>
        <p className="text-app-text-muted mt-2">مراجعة والموافقة على الفرص الاستثمارية المقدمة</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي الفرص</h3>
              <LeafIcon className="text-app-text-soft" />
            </div>
            <p className="text-3xl font-bold text-app-text">{opportunities.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">موافق عليه</h3>
              <CheckIcon className="text-success" />
            </div>
            <p className="text-3xl font-bold text-success">
              {opportunities.filter(o => o.status === 'approved').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">قيد المراجعة</h3>
              <ShieldCheckIcon className="text-warning" />
            </div>
            <p className="text-3xl font-bold text-warning">
              {opportunities.filter(o => o.status === 'pending').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي الطلبات</h3>
              <LeafIcon className="text-app-text-soft" />
            </div>
            <p className="text-3xl font-bold text-brand">
              {opportunities.reduce((sum, o) => sum + o.applications, 0)}
            </p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">قائمة الفرص</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-app-border">
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الفرصة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">البلدية</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الموقع</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الحالة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الطلبات</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map((opportunity) => {
                    const badge = getStatusBadge(opportunity.status);
                    return (
                      <tr key={opportunity.id} className="border-b border-app-border hover:bg-app-surface-soft">
                        <td className="py-4 px-4">
                          <p className="font-medium text-app-text">{opportunity.title}</p>
                          <p className="text-sm text-app-text-muted">{opportunity.season} • {opportunity.area}</p>
                        </td>
                        <td className="py-4 px-4 text-app-text">{opportunity.municipality}</td>
                        <td className="py-4 px-4 text-app-text">{opportunity.location}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-app-text">{opportunity.applications}</td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-app-surface-soft rounded-lg transition-colors" title="عرض">
                              <EyeIcon className="text-app-text-soft" />
                            </button>
                            {opportunity.status === 'pending' && (
                              <>
                                <button className="p-2 hover:bg-success/20 rounded-lg transition-colors" title="موافقة">
                                  <CheckIcon className="text-success" />
                                </button>
                                <button className="p-2 hover:bg-danger/20 rounded-lg transition-colors" title="رفض">
                                  <XIcon className="text-danger" />
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminOpportunities;
