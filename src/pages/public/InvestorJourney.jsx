import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { FileTextIcon, HandshakeIcon, LightbulbIcon, SearchIcon } from '../../components/ui/Icons';

const stages = [
  {
    number: '01',
    title: 'حدد نوع البداية',
    description: 'إما أنك تراجع فرصة جاهزة، أو تملك فكرة وتحتاج تحليلًا أوليًا قبل الالتزام.',
    points: ['ابدأ من الصفحة الرئيسية', 'اختر الفرص أو التحليل', 'لا حاجة للدخول في كل الصفحات من البداية'],
  },
  {
    number: '02',
    title: 'افهم الملخص أولًا',
    description: 'المنصة تعرض أهم المؤشرات أولًا: الجهة، الجاهزية، العائد المتوقع، وحجم الاستثمار المطلوب.',
    points: ['قراءة سريعة للملخص', 'تقليل الوقت المهدور', 'استبعاد الخيارات غير المناسبة مبكرًا'],
  },
  {
    number: '03',
    title: 'انتقل إلى الخدمة المناسبة',
    description: 'عندما تتأكد من الحاجة إلى التعمق، تبدأ خطوة عملية: تحليل محفوظ، طلب اهتمام، أو استفسار مباشر.',
    points: ['تحليل استثماري', 'طلب اهتمام', 'استفسار من صفحة الفرصة'],
  },
  {
    number: '04',
    title: 'تابع من لوحة المستثمر',
    description: 'بعد إنشاء الحساب أو تسجيل الدخول، تصبح كل العمليات محفوظة ويمكن متابعتها من لوحة واحدة.',
    points: ['عرض الاستفسارات', 'عرض طلبات الاهتمام', 'عرض التحليلات المحفوظة'],
  },
];

const scenarios = [
  {
    title: 'مستخدم لديه فرصة جاهزة',
    summary: 'يريد أن يعرف بسرعة هل هذه الفرصة تستحق أن يكمل فيها أم لا.',
    result: 'يفتح تفاصيل الفرصة، يراجع المؤشرات، ثم يرسل اهتمامه واستفساره من نفس الصفحة.',
    icon: <FileTextIcon className="h-5 w-5" />,
  },
  {
    title: 'مستخدم لديه فكرة فقط',
    summary: 'لا يملك فرصة منشورة لكنه يريد قراءة أولية منظمة عن جدوى فكرته.',
    result: 'يبدأ من التحليل الاستثماري، يحفظ التقرير، ثم يعود لاحقًا للمقارنة أو المتابعة.',
    icon: <LightbulbIcon className="h-5 w-5" />,
  },
  {
    title: 'مستخدم متردد ويكره التعقيد',
    summary: 'يخاف من ضياع الوقت بين الصفحات والإجراءات غير الضرورية.',
    result: 'يبدأ من هذه الصفحة، يفهم المسار، ثم يختار خطوة واحدة واضحة بدل التشتت.',
    icon: <SearchIcon className="h-5 w-5" />,
  },
  {
    title: 'مستخدم يحتاج تواصلًا بعد القرار',
    summary: 'يريد أن ينتقل من الفهم إلى المتابعة الرسمية داخل النظام.',
    result: 'يسجل حسابًا ثم يتابع الطلبات والاستفسارات من لوحة المستثمر بسهولة.',
    icon: <HandshakeIcon className="h-5 w-5" />,
  },
];

const InvestorJourney = () => {
  return (
    <div className="min-h-screen bg-app-bg py-16 text-app-text">
      <div className="landx-shell space-y-16">
        <section className="text-center">
          <div className="landx-kicker">رحلة المستثمر</div>
          <h1 className="mt-5 text-4xl font-black md:text-5xl">كيف يتحرك المستخدم من البداية إلى القرار داخل LandX؟</h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-9 text-app-text-muted">
            هذه الصفحة تشرح المسار الصحيح داخل المنصة: من اختيار البداية المناسبة، إلى فهم الفرصة أو الفكرة، ثم تنفيذ الإجراء المناسب ومتابعته من اللوحة.
          </p>
        </section>

        <section>
          <Card className="p-8">
            <h2 className="text-center text-2xl font-bold text-app-text">المخطط المختصر للرحلة</h2>
            <p className="mt-2 text-center text-sm leading-7 text-app-text-muted">خطوات محددة تختصر كيف يدخل المستخدم، ماذا يرى، ومتى يتحول من الفهم إلى الإجراء.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {stages.map((stage) => (
                <div key={stage.number} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand bg-gradient-to-r from-brand/20 to-brand-deep/20 text-2xl font-bold text-brand">
                    {stage.number}
                  </div>
                  <h3 className="text-lg font-bold text-app-text">{stage.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-app-text-muted">{stage.description}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          {stages.map((stage) => (
            <Card key={stage.number} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-xl font-bold text-brand">
                  {stage.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-app-text">{stage.title}</h3>
                  <p className="mt-3 text-sm leading-8 text-app-text-muted">{stage.description}</p>
                  <div className="mt-4 space-y-2">
                    {stage.points.map((point) => (
                      <div key={point} className="rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text-muted">
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>

        <section>
          <h2 className="text-center text-2xl font-bold text-app-text">سيناريوهات استخدام واقعية</h2>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-8 text-app-text-muted">
            هذه الأمثلة توضّح كيف تخدم المنصة أنواعًا مختلفة من المستخدمين دون أن تفرض عليهم نفس البداية.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <Card key={scenario.title} className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                  {scenario.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-app-text">{scenario.title}</h3>
                <p className="mt-3 text-sm leading-8 text-app-text-muted">{scenario.summary}</p>
                <div className="mt-4 rounded-2xl border border-success/20 bg-success/10 p-4 text-sm leading-7 text-app-text">
                  {scenario.result}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <Card className="mx-auto max-w-4xl p-8 text-center">
            <h2 className="text-2xl font-bold text-app-text">ما النهاية الصحيحة للرحلة؟</h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-8 text-app-text-muted">
              النهاية ليست دائمًا تقديمًا رسميًا فقط. أحيانًا تكون تقريرًا محفوظًا، أو طلب اهتمام، أو قرارًا واعيًا بعدم المتابعة. المهم أن المستخدم يصل إلى قرار واضح ومدعوم بالبيانات.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/opportunities">
                <Button size="lg" className="w-full sm:w-auto">استكشف الفرص</Button>
              </Link>
              <Link to="/investment-analysis">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">ابدأ التحليل</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">أنشئ حسابًا</Button>
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default InvestorJourney;
