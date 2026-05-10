import React from 'react';
import { Link } from 'react-router-dom';

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ل</span>
              </div>
              <span className="text-xl font-bold text-gray-900">لاند إكس</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium">
                الرئيسية
              </Link>
              <Link to="/opportunities" className="text-gray-700 hover:text-primary-600 font-medium">
                الفرص الاستثمارية
              </Link>
              <Link to="/news" className="text-gray-700 hover:text-primary-600 font-medium">
                الأخبار
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary-600 font-medium">
                عن المنصة
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary-600 font-medium">
                تواصل معنا
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <Link to="/login" className="text-gray-700 hover:text-primary-600 font-medium">
                تسجيل الدخول
              </Link>
              <Link to="/register" className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-medium">
                إنشاء حساب
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ل</span>
                </div>
                <span className="text-xl font-bold">لاند إكس</span>
              </div>
              <p className="text-gray-400 text-sm">
                منصة استثمارات الأراضي الموسمية - بوابتك للاستثمار في القطاع الزراعي
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/opportunities" className="hover:text-white">الفرص الاستثمارية</Link></li>
                <li><Link to="/news" className="hover:text-white">الأخبار وال announcements</Link></li>
                <li><Link to="/about" className="hover:text-white">عن المنصة</Link></li>
                <li><Link to="/contact" className="hover:text-white">تواصل معنا</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">المناطق</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link to="/opportunities?region=hail" className="hover:text-white">منطقة حائل</Link></li>
                <li><Link to="/opportunities?region=qassim" className="hover:text-white">منطقة القصيم</Link></li>
                <li><Link to="/opportunities?region=tabuk" className="hover:text-white">منطقة تبوك</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>info@landx.sa</li>
                <li>+966 XX XXX XXXX</li>
                <li>الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 لاند إكس. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
