import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { MailIcon, LockIcon } from '../../components/ui/Icons';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    const result = login(formData.email, formData.password);
    if (result.success) {
      addToast(result.message, 'success');
      const dashboard = result.role === 'admin' ? '/admin/dashboard' : result.role === 'municipality' ? '/municipality/dashboard' : '/investor/dashboard';
      navigate(dashboard);
    } else {
      setError(result.message);
      addToast(result.message, 'error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-app-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full animate-fade-in-up">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-brand/30 to-brand-deep/30 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-brand font-bold text-2xl">ل</span>
            </div>
            <span className="text-3xl font-bold text-app-text">LandX</span>
          </Link>
          <h2 className="text-2xl font-bold text-app-text mb-2">تسجيل الدخول</h2>
          <p className="text-app-text-muted">أدخل بياناتك للوصول إلى حسابك</p>
        </div>

        <Card className="p-8 bg-card-gradient border border-app-border shadow-xl animate-scale-in">
          {error && (
            <div className="bg-danger/10 border border-danger/30 text-danger px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <MailIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <input
                  name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="investor@landx.sa"
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand placeholder-app-text-soft text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">كلمة المرور</label>
              <div className="relative">
                <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <input
                  name="password" type="password" value={formData.password} onChange={handleChange} required
                  placeholder="123456"
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand placeholder-app-text-soft text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-app-text-muted cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-brand border-app-border rounded focus:ring-brand" />
                تذكرني
              </label>
              <button type="button" onClick={() => alert('سيتم إرسال رابط إعادة التعيين')}
                className="text-app-text-muted hover:text-app-text font-medium transition-colors">
                نسيت كلمة المرور؟
              </button>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3 text-lg font-bold">
              تسجيل الدخول
            </Button>
          </form>

          {/* Demo credentials helper */}
          <div className="mt-6 p-4 bg-app-surface-soft border border-app-border rounded-lg text-sm text-app-text-muted">
            <p className="font-semibold mb-2 text-app-text">بيانات تجريبية للدخول:</p>
            <div className="space-y-1">
              <p><span className="font-medium">مستثمر:</span> investor@landx.sa / 123456</p>
              <p><span className="font-medium">أمانة:</span> municipality@landx.sa / 123456</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-app-border text-center">
            <p className="text-app-text-muted text-sm">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-app-text hover:text-brand font-bold transition-colors">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-app-text-muted hover:text-app-text text-sm font-medium transition-colors">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
