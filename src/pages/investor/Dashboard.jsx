import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';
import {
  DollarSignIcon,
  FileTextIcon,
  LeafIcon,
  TrendingUpIcon,
  WalletIcon,
} from '../../components/ui/Icons';
import { formatCurrency } from '../../lib/formatters';

const InvestorDashboard = () => {
  const stats = mockDashboardStats.investor;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-7">
          <div className="landx-kicker">نظرة عامة</div>
          <h1 className="mt-5 text-4xl font-black text-app-text">لوحة المستثمر</h1>
          <p className="mt-3 max-w-2xl text-sm leading-8 text-app-text-muted">
            هذه الشاشة تجمع ما تحتاجه في نقطة واحدة: أداء الاستثمارات، الفرص المفتوحة،
            والاستفسارات التي تحتاج متابعة.
          </p>
        </Card>

        <Card className="p-7">
          <div className="text-sm text-app-text-soft">ملخص الجلسة</div>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
              <div className="text-xs text-app-text-soft">الاستثمارات النشطة</div>
              <div className="mt-2 text-3xl font-black text-success">{stats.activeInvestments}</div>
            </div>
            <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
              <div className="text-xs text-app-text-soft">الطلبات المفتوحة</div>
              <div className="mt-2 text-3xl font-black text-warning">{stats.pendingInquiries}</div>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'إجمالي الاستثمارات', value: stats.totalInvestments, helper: 'فرص استثمارية', icon: <WalletIcon className="h-5 w-5" />, tone: 'text-app-text' },
          { label: 'الاستثمارات النشطة', value: stats.activeInvestments, helper: 'قيد التنفيذ', icon: <TrendingUpIcon className="h-5 w-5" />, tone: 'text-success' },
          { label: 'إجمالي المبالغ', value: formatCurrency(stats.totalInvested), helper: 'ريال سعودي', icon: <DollarSignIcon className="h-5 w-5" />, tone: 'text-brand' },
          { label: 'الاستفسارات المفتوحة', value: stats.pendingInquiries, helper: 'تحتاج متابعة', icon: <FileTextIcon className="h-5 w-5" />, tone: 'text-warning' },
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
          <h2 className="text-2xl font-bold text-app-text">المسار الحالي</h2>
          <div className="mt-5 space-y-4">
            {[
              'استكشاف فرص ذات عائد واضح ونطاق دخول مناسب.',
              'متابعة الاستثمارات الجارية ومؤشرات الأداء الأولية.',
              'إرسال الاستفسارات عند الحاجة دون الخروج من المسار.',
            ].map((item, index) => (
              <div key={item} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-sm font-bold text-brand">
                  {index + 1}
                </div>
                <p className="text-sm leading-7 text-app-text-muted">{item}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-bold text-app-text">نشاط حديث</h2>
          <div className="mt-5 space-y-4">
            {[
              { title: 'تم قبول طلب اهتمامك في وادي حائل الزراعي', time: 'منذ ساعتين' },
              { title: 'أُضيفت فرصة جديدة مشابهة لاهتماماتك', time: 'منذ 6 ساعات' },
              { title: 'تم الرد على أحد استفساراتك التشغيلية', time: 'أمس' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                <div className="flex items-start gap-3">
                  <LeafIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
                  <div>
                    <div className="font-semibold text-app-text">{item.title}</div>
                    <div className="mt-1 text-sm text-app-text-soft">{item.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
};

export default InvestorDashboard;
