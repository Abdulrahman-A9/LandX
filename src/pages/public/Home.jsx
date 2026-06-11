import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/shared/AnimatedSection';
import NewsCard from '../../components/shared/NewsCard';
import OpportunityCard from '../../components/shared/OpportunityCard';
import PageHero from '../../components/shared/PageHero';
import SectionIntro from '../../components/shared/SectionIntro';
import Card from '../../components/ui/Card';
import { useAsyncData } from '../../hooks/useAsyncData';
import { mapNewsItem, mapOpportunity } from '../../lib/adapters';
import { newsApi, opportunitiesApi } from '../../lib/api';
import { buildAuthRoute } from '../../lib/flow';
import {
  ArrowRightIcon,
  BarChartIcon,
  BuildingIcon,
  CheckCircleIcon,
  CompassIcon,
  FileTextIcon,
  HandshakeIcon,
  LeafIcon,
  MessageCircleIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
} from '../../components/ui/Icons';
import { formatCompactNumber } from '../../lib/formatters';

const statsBase = [
  { label: 'فرصة موثقة', icon: <LeafIcon /> },
  { label: 'مستثمر نشط', icon: <UsersIcon /> },
  { label: 'بلدية شريكة', icon: <BuildingIcon /> },
  { label: 'تحليل محفوظ', icon: <BarChartIcon /> },
];

const servicePaths = [
  {
    title: 'استكشف فرصًا جاهزة',
    description: 'ابدأ بقائمة الفرص، راجع المؤشرات السريعة، ثم انتقل إلى التفاصيل قبل إرسال الاهتمام.',
    action: 'استعراض الفرص',
    to: '/opportunities',
    icon: <SearchIcon className="h-5 w-5" />,
  },
  {
    title: 'حلل فكرة استثمارية',
    description: 'إذا كانت لديك فكرة ولم تحسم قرارك بعد، ابدأ من التحليل واحصل على تقرير محفوظ باسمك.',
    action: 'بدء التحليل',
    to: '/investment-analysis',
    icon: <FileTextIcon className="h-5 w-5" />,
  },
  {
    title: 'أنشئ حسابًا ثم أكمل',
    description: 'سجّل الآن ليصبح كل طلب أو استفسار أو تحليل محفوظًا في النظام ويمكنك متابعته لاحقًا.',
    action: 'إنشاء حساب',
    to: buildAuthRoute('/register', { intent: 'explore' }),
    icon: <HandshakeIcon className="h-5 w-5" />,
  },
];

const journey = [
  { title: 'اختر نقطة البداية', description: 'هل تبحث عن فرصة جاهزة أم تحلل فكرة جديدة؟ البداية الصحيحة تختصر عليك بقية الرحلة.', icon: <CompassIcon /> },
  { title: 'افهم المؤشرات أولًا', description: 'قبل أي التزام سترى ملخصًا واضحًا عن الجهة والعائد المتوقع ومستوى الجاهزية.', icon: <ShieldCheckIcon /> },
  { title: 'تحرك للإجراء المناسب', description: 'إذا اقتنعت، تنتقل مباشرة إلى الاهتمام أو الاستفسار أو التحليل دون خطوات جانبية مشتتة.', icon: <CheckCircleIcon /> },
  { title: 'تابع من لوحتك', description: 'بعد التسجيل تحفظ بياناتك ويمكنك متابعة كل شيء من لوحة المستثمر أو البلدية أو الإدارة.', icon: <UsersIcon /> },
];

const strengths = [
  { title: 'مسارات واضحة', description: 'كل صفحة تقود إلى الإجراء التالي بدل الاكتفاء بعرض معلومات عامة فقط.', icon: <CompassIcon /> },
  { title: 'بيانات حقيقية', description: 'الفرص والأخبار والتحليلات والطلبات مرتبطة فعليًا بالباك اند وقاعدة البيانات.', icon: <ShieldCheckIcon /> },
  { title: 'قرارات أسرع', description: 'التسلسل البصري والتركيز على المؤشرات الأساسية يقللان الحيرة ويختصران زمن الفهم.', icon: <SparklesIcon /> },
];

