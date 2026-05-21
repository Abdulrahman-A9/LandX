import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/shared/AnimatedSection';
import NewsCard from '../../components/shared/NewsCard';
import OpportunityCard from '../../components/shared/OpportunityCard';
import PageHero from '../../components/shared/PageHero';
import SectionIntro from '../../components/shared/SectionIntro';
import Card from '../../components/ui/Card';
import {
  ArrowRightIcon,
  BarChartIcon,
  BuildingIcon,
  CheckCircleIcon,
  CompassIcon,
  EyeIcon,
  FileTextIcon,
  HandshakeIcon,
  LeafIcon,
  MessageCircleIcon,
  PieChartIcon,
  SearchIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TargetIcon,
  UsersIcon,
} from '../../components/ui/Icons';
import { mockNews } from '../../data/mock/news';
import { mockOpportunities } from '../../data/mock/opportunities';
import { formatCompactNumber } from '../../lib/formatters';

const featuredOpportunities = mockOpportunities.slice(0, 3);
const latestNews = mockNews.slice(0, 3);

const stats = [
  { label: 'فرصة موثقة', value: 120, icon: <LeafIcon /> },
  { label: 'مستثمر نشط', value: 350, icon: <UsersIcon /> },
  { label: 'بلدية شريكة', value: 15, icon: <BuildingIcon /> },
  { label: 'تحليل مكتمل', value: 980, icon: <BarChartIcon /> },
];

const journey = [
  {
    title: 'اكتشف بسرعة',
    description: 'واجهة الفرص تعطيك قراءة أولية واضحة عن العائد، النطاق، وحالة الجاهزية قبل الدخول في التفاصيل.',
    icon: <SearchIcon />,
  },
  {
    title: 'افهم الجدوى',
    description: 'صفحات التفاصيل والتحليل تبني القرار على مؤشرات مختصرة ومنطقية بدلاً من فوضى البيانات.',
    icon: <EyeIcon />,
  },
  {
    title: 'قارن وقرر',
    description: 'المسار يوضح أين تكمل، متى تتواصل، ومتى يكون الوقت مناسباً للانتقال إلى التنفيذ.',
    icon: <PieChartIcon />,
  },
  {
    title: 'ابدأ التواصل',
    description: 'التقديم أو الاستفسار يأتي في نهاية المسار بشكل طبيعي دون مقاطعة أو إرباك أثناء الاستكشاف.',
    icon: <HandshakeIcon />,
  },
];

const strengths = [
  {
    title: 'هوية عربية عملية',
    description: 'المحتوى، الاتجاه، والتسلسل البصري مبني من البداية على قراءة عربية سلسة.',
    icon: <CompassIcon />,
  },
  {
    title: 'فرص موثقة ومنظمة',
    description: 'كل فرصة تعرض الحالة، الجهة، ومؤشرات الدخول بلغة واضحة وسريعة الفهم.',
    icon: <ShieldCheckIcon />,
  },
  {
    title: 'تحليل يساند القرار',
    description: 'المنصة لا تعرض فرصاً فقط، بل تمنح المستخدم إطاراً عملياً لقراءة الجدوى.',
    icon: <TargetIcon />,
  },
];

