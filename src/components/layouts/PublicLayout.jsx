import React from 'react';
import { Link } from 'react-router-dom';

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <header className="bg-dark-900/80 backdrop-blur border-b border-dark-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ل</span>
              </div>
              <span className="text-xl font-bold text-white">لاند إكس</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-dark-400 hover:text-primary-400 font-medium transition-colors">
                الرئيسية
              </Link>
              <Link to="/opportunities" className="text-dark-400 hover:text-primary-400 font-medium transition-colors">
                الأراضي
              </Link>
              <Link to="/opportunities" className="text-dark-400 hover:text-primary-400 font-medium transition-colors">
                الفرص
              </Link>
              <Link to="/about" className="text-dark-400 hover:text-primary-400 font-medium transition-colors">
                رحلة المستثمر
              </Link>
              <Link to="/contact" className="text-dark-400 hover:text-primary-400 font-medium transition-colors">
                الاستشارات
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <div className="relative">
                <button className="text-dark-400 hover:text-primary-400 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary-500 rounded-full text-white text-xs flex items-center justify-center">6</span>
              </div>
              <Link to="/login" className="text-dark-400 hover:text-primary-400 font-medium transition-colors">
                الحساب
              </Link>
              <Link to="/municipality/dashboard" className="text-dark-400 hover:text-primary-400 font-medium transition-colors">
                إدارة الأمانة
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-dark-900 border-t border-dark-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ل</span>
                </div>
                <span className="text-xl font-bold">لاند إكس</span>
              </div>
              <p className="text-dark-400 text-sm">
                منصة استثمارات الأراضي الموسمية - بوابتك للاستثمار في القطاع الزراعي
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><Link to="/opportunities" className="hover:text-primary-400 transition-colors">الفرص الاستثمارية</Link></li>
                <li><Link to="/news" className="hover:text-primary-400 transition-colors">الأخبار</Link></li>
                <li><Link to="/about" className="hover:text-primary-400 transition-colors">عن المنصة</Link></li>
                <li><Link to="/contact" className="hover:text-primary-400 transition-colors">تواصل معنا</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">المناطق</h3>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li><Link to="/opportunities?region=hail" className="hover:text-primary-400 transition-colors">منطقة حائل</Link></li>
                <li><Link to="/opportunities?region=qassim" className="hover:text-primary-400 transition-colors">منطقة القصيم</Link></li>
                <li><Link to="/opportunities?region=tabuk" className="hover:text-primary-400 transition-colors">منطقة تبوك</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 text-dark-400 text-sm">
                <li>info@landx.sa</li>
                <li>+966 XX XXX XXXX</li>
                <li>الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-dark-800 mt-8 pt-8 text-center text-dark-400 text-sm">
            <p>© 2024 لاند إكس. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
