import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { SaveIcon, XIcon, UploadIcon, LeafIcon, MapPinIcon, DollarSignIcon, CalendarIcon } from '../../components/ui/Icons';

const CreateOpportunity = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    season: '',
    area: '',
    minInvestment: '',
    expectedReturn: '',
    description: '',
    features: '',
    requirements: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleCancel = () => {
    setFormData({
      title: '',
      location: '',
      season: '',
      area: '',
      minInvestment: '',
      expectedReturn: '',
      description: '',
      features: '',
      requirements: '',
    });
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إضافة فرصة استثمارية جديدة</h1>
        <p className="text-app-text-muted mt-2">أدخل تفاصيل الفرصة الاستثمارية</p>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  عنوان الفرصة *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="مثال: وادي حائل الزراعي"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  الموقع *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="مثال: حائل"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  الموسم *
                </label>
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                >
                  <option value="">اختر الموسم</option>
                  <option value="الموسم الشتوي 2024">الموسم الشتوي 2024</option>
                  <option value="الموسم الصيفي 2024">الموسم الصيفي 2024</option>
                  <option value="الموسم الخريفي 2024">الموسم الخريفي 2024</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  المساحة *
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="مثال: 500 هكتار"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  الحد الأدنى للاستثمار (ر.س) *
                </label>
                <input
                  type="number"
                  name="minInvestment"
                  value={formData.minInvestment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="مثال: 50000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  العائد المتوقع (%) *
                </label>
                <input
                  type="number"
                  name="expectedReturn"
                  value={formData.expectedReturn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  placeholder="مثال: 15"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-app-text-muted mb-2">
                الوصف *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                placeholder="اكتب وصفاً تفصيلياً للفرصة الاستثمارية"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-app-text-muted mb-2">
                المميزات
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                placeholder="اكتب المميزات الرئيسية للفرصة"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-app-text-muted mb-2">
                المتطلبات
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                placeholder="اكتب المتطلبات اللازمة للاستثمار"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-app-text-muted mb-2">
                الصور
              </label>
              <div className="border-2 border-dashed border-app-border rounded-lg p-8 text-center hover:border-brand transition-colors cursor-pointer">
                <UploadIcon className="mx-auto text-4xl text-app-text-soft mb-4" />
                <p className="text-app-text-muted">اسحب الصور هنا أو انقر للاختيار</p>
                <p className="text-sm text-app-text-soft mt-2">PNG, JPG حتى 5MB</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-success to-success/90 text-app-text rounded-lg hover:from-success/90 hover:to-success transition-all duration-300"
              >
                <SaveIcon />
                <span>حفظ الفرصة</span>
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-danger to-danger/90 text-app-text rounded-lg hover:from-danger/90 hover:to-danger transition-all duration-300"
              >
                <XIcon />
                <span>إلغاء</span>
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CreateOpportunity;
