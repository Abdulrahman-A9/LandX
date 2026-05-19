import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import NewsCard from '../../components/shared/NewsCard';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockOpportunities } from '../../data/mock/opportunities';
import { mockNews } from '../../data/mock/news';
import {
  TargetIcon,
  UsersIcon,
  BuildingIcon,
  DollarSignIcon,
  SearchIcon,
  EyeIcon,
  PieChartIcon,
  HandshakeIcon,
  ShieldCheckIcon,
  ZapIcon,
  GlobeIcon,
  AwardIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  MessageCircleIcon,
  SparklesIcon
} from '../../components/ui/Icons';

const featuredOpportunities = mockOpportunities.slice(0, 3);
const featuredNews = mockNews.slice(0, 3);

const stats = [
  { icon: <TargetIcon />, value: '+120', label: 'فرصة استثمارية موثقة' },
  { icon: <UsersIcon />, value: '+350', label: 'مستثمر مسجل' },
  { icon: <BuildingIcon />, value: '15', label: 'بلدية شريكة' },
  { icon: <DollarSignIcon />, value: '85M', label: 'ريال إجمالي الاستثمار' }
];

const steps = [
  {
    icon: <SearchIcon />,
    title: 'استكشف الفرص',
    description: 'تصفح الفرص الاستثمارية المتاحة في مختلف المناطق والمواسم الزراعية.',
    step: '01'
  },
  {
    icon: <EyeIcon />,
    title: 'حلل وقارن',
    description: 'اطلع على التحليلات التفصيلية للفرص، المخاطر، والعوائد المتوقعة.',
    step: '02'
  },
  {
    icon: <PieChartIcon />,
    title: 'خذ قرارك',
    description: 'استخدم الأدوات التحليلية لاتخاذ قرار استثماري مبني على بيانات دقيقة.',
    step: '03'
  },
  {
    icon: <HandshakeIcon />,
    title: 'ابدأ الاستثمار',
    description: 'تواصل مع البلدية وابدأ رحلتك الاستثمارية بخطوات رسمية واضحة.',
    step: '04'
  }
];

const features = [
  {
    icon: <ShieldCheckIcon />,
    title: 'فرص موثقة رسمياً',
    description: 'جميع الفرص مقدمة من بلديات حكومية معتمدة ومرخصة.'
  },
  {
    icon: <ZapIcon />,
    title: 'تحليل فوري ذكي',
    description: 'أدوات تحليلية متقدمة توفر لك قراءة واضحة للمخاطر والعوائد.'
  },
  {
    icon: <GlobeIcon />,
    title: 'تغطية جغرافية واسعة',
    description: 'فرص استثمارية في مختلف مناطق المملكة من شمالها إلى جنوبها.'
  },
  {
    icon: <AwardIcon />,
    title: 'دعم كامل للمستثمر',
    description: 'فريق متخصص لتوجيهك وإرشادك في كل مرحلة من مراحل الاستثمار.'
  }
];

const insightItems = [
  {
    label: 'مؤشر التهيئة',
    value: '72%',
    detail: 'مؤشر يختصر جاهزية الفرص'
  },
  {
    label: 'المخاطر',
    value: 'متوسط',
    detail: 'تلخيص هادئ للمسار'
  },
  {
    label: 'وضوح القرار',
    value: 'عالي',
    detail: 'تخطية سريعة بدون ضغط'
  }
];

