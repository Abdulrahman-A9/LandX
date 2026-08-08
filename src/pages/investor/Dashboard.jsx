import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { analysisApi, inquiryApi, interestRequestApi } from '../../lib/api';
import { ArrowRightIcon, DollarSignIcon, FileTextIcon, LeafIcon, MessageCircleIcon, TrendingUpIcon, WalletIcon } from '../../components/ui/Icons';
import { formatCurrency } from '../../lib/formatters';

const InvestorDashboard = () => {
  const { token } = useAuth();
  const { data, loading, error } = useAsyncData(async () => {
    const [inquiries, interests, analyses] = await Promise.all([inquiryApi.my(token), interestRequestApi.my(token), analysisApi.list(token)]);
    return { inquiries, interests, analyses };
  }, [token]);
  const stats = useMemo(() => {
    const interests = data.interests || []; const inquiries = data.inquiries || []; const analyses = data.analyses || [];
    return { totalInvestments: interests.length, totalInvested: interests.reduce((sum, item) => sum + Number(item.proposed_amount || 0), 0), pendingInquiries: inquiries.filter((item) => item.status === 'pending').length, activeInvestments: interests.filter((item) => item.status === 'under_review' || item.status === 'approved').length, analyses: analyses.length };
  }, [data]);
  const nextSteps = [
    { title: 'استكشف فرصة جديدة', description: 'قارن الفرص المنشورة واختر ما يتوافق مع أهدافك.', to: '/investor/opportunities', icon: <LeafIcon className="h-5 w-5" />, highlight: !stats.totalInvestments },
    { title: 'قيّم فكرة استثمارية', description: 'اختبر فكرتك ماليًا قبل الالتزام واحتفظ بالنتائج.', to: '/investment-analysis', icon: <TrendingUpIcon className="h-5 w-5" />, highlight: !stats.analyses },
    { title: 'تابع تواصلك', description: 'راجع أسئلتك والردود الواردة من الجهات المعلنة.', to: '/investor/inquiries', icon: <MessageCircleIcon className="h-5 w-5" />, highlight: stats.pendingInquiries > 0 },
  ];
  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل مساحة المستثمر...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">تعذر تحميل حسابك: {error}</Card>;
  const metricItems = [
    ['إجمالي الطلبات', stats.totalInvestments, 'طلبات اهتمام مسجلة', <WalletIcon className="h-5 w-5" />, 'text-[#8c4e2f]'],
    ['قيد المتابعة', stats.activeInvestments, 'تحت المراجعة أو معتمدة', <TrendingUpIcon className="h-5 w-5" />, 'text-[#5d9872]'],
    ['قيمة مقترحة', formatCurrency(stats.totalInvested), 'إجمالي المبالغ المسجلة', <DollarSignIcon className="h-5 w-5" />, 'text-[#a7673f]'],
    ['تقييماتك', stats.analyses, 'تحليلات استثمارية محفوظة', <FileTextIcon className="h-5 w-5" />, 'text-[#b17b3e]'],
  ];
  return <div className="space-y-7">
    <section className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(120deg,#351c13,#633720_64%,#9b5a38)] p-7 text-white shadow-[0_24px_60px_rgba(91,47,25,0.2)] lg:p-9"><div className="absolute -left-12 -top-16 h-56 w-56 rounded-full border border-white/10" /><div className="relative grid gap-7 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-[#f5c49f]">مساحة المستثمر</div><h1 className="mt-5 max-w-2xl text-3xl font-black leading-[1.4] md:text-5xl">فرصتك الاستثمارية<br /><span className="text-[#f5c49f]">تبدأ من قرار مدروس.</span></h1><p className="mt-4 max-w-2xl text-sm leading-8 text-[#f1d8c5]">استكشف الفرص، اختبر فكرتك، واحتفظ بكل طلباتك وتواصلك في مساحة شخصية واحدة.</p></div><div className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5"><div className="text-xs font-bold text-[#f1c5a3]">ملخص حسابك</div><div className="mt-3 grid grid-cols-2 gap-3"><div><div className="text-3xl font-black">{stats.totalInvestments}</div><div className="mt-1 text-xs text-[#f1d8c5]">طلبات اهتمام</div></div><div><div className="text-3xl font-black">{stats.pendingInquiries}</div><div className="mt-1 text-xs text-[#f1d8c5]">استفسارات معلقة</div></div></div><Link to="/investor/opportunities" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#613720]">استكشاف الفرص <ArrowRightIcon className="h-4 w-4" /></Link></div></div></section>
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metricItems.map(([label, value, helper, icon, tone]) => <Card key={label} className="border-[#eadacc] p-5"><div className="flex items-start justify-between"><div><div className="text-sm font-bold text-app-text-muted">{label}</div><div className={`mt-4 text-3xl font-black ${tone}`}>{value}</div></div><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7eadf] text-[#a4623e]">{icon}</div></div><div className="mt-3 text-xs text-app-text-soft">{helper}</div></Card>)}</section>
    <section><div className="mb-4"><div className="text-xs font-bold text-[#ad704e]">مساحة الإنجاز</div><h2 className="mt-2 text-2xl font-black text-app-text">خطوتك التالية</h2><p className="mt-2 text-sm leading-7 text-app-text-muted">اختر ما يناسب قرارك الآن، وابدأ من الإجراء الأقرب لهدفك.</p></div><div className="grid gap-5 xl:grid-cols-3">{nextSteps.map((item) => <Card key={item.title} className={`border-[#eadacc] p-6 transition-all hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(96,52,29,0.12)] ${item.highlight ? 'border-[#c8895f] bg-[#fffaf5]' : ''}`}><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f7eadf] text-[#a4623e]">{item.icon}</div><h3 className="mt-5 text-xl font-bold text-app-text">{item.title}</h3><p className="mt-3 text-sm leading-8 text-app-text-muted">{item.description}</p><Link to={item.to} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#9d5d3c]">ابدأ الآن <ArrowRightIcon className="h-4 w-4" /></Link></Card>)}</div></section>
  </div>;
};

export default InvestorDashboard;
