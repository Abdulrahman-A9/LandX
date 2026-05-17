import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { MenuIcon, XIcon, LogOutIcon, UserIcon, MoonIcon, SunIcon } from '../ui/Icons';

const PublicLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'الرئيسية' },
    { to: '/opportunities', label: 'الفرص' },
    { to: '/investor-journey', label: 'رحلة المستثمر' },
    { to: '/investment-analysis', label: 'التحليل الاستثماري' },
    { to: '/news', label: 'الأخبار' },
    { to: '/contact', label: 'تواصل معنا' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-app-bg transition-colors duration-300">
      <header className="bg-app-surface backdrop-blur border-b border-app-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-brand/30 to-brand-deep/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                <span className="text-brand font-bold text-lg">ل</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">LandX</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link key={link.to} to={link.to} className="text-app-text-muted hover:text-app-text font-medium transition-all duration-300 hover:translate-y-[-2px]">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <>
                  <div className="hidden sm:flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-brand to-brand-deep rounded-full flex items-center justify-center text-app-text text-sm font-bold">
                      {user?.name?.charAt(0) || 'م'}
                    </div>
                    <span className="text-app-text font-medium text-sm">{user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="hidden sm:flex items-center gap-1 text-app-text-muted hover:text-danger font-medium transition-colors text-sm"
                    title="تسجيل الخروج"
                  >
                    <LogOutIcon className="w-4 h-4" />
                    <span>خروج</span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hidden sm:block text-app-text-muted hover:text-app-text font-medium transition-all duration-300 hover:translate-y-[-2px]">
                    تسجيل الدخول
                  </Link>
                  <Link to="/register" className="hidden sm:inline-flex items-center gap-1 bg-gradient-to-r from-brand to-brand-deep text-app-text px-4 py-1.5 rounded-lg font-medium text-sm hover:from-brand-deep hover:to-brand transition-all">
                    <UserIcon className="w-4 h-4" />
                    حساب جديد
                  </Link>
                </>
              )}

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-app-text-muted hover:bg-app-surface transition-colors"
                title={isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>

              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden text-app-text-muted hover:text-app-text p-1"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-app-surface border-t border-app-border animate-fade-in">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-app-text-muted hover:bg-app-surface-soft font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-app-border pt-2 mt-2 flex flex-col gap-1">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-app-text-muted font-semibold text-sm">
                      مرحباً، {user?.name}
                    </div>
                    <button
                      onClick={() => { handleLogout(); setMobileOpen(false); }}
                      className="block text-right px-3 py-2.5 rounded-lg text-danger hover:bg-danger/10 font-medium transition-colors"
                    >
                      تسجيل الخروج
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-app-text-muted hover:bg-app-surface-soft font-medium transition-colors">
                      تسجيل الدخول
                    </Link>
                    <Link to="/register" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 rounded-lg text-app-text-muted hover:bg-app-surface-soft font-medium transition-colors">
                      إنشاء حساب
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-gradient-to-r from-brand to-brand-deep border-t border-app-border text-app-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-brand/30 to-brand-deep/30 rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-brand font-bold text-lg">ل</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-brand/50 to-brand-deep/50 bg-clip-text text-transparent">LandX</span>
              </div>
              <p className="text-app-text-muted text-sm">
                منصة استثمارات الأراضي الموسمية - بوابتك للاستثمار في القطاع الزراعي
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-app-text">روابط سريعة</h3>
              <ul className="space-y-2 text-app-text-muted text-sm">
                <li><Link to="/opportunities" className="hover:text-app-text transition-all duration-300 hover:translate-x-1">الفرص الاستثمارية</Link></li>
                <li><Link to="/news" className="hover:text-app-text transition-all duration-300 hover:translate-x-1">الأخبار</Link></li>
                <li><Link to="/about" className="hover:text-app-text transition-all duration-300 hover:translate-x-1">عن المنصة</Link></li>
                <li><Link to="/contact" className="hover:text-app-text transition-all duration-300 hover:translate-x-1">تواصل معنا</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-app-text">المناطق</h3>
              <ul className="space-y-2 text-app-text-muted text-sm">
                <li><Link to="/opportunities?region=hail" className="hover:text-app-text transition-all duration-300 hover:translate-x-1">منطقة حائل</Link></li>
                <li><Link to="/opportunities?region=qassim" className="hover:text-app-text transition-all duration-300 hover:translate-x-1">منطقة القصيم</Link></li>
                <li><Link to="/opportunities?region=tabuk" className="hover:text-app-text transition-all duration-300 hover:translate-x-1">منطقة تبوك</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-app-text">تواصل معنا</h3>
              <ul className="space-y-2 text-app-text-muted text-sm">
                <li>info@landx.sa</li>
                <li>+966 XX XXX XXXX</li>
                <li>الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-app-border mt-8 pt-8 text-center text-app-text-muted text-sm">
            <p> 2024 LandX. </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
