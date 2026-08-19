import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import BrandLogo from '../../components/shared/BrandLogo';
import { ArrowRightIcon, LockIcon, MailIcon, ShieldCheckIcon } from '../../components/ui/Icons';
import { buildAuthRoute, resolvePostAuthRoute, serviceIntentCopy } from '../../lib/flow';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const search = new URLSearchParams(location.search);
  const next = search.get('next');
  const intent = search.get('intent') || 'default';
  const intentCopy = useMemo(() => serviceIntentCopy[intent] || serviceIntentCopy.default, [intent]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('يرجى تعبئة البريد الإلكتروني وكلمة المرور.');
      return;
    }

    setSubmitting(true);
    const result = await login(formData.email, formData.password);
    setSubmitting(false);

    if (!result.success) {
      setError(result.message);
      addToast(result.message, 'error');
      return;
    }

    addToast(result.message, 'success');
    navigate(resolvePostAuthRoute({ role: result.role, next }));
  };

  return (
    <div className="min-h-screen bg-app-bg px-4 py-10">
      <div className="landx-shell">
        <div className="grid min-h-[calc(100vh-5rem)] gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <BrandLogo imageClassName="h-20 w-auto" />
            <div className="landx-kicker">{intentCopy.badge}</div>
            <div>
              <h1 className="text-4xl font-black leading-tight text-app-text md:text-5xl">
                {intentCopy.title}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-9 text-app-text-muted">
                {intentCopy.description}
              </p>
            </div>

          </div>

          <Card className="p-6 lg:p-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-app-text-muted hover:text-app-text">
              <ArrowRightIcon className="h-4 w-4" />
              العودة إلى الموقع
            </Link>

            <div className="mt-6">
              <h2 className="text-3xl font-black text-app-text">مرحبًا بعودتك</h2>
              <p className="mt-2 text-sm leading-7 text-app-text-muted">
                سجّل الدخول إلى حسابك للوصول إلى لوحة العمل المناسبة لك واستئناف رحلتك بسهولة.
              </p>
            </div>

            {next ? (
              <div className="mt-5 rounded-2xl border border-brand/20 bg-brand/10 px-4 py-3 text-sm text-app-text-muted">
                بعد الدخول سيتم تحويلك مباشرة إلى الإجراء الذي بدأت منه.
              </div>
            ) : null}

            {error ? (
              <div className="mt-5 rounded-2xl border border-danger/30 bg-danger/10 px-4 py-3 text-sm text-danger">
                {error}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">البريد الإلكتروني</label>
                <div className="relative">
                  <MailIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                  <input
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    type="email"
                    required
                    className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    placeholder="investor@landx.sa"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-app-text-muted">كلمة المرور</label>
                <div className="relative">
                  <LockIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                  <input
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    type="password"
                    required
                    className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    placeholder="123456"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text-muted">
                <span>هل تحتاج مساعدة؟</span>
                <span className="font-semibold text-app-text">تواصل معنا</span>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                {submitting ? 'جاري التحقق...' : 'تسجيل الدخول'}
              </Button>
            </form>

            <div className="mt-6 rounded-2xl border border-app-border bg-app-surface-soft/60 p-4 text-sm leading-7 text-app-text-muted">
              <div className="flex items-center gap-2 font-semibold text-app-text">
                <ShieldCheckIcon className="h-4 w-4 text-brand" />
                ملاحظة
              </div>
              <p className="mt-2">
                فور تسجيل الدخول، سيتم توجيهك تلقائيًا إلى مساحة العمل المناسبة لحسابك في LandX.
              </p>
            </div>

            <div className="mt-6 text-center text-sm text-app-text-muted">
              ليس لديك حساب؟{' '}
              <Link to={buildAuthRoute('/register', { next, intent })} className="font-bold text-app-text hover:text-brand">
                إنشاء حساب جديد
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