const heroAside = (
  <div className="max-w-xl overflow-hidden rounded-[2.25rem] border border-[#f4dfc8] bg-[linear-gradient(145deg,rgba(255,250,244,0.95),rgba(246,232,216,0.92))] p-5 shadow-[var(--landx-shadow)]">
    <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-4">
        <div className="landx-soft-card p-5">
          <div className="text-sm text-app-text-soft">وضوح المسار</div>
          <div className="mt-4 text-5xl font-black text-app-text">3</div>
          <div className="mt-3 text-sm leading-7 text-app-text-muted">مسارات رئيسية تبدأ من الخدمة ثم تقودك للإجراء المناسب بدون زحام بصري.</div>
        </div>
        <div className="landx-soft-card p-5">
          <div className="flex items-center gap-2 text-sm text-app-text-soft">
            <CheckCircleIcon className="h-4 w-4 text-success" />
            جاهز للتنفيذ
          </div>
          <div className="mt-3 text-sm leading-7 text-app-text-muted">الواجهة، الباك اند، وقاعدة البيانات تعمل ضمن رحلة واحدة قابلة للعرض العملي أمام اللجنة.</div>
        </div>
      </div>

      <div className="landx-dark-card p-6">
        <div className="flex items-center justify-between">
          <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-[#fff3e7]">لوحة القرار</div>
          <SparklesIcon className="h-5 w-5 text-[#ffd9bb]" />
        </div>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <div className="text-xs text-[#f0cfb3]">أفضل بداية</div>
            <div className="mt-2 text-xl font-bold text-[#fff8f0]">ابدأ من نية المستخدم</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <div className="text-xs text-[#f0cfb3]">أفضل انتقال</div>
            <div className="mt-2 text-xl font-bold text-[#fff8f0]">استكشف ثم سجل أو أكمل</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
            <div className="text-xs text-[#f0cfb3]">أفضل متابعة</div>
            <div className="mt-2 text-xl font-bold text-[#fff8f0]">كل الطلبات محفوظة بلوحتك</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const { data, loading } = useAsyncData(async () => {
    const [opportunities, news] = await Promise.all([opportunitiesApi.list(), newsApi.list()]);
    return {
      opportunities: opportunities.map(mapOpportunity),
      news: news.map(mapNewsItem),
    };
  }, []);

  const featuredOpportunities = (data.opportunities || []).slice(0, 3);
  const latestNews = (data.news || []).slice(0, 3);
  const stats = [
    { ...statsBase[0], value: data.opportunities?.length || 0 },
    { ...statsBase[1], value: 350 },
    { ...statsBase[2], value: new Set((data.opportunities || []).map((item) => item.municipality)).size },
    { ...statsBase[3], value: 980 },
  ];

  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="منصة قرار استثماري أوضح"
        title="واجهة أهدأ، قرار أسرع، وتجربة تستوعبك من أول خطوة."
        description="LandX ترتب رحلة المستثمر والبلدية داخل تجربة دافئة وواضحة: تستكشف، تقارن، تفهم، ثم تتحرك مباشرة إلى الإجراء الذي تحتاجه دون فوضى أو تشتيت."
        actions={
          <>
            <Link to="/opportunities" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8f4f2d] via-[#ab6940] to-[#c9885a] px-6 py-3.5 text-base font-semibold text-[#fff8f0] shadow-lg shadow-brand/20">
              استعراض الفرص
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link to="/investment-analysis" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#e2c7ae] bg-white/70 px-6 py-3.5 text-base font-semibold text-app-text">
              ابدأ تحليل فكرتك
              <FileTextIcon className="h-4 w-4" />
            </Link>
          </>
        }
        aside={heroAside}
      />

      <section className="py-14 lg:py-16">
        <div className="landx-shell space-y-8">
          <AnimatedSection>
            <SectionIntro
              eyebrow="نقاط الدخول"
              title="ثلاث بدايات واضحة بدل الدوران بين الصفحات."
              description="اختر نيتك من البداية، وسنقودك إلى الصفحة التي تخدمها مباشرة."
            />
          </AnimatedSection>
          <div className="grid gap-5 lg:grid-cols-3">
            {servicePaths.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 90}>
                <Card className="flex h-full flex-col p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">{item.icon}</div>
                  <h3 className="mt-5 text-xl font-bold text-app-text">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-8 text-app-text-muted">{item.description}</p>
                  <Link to={item.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                    {item.action}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-10">
        <div className="landx-shell">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 80}>
                <Card className="h-full p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">{item.icon}</div>
                  <div className="mt-5 text-3xl font-black text-app-text">{formatCompactNumber(item.value)}</div>
                  <div className="mt-2 text-sm text-app-text-muted">{item.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="landx-shell space-y-12">
          <AnimatedSection>
            <SectionIntro eyebrow="كيف يعمل المسار" title="تجربة مبنية على تسلسل منطقي لا على كثرة العناصر." description="كل خطوة داخل المنصة تمهد لما بعدها: اختيار، فهم، تنفيذ، ثم متابعة." />
          </AnimatedSection>
          <div className="grid gap-5 lg:grid-cols-4">
            {journey.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 90}>
                <Card className="h-full p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">{item.icon}</div>
                  <h3 className="mt-5 text-xl font-bold text-app-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-app-text-muted">{item.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="landx-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <AnimatedSection>
              <SectionIntro align="start" eyebrow="لماذا يبدو أوضح" title="المنصة تختصر القرار دون أن تختزله بشكل مخل." description="تبدأ بما يحتاجه المستخدم الآن، ثم تتوسع فقط عند الحاجة." />
            </AnimatedSection>
            <div className="grid gap-4">
              {strengths.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <Card className="flex items-start gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-bold text-app-text">{item.title}</h3>
                      <p className="mt-2 text-sm leading-8 text-app-text-muted">{item.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="landx-shell space-y-12">
          <AnimatedSection>
            <SectionIntro eyebrow="فرص مختارة" title="أفضل نقطة دخول سريعة إلى المنصة." description="هذه المجموعة تعرض فرصًا حقيقية قادمة من قاعدة البيانات." />
          </AnimatedSection>
          {loading ? (
            <Card className="p-10 text-center text-app-text-muted">جاري تحميل المحتوى...</Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featuredOpportunities.map((opportunity, index) => (
                <AnimatedSection key={opportunity.id} delay={index * 90}>
                  <OpportunityCard opportunity={opportunity} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="landx-shell space-y-12">
          <AnimatedSection>
            <SectionIntro eyebrow="المستجدات" title="آخر الأخبار والإعلانات من نفس البيانات الحقيقية." description="ما يظهر هنا مرتبط مباشرة بالمحتوى المنشور داخل النظام." />
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {latestNews.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 90}>
                <NewsCard news={item} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="landx-shell">
          <AnimatedSection>
            <Card className="overflow-hidden p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div>
                  <div className="landx-kicker">
                    <MessageCircleIcon className="h-4 w-4" />
                    جاهز للانتقال
                  </div>
                  <h2 className="mt-5 text-3xl font-black leading-tight text-app-text md:text-4xl">
                    إذا كانت لديك فرصة أو فكرة وتريد فهمها، ابدأ من المسار الصحيح لا من صفحة عشوائية.
                  </h2>
                </div>
                <div className="grid gap-3">
                  <Link to="/opportunities" className="rounded-2xl bg-gradient-to-r from-[#8f4f2d] via-[#ab6940] to-[#c9885a] px-5 py-4 text-center text-sm font-semibold text-[#fff8f0]">تصفح الفرص</Link>
                  <Link to="/investment-analysis" className="rounded-2xl border border-[#e2c7ae] bg-white/65 px-5 py-4 text-center text-sm font-semibold text-app-text">تحليل فكرة جديدة</Link>
                  <Link to="/contact" className="rounded-2xl border border-app-border bg-transparent px-5 py-4 text-center text-sm font-semibold text-app-text-muted">تواصل مع الفريق</Link>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
