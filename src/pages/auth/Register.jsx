import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';

const Register = () => {
  const navigate = useNavigate();
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
    
    console.log('Registration attempt:', formData);
    navigate('/login');
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">ل</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">لاند إكس</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">
            إنشاء حساب جديد
          </h2>
          <p className="text-gray-600 mt-2">
            انضم إلى منصة لاند إكس وابدأ رحلتك الاستثمارية
          </p>
        </div>
        
        <Card className="p-8">
          {error && (
            <div className="bg-accent-50 border border-accent-200 text-accent-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="الاسم الكامل"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="أدخل اسمك الكامل"
            />
            
            <Input
              label="البريد الإلكتروني"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
            />
            
            <Input
              label="رقم الهاتف"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+966 XX XXX XXXX"
            />
            
            <Select
              label="نوع الحساب"
              name="role"
              options={roleOptions}
              value={formData.role}
              onChange={handleChange}
            />
            
            <Input
              label="كلمة المرور"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
            
            <Input
              label="تأكيد كلمة المرور"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="••••••••"
            />
            
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="terms" className="mr-2 block text-sm text-gray-700">
                أوافق على{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  الشروط والأحكام
                </a>
                {' '}
                و{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  سياسة الخصوصية
                </a>
              </label>
            </div>
            
            <Button type="submit" size="lg" className="w-full">
              إنشاء الحساب
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </Card>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
