import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/shared/AnimatedSection';
import PageHero from '../../components/shared/PageHero';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  MessageCircleIcon,
  PhoneIcon,
} from '../../components/ui/Icons';

const workingHours = [
  { day: 'الأحد - الأربعاء', hours: '9:00 ص - 5:00 م' },
  { day: 'الخميس', hours: '9:00 ص - 3:00 م' },
  { day: 'الجمعة - السبت', hours: 'مغلق' },
];

const Contact = () => {
  const { addToast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    addToast('تم إرسال رسالتك بنجاح. سنعود إليك خلال وقت العمل.', 'success');
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 2500);
  };

  return (
    <div>
      <PageHero
        eyebrow="تواصل مع LandX"
        title="لديك استفسار أو فرصة أو مقترح شراكة؟ نحن نسمعك."
        description="أرسل تفاصيل طلبك وسيتواصل معك الفريق لمساعدتك في الوصول إلى الخدمة أو الشريك المناسب."
      />

      <section className="py-12 lg:py-16">
        <div className="landx-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <AnimatedSection>
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-app-text">قنوات التواصل</h2>
                <div className="mt-6 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                      <MailIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-app-text">البريد الإلكتروني</div>
                      <div className="mt-1 text-sm text-app-text-muted">info@landx.sa</div>
                      <div className="text-sm text-app-text-muted">support@landx.sa</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                      <PhoneIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-app-text">الهاتف</div>
                      <div className="mt-1 text-sm text-app-text-muted" dir="ltr">+966 11 234 5678</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/15 bg-[#fff8f2] text-brand">
                      <MapPinIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-app-text">الموقع</div>
                      <div className="mt-1 text-sm leading-7 text-app-text-muted">
                        الرياض، المملكة العربية السعودية
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <Card className="p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10 text-brand">
                    <ClockIcon className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-app-text">أوقات العمل</h2>
                </div>
                <div className="mt-6 space-y-3">
                  {workingHours.map((item) => (
                    <div key={item.day} className="flex items-center justify-between rounded-2xl border border-[#ead9c7] bg-white/55 p-4">
                      <span className="font-semibold text-app-text">{item.day}</span>
                      <span className={`text-sm ${item.hours === 'مغلق' ? 'text-danger' : 'text-app-text-muted'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <Card className="p-6 lg:p-7">
              <h2 className="text-2xl font-bold text-app-text">أرسل رسالة</h2>
              <p className="mt-2 text-sm leading-7 text-app-text-muted">
                كلما كانت الرسالة أوضح، كان الرد أسرع وأكثر دقة.
              </p>

              {submitted ? (
                <div className="py-16 text-center">
                  <MessageCircleIcon className="mx-auto h-12 w-12 text-success" />
                  <h3 className="mt-4 text-xl font-bold text-app-text">تم إرسال الرسالة</h3>
                  <p className="mt-2 text-sm leading-7 text-app-text-muted">
                    سيقوم الفريق بمراجعة رسالتك والرد عليك خلال وقت العمل.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <input
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    required
                    placeholder="الاسم الكامل"
                    className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <input
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      type="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                    <input
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="رقم الجوال"
                      className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                  </div>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData((prev) => ({ ...prev, subject: e.target.value }))}
                    required
                    className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text"
                  >
                    <option value="">اختر نوع الرسالة</option>
                    <option value="investment">استفسار استثماري</option>
                    <option value="partnership">شراكة أو تعاون</option>
                    <option value="technical">مساعدة في استخدام المنصة</option>
                    <option value="other">أخرى</option>
                  </select>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    required
                    rows={6}
                    placeholder="اشرح احتياجك أو سؤالك بشكل مختصر"
                    className="w-full resize-none rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                  />
                  <Button type="submit" size="lg" className="w-full">
                    إرسال الرسالة
                  </Button>
                </form>
              )}
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-16 lg:pb-20">
        <div className="landx-shell">
          <Card className="p-8 text-center">
            <h2 className="text-2xl font-black text-app-text">تريد البدء بنفسك أولاً؟</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-8 text-app-text-muted">
              يمكنك استعراض الفرص أو استخدام أداة التحليل قبل التواصل، ثم العودة إلينا عند الحاجة.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/opportunities" className="rounded-2xl bg-gradient-to-r from-[#8f4f2d] via-[#aa653c] to-[#c38256] px-5 py-3 text-sm font-semibold text-[#fff8f0]">
                تصفح الفرص
              </Link>
              <Link to="/investment-analysis" className="rounded-2xl border border-[#dfc4ac] bg-white/60 px-5 py-3 text-sm font-semibold text-app-text">
                ابدأ التحليل
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
