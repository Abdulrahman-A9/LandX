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
    <div className="min-h-screen bg-app-bg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full animate-fade-in-up">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-brand/30 to-brand-deep/30 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-brand font-bold text-2xl">ل</span>
            </div>
            <span className="text-3xl font-bold text-app-text">LandX</span>
          </Link>
          <h2 className="text-2xl font-bold text-app-text mb-2">إنشاء حساب جديد</h2>
          <p className="text-app-text-muted">انضم إلى منصة لاند إكس وابدأ رحلتك الاستثمارية</p>
        </div>

        <Card className="p-8 bg-card-gradient border border-app-border shadow-xl animate-scale-in">
          {error && (
            <div className="bg-danger/10 border border-danger/30 text-danger px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">الاسم الكامل</label>
              <div className="relative">
                <UserIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <input
                  name="name" value={formData.name} onChange={handleChange} required
                  placeholder="أدخل اسمك الكامل"
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand placeholder-app-text-soft text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">البريد الإلكتروني</label>
              <div className="relative">
                <MailIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <input
                  name="email" type="email" value={formData.email} onChange={handleChange} required
                  placeholder="example@email.com"
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand placeholder-app-text-soft text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">رقم الهاتف</label>
              <div className="relative">
                <PhoneIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <input
                  name="phone" type="tel" value={formData.phone} onChange={handleChange}
                  placeholder="+966 XX XXX XXXX"
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand placeholder-app-text-soft text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">نوع الحساب</label>
              <div className="relative">
                <BuildingIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <select
                  name="role" value={formData.role} onChange={handleChange}
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-sm appearance-none"
                >
                  {roleOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">كلمة المرور</label>
              <div className="relative">
                <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <input
                  name="password" type="password" value={formData.password} onChange={handleChange} required
                  placeholder="••••••••"
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand placeholder-app-text-soft text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-app-text-muted mb-2">تأكيد كلمة المرور</label>
              <div className="relative">
                <LockIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
                <input
                  name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required
                  placeholder="••••••••"
                  className="w-full pr-10 pl-4 py-3 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand placeholder-app-text-soft text-sm"
                />
              </div>
            </div>

            <label className="flex items-start gap-2 text-app-text-muted text-sm cursor-pointer pt-1">
              <input type="checkbox" required className="w-4 h-4 text-brand border-app-border rounded focus:ring-brand mt-0.5" />
              <span>
                أوافق على{' '}
                <button type="button" onClick={() => alert('الشروط والأحكام ستعرض هنا')} className="text-app-text font-bold hover:underline">
                  الشروط والأحكام
                </button>
                {' '}و{' '}
                <button type="button" onClick={() => alert('سياسة الخصوصية ستعرض هنا')} className="text-app-text font-bold hover:underline">
                  سياسة الخصوصية
                </button>
              </span>
            </label>

            <Button type="submit" size="lg" className="w-full">
              إنشاء الحساب
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-app-border text-center">
            <p className="text-app-text-muted text-sm">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-app-text hover:text-brand font-bold transition-colors">
                تسجيل الدخول
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

export default Register;
