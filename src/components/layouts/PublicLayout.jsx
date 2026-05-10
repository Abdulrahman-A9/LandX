import React from 'react';
import { Link } from 'react-router-dom';

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brown-50">
      <header className="bg-brown-gradient backdrop-blur border-b border-brown-200/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-brown-200 to-brown-300 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-brown-800 font-bold text-lg">ل</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-brown-700 to-brown-600 bg-clip-text text-transparent">LandX</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-brown-700 hover:text-brown-900 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                الرئيسية
              </Link>
              <Link to="/opportunities" className="text-brown-700 hover:text-brown-900 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                الأراضي
              </Link>
              <Link to="/opportunities" className="text-brown-700 hover:text-brown-900 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                الفرص
              </Link>
              <Link to="/investor-journey" className="text-brown-700 hover:text-brown-900 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                رحلة المستثمر
              </Link>
              <Link to="/contact" className="text-brown-700 hover:text-brown-900 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                الاستشارات
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              <div className="relative group">
                <button className="text-brown-600 hover:text-brown-800 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-brown-500 to-brown-600 rounded-full text-white text-xs flex items-center justify-center animate-pulse">6</span>
              </div>
              <Link to="/login" className="text-brown-700 hover:text-brown-900 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                الحساب
              </Link>
              <Link to="/municipality/dashboard" className="text-brown-700 hover:text-brown-900 font-medium transition-all duration-300 hover:translate-y-[-2px]">
                إدارة الأمانة
              </Link>
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-footer-gradient border-t border-brown-200/30 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pearl-200 to-pearl-300 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-brown-800 font-bold text-lg">ل</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pearl-100 to-pearl-200 bg-clip-text text-transparent">LandX</span>
              </div>
              <p className="text-pearl-100 text-sm">
                منصة استثمارات الأراضي الموسمية - بوابتك للاستثمار في القطاع الزراعي
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-pearl-100">روابط سريعة</h3>
              <ul className="space-y-2 text-pearl-200 text-sm">
                <li><Link to="/opportunities" className="hover:text-pearl-50 transition-all duration-300 hover:translate-x-1">الفرص الاستثمارية</Link></li>
                <li><Link to="/news" className="hover:text-pearl-50 transition-all duration-300 hover:translate-x-1">الأخبار</Link></li>
                <li><Link to="/about" className="hover:text-pearl-50 transition-all duration-300 hover:translate-x-1">عن المنصة</Link></li>
                <li><Link to="/contact" className="hover:text-pearl-50 transition-all duration-300 hover:translate-x-1">تواصل معنا</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-pearl-100">المناطق</h3>
              <ul className="space-y-2 text-pearl-200 text-sm">
                <li><Link to="/opportunities?region=hail" className="hover:text-pearl-50 transition-all duration-300 hover:translate-x-1">منطقة حائل</Link></li>
                <li><Link to="/opportunities?region=qassim" className="hover:text-pearl-50 transition-all duration-300 hover:translate-x-1">منطقة القصيم</Link></li>
                <li><Link to="/opportunities?region=tabuk" className="hover:text-pearl-50 transition-all duration-300 hover:translate-x-1">منطقة تبوك</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-pearl-100">تواصل معنا</h3>
              <ul className="space-y-2 text-pearl-200 text-sm">
                <li>info@landx.sa</li>
                <li>+966 XX XXX XXXX</li>
                <li>الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-brown-200/30 mt-8 pt-8 text-center text-pearl-200 text-sm">
            <p>© 2024 LandX. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
