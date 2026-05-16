import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
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
      investor: { label: 'مستثمر', className: 'bg-blue-500/20 text-blue-600 border-blue-500/30', icon: <UserIcon /> },
      municipality: { label: 'بلدية', className: 'bg-purple-500/20 text-purple-600 border-purple-500/30', icon: <ShieldIcon /> },
      admin: { label: 'إدارة', className: 'bg-red-500/20 text-red-600 border-red-500/30', icon: <ShieldIcon /> },
    };
    return badges[role] || badges.investor;
  };

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-green-500/20 text-green-600 border-green-500/30' },
      suspended: { label: 'موقوف', className: 'bg-red-500/20 text-red-600 border-red-500/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30' },
    };
    return badges[status] || badges.pending;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">إدارة المستخدمين</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">إدارة وحظر وتفعيل حسابات المستخدمين</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي المستخدمين</h3>
              <UsersIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{users.length}</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">المستثمرين</h3>
              <UserIcon className="text-blue-600" />
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {users.filter(u => u.role === 'investor').length}
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">البلديات</h3>
              <ShieldIcon className="text-purple-600" />
            </div>
            <p className="text-3xl font-bold text-purple-600">
              {users.filter(u => u.role === 'municipality').length}
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الموقوفين</h3>
              <UsersIcon className="text-red-600" />
            </div>
            <p className="text-3xl font-bold text-red-600">
              {users.filter(u => u.status === 'suspended').length}
            </p>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" delay={400}>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">قائمة المستخدمين</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-brown-300 dark:border-stone-700">
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">المستخدم</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">البريد الإلكتروني</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الدور</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الحالة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">تاريخ التسجيل</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    const roleBadge = getRoleBadge(user.role);
                    const statusBadge = getStatusBadge(user.status);
                    return (
                      <tr key={user.id} className="border-b border-brown-200 dark:border-stone-800 hover:bg-pearl-100/30 dark:hover:bg-stone-800/30">
                        <td className="py-4 px-4">
                          <p className="font-medium text-brown-900 dark:text-stone-100">{user.name}</p>
                          {user.role === 'investor' && (
                            <p className="text-sm text-brown-700 dark:text-stone-400">{user.investments} استثمار</p>
                          )}
                        </td>
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{user.email}</td>
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
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{user.registrationDate}</td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-brown-100 dark:hover:bg-stone-700 rounded-lg transition-colors" title="تعديل">
                              <EditIcon className="text-brown-600 dark:text-stone-400" />
                            </button>
                            <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors" title="حذف">
                              <TrashIcon className="text-red-600" />
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
      </AnimatedSection>
    </div>
  );
};

export default AdminUsers;
