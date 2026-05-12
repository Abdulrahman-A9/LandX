import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { useToast } from '../../context/ToastContext';
import {
  MailIcon, PhoneIcon, MapPinIcon, ClockIcon,
  GlobeIcon, MessageCircleIcon, HelpCircleIcon,
  ArrowRightIcon, ExternalLinkIcon
} from '../../components/ui/Icons';

const faqs = [
  { q: 'كيف يمكنني البدء بالاستثمار؟', a: 'يمكنك البدء بتصفح الفرص الاستثمارية المتاحة أو استخدام خدمة التحليل الاستثماري لتقييم فكرتك.' },
  { q: 'هل التسجيل في المنصة مجاني؟', a: 'نعم، التسجيل واستعراض الفرص مجاني بالكامل. بعض الخدمات المتقدمة قد تتطلب اشتراكاً.' },
  { q: 'ما هي جهات الاصدار للفرص؟', a: 'الفرص تصدر من البلديات الشريكة مثل أمانة حائل والقصيم وتبوك وغيرها.' },
  { q: 'كيف أتواصل مع الدعم الفني؟', a: 'يمكنك إرسال رسالة عبر هذا النموذج أو الاتصال بنا خلال أوقات العمل.' },
];

const workingHours = [
  { day: 'السبت - الأربعاء', hours: '9:00 ص - 5:00 م' },
  { day: 'الخميس', hours: '9:00 ص - 3:00 م' },
  { day: 'الجمعة', hours: 'مغلق' },
];

