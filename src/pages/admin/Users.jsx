import React from 'react';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi } from '../../lib/api';
import { formatArabicDate } from '../../lib/formatters';

const roleLabels = {
  admin: 'إدارة',
  municipality: 'بلدية',
  investor: 'مستثمر',
};

const Users = () => {
  const { token, user } = useAuth();
  const { data: users, loading, error } = useAsyncData(() => adminApi.users(token), [token]);

  if (!token || user?.role !== 'admin') {
    return (
      <Card className="p-10 text-center">
        <h1 className="text-3xl font-black text-app-text">المستخدمون غير متاحين حالياً</h1>
        <p className="mt-3 text-sm leading-8 text-app-text-muted">
          يجب تسجيل الدخول بحساب إدارة حتى تتمكن هذه الصفحة من قراءة جدول `users` من الباك اند.
        </p>
      </Card>
    );
  }

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل المستخدمين...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-app-text">المستخدمون</h1>
        <p className="mt-2 text-app-text-muted">القائمة أدناه مرتبطة بجدول `users` الفعلي في قاعدة البيانات.</p>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-right text-sm">
            <thead className="bg-app-surface-soft text-app-text-muted">
              <tr>
                <th className="px-4 py-4">الاسم</th>
                <th className="px-4 py-4">البريد</th>
                <th className="px-4 py-4">الدور</th>
                <th className="px-4 py-4">الحالة</th>
                <th className="px-4 py-4">تاريخ الإنشاء</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-app-border">
                  <td className="px-4 py-4 text-app-text">{user.full_name}</td>
                  <td className="px-4 py-4 text-app-text-muted">{user.email}</td>
                  <td className="px-4 py-4 text-app-text">{roleLabels[user.role] || user.role}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs ${user.is_active ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                      {user.is_active ? 'نشط' : 'موقوف'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-app-text-soft">{formatArabicDate(user.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Users;
