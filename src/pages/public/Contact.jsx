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
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 text-brown-900">
      <div className="bg-gradient-to-r from-brown-600/90 to-brown-700/90 border-b border-brown-400/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            تواصل معنا
          </h1>
          <p className="text-xl text-pearl-100 max-w-3xl">
            نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو طلب
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8 mb-8 bg-card-gradient border border-brown-300">
              <h2 className="text-2xl font-bold text-brown-900 mb-6">
                معلومات التواصل
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-1">البريد الإلكتروني</h3>
                    <p className="text-brown-700">info@landx.sa</p>
                    <p className="text-brown-700">support@landx.sa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-1">الهاتف</h3>
                    <p className="text-brown-700" dir="ltr">+966 XX XXX XXXX</p>
                    <p className="text-brown-700 text-sm">السبت - الخميس: 9 صباحاً - 5 مساءً</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-1">العنوان</h3>
                    <p className="text-brown-700">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-8 bg-gradient-to-r from-brown-200/10 to-brown-300/10 border border-brown-300">
              <h2 className="text-xl font-bold text-brown-900 mb-4">
                هل تريد الاستثمار؟
              </h2>
              <p className="text-brown-800 mb-6">
                إذا كنت مهتماً بالاستثمار في إحدى الفرص المتاحة، يمكنك تصفح الفرص الاستثمارية والتقديم مباشرة من خلال المنصة.
              </p>
              <Button className="w-full">
                تصفح الفرص الاستثمارية
              </Button>
            </Card>
          </div>
          
          <div>
            <Card className="p-8 bg-card-gradient border border-brown-300">
              <h2 className="text-2xl font-bold text-brown-900 mb-6">
                أرسل لنا رسالة
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك الكامل"
                    className="w-full px-3 py-2 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2">
                    البريد الإلكتروني
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="w-full px-3 py-2 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 XX XXX XXXX"
                    className="w-full px-3 py-2 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2">
                    الموضوع
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
                  >
                    <option value="">اختر الموضوع</option>
                    <option value="investment">استفسار استثماري</option>
                    <option value="technical">مشكلة تقنية</option>
                    <option value="partnership">شراكة</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brown-800 mb-2">
                    الرسالة
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="اكتب رسالتك هنا..."
                    className="w-full px-3 py-2 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 resize-none"
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
