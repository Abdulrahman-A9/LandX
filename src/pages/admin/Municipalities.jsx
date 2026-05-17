import React from 'react';
import Card from '../../components/ui/Card';
import { BuildingIcon, EditIcon, TrashIcon, CheckIcon, XIcon } from '../../components/ui/Icons';

const AdminMunicipalities = () => {
  const municipalities = [
    {
      id: 1,
      name: 'أمانة منطقة حائل',
      email: 'hail@municipality.gov.sa',
      phone: '+966 16 534 5678',
      location: 'حائل',
      status: 'active',
      opportunities: 8,
      registrationDate: '2024-01-10',
    },
    {
      id: 2,
      name: 'أمانة منطقة القصيم',
      email: 'qassim@municipality.gov.sa',
      phone: '+966 16 534 1234',
      location: 'القصيم',
      status: 'active',
      opportunities: 12,
      registrationDate: '2024-01-08',
    },
    {
      id: 3,
      name: 'أمانة منطقة تبوك',
      email: 'tabuk@municipality.gov.sa',
      phone: '+966 14 534 5678',
      location: 'تبوك',
      status: 'active',
      opportunities: 6,
      registrationDate: '2024-02-15',
    },
    {
      id: 4,
      name: 'أمانة منطقة الجوف',
      email: 'jouf@municipality.gov.sa',
      phone: '+966 14 534 9012',
      location: 'الجوف',
      status: 'pending',
      opportunities: 0,
      registrationDate: '2024-04-01',
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-success/10 text-success border-success/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-warning/10 text-warning border-warning/30' },
      suspended: { label: 'موقوف', className: 'bg-danger/10 text-danger border-danger/30' },
    };
    return badges[status] || badges.pending;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إدارة البلديات</h1>
        <p className="text-app-text-muted mt-2">إضافة وتفعيل وإدارة حسابات البلديات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي البلديات</h3>
              <BuildingIcon className="text-app-text-soft" />
            </div>
            <p className="text-3xl font-bold text-app-text">{municipalities.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">النشطة</h3>
              <CheckIcon className="text-success" />
            </div>
            <p className="text-3xl font-bold text-success">
              {municipalities.filter(m => m.status === 'active').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">قيد المراجعة</h3>
              <XIcon className="text-warning" />
            </div>
            <p className="text-3xl font-bold text-warning">
              {municipalities.filter(m => m.status === 'pending').length}
            </p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border flex items-center justify-between">
            <h2 className="text-xl font-bold text-app-text">قائمة البلديات</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand to-brand-deep text-app-text rounded-lg hover:from-brand-deep hover:to-brand transition-all duration-300 text-sm">
              <BuildingIcon />
              <span>إضافة بلدية جديدة</span>
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-app-border">
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">البلدية</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">البريد الإلكتروني</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الموقع</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الفرص</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الحالة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {municipalities.map((municipality) => {
                    const badge = getStatusBadge(municipality.status);
                    return (
                      <tr key={municipality.id} className="border-b border-app-border hover:bg-app-surface-soft">
                        <td className="py-4 px-4">
                          <p className="font-medium text-app-text">{municipality.name}</p>
                          <p className="text-sm text-app-text-muted">{municipality.phone}</p>
                        </td>
                        <td className="py-4 px-4 text-app-text">{municipality.email}</td>
                        <td className="py-4 px-4 text-app-text">{municipality.location}</td>
                        <td className="py-4 px-4 text-app-text">{municipality.opportunities}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
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

export default AdminMunicipalities;