const Contact = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  });
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast('تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.', 'success');
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 text-brown-900">
      {/* Hero */}
      <div className="bg-gradient-to-r from-brown-600/90 to-brown-700/90 border-b border-brown-400/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-4">تواصل معنا</h1>
          <p className="text-xl text-pearl-100 max-w-3xl">نحن هنا لمساعدتك. تواصل معنا لأي استفسار أو طلب</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation="slideLeft" className="space-y-8">
            {/* Contact Info */}
            <Card className="p-8 bg-card-gradient border border-brown-300">
              <h2 className="text-2xl font-bold text-brown-900 mb-6">معلومات التواصل</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                    <MailIcon className="text-2xl text-brown-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-1">البريد الإلكتروني</h3>
                    <p className="text-brown-700">info@landx.sa</p>
                    <p className="text-brown-700">support@landx.sa</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                    <PhoneIcon className="text-2xl text-brown-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-1">الهاتف</h3>
                    <p className="text-brown-700" dir="ltr">+966 11 234 5678</p>
                    <p className="text-brown-700 text-sm">السبت - الخميس: 9 صباحاً - 5 مساءً</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                    <MapPinIcon className="text-2xl text-brown-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brown-900 mb-1">العنوان</h3>
                    <p className="text-brown-700">برج لاند إكس، طريق الملك فهد</p>
                    <p className="text-brown-700">الرياض 12345، المملكة العربية السعودية</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="p-8 bg-card-gradient border border-brown-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center border border-brown-400">
                  <ClockIcon className="text-brown-600" />
                </div>
                <h2 className="text-xl font-bold text-brown-900">أوقات العمل</h2>
              </div>
              <div className="space-y-3">
                {workingHours.map((wh) => (
                  <div key={wh.day} className="flex justify-between items-center py-2 border-b border-brown-200 last:border-0">
                    <span className="text-brown-800 font-medium">{wh.day}</span>
                    <span className={`font-semibold ${wh.hours === 'مغلق' ? 'text-red-600' : 'text-brown-700'}`}>{wh.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social */}
            <Card className="p-8 bg-gradient-to-r from-brown-200/10 to-brown-300/10 border border-brown-300">
              <h2 className="text-xl font-bold text-brown-900 mb-4">تابعنا</h2>
              <p className="text-brown-800 mb-6 text-sm">كن على اطلاع بآخر الفرص والأخبار عبر قنواتنا</p>
              <div className="flex gap-3">
                {['تويتر / X', 'لينكدإن', 'يوتيوب'].map((platform) => (
                  <button
                    key={platform}
                    onClick={() => alert('سيتم توجيهك لصفحة ' + platform)}
                    className="flex-1 py-2.5 px-3 bg-pearl-100/80 border border-brown-300 rounded-lg text-brown-800 text-sm font-medium hover:bg-brown-200/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <GlobeIcon className="w-4 h-4" />
                    {platform}
                  </button>
                ))}
              </div>
            </Card>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection animation="slideRight">
            <Card className="p-8 bg-card-gradient border border-brown-300 h-full">
              <h2 className="text-2xl font-bold text-brown-900 mb-6">أرسل لنا رسالة</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <MessageCircleIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-brown-900 mb-2">تم الإرسال بنجاح!</h3>
                  <p className="text-brown-700">شكراً لتواصلك معنا. سنرد عليك في أقرب وقت.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-brown-800 mb-2">الاسم الكامل</label>
                    <input name="name" value={formData.name} onChange={handleChange} required
                      placeholder="أدخل اسمك الكامل"
                      className="w-full px-3 py-2.5 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-800 mb-2">البريد الإلكتروني</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} required
                      placeholder="example@email.com"
                      className="w-full px-3 py-2.5 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-800 mb-2">رقم الهاتف</label>
                    <input name="phone" type="tel" value={formData.phone} onChange={handleChange}
                      placeholder="+966 XX XXX XXXX"
                      className="w-full px-3 py-2.5 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-800 mb-2">الموضوع</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} required
                      className="w-full px-3 py-2.5 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 text-sm">
                      <option value="">اختر الموضوع</option>
                      <option value="investment">استفسار استثماري</option>
                      <option value="technical">مشكلة تقنية</option>
                      <option value="partnership">شراكة</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-800 mb-2">الرسالة</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required rows={4}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-3 py-2.5 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 resize-none text-sm" />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    إرسال الرسالة
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>

        {/* Map Placeholder */}
        <AnimatedSection animation="fadeUp">
        <Card className="mb-16 overflow-hidden border border-brown-300">
          <div className="h-80 bg-gradient-to-br from-pearl-200 to-brown-200 relative flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="w-12 h-12 text-brown-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-brown-900 mb-1">الموقع على الخريطة</h3>
              <p className="text-brown-700 text-sm">الرياض، المملكة العربية السعودية</p>
              <button onClick={() => alert('سيتم فتح الخريطة في تبويب جديد')}
                className="mt-4 inline-flex items-center gap-2 text-brown-700 hover:text-brown-900 font-medium text-sm transition-colors">
                <ExternalLinkIcon className="w-4 h-4" />
                فتح في خرائط Google
              </button>
            </div>
          </div>
        </Card>
        </AnimatedSection>

        {/* FAQ */}
        <AnimatedSection animation="fadeUp" className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-brown-900 mb-8 text-center flex items-center justify-center gap-3">
            <HelpCircleIcon className="text-brown-600" />
            الأسئلة الشائعة
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i} className="border border-brown-300 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full text-right p-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-brown-900">{faq.q}</span>
                  <span className={`text-brown-600 transition-transform duration-300 ${expandedFaq === i ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {expandedFaq === i && (
                  <div className="px-5 pb-5 text-brown-700 text-sm leading-relaxed border-t border-brown-200 pt-4">
                    {faq.a}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="scaleIn" className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-brown-200/10 to-brown-300/10 border border-brown-300 inline-block w-full max-w-2xl">
            <h2 className="text-xl font-bold text-brown-900 mb-3">هل تريد الاستثمار؟</h2>
            <p className="text-brown-800 mb-6">تصفح الفرص الاستثمارية المتاحة والتحليل الاستثماري</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/opportunities">
                <Button size="lg">تصفح الفرص</Button>
              </Link>
              <Link to="/investment-analysis">
                <Button variant="outline" size="lg">التحليل الاستثماري</Button>
              </Link>
            </div>
          </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
