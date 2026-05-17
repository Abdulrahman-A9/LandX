import React from 'react';
import Card from '../../components/ui/Card';
import { PlusIcon, EditIcon, TrashIcon, EyeIcon } from '../../components/ui/Icons';

const MunicipalityOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: 'وادي حائل الزراعي',
      location: 'حائل',
      season: 'الموسم الشتوي 2024',
      status: 'active',
      applications: 15,
      area: '500 هكتار',
      minInvestment: 50000,
    },
    {
      id: 2,
      title: 'سهول القصيم',
      location: 'القصيم',
      season: 'الموسم الشتوي 2024',
      status: 'active',
      applications: 23,
      area: '750 هكتار',
      minInvestment: 75000,
    },
    {
      id: 3,
      title: 'وادي تبوك',
      location: 'تبوك',
      season: 'الموسم الشتوي 2024',
      status: 'draft',
      applications: 0,
      area: '300 هكتار',
      minInvestment: 30000,
    },
    {
      id: 4,
      title: 'وادي الجوف',
      location: 'الجوف',
      season: 'الموسم الصيفي 2024',
      status: 'closed',
      applications: 18,
      area: '400 هكتار',
      minInvestment: 40000,
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-success/10 text-success border-success/30' },
      draft: { label: 'مسودة', className: 'bg-muted/10 text-muted border-muted/30' },
      closed: { label: 'مغلق', className: 'bg-danger/10 text-danger border-danger/30' },
    };
    return badges[status] || badges.draft;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-app-text">إدارة الفرص الاستثمارية</h1>
          <p className="text-app-text-muted mt-2">إضافة وتعديل وإدارة الفرص الاستثمارية</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand to-brand-deep text-app-text rounded-lg hover:from-brand-deep hover:to-brand transition-all duration-300">
          <PlusIcon />
          <span>إضافة فرصة جديدة</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <h3 className="text-sm font-medium text-app-text-muted mb-2">إجمالي الفرص</h3>
            <p className="text-3xl font-bold text-app-text">{opportunities.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <h3 className="text-sm font-medium text-app-text-muted mb-2">الفرص النشطة</h3>
            <p className="text-3xl font-bold text-success">
              {opportunities.filter(o => o.status === 'active').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <h3 className="text-sm font-medium text-app-text-muted mb-2">المسودات</h3>
            <p className="text-3xl font-bold text-muted">
              {opportunities.filter(o => o.status === 'draft').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <h3 className="text-sm font-medium text-app-text-muted mb-2">إجمالي الطلبات</h3>
            <p className="text-3xl font-bold text-app-text">
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
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الموقع</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الموسم</th>
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
                          <p className="text-sm text-app-text-muted">{opportunity.area} • {formatCurrency(opportunity.minInvestment)} ر.س</p>
                        </td>
                        <td className="py-4 px-4 text-app-text">{opportunity.location}</td>
                        <td className="py-4 px-4 text-app-text">{opportunity.season}</td>
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
                            <button className="p-2 hover:bg-app-surface-soft rounded-lg transition-colors" title="تعديل">
                              <EditIcon className="text-app-text-soft" />
                            </button>
                            <button className="p-2 hover:bg-danger/20 rounded-lg transition-colors" title="حذف">
                              <TrashIcon className="text-danger" />
                            </button>
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

export default MunicipalityOpportunities;
