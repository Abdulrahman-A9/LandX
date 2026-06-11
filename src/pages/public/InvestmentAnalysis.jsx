import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { analysisApi } from '../../lib/api';
import { buildAuthRoute } from '../../lib/flow';
import { formatCurrency, formatArabicDate } from '../../lib/formatters';
import {
  ArrowRightIcon,
  BarChartIcon,
  BriefcaseIcon,
  CompassIcon,
  DollarSignIcon,
  FileTextIcon,
  GlobeIcon,
  LayersIcon,
  LightbulbIcon,
  MapPinIcon,
  ShieldCheckIcon,
  TargetIcon,
  ZapIcon,
} from '../../components/ui/Icons';

const analysisTracks = [
  {
    title: 'قراءة سريعة قبل الالتزام',
    description: 'افهم هل الفكرة واعدة مبدئياً قبل أن تبدأ بمخاطبة الجهات أو تخصيص ميزانية تفصيلية.',
    icon: <LightbulbIcon className="h-5 w-5" />,
  },
  {
    title: 'تجهيز عرض أوضح للممول أو الشريك',
    description: 'استخدم المؤشرات الناتجة كطبقة أولى لترتيب لغة العرض، خاصة عند مناقشة التكاليف والعائد.',
    icon: <TargetIcon className="h-5 w-5" />,
  },
  {
    title: 'مقارنة أكثر من سيناريو',
    description: 'غيّر المساحة أو التكاليف أو الإيراد المتوقع واعرف كيف يتأثر العائد قبل أن تعتمد المسار.',
    icon: <LayersIcon className="h-5 w-5" />,
  },
];

const guidanceItems = [
  'أدخل الأرقام الأقرب للواقع حتى تكون المؤشرات ذات معنى.',
  'ابدأ بتقدير محافظ للإيراد، ثم عدّل لاحقاً لقياس أفضل وأسوأ سيناريو.',
  'التقرير هنا أولي وذكي، لكنه ليس بديلاً عن دراسة جدوى تفصيلية كاملة.',
];

