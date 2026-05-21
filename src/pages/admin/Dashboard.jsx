import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';
import {
  BuildingIcon,
  DollarSignIcon,
  LeafIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UsersIcon,
} from '../../components/ui/Icons';
import { formatCurrency } from '../../lib/formatters';

const AdminDashboard = () => {
  const stats = mockDashboardStats.admin;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-7">
          <div className="landx-kicker">إدارة المنصة</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">لوحة الإدارة</h1>
          <p className="mt-3 max-w-2xl text-sm leading-8 text-app-text-muted">
            رؤية تشغيلية موحدة عن حجم الاستخدام، البلديات، المحتوى المنشور، والعناصر التي تحتاج إشرافاً فورياً.
          </p>
        </Card>
        <Card className="p-7">
          <div className="text-sm text-app-text-soft">أولوية الإشراف</div>
          <div className="mt-4 rounded-2xl border border-danger/20 bg-danger/10 p-5">
            <div className="text-3xl font-black text-danger">{stats.pendingModeration}</div>
            <div className="mt-2 text-sm leading-7 text-app-text-muted">
              عناصر قيد المراجعة تتطلب اعتماداً أو قراراً قبل اكتمال النشر.
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'المستخدمون', value: stats.totalUsers, helper: 'إجمالي الحسابات', icon: <UsersIcon className="h-5 w-5" />, tone: 'text-app-text' },
          { label: 'البلديات', value: stats.totalMunicipalities, helper: 'جهات مفعلة', icon: <BuildingIcon className="h-5 w-5" />, tone: 'text-brand' },
          { label: 'الفرص', value: stats.totalOpportunities, helper: `${stats.activeOpportunities} نشطة حالياً`, icon: <LeafIcon className="h-5 w-5" />, tone: 'text-success' },
          { label: 'حجم الاستثمار', value: formatCurrency(stats.totalInvestment), helper: 'قيمة تقديرية إجمالية', icon: <DollarSignIcon className="h-5 w-5" />, tone: 'text-warning' },
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

      <section className="grid gap-6 xl:grid-cols-2">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-app-text">نقاط انتباه إدارية</h2>
          <div className="mt-5 space-y-4">
            {[
              'مراجعة الفرص الجديدة قبل النشر النهائي.',
              'متابعة البلديات الأقل نشاطاً وتحفيز تحديث المحتوى.',
              'مراقبة توازن تجربة المستثمر بين الاستكشاف والتواصل.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-app-border bg-app-surface-soft p-4 text-sm leading-7 text-app-text-muted">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold text-app-text">إشارة الأداء</h2>
          <div className="mt-5 grid gap-4">
            {[
              { label: 'مستوى النشاط العام', value: 'مرتفع', icon: <TrendingUpIcon className="h-5 w-5 text-success" /> },
              { label: 'مستوى الإشراف المطلوب', value: 'متوسط', icon: <ShieldCheckIcon className="h-5 w-5 text-warning" /> },
              { label: 'وضوح مسار المحتوى', value: 'جيد', icon: <BuildingIcon className="h-5 w-5 text-brand" /> },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between rounded-2xl border border-app-border bg-app-surface-soft p-4">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span className="text-sm font-semibold text-app-text">{item.label}</span>
                </div>
                <span className="font-bold text-app-text">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default AdminDashboard;
