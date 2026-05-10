import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('شكراً لتواصلك معنا! سنرد عليك في أقرب وقت.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            تواصل معنا
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو طلب
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                معلومات التواصل
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">البريد الإلكتروني</h3>
                    <p className="text-gray-600">info@landx.sa</p>
                    <p className="text-gray-600">support@landx.sa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">الهاتف</h3>
                    <p className="text-gray-600" dir="ltr">+966 XX XXX XXXX</p>
                    <p className="text-gray-600 text-sm">السبت - الخميس: 9 صباحاً - 5 مساءً</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">العنوان</h3>
                    <p className="text-gray-600">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-primary-50 border-primary-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                هل تريد الاستثمار؟
              </h2>
              <p className="text-gray-700 mb-6">
                إذا كنت مهتماً بالاستثمار في إحدى الفرص المتاحة، يمكنك تصفح الفرص الاستثمارية والتقديم مباشرة من خلال المنصة.
              </p>
              <Button className="w-full">
                تصفح الفرص الاستثمارية
              </Button>
            </Card>
          </div>
          
          <div>
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                أرسل لنا رسالة
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="الاسم الكامل"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="أدخل اسمك الكامل"
                />
                
                <Input
                  label="البريد الإلكتروني"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@email.com"
                />
                
                <Input
                  label="رقم الهاتف"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+966 XX XXX XXXX"
                />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الموضوع
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="investment">استفسار استثماري</option>
                    <option value="technical">مشكلة تقنية</option>
                    <option value="partnership">شراكة</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  إرسال الرسالة
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
