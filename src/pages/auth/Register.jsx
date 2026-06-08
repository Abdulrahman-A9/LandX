import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { authApi } from '../../lib/api';
import { buildAuthRoute, resolvePostAuthRoute, serviceIntentCopy } from '../../lib/flow';
import {
  ArrowRightIcon,
  BuildingIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  ShieldCheckIcon,
  UserIcon,
} from '../../components/ui/Icons';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { addToast } = useToast();
  const search = new URLSearchParams(location.search);
  const next = search.get('next');
  const intent = search.get('intent') || 'default';
  const intentCopy = useMemo(() => serviceIntentCopy[intent] || serviceIntentCopy.default, [intent]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'investor',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('يرجى تعبئة الحقول الأساسية لإكمال التسجيل.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('كلمتا المرور غير متطابقتين.');
      return;
    }

    if (formData.password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل.');
      return;
    }

    try {
      setSubmitting(true);
      await authApi.register({
        full_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: formData.role,
        password: formData.password,
      });

      const authResult = await login(formData.email, formData.password);
      if (!authResult.success) {
        throw new Error(authResult.message || 'تم إنشاء الحساب لكن تعذر تسجيل الدخول التلقائي.');
      }

      addToast('تم إنشاء الحساب وتسجيل الدخول بنجاح.', 'success');
      navigate(resolvePostAuthRoute({ role: authResult.role, next }));
    } catch (err) {
      setError(err.message || 'تعذر إنشاء الحساب.');
      addToast(err.message || 'تعذر إنشاء الحساب.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-app-bg px-4 py-10">
      <div className="landx-shell">
        <div className="grid min-h-[calc(100vh-5rem)] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Card className="order-2 p-6 lg:order-1 lg:p-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-app-text-muted hover:text-app-text">
              <ArrowRightIcon className="h-4 w-4" />
              العودة إلى الموقع
            </Link>

            <div className="mt-6">
              <h2 className="text-3xl font-black text-app-text">إنشاء حساب جديد</h2>
              <p className="mt-2 text-sm leading-7 text-app-text-muted">
                التسجيل هنا مرتبط مباشرة بالباك اند ويضيف الحساب فعليًا إلى قاعدة البيانات.
              </p>
            </div>

            {next ? (
              <div className="mt-5 rounded-2xl border border-brand/20 bg-brand/10 px-4 py-3 text-sm text-app-text-muted">
                بعد التسجيل سندخلك مباشرة وننقلك إلى الإجراء الذي بدأت منه.
              </div>
            ) : null}

            {error ? (
              <div className="mt-5 rounded-2xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">الاسم الكامل</label>
                  <div className="relative">
                    <UserIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                    <input
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      required
                      placeholder="أدخل الاسم الكامل"
                      className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">البريد الإلكتروني</label>
                  <div className="relative">
                    <MailIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                    <input
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      required
                      type="email"
                      placeholder="name@email.com"
                      className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">رقم الجوال</label>
                  <div className="relative">
                    <PhoneIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                    <input
                      value={formData.phone}
                      onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                      placeholder="+966 XX XXX XXXX"
                      className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">نوع الحساب</label>
                  <div className="relative">
                    <BuildingIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData((prev) => ({ ...prev, role: e.target.value }))}
                      className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text"
                    >
                      <option value="investor">مستثمر</option>
                      <option value="municipality">بلدية / جهة معلنة</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">كلمة المرور</label>
                  <div className="relative">
                    <LockIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                    <input
                      value={formData.password}
                      onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                      required
                      type="password"
                      placeholder="6 أحرف على الأقل"
                      className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">تأكيد كلمة المرور</label>
                  <div className="relative">
                    <LockIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                    <input
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }))}
                      required
                      type="password"
                      placeholder="أعد كتابة كلمة المرور"
                      className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-app-border bg-app-surface-soft/60 p-4 text-sm leading-7 text-app-text-muted">
                بالتسجيل فأنت تضيف حسابًا فعليًا داخل النظام ويمكن عرضه مباشرة لاحقًا من لوحة الإدارة أو من قاعدة البيانات.
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? 'جاري إنشاء الحساب...' : 'إنشاء الحساب'}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-app-text-muted">
              لديك حساب بالفعل؟{' '}
              <Link to={buildAuthRoute('/login', { next, intent })} className="font-bold text-app-text hover:text-brand">
                تسجيل الدخول
              </Link>
            </div>
          </Card>

          <div className="order-1 space-y-8 lg:order-2">
            <div className="landx-kicker">{intentCopy.badge}</div>
            <div>
              <h1 className="text-4xl font-black leading-tight text-app-text md:text-5xl">
                أنشئ حسابك وادخل مباشرة إلى الخدمة التي تريدها.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-9 text-app-text-muted">
                {intentCopy.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                'للمستثمر: استكشاف الفرص وفهم الجدوى.',
                'للبلدية: تنظيم النشر وإدارة الطلبات.',
                'للجنة: بيانات فعلية يمكن عرضها من القاعدة.',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-app-border bg-app-surface-soft p-4 text-sm leading-7 text-app-text-muted">
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-app-border bg-card-gradient p-6">
              <div className="flex items-center gap-2 text-app-text">
                <ShieldCheckIcon className="h-5 w-5 text-brand" />
                <span className="font-semibold">ما الذي يحدث بعد التسجيل؟</span>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-7 text-app-text-muted">
                <p>1. يُنشأ الحساب داخل قاعدة البيانات مباشرة.</p>
                <p>2. يتم تسجيل الدخول تلقائيًا بالحساب الجديد.</p>
                <p>3. يتم نقلك إلى الصفحة التالية المناسبة بدل إيقافك عند شاشة الدخول.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
