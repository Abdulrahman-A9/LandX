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
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">إضافة فرصة استثمارية جديدة</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">أدخل تفاصيل الفرصة الاستثمارية</p>
      </div>

      <div>
        <Card className="bg-card-gradient border border-brown-300 p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  عنوان الفرصة *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="مثال: وادي حائل الزراعي"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  الموقع *
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="مثال: حائل"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  الموسم *
                </label>
                <select
                  name="season"
                  value={formData.season}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                >
                  <option value="">اختر الموسم</option>
                  <option value="الموسم الشتوي 2024">الموسم الشتوي 2024</option>
                  <option value="الموسم الصيفي 2024">الموسم الصيفي 2024</option>
                  <option value="الموسم الخريفي 2024">الموسم الخريفي 2024</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  المساحة *
                </label>
                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="مثال: 500 هكتار"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  الحد الأدنى للاستثمار (ر.س) *
                </label>
                <input
                  type="number"
                  name="minInvestment"
                  value={formData.minInvestment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="مثال: 50000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  العائد المتوقع (%) *
                </label>
                <input
                  type="number"
                  name="expectedReturn"
                  value={formData.expectedReturn}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                  placeholder="مثال: 15"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                الوصف *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500 resize-none"
                placeholder="اكتب وصفاً تفصيلياً للفرصة الاستثمارية"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                المميزات
              </label>
              <textarea
                name="features"
                value={formData.features}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500 resize-none"
                placeholder="اكتب المميزات الرئيسية للفرصة"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                المتطلبات
              </label>
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500 resize-none"
                placeholder="اكتب المتطلبات اللازمة للاستثمار"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                الصور
              </label>
              <div className="border-2 border-dashed border-brown-300 rounded-lg p-8 text-center hover:border-brown-500 transition-colors cursor-pointer">
                <UploadIcon className="mx-auto text-4xl text-brown-600 mb-4" />
                <p className="text-brown-700 dark:text-stone-400">اسحب الصور هنا أو انقر للاختيار</p>
                <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">PNG, JPG حتى 5MB</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-pearl-100 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
              >
                <SaveIcon />
                <span>حفظ الفرصة</span>
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-red-600 to-red-700 text-pearl-100 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300"
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