const heroAside = (
  <div className="landx-panel max-w-xl overflow-hidden p-5">
    <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
      <div className="grid gap-4">
        <div className="rounded-[1.5rem] border border-app-border bg-app-surface-soft/60 p-5">
          <div className="text-sm text-app-text-soft">مؤشر الجاهزية</div>
          <div className="mt-4 text-5xl font-black text-app-text">72%</div>
          <div className="mt-3 text-sm leading-7 text-app-text-muted">قراءة سريعة تساعد المستثمر على تحديد أولويات المتابعة دون ضوضاء.</div>
        </div>
        <div className="rounded-[1.5rem] border border-app-border bg-app-surface-soft/60 p-5">
          <div className="flex items-center gap-2 text-sm text-app-text-soft">
            <CheckCircleIcon className="h-4 w-4 text-success" />
            المسار الواضح
          </div>
          <div className="mt-3 text-sm leading-7 text-app-text-muted">
            من الاستكشاف إلى التحليل ثم التواصل في واجهة واحدة متدرجة وواضحة.
          </div>
        </div>
      </div>

      <div className="rounded-[1.75rem] border border-brand/20 bg-gradient-to-br from-brand/15 via-app-surface-soft/80 to-app-surface p-6">
        <div className="flex items-center justify-between">
          <div className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
            لوحة الرؤية
          </div>
          <SparklesIcon className="h-5 w-5 text-brand" />
        </div>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-app-border bg-app-bg/35 p-4">
            <div className="text-xs text-app-text-soft">العائد المتوقع</div>
            <div className="mt-2 text-3xl font-black text-success">16%</div>
          </div>
          <div className="rounded-2xl border border-app-border bg-app-bg/35 p-4">
            <div className="text-xs text-app-text-soft">وضع القرار</div>
            <div className="mt-2 text-xl font-bold text-app-text">واضح وقابل للتنفيذ</div>
          </div>
          <div className="rounded-2xl border border-app-border bg-app-bg/35 p-4">
            <div className="text-xs text-app-text-soft">المستوى التشغيلي</div>
            <div className="mt-2 text-xl font-bold text-app-text">منخفض الاحتكاك</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="overflow-hidden">
      <PageHero
        eyebrow="منصة قرار استثماري أوضح"
        title="كل ما يحتاجه المستثمر لفهم الفرصة قبل أن يدخل في أي فوضى تشغيلية."
        description="LandX تعيد ترتيب تجربة الاستثمار الزراعي الموسمي في مسار واحد واضح: استكشاف سريع، تحليل مفهوم، ثم انتقال طبيعي إلى الاستفسار أو التنفيذ."
        actions={
          <>
            <Link to="/opportunities" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand to-brand-deep px-6 py-3.5 text-base font-semibold text-app-text shadow-lg shadow-brand/20">
              استعرض الفرص
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link to="/investment-analysis" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-app-border bg-app-surface-soft px-6 py-3.5 text-base font-semibold text-app-text">
              ابدأ تحليل فكرتك
              <FileTextIcon className="h-4 w-4" />
            </Link>
          </>
        }
        aside={heroAside}
      />

      <section className="py-14 lg:py-16">
        <div className="landx-shell">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 80}>
                <Card className="h-full p-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                    {item.icon}
                  </div>
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
            <SectionIntro
              eyebrow="التدفق الصحيح"
              title="تجربة مبنية على تسلسل منطقي، لا على تراكم عناصر."
              description="كل خطوة داخل المنصة تقود لما بعدها بوضوح: من اكتشاف الفرصة إلى فهمها ثم اتخاذ الإجراء المناسب دون ازدحام بصري أو تشتيت."
            />
          </AnimatedSection>

          <div className="grid gap-5 lg:grid-cols-4">
            {journey.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 90}>
                <Card className="h-full p-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                    {item.icon}
                  </div>
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
              <SectionIntro
                align="start"
                eyebrow="لماذا تبدو أوضح"
                title="المنصة تختصر القرار دون أن تبسّطه بشكل مخل."
                description="المستخدم يرى ما يحتاجه أولاً، ثم يتدرج إلى تفاصيل أعمق عند الحاجة. هذا هو الفرق بين واجهة جميلة وواجهة تخدم قراراً حقيقياً."
              />
            </AnimatedSection>

            <div className="grid gap-4">
              {strengths.map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 100}>
                  <Card className="flex items-start gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                      {item.icon}
                    </div>
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
            <SectionIntro
              eyebrow="فرص مختارة"
              title="أفضل نقطة للدخول السريع إلى المنصة."
              description="هذه المجموعة تعرض فرصاً ذات قراءة مباشرة وواضحة لتبدأ المقارنة دون مجهود إضافي."
            />
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredOpportunities.map((opportunity, index) => (
              <AnimatedSection key={opportunity.id} delay={index * 90}>
                <OpportunityCard opportunity={opportunity} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="landx-shell space-y-12">
          <AnimatedSection>
            <SectionIntro
              eyebrow="المستجدات"
              title="آخر الأخبار والإعلانات في نفس اللغة البصرية الهادئة."
              description="المعلومات المتغيرة لا يجب أن تكون مشتتة. لذلك تأتي الأخبار هنا بشكل منظم وقابل للمسح السريع."
            />
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
                    إذا كانت لديك فكرة استثمارية أو فرصة تريد فهمها، ابدأ من المسار الصحيح.
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-9 text-app-text-muted">
                    اختر بين استعراض الفرص المنشورة أو تحليل فكرة مشروعك مباشرة. كلا المسارين مصمم
                    ليقودك إلى قرار أوضح لا إلى واجهة أكثر ازدحاماً.
                  </p>
                </div>

                <div className="grid gap-3">
                  <Link to="/opportunities" className="rounded-2xl bg-gradient-to-r from-brand to-brand-deep px-5 py-4 text-center text-sm font-semibold text-app-text">
                    تصفح الفرص
                  </Link>
                  <Link to="/investment-analysis" className="rounded-2xl border border-app-border bg-app-surface-soft px-5 py-4 text-center text-sm font-semibold text-app-text">
                    تحليل فكرة جديدة
                  </Link>
                  <Link to="/contact" className="rounded-2xl border border-app-border bg-transparent px-5 py-4 text-center text-sm font-semibold text-app-text-muted">
                    تواصل مع الفريق
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
