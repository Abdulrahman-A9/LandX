import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi } from '../../lib/api';
import { BuildingIcon, LeafIcon, ShieldCheckIcon, UsersIcon } from '../../components/ui/Icons';

const AdminDashboard = () => {
  const { token, user } = useAuth();
  const { data, loading, error } = useAsyncData(() => adminApi.stats(token), [token]);

  const nextSteps = [
    {
      title: 'مراجعة المستخدمين',
      description: 'تابع الحسابات الجديدة والنشطة وتأكد من جاهزية تجربة المستخدمين.',
      to: '/admin/users',
    },
    {
      title: 'مراجعة البلديات والفرص',
      description: 'راجع الجهات والفرص المنشورة وتأكد من جودة المحتوى المعروض للمستثمرين.',
      to: '/admin/opportunities',
    },
    {
      title: 'فحص الإحصاءات والتحليلات',
      description: 'راجع التقارير العامة والتحليلات المخزنة لتكون جاهزة للإجابة أثناء العرض.',
      to: '/admin/analytics',
    },
  ];

  if (!token || user?.role !== 'admin') {
    return (
      <Card className="p-10 text-center">
        <h1 className="text-3xl font-black text-app-text">هذه الصفحة تتطلب صلاحية الإدارة</h1>
        <p className="mt-3 text-sm leading-8 text-app-text-muted">
          سجّل الدخول بحساب `admin` حتى تظهر الإحصاءات والمستخدمون والبلديات والبيانات الحقيقية داخل اللوحة.
        </p>
      </Card>
    );
  }

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل لوحة الإدارة...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-7">
          <div className="landx-kicker">إدارة المنصة</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">لوحة الإدارة</h1>
          <p className="mt-3 max-w-2xl text-base leading-8 text-app-text-muted">
            الإحصاءات هنا قادمة مباشرة من الجداول الفعلية: المستخدمون، البلديات، الفرص، الطلبات، والتحليلات.
          </p>
        </Card>
        <Card className="p-7">
          <div className="text-sm font-semibold text-app-text-muted">أولوية الإشراف</div>
          <div className="mt-4 rounded-2xl border border-danger/20 bg-[#f3e5e2] p-5">
            <div className="text-3xl font-black text-danger">{data.inquiries}</div>
            <div className="mt-2 text-sm leading-7 text-app-text-muted">استفسارات المستثمرين التي تحتاج متابعة.</div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'المستخدمون', value: data.users, helper: 'إجمالي الحسابات', icon: <UsersIcon className="h-5 w-5" />, tone: 'text-app-text' },
          { label: 'البلديات', value: data.municipalities, helper: 'جهات مفعلة', icon: <BuildingIcon className="h-5 w-5" />, tone: 'text-brand' },
          { label: 'الفرص', value: data.opportunities, helper: `${data.active_opportunities} نشطة حاليًا`, icon: <LeafIcon className="h-5 w-5" />, tone: 'text-success' },
          { label: 'التحليلات', value: data.analyses, helper: 'تقييمات استثمارية محفوظة', icon: <ShieldCheckIcon className="h-5 w-5" />, tone: 'text-warning' },
        ].map((item) => (
            <Card key={item.label} className="p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-app-text-muted">{item.label}</div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                  {item.icon}
                </div>
              </div>
              <div className={`mt-6 text-3xl font-black ${item.tone}`}>{item.value}</div>
              <div className="mt-2 text-sm leading-7 text-app-text-muted">{item.helper}</div>
            </Card>
          ))}
      </section>

      <section>
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-app-text">الخطوات المقترحة الآن</h2>
          <p className="mt-2 text-sm leading-7 text-app-text-muted">راجع مؤشرات المنصة والمحتوى والطلبات للحفاظ على جودة الخدمة.</p>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {nextSteps.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-xl font-bold text-app-text">{item.title}</h3>
              <p className="mt-3 text-sm leading-8 text-app-text-muted">{item.description}</p>
              <Link to={item.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                الانتقال الآن
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
