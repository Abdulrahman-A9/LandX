import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { useToast } from '../../context/ToastContext';
import { UserIcon, MailIcon, LockIcon, PhoneIcon, BuildingIcon } from '../../components/ui/Icons';

const Register = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'investor',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const roleOptions = [
    { value: 'investor', label: 'مستثمر' },
    { value: 'municipality', label: 'بلدية / جهة حكومية' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('كلمة المرور وتأكيدها غير متطابقتين');
      return;
    }

    if (formData.password.length < 6) {
      setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
      return;
    }

    addToast('تم إنشاء الحساب بنجاح! يمكنك الآن تسجيل الدخول.', 'success');
    navigate('/login');
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
          <h2 className="text-2xl font-bold text-brown-900 dark:text-stone-100 mb-2">إنشاء حساب جديد</h2>
          <p className="text-brown-700 dark:text-stone-400">انضم إلى منصة لاند إكس وابدأ رحلتك الاستثمارية</p>
        </div>

        <Card className="p-8 bg-card-gradient border border-brown-300 dark:border-stone-600 shadow-xl animate-scale-in">
          {error && (
            <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">الاسم الكامل</label>
              <div className="relative">
                <UserIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <input
                  name="name" value={formData.name} onChange={handleChange} required
                  placeholder="أدخل اسمك الكامل"
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 placeholder-brown-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <MailIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <input
                  name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="example@email.com"
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 placeholder-brown-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">رقم الهاتف</label>
              <div className="relative">
                <PhoneIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <input
                  name="phone" type="tel" value={formData.phone} onChange={handleChange}
                  placeholder="+966 XX XXX XXXX"
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 placeholder-brown-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">نوع الحساب</label>
              <div className="relative">
                <BuildingIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <select
                  name="role" value={formData.role} onChange={handleChange}
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 text-sm appearance-none"
                >
                  {roleOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">كلمة المرور</label>
              <div className="relative">
                <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <input
                  name="password" type="password" value={formData.password} onChange={handleChange} required
                  placeholder="••••••••"
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 placeholder-brown-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brown-800 dark:text-stone-300 mb-2">تأكيد كلمة المرور</label>
              <div className="relative">
                <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-brown-500" />
                <input
                  name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required
                  placeholder="••••••••"
                  className="w-full pr-10 pl-4 py-3 bg-pearl-100/80 text-brown-900 dark:text-stone-100 border border-brown-300 dark:border-stone-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500 placeholder-brown-400 text-sm"
                />
              </div>
            </div>

            <label className="flex items-start gap-2 text-brown-700 dark:text-stone-400 text-sm cursor-pointer pt-1">
              <input type="checkbox" required className="w-4 h-4 text-brown-600 border-brown-300 dark:border-stone-600 rounded focus:ring-brown-500 mt-0.5" />
              <span>
                أوافق على{' '}
                <button type="button" onClick={() => alert('الشروط والأحكام ستعرض هنا')} className="text-brown-900 dark:text-stone-100 font-bold hover:underline">
                  الشروط والأحكام
                </button>
                {' '}و{' '}
                <button type="button" onClick={() => alert('سياسة الخصوصية ستعرض هنا')} className="text-brown-900 dark:text-stone-100 font-bold hover:underline">
                  سياسة الخصوصية
                </button>
              </span>
            </label>

            <Button type="submit" size="lg" className="w-full">
              إنشاء الحساب
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-brown-200 text-center">
            <p className="text-brown-700 dark:text-stone-400 text-sm">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-brown-900 dark:text-stone-100 hover:text-brown-700 dark:text-stone-400 font-bold transition-colors">
                تسجيل الدخول
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

export default Register;
