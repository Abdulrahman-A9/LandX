import React from 'react';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi } from '../../lib/api';
import { BuildingIcon, LeafIcon, ShieldCheckIcon, UsersIcon } from '../../components/ui/Icons';

const AdminDashboard = () => {
  const { token } = useAuth();
  const { data, loading, error } = useAsyncData(() => adminApi.stats(token), [token]);

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل لوحة الإدارة...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-7">
          <div className="landx-kicker">إدارة المنصة</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">لوحة الإدارة</h1>
          <p className="mt-3 max-w-2xl text-sm leading-8 text-app-text-muted">
            الإحصاءات هنا قادمة مباشرة من الجداول الفعلية: المستخدمون، البلديات، الفرص، الطلبات، والتحليلات.
          </p>
        </Card>
        <Card className="p-7">
          <div className="text-sm text-app-text-soft">أولوية الإشراف</div>
          <div className="mt-4 rounded-2xl border border-danger/20 bg-danger/10 p-5">
            <div className="text-3xl font-black text-danger">{data.inquiries}</div>
            <div className="mt-2 text-sm leading-7 text-app-text-muted">استفسارات مسجلة تحتاج متابعة على مستوى النظام.</div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'المستخدمون', value: data.users, helper: 'إجمالي الحسابات', icon: <UsersIcon className="h-5 w-5" />, tone: 'text-app-text' },
          { label: 'البلديات', value: data.municipalities, helper: 'جهات مفعلة', icon: <BuildingIcon className="h-5 w-5" />, tone: 'text-brand' },
          { label: 'الفرص', value: data.opportunities, helper: `${data.active_opportunities} نشطة حالياً`, icon: <LeafIcon className="h-5 w-5" />, tone: 'text-success' },
          { label: 'التحليلات', value: data.analyses, helper: 'تقارير محفوظة في النظام', icon: <ShieldCheckIcon className="h-5 w-5" />, tone: 'text-warning' },
        ].map((item) => (
          <Card key={item.label} className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-app-text-muted">{item.label}</div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                {item.icon}
              </div>
            </div>
            <div className={`mt-6 text-3xl font-black ${item.tone}`}>{item.value}</div>
            <div className="mt-2 text-sm text-app-text-soft">{item.helper}</div>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default AdminDashboard;
