import React from 'react';
import Card from '../../components/ui/Card';
import { BuildingIcon, CheckIcon, XIcon } from '../../components/ui/Icons';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { municipalityApi } from '../../lib/api';
import { formatArabicDate } from '../../lib/formatters';

const AdminMunicipalities = () => {
  const { token, user } = useAuth();
  const { data: municipalities, loading, error } = useAsyncData(() => municipalityApi.list(token), [token]);

  const activeCount = municipalities.filter((item) => item.is_active).length;
  const inactiveCount = municipalities.filter((item) => !item.is_active).length;

  if (!token || user?.role !== 'admin') {
    return (
      <Card className="p-10 text-center">
        <h1 className="text-3xl font-black text-app-text">البلديات غير متاحة حالياً</h1>
        <p className="mt-3 text-sm leading-8 text-app-text-muted">
          هذه الصفحة إدارية بالكامل، ولن تعرض بيانات `municipalities` إلا بعد تسجيل الدخول بحساب الإدارة.
        </p>
      </Card>
    );
  }

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل البلديات...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إدارة البلديات</h1>
        <p className="mt-2 text-app-text-muted">تابع الجهات الشريكة والفرص التي تقدمها للمستثمرين.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي البلديات</h3>
            <BuildingIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{municipalities.length}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">النشطة</h3>
            <CheckIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{activeCount}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">غير النشطة</h3>
            <XIcon className="text-warning" />
          </div>
          <p className="text-3xl font-bold text-warning">{inactiveCount}</p>
        </Card>
      </div>

      <Card className="bg-card-gradient border border-app-border">
        <div className="p-6 border-b border-app-border">
          <h2 className="text-xl font-bold text-app-text">قائمة البلديات</h2>
        </div>
        <div className="p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-app-border">
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">البلدية</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">المنطقة</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">البريد</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">الهاتف</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">الحالة</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-app-text-muted">الإنشاء</th>
              </tr>
            </thead>
            <tbody>
              {municipalities.map((municipality) => (
                <tr key={municipality.id} className="border-b border-app-border hover:bg-app-surface-soft">
                  <td className="px-4 py-4 text-app-text">{municipality.name}</td>
                  <td className="px-4 py-4 text-app-text">{municipality.region}</td>
                  <td className="px-4 py-4 text-app-text-muted">{municipality.contact_email || '-'}</td>
                  <td className="px-4 py-4 text-app-text-muted">{municipality.contact_phone || '-'}</td>
                  <td className="px-4 py-4">
                    <span className={`rounded-full px-3 py-1 text-xs ${municipality.is_active ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'}`}>
                      {municipality.is_active ? 'نشط' : 'غير نشط'}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-app-text-soft">{formatArabicDate(municipality.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default AdminMunicipalities;