const InvestmentAnalysis = () => {
  const { token } = useAuth();
  const { addToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [report, setReport] = useState(null);
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    cropType: '',
    area: '',
    setupCost: '',
    operatingCost: '',
    estimatedRevenue: '',
  });

  const authRoute = useMemo(
    () => buildAuthRoute('/register', { next: '/investment-analysis', intent: 'analysis' }),
    [],
  );

  const numericModel = useMemo(() => {
    const area = Number(formData.area || 0);
    const setupCost = Number(formData.setupCost || 0);
    const operatingCost = Number(formData.operatingCost || 0);
    const estimatedRevenue = Number(formData.estimatedRevenue || 0);
    const totalCost = setupCost + operatingCost;
    const profit = estimatedRevenue - totalCost;
    const roi = totalCost > 0 ? (profit / totalCost) * 100 : 0;
    const paybackMonths = estimatedRevenue > 0 ? (totalCost / estimatedRevenue) * 12 : 0;
    const costPerSquareMeter = area > 0 ? totalCost / area : 0;
    const revenuePerSquareMeter = area > 0 ? estimatedRevenue / area : 0;

    return {
      area,
      setupCost,
      operatingCost,
      estimatedRevenue,
      totalCost,
      profit,
      roi,
      paybackMonths,
      costPerSquareMeter,
      revenuePerSquareMeter,
    };
  }, [formData]);

  const healthStatus = useMemo(() => {
    if (!numericModel.totalCost || !numericModel.estimatedRevenue) {
      return {
        label: 'بانتظار المدخلات',
        tone: 'text-app-text',
        box: 'bg-white/60 border-[#e2c8b2]',
        note: 'أدخل التكاليف والإيراد المتوقع لنستنتج الصورة الأولية.',
      };
    }

    if (numericModel.roi >= 30 && numericModel.paybackMonths <= 12) {
      return {
        label: 'مؤشرات قوية',
        tone: 'text-success',
        box: 'bg-[#eef3e7] border-success/20',
        note: 'العائد جيد وفترة الاسترداد قصيرة نسبياً، ما يعطي انطباعاً أولياً إيجابياً.',
      };
    }

    if (numericModel.roi >= 12 && numericModel.paybackMonths <= 24) {
      return {
        label: 'مؤشرات متوازنة',
        tone: 'text-brand',
        box: 'bg-[#f7ecdf] border-brand/20',
        note: 'الفكرة تبدو قابلة للدراسة، لكن تحتاج ضبطاً أفضل للتكاليف أو الإيراد لرفع الجاذبية.',
      };
    }

    return {
      label: 'تحتاج مراجعة',
      tone: 'text-danger',
      box: 'bg-[#f3e5e2] border-danger/20',
      note: 'هناك ضغط واضح على الربحية أو طول في الاسترداد، فكر في إعادة توزيع التكاليف أو رفع الإيراد المتوقع الواقعي.',
    };
  }, [numericModel]);

  const scenarioCards = useMemo(() => {
    const conservativeRevenue = numericModel.estimatedRevenue * 0.85;
    const conservativeProfit = conservativeRevenue - numericModel.totalCost;
    const optimisticRevenue = numericModel.estimatedRevenue * 1.15;
    const optimisticProfit = optimisticRevenue - numericModel.totalCost;

    return [
      {
        title: 'السيناريو الحالي',
        value: formatCurrency(numericModel.profit),
        helper: `ROI ${numericModel.roi.toFixed(1)}%`,
      },
      {
        title: 'سيناريو محافظ',
        value: formatCurrency(conservativeProfit),
        helper: `إيراد أقل 15%`,
      },
      {
        title: 'سيناريو متفائل',
        value: formatCurrency(optimisticProfit),
        helper: `إيراد أعلى 15%`,
      },
    ];
  }, [numericModel]);

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) {
      addToast('سجل الدخول أولًا لحفظ التحليل في قاعدة البيانات.', 'error');
      return;
    }

    try {
      setSubmitting(true);
      const analysis = await analysisApi.create(token, {
        project_name: formData.projectName,
        location: formData.location,
        crop_type: formData.cropType,
        area: Number(formData.area || 0),
        setup_cost: Number(formData.setupCost || 0),
        operating_cost: Number(formData.operatingCost || 0),
        estimated_revenue: Number(formData.estimatedRevenue || 0),
      });
      setReport(analysis);
      addToast('تم حفظ التحليل وتوليد التقرير بنجاح.', 'success');
    } catch (error) {
      addToast(error.message || 'تعذر إنشاء التحليل.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const latestReport = report?.reports?.[0];

  return (
    <div className="landx-shell space-y-8 py-12">
      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card className="overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-7 lg:p-8">
              <div className="landx-kicker">خدمة التحليل الاستثماري</div>
              <h1 className="mt-5 text-4xl font-black leading-tight text-app-text md:text-5xl">
                حوّل فكرتك إلى قراءة استثمارية أولية ذكية ومقنعة.
              </h1>
              <p className="mt-4 max-w-3xl text-sm leading-8 text-app-text-muted">
                هذه الخدمة لم تعد مجرد نموذج إدخال. الآن هي مساحة تساعد المستثمر على قراءة الربحية،
                المقارنة بين السيناريوهات، وفهم مدى توازن المشروع قبل الانتقال إلى قرار أعمق.
              </p>

              <div className="mt-6 grid gap-3">
                {analysisTracks.map((item) => (
                  <div key={item.title} className="flex items-start gap-3 rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-app-text">{item.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-app-text-muted">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="landx-dark-card rounded-none rounded-t-[1.75rem] p-7 lg:rounded-r-[1.75rem] lg:rounded-tl-none lg:p-8">
              <div className="flex items-center justify-between">
                <div className="text-sm text-[#f0cfb3]">مركز المؤشرات</div>
                <ZapIcon className="h-5 w-5 text-[#ffd9bb]" />
              </div>
              <div className="mt-5 grid gap-4">
                <div className={`rounded-2xl border p-4 ${healthStatus.box}`}>
                  <div className={`text-sm font-bold ${healthStatus.tone}`}>{healthStatus.label}</div>
                  <p className="mt-2 text-sm leading-7 text-app-text-muted">{healthStatus.note}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-xs text-[#f0cfb3]">إجمالي التكلفة</div>
                  <div className="mt-2 text-2xl font-black text-[#fff8f0]">{formatCurrency(numericModel.totalCost)}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-xs text-[#f0cfb3]">الربح المتوقع</div>
                  <div className="mt-2 text-2xl font-black text-[#fff8f0]">{formatCurrency(numericModel.profit)}</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                  <div className="text-xs text-[#f0cfb3]">فترة الاسترداد</div>
                  <div className="mt-2 text-2xl font-black text-[#fff8f0]">
                    {numericModel.paybackMonths ? numericModel.paybackMonths.toFixed(1) : '0'} شهر
                  </div>
                </div>
                {!token ? (
                  <Link
                    to={authRoute}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-[#fff8f0] ring-1 ring-white/10"
                  >
                    أنشئ حساباً لحفظ التقرير
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: 'العائد التقديري',
            value: `${numericModel.roi.toFixed(1)}%`,
            helper: 'نسبة العائد على إجمالي التكلفة',
            icon: <BarChartIcon className="h-5 w-5" />,
          },
          {
            label: 'تكلفة المتر',
            value: formatCurrency(numericModel.costPerSquareMeter),
            helper: 'مقارنة أولية مع المساحة',
            icon: <CompassIcon className="h-5 w-5" />,
          },
          {
            label: 'إيراد المتر',
            value: formatCurrency(numericModel.revenuePerSquareMeter),
            helper: 'قيمة الإنتاج المتوقع لكل متر',
            icon: <GlobeIcon className="h-5 w-5" />,
          },
          {
            label: 'الربح المتوقع',
            value: formatCurrency(numericModel.profit),
            helper: 'بعد احتساب التأسيس والتشغيل',
            icon: <DollarSignIcon className="h-5 w-5" />,
          },
        ].map((item) => (
          <Card key={item.label} className="p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-app-text-muted">{item.label}</div>
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                {item.icon}
              </div>
            </div>
            <div className="mt-6 text-3xl font-black text-app-text">{item.value}</div>
            <div className="mt-2 text-sm text-app-text-soft">{item.helper}</div>
          </Card>
        ))}
      </section>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-6 lg:p-8">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <div className="landx-kicker">أدخل سيناريو المشروع</div>
              <h2 className="mt-4 text-3xl font-black text-app-text">لوحة المدخلات الذكية</h2>
              <p className="mt-3 text-sm leading-8 text-app-text-muted">
                عبئ البيانات الأساسية للمشروع، وستتحدث المؤشرات الجانبية فوراً لتمنحك قراءة حية
                قبل حفظ التقرير النهائي.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">اسم المشروع</label>
                <input
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                  placeholder="مثال: مشروع بيوت محمية ذكية"
                  className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-app-text placeholder:text-app-text-soft"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">الموقع</label>
                <input
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="المدينة أو المنطقة"
                  className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-app-text placeholder:text-app-text-soft"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">نوع النشاط / المحصول</label>
                <input
                  name="cropType"
                  value={formData.cropType}
                  onChange={handleChange}
                  placeholder="زيتون، تمور، خضروات..."
                  className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-app-text placeholder:text-app-text-soft"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">المساحة</label>
                <input
                  name="area"
                  type="number"
                  value={formData.area}
                  onChange={handleChange}
                  placeholder="بالمتر المربع"
                  className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-app-text placeholder:text-app-text-soft"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">تكلفة التأسيس</label>
                <input
                  name="setupCost"
                  type="number"
                  value={formData.setupCost}
                  onChange={handleChange}
                  placeholder="المبلغ المبدئي"
                  className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-app-text placeholder:text-app-text-soft"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">التكلفة التشغيلية</label>
                <input
                  name="operatingCost"
                  type="number"
                  value={formData.operatingCost}
                  onChange={handleChange}
                  placeholder="تكاليف التشغيل السنوية"
                  className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-app-text placeholder:text-app-text-soft"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-app-text-muted">الإيراد المتوقع</label>
              <input
                name="estimatedRevenue"
                type="number"
                value={formData.estimatedRevenue}
                onChange={handleChange}
                placeholder="الإيراد السنوي المتوقع"
                className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-app-text placeholder:text-app-text-soft"
              />
            </div>

            <div className="rounded-[1.5rem] border border-[#ead9c7] bg-white/55 p-5">
              <div className="flex items-center gap-2 text-app-text">
                <ShieldCheckIcon className="h-5 w-5 text-brand" />
                <h3 className="text-lg font-bold">إرشادات لتحليل أكثر فائدة</h3>
              </div>
              <div className="mt-4 grid gap-3">
                {guidanceItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-[#ead9c7] bg-[#fffaf4] px-4 py-3 text-sm leading-7 text-app-text-muted">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? 'جاري توليد التقرير...' : 'توليد التقرير وحفظه'}
            </Button>
          </form>
        </Card>

        <div className="space-y-8">
          <Card className="p-6 lg:p-8">
            <div className="flex items-center gap-2 text-app-text">
              <LayersIcon className="h-5 w-5 text-brand" />
              <h2 className="text-2xl font-bold">مقارنة السيناريوهات</h2>
            </div>
            <div className="mt-5 grid gap-4">
              {scenarioCards.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                  <div className="text-sm text-app-text-soft">{item.title}</div>
                  <div className="mt-2 text-2xl font-black text-app-text">{item.value}</div>
                  <div className="mt-1 text-sm text-app-text-muted">{item.helper}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 lg:p-8">
            <div className="flex items-center gap-2 text-app-text">
              <FileTextIcon className="h-5 w-5 text-brand" />
              <h2 className="text-2xl font-bold">آخر تقرير محفوظ</h2>
            </div>

            {latestReport ? (
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                  <div className="flex items-center gap-2 text-sm text-app-text-soft">
                    <BriefcaseIcon className="h-4 w-4 text-brand" />
                    {report.project_name}
                  </div>
                  <div className="mt-2 text-lg font-bold text-app-text">{latestReport.report_number}</div>
                  <div className="mt-1 text-sm text-app-text-muted">{formatArabicDate(latestReport.created_at)}</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                    <div className="flex items-center gap-2 text-xs text-app-text-soft">
                      <MapPinIcon className="h-4 w-4 text-brand" />
                      الموقع
                    </div>
                    <div className="mt-2 font-bold text-app-text">{report.location}</div>
                  </div>
                  <div className="rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                    <div className="flex items-center gap-2 text-xs text-app-text-soft">
                      <BarChartIcon className="h-4 w-4 text-brand" />
                      ROI
                    </div>
                    <div className="mt-2 font-bold text-app-text">{latestReport.roi_percentage?.toFixed(1) ?? '0'}%</div>
                  </div>
                  <div className="rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                    <div className="flex items-center gap-2 text-xs text-app-text-soft">
                      <DollarSignIcon className="h-4 w-4 text-brand" />
                      الإيراد المتوقع
                    </div>
                    <div className="mt-2 font-bold text-app-text">{formatCurrency(report.estimated_revenue || 0)}</div>
                  </div>
                  <div className="rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                    <div className="flex items-center gap-2 text-xs text-app-text-soft">
                      <ShieldCheckIcon className="h-4 w-4 text-brand" />
                      فترة الاسترداد
                    </div>
                    <div className="mt-2 font-bold text-app-text">{latestReport.payback_months?.toFixed(1) ?? '0'} شهر</div>
                  </div>
                </div>

                <div className="rounded-2xl border border-brand/20 bg-[#f7ecdf] p-4 text-sm leading-8 text-app-text-muted">
                  {latestReport.summary}
                </div>
              </div>
            ) : (
              <div className="mt-6 rounded-[1.5rem] border border-[#ead9c7] bg-white/55 p-6">
                <div className="flex items-center gap-2 text-app-text">
                  <BriefcaseIcon className="h-5 w-5 text-brand" />
                  <div className="font-bold">لا يوجد تقرير بعد</div>
                </div>
                <p className="mt-3 text-sm leading-8 text-app-text-muted">
                  بعد إرسال التحليل سيظهر هنا تقرير محفوظ من الباك اند مع رقم التقرير، نسبة العائد،
                  فترة الاسترداد، وملخص أولي مرتب يساعدك على عرض الفكرة أو مراجعتها.
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAnalysis;
