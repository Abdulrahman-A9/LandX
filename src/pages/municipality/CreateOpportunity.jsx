import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { opportunitiesApi } from '../../lib/api';

const CreateOpportunity = () => {
  const { token } = useAuth();
  const { addToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    season: '',
    area: '',
    investmentRequired: '',
    expectedReturn: '',
    description: '',
  });

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      await opportunitiesApi.create(token, {
        title: formData.title,
        location: formData.location,
        season: formData.season,
        area: Number(formData.area || 0),
        area_unit: 'متر مربع',
        investment_required: Number(formData.investmentRequired || 0),
        expected_return: Number(formData.expectedReturn || 0),
        description: formData.description,
        status: 'pending',
      });
      addToast('تم إنشاء الفرصة وربطها ببلديتك بنجاح.', 'success');
      setFormData({
        title: '',
        location: '',
        season: '',
        area: '',
        investmentRequired: '',
        expectedReturn: '',
        description: '',
      });
    } catch (error) {
      addToast(error.message || 'تعذر إنشاء الفرصة.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إضافة فرصة استثمارية جديدة</h1>
        <p className="mt-2 text-app-text-muted">أضف تفاصيل مشروعك ليظهر للمستثمرين الباحثين عن فرص مناسبة.</p>
      </div>

      <Card className="bg-card-gradient border border-app-border p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text-muted">عنوان الفرصة</label>
              <input name="title" value={formData.title} onChange={handleChange} required className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text-muted">الموقع</label>
              <input name="location" value={formData.location} onChange={handleChange} required className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text-muted">الموسم</label>
              <input name="season" value={formData.season} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text-muted">المساحة</label>
              <input name="area" type="number" value={formData.area} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text-muted">قيمة الاستثمار المطلوبة</label>
              <input name="investmentRequired" type="number" value={formData.investmentRequired} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text-muted">العائد المتوقع %</label>
              <input name="expectedReturn" type="number" value={formData.expectedReturn} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-app-text-muted">الوصف</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              required
              className="w-full resize-none rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text"
            />
          </div>

          <div className="flex gap-3">
            <Button type="submit" disabled={submitting}>
              {submitting ? 'جاري الحفظ...' : 'حفظ الفرصة'}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() =>
                setFormData({
                  title: '',
                  location: '',
                  season: '',
                  area: '',
                  investmentRequired: '',
                  expectedReturn: '',
                  description: '',
                })
              }
            >
              إعادة تعيين
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default CreateOpportunity;
