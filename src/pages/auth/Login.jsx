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
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 dark:from-[#1c1917] dark:via-[#292524] dark:to-[#44403c] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full animate-fade-in-up">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-brown-200 to-brown-300 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-brown-800 dark:text-stone-300 font-bold text-2xl">ل</span>
            </div>
            <span className="text-3xl font-bold text-brown-900 dark:text-stone-100">LandX</span>
          </Link>
          <h2 className="text-2xl font-bold text-brown-900 dark:text-stone-100 mb-2">تسجيل الدخول</h2>
          <p className="text-brown-700 dark:text-stone-400">أدخل بياناتك للوصول إلى حسابك</p>
        </div>

        <Card className="p-8 bg-card-gradient border border-brown-300 dark:border-stone-600 shadow-xl animate-scale-in">
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <MailIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <input
                  name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="investor@landx.sa"
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 placeholder-brown-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">كلمة المرور</label>
              <div className="relative">
                <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <input
                  name="password" type="password" value={formData.password} onChange={handleChange} required
                  placeholder="123456"
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 placeholder-brown-400 text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-brown-700 dark:text-stone-400 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-brown-600 border-brown-300 dark:border-stone-600 rounded focus:ring-brown-500" />
                تذكرني
              </label>
              <button type="button" onClick={() => alert('سيتم إرسال رابط إعادة التعيين')}
                className="text-brown-700 dark:text-stone-300 hover:text-brown-900 dark:hover:text-stone-100 font-medium transition-colors">
                نسيت كلمة المرور؟
              </button>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3 text-lg font-bold">
              تسجيل الدخول
            </Button>
          </form>

          {/* Demo credentials helper */}
          <div className="mt-6 p-4 bg-pearl-100/60 dark:bg-stone-800/60 border border-brown-300 dark:border-stone-600 rounded-lg text-sm text-brown-800 dark:text-stone-300">
            <p className="font-semibold mb-2 text-brown-900 dark:text-stone-100">بيانات تجريبية للدخول:</p>
            <div className="space-y-1">
              <p><span className="font-medium">مستثمر:</span> investor@landx.sa / 123456</p>
              <p><span className="font-medium">أمانة:</span> municipality@landx.sa / 123456</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-brown-200 text-center">
            <p className="text-brown-700 dark:text-stone-400 text-sm">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-brown-900 dark:text-stone-200 hover:text-brown-700 dark:hover:text-stone-400 font-bold transition-colors">
                إنشاء حساب جديد
              </Link>
            </p>
          </div>
        </Card>

        <div className="mt-6 text-center">
          <Link to="/" className="text-brown-600 hover:text-brown-800 dark:text-stone-300 text-sm font-medium transition-colors">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
