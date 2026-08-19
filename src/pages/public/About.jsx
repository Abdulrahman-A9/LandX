import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/shared/AnimatedSection';
import PageHero from '../../components/shared/PageHero';
import SectionIntro from '../../components/shared/SectionIntro';
import Card from '../../components/ui/Card';
import {
  BarChartIcon,
  BuildingIcon,
  HandshakeIcon,
  LightbulbIcon,
  ShieldCheckIcon,
  UsersIcon,
} from '../../components/ui/Icons';

const values = [
  {
    title: 'شفافية الفرصة',
    description: 'نعرض المعلومات التي يحتاجها المستثمر ليقارن الخيارات ويقيّمها بثقة.',
    icon: <BarChartIcon />,
  },
  {
    title: 'الثقة التنظيمية',
    description: 'المنصة تبني جسراً أكثر وضوحاً بين المستثمر والجهات المنظمة.',
    icon: <ShieldCheckIcon />,
  },
  {
    title: 'شراكة عملية',
    description: 'نمنح الجهات المعلنة حضورًا مهنيًا يسهّل عرض الفرص واستقبال اهتمام المستثمرين.',
    icon: <HandshakeIcon />,
  },
  {
    title: 'ابتكار منضبط',
    description: 'نستخدم التحليل والتصميم لخدمة الهدف، لا لإضافة ضوضاء بصرية أو وظيفية.',
    icon: <LightbulbIcon />,
  },
];

const highlights = [
  'منصة عربية أولاً للفرص الاستثمارية.',
  'انتقال عملي من اكتشاف الفرصة إلى التقييم والتواصل.',
  'أدوات تساعد المستثمر والجهة المعلنة على إنجاز الخطوة التالية.',
];

const About = () => {
  return (
    <div>
      <PageHero
        eyebrow="عن LandX"
        title="LandX تربط المستثمر بالفرصة التي تستحق اهتمامه."
        description="نجمع عرض الفرص، التقييم المالي، والتواصل مع الجهات المعلنة في منصة واحدة تساعد على تحويل الاهتمام إلى قرار قابل للتنفيذ."
      />

      <section className="py-16 lg:py-20">
        <div className="landx-shell grid gap-10 lg:grid-cols-2">
          <AnimatedSection>
            <Card className="h-full p-7 lg:p-8">
              <SectionIntro
                align="start"
                eyebrow="الرؤية"
                title="أن يصل المستثمر إلى قرار مبني على معلومات واضحة."
                description="نساعد المستخدم على قراءة الفرصة وفهم جدواها والتواصل مع الجهة المعلنة قبل اتخاذ الخطوة التالية."
              />
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Card className="h-full p-7 lg:p-8">
              <SectionIntro
                align="start"
                eyebrow="الرسالة"
                title="بناء سوق استثماري أكثر اتصالًا بين الطرفين."
                description="تساعد LandX المستثمر على اكتشاف الفرص وتقييمها، وتساعد الجهة المعلنة على تقديم مشاريعها واستقبال الطلبات بوضوح ومهنية."
              />
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="landx-shell space-y-12">
          <AnimatedSection>
            <SectionIntro
              eyebrow="قيم العمل"
              title="نظام قيم واضح ينعكس على التصميم والتجربة، لا على النصوص فقط."
              description="كل قيمة هنا مرتبطة بقرار تصميمي وتجربة استخدام واضحة داخل المنصة."
            />
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 80}>
                <Card className="h-full p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
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
          <Card className="p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="landx-kicker">ما الذي يميز LandX؟</div>
                <h2 className="mt-4 text-3xl font-black leading-tight text-app-text md:text-4xl">
                  تجربة واحدة تخدم المستثمر والجهة المعلنة والفريق المشرف.
                </h2>
              </div>
              <div className="grid gap-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                    <UsersIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
                    <p className="text-sm leading-7 text-app-text-muted">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="landx-shell">
          <Card className="p-8 text-center lg:p-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
              <BuildingIcon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-black text-app-text">ابدأ من التجربة الأنسب لك.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-app-text-muted">
              إن كنت مستثمراً ابدأ بالفرص أو التحليل، وإن كنت جهة معلنة فالتواصل معنا هو أفضل بداية
              لتشكيل العرض المناسب.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/opportunities" className="rounded-2xl bg-gradient-to-r from-[#8f4f2d] via-[#aa653c] to-[#c38256] px-5 py-3 text-sm font-semibold text-[#fff8f0]">
                استعرض الفرص
              </Link>
              <Link to="/contact" className="rounded-2xl border border-[#dfc4ac] bg-white/60 px-5 py-3 text-sm font-semibold text-app-text">
                تواصل معنا
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
