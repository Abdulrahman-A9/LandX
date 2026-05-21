import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { ArrowRightIcon, LockIcon, MailIcon, ShieldCheckIcon } from '../../components/ui/Icons';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('يرجى تعبئة البريد الإلكتروني وكلمة المرور.');
      return;
    }

    const result = login(formData.email, formData.password);

    if (!result.success) {
      setError(result.message);
      addToast(result.message, 'error');
      return;
    }

    addToast(result.message, 'success');
    const destination =
      result.role === 'admin'
        ? '/admin/dashboard'
        : result.role === 'municipality'
          ? '/municipality/dashboard'
          : '/investor/dashboard';

    navigate(destination);
  };

  return (
    <div className="min-h-screen bg-app-bg px-4 py-10">
      <div className="landx-shell">
        <div className="grid min-h-[calc(100vh-5rem)] gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-8">
            <div className="landx-kicker">دخول آمن وواضح</div>
            <div>
              <h1 className="text-4xl font-black leading-tight text-app-text md:text-5xl">
                ادخل إلى حسابك واستكمل العمل من حيث توقفت.
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-9 text-app-text-muted">
                صفحة الدخول مبنية لتكون مباشرة: حقول أساسية، توجيه واضح، ومساعدة سريعة للوصول إلى لوحة العمل المناسبة.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                'مستثمر: investor@landx.sa / 123456',
                'بلدية: municipality@landx.sa / 123456',
                'إدارة: admin@landx.sa / 123456',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-app-border bg-app-surface-soft p-4 text-sm leading-7 text-app-text-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Card className="p-6 lg:p-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-app-text-muted hover:text-app-text">
              <ArrowRightIcon className="h-4 w-4" />
              العودة إلى الموقع
            </Link>

            <div className="mt-6">
              <h2 className="text-3xl font-black text-app-text">تسجيل الدخول</h2>
              <p className="mt-2 text-sm leading-7 text-app-text-muted">
                أدخل بياناتك للوصول إلى لوحة العمل المناسبة حسب دورك.
              </p>
            </div>

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
                <span>نسيت كلمة المرور؟</span>
                <span className="font-semibold text-app-text">تواصل مع الدعم حالياً</span>
              </div>

              <Button type="submit" size="lg" className="w-full">
                تسجيل الدخول
              </Button>
            </form>

            <div className="mt-6 rounded-2xl border border-app-border bg-app-surface-soft/60 p-4 text-sm leading-7 text-app-text-muted">
              <div className="flex items-center gap-2 font-semibold text-app-text">
                <ShieldCheckIcon className="h-4 w-4 text-brand" />
                ملاحظة
              </div>
              <p className="mt-2">
                بعد الدخول سيتم توجيهك تلقائياً إلى لوحة المستثمر أو البلدية أو الإدارة حسب الحساب المستخدم.
              </p>
            </div>

            <div className="mt-6 text-center text-sm text-app-text-muted">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="font-bold text-app-text hover:text-brand">
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