function SectionTitle({ eyebrow, title, description, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-right lg:text-right' : 'text-center';

  return (
    <AnimatedSection className={`space-y-4 ${alignClass}`}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-app-border bg-app-surface-soft text-app-text-muted text-sm font-semibold">
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-deep">
        {title}
      </h2>
      <p className="text-app-text-muted max-w-3xl mx-auto leading-8">{description}</p>
    </AnimatedSection>
  );
}

const Home = () => {
  return (
    <div className="min-h-screen bg-app-bg text-app-text overflow-hidden">
      <section className="relative isolate overflow-hidden border-b border-app-border/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,123,69,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(130,65,35,0.14),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="space-y-8" delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand/25 bg-brand/10 text-brand text-sm font-semibold w-fit">
                <SparklesIcon className="w-4 h-4" />
                واجهة استثمارية أهدأ وأوضح
              </div>

              <div className="space-y-5">
                <h1 className="text-5xl md:text-6xl font-black leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand via-accent to-brand-deep">
                  قرارك الاستثماري يبدأ من هنا
                </h1>
                <p className="text-xl md:text-2xl text-app-text-muted leading-10 max-w-2xl">
                  منصة تجمع بين وضوح الدخول السريع والتعمق التحليلي عند الحاجة، بدون ضوضاء بصرية أو خطوات مربكة.
                </p>
                <p className="text-app-text-soft text-lg leading-9 max-w-2xl">
                  LandX تمنح المستثمر مسارًا مرئيًا بسيطًا: استكشاف أولي، ثم تحليل أعمق، ثم قرار واضح أو انتقال مباشر إلى التنفيذ.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/register" className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand to-brand-deep text-app-text font-semibold shadow-lg shadow-brand/20 hover:shadow-brand/30 transition-all duration-300 hover:-translate-y-0.5">
                  ابدأ طلبك
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <Link to="/opportunities" className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl border border-app-border bg-app-surface-soft text-app-text-muted font-semibold hover:bg-app-surface hover:text-app-text transition-all duration-300">
                  استعرض الفرص
                  <ChevronLeftIcon className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {[
                  'تدفق معلومات واضح',
                  'تجربة عربية هادئة',
                  'قرارات أسرع'
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-app-border bg-app-surface/70 px-4 py-3 text-sm text-app-text-muted shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection className="lg:pl-4" delay={120}>
              <div className="grid gap-4">
                <Card className="bg-card-gradient border border-app-border p-6 rounded-3xl shadow-2xl shadow-black/10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-app-text-soft text-sm font-semibold mb-2">لوحة رؤية</p>
                      <h3 className="text-2xl font-bold text-app-text">الفرص ملخصة بوضوح</h3>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-brand/15 border border-brand/30 flex items-center justify-center text-brand">
                      <BuildingIcon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="grid gap-3">
                    {insightItems.map((item) => (
                      <div key={item.label} className="rounded-2xl border border-app-border bg-app-surface-soft/80 p-4 flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm text-app-text-soft">{item.label}</div>
                          <div className="text-lg font-semibold text-app-text mt-1">{item.value}</div>
                        </div>
                        <div className="text-sm text-app-text-muted max-w-[16rem] text-left">
                          {item.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-card-gradient border border-app-border p-5 rounded-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-2xl bg-brand/15 border border-brand/25 flex items-center justify-center text-brand">
                        <TargetIcon className="w-5 h-5" />
                      </span>
                      <h4 className="font-semibold text-app-text">الأولوية</h4>
                    </div>
                    <p className="text-app-text-muted text-sm leading-7">تحليل هادئ ومختصر للفرص التي تستحق أن تكمل معها بدون ضوضاء.</p>
                  </Card>

                  <Card className="bg-card-gradient border border-app-border p-5 rounded-3xl">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-10 h-10 rounded-2xl bg-success/15 border border-success/25 flex items-center justify-center text-success">
                        <HandshakeIcon className="w-5 h-5" />
                      </span>
                      <h4 className="font-semibold text-app-text">الشراكة</h4>
                    </div>
                    <p className="text-app-text-muted text-sm leading-7">مسار قصير من الفكرة إلى الإجراء بدل الدوران بين طبقات معقدة.</p>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 90}>
                <Card className="h-full bg-card-gradient border border-app-border p-5 rounded-3xl text-right">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-black text-app-text">{stat.value}</div>
                  <div className="mt-2 text-sm text-app-text-muted leading-6">{stat.label}</div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="خريطة التفاعل"
            title="كيف تعمل المنصة"
            description="تجربة مصممة لتناسب سرعة القرار مع وضوح الطريق."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {steps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 110}>
                <Card className="h-full bg-card-gradient border border-app-border p-6 rounded-3xl">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand/15 to-brand-deep/15 border border-brand/25 flex items-center justify-center mb-5 text-brand">
                    {step.icon}
                  </div>
                  <div className="text-xs font-bold tracking-[0.24em] text-app-text-soft mb-3">خطوة {step.step}</div>
                  <h3 className="text-xl font-bold text-app-text mb-3">{step.title}</h3>
                  <p className="text-sm text-app-text-muted leading-7">{step.description}</p>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <AnimatedSection className="space-y-5" threshold={0.12}>
              <SectionTitle
                align="left"
                eyebrow="لماذا LandX"
                title="لماذا تبدأ منها"
                description="نموذج مختصر يدعم القرار بدون أن يغرق الزائر في تفاصيل مبكرة لا تفيده."
              />

              <div className="grid gap-4 pt-2">
                {features.map((feature, index) => (
                  <AnimatedSection key={feature.title} delay={index * 80}>
                    <div className="flex items-start gap-4 rounded-3xl border border-app-border bg-app-surface/70 p-5">
                      <div className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-app-text mb-2">{feature.title}</h3>
                        <p className="text-sm text-app-text-muted leading-7">{feature.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={120}>
              <Card className="rounded-[2rem] border border-app-border bg-card-gradient p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-12 h-12 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                    <PieChartIcon className="w-6 h-6" />
                  </span>
                  <div>
                    <p className="text-sm text-app-text-soft">لحظة قرار</p>
                    <h3 className="text-2xl font-bold text-app-text">مؤشرات مختصرة تساعد على التمييز</h3>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { label: 'الطلب الموسمي', value: 'مرتفع', tone: 'text-success' },
                    { label: 'جاهزية الفرص', value: '72%', tone: 'text-brand' },
                    { label: 'المخاطر', value: 'مضبوطة', tone: 'text-accent' },
                    { label: 'مسار الخروج', value: 'واضح', tone: 'text-warning' }
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                      <div className="text-sm text-app-text-soft">{item.label}</div>
                      <div className={`mt-2 text-2xl font-black ${item.tone}`}>{item.value}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="أبرز الفرص"
            title="فرص استثمارية مميزة"
            description="أكثر الفرص حضوراً للتعرف السريع والمقارنة البصرية."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity, index) => (
              <AnimatedSection key={opportunity.id} delay={index * 100}>
                <OpportunityCard opportunity={opportunity} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center">
            <Link to="/opportunities" className="inline-flex items-center gap-2 text-app-text-muted font-semibold hover:text-app-text transition-colors">
              عرض جميع الفرص
              <ChevronLeftIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="الأخبار"
            title="آخر الأخبار والإعلانات"
            description="تابع أحدث التطورات والمستجدات بتصميم سهل ومستقر."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <AnimatedSection key={news.id} delay={index * 100}>
                <NewsCard news={news} />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-8 text-center">
            <Link to="/news" className="inline-flex items-center gap-2 text-app-text-muted font-semibold hover:text-app-text transition-colors">
              عرض الكل
              <ChevronLeftIcon className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <Card className="relative overflow-hidden rounded-[2rem] border border-brand/20 bg-gradient-to-r from-brand via-brand-deep to-brand-deep p-8 lg:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%)]" />
              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-center">
                <div className="space-y-4 text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-app-text text-sm font-semibold border border-white/10 w-fit">
                    <MessageCircleIcon className="w-4 h-4" />
                    جاهز لبداية أوضح
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-app-text leading-tight">
                    ابدأ رحلتك بطريقة أكثر هدوءًا ووضوحًا
                  </h2>
                  <p className="text-app-text-muted text-lg leading-8 max-w-2xl">
                    اختر المسار الذي يناسبك اليوم، وابدأ من نقطة مختصرة تبطئ الضغط وترفع وضوح القرار.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <Link to="/register" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-app-surface text-app-text font-semibold hover:bg-app-surface-strong transition-colors">
                    إنشاء حساب
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-white/15 text-app-text font-semibold hover:bg-white/10 transition-colors">
                    تواصل معنا
                    <MessageCircleIcon className="w-4 h-4" />
                  </Link>
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
