import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi } from '../../lib/api';
import { ArrowRightIcon, BarChartIcon, BuildingIcon, CheckCircleIcon, FileTextIcon, LeafIcon, PlusIcon, ShieldCheckIcon, UsersIcon } from '../../components/ui/Icons';

const AdminDashboard = () => {
  const { token, user } = useAuth();
  const { data, loading, error } = useAsyncData(() => adminApi.stats(token), [token]);

  if (!token || user?.role !== 'admin') {
    return <Card className="p-10 text-center"><h1 className="text-3xl font-black text-app-text">مساحة الإدارة محمية</h1><p className="mt-3 text-sm leading-8 text-app-text-muted">سجّل الدخول بحساب مدير المنصة للوصول إلى مؤشرات LandX وإدارة محتواها.</p></Card>;
  }

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تجهيز مركز الإدارة...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">تعذر تحميل مؤشرات الإدارة: {error}</Card>;

  const metrics = [
    { label: 'المستخدمون', value: data.users, helper: 'حسابات المستثمرين والشركاء', icon: <UsersIcon />, tone: 'text-[#8c4e2f]', href: '/admin/users' },
    { label: 'الجهات الشريكة', value: data.municipalities, helper: 'بلديات وبيئات استثمارية', icon: <BuildingIcon />, tone: 'text-[#a7673f]', href: '/admin/municipalities' },
    { label: 'الفرص المنشورة', value: data.opportunities, helper: `${data.active_opportunities} فرص نشطة حاليًا`, icon: <LeafIcon />, tone: 'text-[#5a9873]', href: '/admin/opportunities' },
    { label: 'طلبات المستثمرين', value: data.interest_requests, helper: `${data.inquiries} استفسار يحتاج متابعة`, icon: <FileTextIcon />, tone: 'text-[#ad7b38]', href: '/admin/moderation' },
  ];

  const actions = [
    { title: 'إضافة مستخدم', description: 'أنشئ حساب مستثمر أو شريك جديد.', href: '/admin/users?action=create', icon: <PlusIcon /> },
    { title: 'إضافة جهة شريكة', description: 'سجّل بلدية أو جهة جديدة في LandX.', href: '/admin/municipalities?action=create', icon: <BuildingIcon /> },
    { title: 'مراجعة الفرص', description: 'اعتمد الفرص المناسبة للنشر.', href: '/admin/opportunities', icon: <ShieldCheckIcon /> },
  ];

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#351c13,#633720_64%,#9b5a38)] p-7 text-white shadow-[0_24px_60px_rgba(91,47,25,0.2)] lg:p-9">
        <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full border border-white/10" /><div className="absolute -left-5 -top-10 h-44 w-44 rounded-full border border-white/10" />
        <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-[#f7d2b5]"><span className="h-2 w-2 rounded-full bg-[#83c995]" /> مركز إدارة LandX</div>
            <h1 className="mt-5 max-w-2xl text-3xl font-black leading-[1.35] md:text-5xl">إدارة المنصة تبدأ من<br /><span className="text-[#f5c49f]">صورة واضحة للفرصة.</span></h1>
            <p className="mt-4 max-w-2xl text-sm leading-8 text-[#f1d8c5]">راقب أداء المنصة، اضبط المحتوى، وأدر حسابات المستثمرين والجهات الشريكة من مركز واحد مصمم للقرار السريع.</p>
          </div>
          <div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
            <div className="text-xs font-bold text-[#f1c5a3]">أولوية اليوم</div>
            <div className="mt-3 text-4xl font-black">{data.inquiries}</div>
            <div className="mt-1 text-sm text-[#f1d8c5]">استفسار وطلب يحتاج مراجعة</div>
            <Link to="/admin/moderation" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#613720]">فتح مركز المتابعة <ArrowRightIcon className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => <Link to={item.href} key={item.label} className="group"><Card className="h-full border-[#eadacc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c8895f] hover:shadow-[0_18px_35px_rgba(96,52,29,0.12)]"><div className="flex items-start justify-between"><div><div className="text-sm font-bold text-app-text-muted">{item.label}</div><div className={`mt-4 text-4xl font-black ${item.tone}`}>{item.value}</div></div><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7eadf] text-[#a4623e]">{item.icon}</div></div><div className="mt-4 text-xs text-app-text-soft">{item.helper}</div><div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#a4623e] opacity-0 transition-opacity group-hover:opacity-100">فتح التفاصيل <ArrowRightIcon className="h-3.5 w-3.5" /></div></Card></Link>)}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-[#eadacc] p-6 lg:p-7">
          <div className="flex items-start justify-between gap-4"><div><div className="text-xs font-bold text-[#ad704e]">مركز الإنجاز</div><h2 className="mt-2 text-2xl font-black text-app-text">إجراءات الإدارة اليومية</h2><p className="mt-2 text-sm leading-7 text-app-text-muted">ابدأ بالأعمال التي تؤثر مباشرة في جودة الفرص وتجربة المستثمر.</p></div><div className="rounded-2xl bg-[#f7eadf] p-3 text-[#a4623e]"><CheckCircleIcon /></div></div>
          <div className="mt-6 grid gap-3">
            {actions.map((item) => <Link key={item.title} to={item.href} className="flex items-center gap-4 rounded-2xl border border-[#eadfd6] bg-[#fffdf9] p-4 transition-colors hover:border-[#c8895f] hover:bg-[#fff8f2]"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5e5d8] text-[#a4623e]">{item.icon}</div><div className="min-w-0 flex-1"><h3 className="font-bold text-app-text">{item.title}</h3><p className="mt-1 text-xs leading-6 text-app-text-muted">{item.description}</p></div><ArrowRightIcon className="h-4 w-4 shrink-0 text-[#bd8360]" /></Link>)}
          </div>
        </Card>
        <Card className="border-[#eadacc] p-6 lg:p-7">
          <div className="flex items-center justify-between"><div><div className="text-xs font-bold text-[#ad704e]">صحة المنصة</div><h2 className="mt-2 text-2xl font-black text-app-text">مؤشرات التشغيل</h2></div><BarChartIcon className="text-[#a4623e]" /></div>
          <div className="mt-6 space-y-4">
            {[['المحتوى الاستثماري', data.opportunities, 'فرصة منشورة'], ['تفاعل المستثمرين', data.interest_requests, 'طلب اهتمام'], ['التقييمات المحفوظة', data.analyses, 'تحليل استثماري']].map(([label, value, helper], index) => <div key={label}><div className="flex items-center justify-between text-sm"><span className="font-bold text-app-text">{label}</span><span className="font-black text-[#9d5d3c]">{value}</span></div><div className="mt-2 h-2 overflow-hidden rounded-full bg-[#f0e4da]"><div className={`h-full rounded-full ${index === 1 ? 'bg-[#b47c3d]' : index === 2 ? 'bg-[#6fa080]' : 'bg-[#b66d45]'}`} style={{ width: `${Math.min(100, Math.max(12, Number(value) * 12))}%` }} /></div><div className="mt-1 text-[11px] text-app-text-soft">{helper}</div></div>)}
          </div>
          <Link to="/admin/analytics" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#9d5d3c]">عرض التقارير <ArrowRightIcon className="h-4 w-4" /></Link>
        </Card>
      </section>
    </div>
  );
};

export default AdminDashboard;
