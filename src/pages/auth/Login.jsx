import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Input from '../../components/ui/Input';

const Login = () => {
  const navigate = useNavigate();
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
    
    console.log('Login attempt:', formData);
    navigate('/investor/dashboard');
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
            تسجيل الدخول
          </h2>
          <p className="text-gray-600 mt-2">
            أدخل بياناتك للوصول إلى حسابك
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
              label="البريد الإلكتروني"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
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
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="mr-2 block text-sm text-gray-700">
                  تذكرني
                </label>
              </div>
              
              <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                نسيت كلمة المرور؟
              </a>
            </div>
            
            <Button type="submit" size="lg" className="w-full">
              تسجيل الدخول
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">
                إنشاء حساب جديد
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

export default Login;
