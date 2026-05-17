import React from 'react';
import Card from '../../components/ui/Card';
import { UsersIcon, EditIcon, TrashIcon, ShieldIcon, UserIcon } from '../../components/ui/Icons';

const AdminUsers = () => {
  const users = [
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@example.com',
      role: 'investor',
      status: 'active',
      registrationDate: '2024-01-15',
      investments: 5,
    },
    {
      id: 2,
      name: 'خالد العتيبي',
      email: 'khaled@example.com',
      role: 'investor',
      status: 'active',
      registrationDate: '2024-02-20',
      investments: 3,
    },
    {
      id: 3,
      name: 'أمانة حائل',
      email: 'hail@municipality.gov.sa',
      role: 'municipality',
      status: 'active',
      registrationDate: '2024-01-10',
      investments: 0,
    },
    {
      id: 4,
      name: 'سعيد الدوسري',
      email: 'saeed@example.com',
      role: 'investor',
      status: 'suspended',
      registrationDate: '2024-03-05',
      investments: 2,
    },
    {
      id: 5,
      name: 'أمانة القصيم',
      email: 'qassim@municipality.gov.sa',
      role: 'municipality',
      status: 'active',
      registrationDate: '2024-01-08',
      investments: 0,
    },
  ];

  const getRoleBadge = (role) => {
    const badges = {
      investor: { label: 'مستثمر', className: 'bg-brand/10 text-brand border-brand/30', icon: <UserIcon /> },
      municipality: { label: 'بلدية', className: 'bg-accent/10 text-accent border-accent/30', icon: <ShieldIcon /> },
      admin: { label: 'إدارة', className: 'bg-danger/10 text-danger border-danger/30', icon: <ShieldIcon /> },
    };
    return badges[role] || badges.investor;
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-success/10 text-success border-success/30' },
      suspended: { label: 'موقوف', className: 'bg-danger/10 text-danger border-danger/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-warning/10 text-warning border-warning/30' },
    };
    return badges[status] || badges.pending;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إدارة المستخدمين</h1>
        <p className="text-app-text-muted mt-2">إدارة وحظر وتفعيل حسابات المستخدمين</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي المستخدمين</h3>
              <UsersIcon className="text-app-text-soft" />
            </div>
            <p className="text-3xl font-bold text-app-text">{users.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">المستثمرين</h3>
              <UserIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-brand">
              {users.filter(u => u.role === 'investor').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">البلديات</h3>
              <ShieldIcon className="text-accent" />
            </div>
            <p className="text-3xl font-bold text-accent">
              {users.filter(u => u.role === 'municipality').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">الموقوفين</h3>
              <UsersIcon className="text-danger" />
            </div>
            <p className="text-3xl font-bold text-danger">
              {users.filter(u => u.status === 'suspended').length}
            </p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">قائمة المستخدمين</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-app-border">
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">المستخدم</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">البريد الإلكتروني</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الدور</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الحالة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">تاريخ التسجيل</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-app-text-muted">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    const roleBadge = getRoleBadge(user.role);
                    const statusBadge = getStatusBadge(user.status);
                    return (
                      <tr key={user.id} className="border-b border-app-border hover:bg-app-surface-soft">
                        <td className="py-4 px-4">
                          <p className="font-medium text-app-text">{user.name}</p>
                          {user.role === 'investor' && (
                            <p className="text-sm text-app-text-muted">{user.investments} استثمار</p>
                          )}
                        </td>
                        <td className="py-4 px-4 text-app-text">{user.email}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs border flex items-center gap-1 w-fit ${roleBadge.className}`}>
                            {roleBadge.icon}
                            {roleBadge.label}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs border ${statusBadge.className}`}>
                            {statusBadge.label}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-app-text">{user.registrationDate}</td>
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

export default AdminUsers;
