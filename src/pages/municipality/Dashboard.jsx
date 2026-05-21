import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';
import { CheckIcon, DollarSignIcon, FileTextIcon, LeafIcon, MegaphoneIcon } from '../../components/ui/Icons';
import { formatCurrency } from '../../lib/formatters';

const MunicipalityDashboard = () => {
  const stats = mockDashboardStats.municipality;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-7">
          <div className="landx-kicker">تشغيل البلدية</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">لوحة البلدية</h1>
          <p className="mt-3 max-w-2xl text-sm leading-8 text-app-text-muted">
            الشاشة تعطيك رؤية سريعة عن نشر الفرص، التفاعل الوارد من المستثمرين، وحجم الاستثمار المرتبط بالفرص الحالية.
          </p>
        </Card>
        <Card className="p-7">
          <div className="text-sm text-app-text-soft">أولوية اليوم</div>
          <div className="mt-4 rounded-2xl border border-warning/20 bg-warning/10 p-5">
            <div className="text-3xl font-black text-warning">{stats.pendingInquiries}</div>
            <div className="mt-2 text-sm leading-7 text-app-text-muted">
              استفساراً مفتوحاً يحتاج فرزاً أو رداً لضمان تجربة أسرع للمستثمر.
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'إجمالي الفرص', value: stats.totalOpportunities, helper: 'فرصة منشورة', icon: <LeafIcon className="h-5 w-5" />, tone: 'text-app-text' },
          { label: 'الفرص النشطة', value: stats.activeOpportunities, helper: 'جاهزة للاستعراض', icon: <CheckIcon className="h-5 w-5" />, tone: 'text-success' },
          { label: 'الاستفسارات', value: stats.pendingInquiries, helper: 'بانتظار الرد', icon: <FileTextIcon className="h-5 w-5" />, tone: 'text-warning' },
          { label: 'قيمة الاستثمارات', value: formatCurrency(stats.totalInvestment), helper: 'حجم فرص المنشورات الحالية', icon: <DollarSignIcon className="h-5 w-5" />, tone: 'text-brand' },
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
          <h2 className="text-2xl font-bold text-app-text">آخر ما يحتاج متابعة</h2>
          <div className="mt-5 space-y-4">
            {[
              'فرصة جديدة بانتظار مراجعة نهائية قبل النشر.',
              'استفسارات المستثمرين حول متطلبات الموسم الحالي.',
              'تحديث إعلان بلدي مرتبط بفترة التقديم.',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-app-border bg-app-surface-soft p-4 text-sm leading-7 text-app-text-muted">
                {item}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold text-app-text">إيقاع النشر</h2>
          <div className="mt-5 space-y-4">
            {[
              { title: 'الفرص المنشورة حديثاً', value: '3' },
              { title: 'الإعلانات الحالية', value: String(stats.publishedAnnouncements) },
              { title: 'الطلبات المكتملة هذا الأسبوع', value: '12' },
            ].map((item) => (
              <div key={item.title} className="flex items-center justify-between rounded-2xl border border-app-border bg-app-surface-soft p-4">
                <div className="flex items-center gap-3">
                  <MegaphoneIcon className="h-5 w-5 text-brand" />
                  <span className="text-sm font-semibold text-app-text">{item.title}</span>
                </div>
                <span className="text-2xl font-black text-app-text">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default MunicipalityDashboard;
