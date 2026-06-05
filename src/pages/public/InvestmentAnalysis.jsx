import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { analysisApi } from '../../lib/api';
import { formatCurrency, formatArabicDate } from '../../lib/formatters';
import { BarChartIcon, BriefcaseIcon, DollarSignIcon, FileTextIcon, MapPinIcon } from '../../components/ui/Icons';

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

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!token) {
      addToast('سجل الدخول أولاً لحفظ التحليل في قاعدة البيانات.', 'error');
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
    <div className="landx-shell py-12 space-y-8">
      <div>
        <div className="landx-kicker">تحليل الفكرة</div>
        <h1 className="mt-4 text-4xl font-black text-app-text">تحليل استثماري محفوظ داخل النظام</h1>
        <p className="mt-3 max-w-3xl text-sm leading-8 text-app-text-muted">
          هذا المسار يرسل مدخلاتك إلى الباك اند، يحفظها في قاعدة البيانات، ثم يولد تقريراً أولياً يمكن عرضه للجنة لاحقاً.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <Card className="p-6 lg:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">اسم المشروع</label>
                <input name="projectName" value={formData.projectName} onChange={handleChange} required className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-app-text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">الموقع</label>
                <input name="location" value={formData.location} onChange={handleChange} required className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-app-text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">نوع النشاط / المحصول</label>
                <input name="cropType" value={formData.cropType} onChange={handleChange} className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-app-text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">المساحة</label>
                <input name="area" type="number" value={formData.area} onChange={handleChange} className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-app-text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">تكلفة التأسيس</label>
                <input name="setupCost" type="number" value={formData.setupCost} onChange={handleChange} className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-app-text" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">التكلفة التشغيلية</label>
                <input name="operatingCost" type="number" value={formData.operatingCost} onChange={handleChange} className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-app-text" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-app-text-muted">الإيراد المتوقع</label>
              <input name="estimatedRevenue" type="number" value={formData.estimatedRevenue} onChange={handleChange} className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-app-text" />
            </div>

            <Button type="submit" size="lg" disabled={submitting}>
              {submitting ? 'جاري توليد التقرير...' : 'توليد التقرير وحفظه'}
            </Button>
          </form>
        </Card>

        <Card className="p-6 lg:p-8">
          <div className="flex items-center gap-2 text-app-text">
            <FileTextIcon className="h-5 w-5 text-brand" />
            <h2 className="text-2xl font-bold">آخر تقرير</h2>
          </div>

          {latestReport ? (
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                <div className="flex items-center gap-2 text-sm text-app-text-soft">
                  <BriefcaseIcon className="h-4 w-4 text-brand" />
                  {report.project_name}
                </div>
                <div className="mt-2 text-lg font-bold text-app-text">{latestReport.report_number}</div>
                <div className="mt-1 text-sm text-app-text-muted">{formatArabicDate(latestReport.created_at)}</div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <MapPinIcon className="h-4 w-4 text-brand" />
                    الموقع
                  </div>
                  <div className="mt-2 font-bold text-app-text">{report.location}</div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <BarChartIcon className="h-4 w-4 text-brand" />
                    ROI
                  </div>
                  <div className="mt-2 font-bold text-app-text">{latestReport.roi_percentage?.toFixed(1) ?? '0'}%</div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="flex items-center gap-2 text-xs text-app-text-soft">
                    <DollarSignIcon className="h-4 w-4 text-brand" />
                    الإيراد المتوقع
                  </div>
                  <div className="mt-2 font-bold text-app-text">{formatCurrency(report.estimated_revenue || 0)}</div>
                </div>
                <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4">
                  <div className="text-xs text-app-text-soft">فترة الاسترداد</div>
                  <div className="mt-2 font-bold text-app-text">{latestReport.payback_months?.toFixed(1) ?? '0'} شهر</div>
                </div>
              </div>

              <div className="rounded-2xl border border-app-border bg-app-surface-soft p-4 text-sm leading-8 text-app-text-muted">
                {latestReport.summary}
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-app-border bg-app-surface-soft p-6 text-sm leading-8 text-app-text-muted">
              بعد إرسال النموذج سيظهر هنا التقرير القادم من الباك اند مع رقم التقرير ونسبة العائد وفترة الاسترداد.
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default InvestmentAnalysis;
