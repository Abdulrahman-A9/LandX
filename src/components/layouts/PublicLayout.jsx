import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { MenuIcon, XIcon, LogOutIcon, UserIcon, MoonIcon, SunIcon } from '../ui/Icons';

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/opportunities', label: 'الفرص' },
  { to: '/investor-journey', label: 'رحلة المستثمر' },
  { to: '/investment-analysis', label: 'التحليل الاستثماري' },
  { to: '/news', label: 'الأخبار' },
  { to: '/contact', label: 'تواصل معنا' }
];

const PublicLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navClass = ({ isActive }) =>
    [
      'rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
      isActive
        ? 'bg-brand/15 text-app-text border border-brand/20 shadow-sm'
        : 'text-app-text-muted hover:text-app-text hover:bg-app-surface-soft/60'
    ].join(' ');

  return (
    <div className="min-h-screen flex flex-col bg-app-bg text-app-text transition-colors duration-300">
      <header className="sticky top-0 z-50 border-b border-app-border bg-app-surface/90 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3">
            <Link to="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand/30 to-brand-deep/30 border border-brand/20 flex items-center justify-center shadow-lg shadow-brand/10 group-hover:scale-105 transition-transform duration-300">
                <span className="text-brand font-bold text-lg">ل</span>
              </div>
              <div className="leading-tight">
                <div className="text-xl font-bold bg-gradient-to-r from-brand to-brand-deep bg-clip-text text-transparent">LandX</div>
                <div className="text-xs text-app-text-soft">منصة استثمار الأراضي الموسمية</div>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={navClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              {isAuthenticated ? (
                <>
                  <div className="hidden md:flex items-center gap-2 rounded-full border border-app-border bg-app-surface-soft/70 px-3 py-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand to-brand-deep flex items-center justify-center text-app-text text-sm font-bold">
                      {user?.name?.charAt(0) || 'م'}
                    </div>
                    <div className="text-sm leading-tight">
                      <div className="font-semibold text-app-text">{user?.name}</div>
                      <div className="text-app-text-soft text-xs">مرحباً بك</div>
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="hidden sm:inline-flex items-center gap-2 rounded-full border border-app-border bg-app-surface-soft/70 px-4 py-2 text-sm font-medium text-app-text-muted hover:text-danger hover:bg-danger/10 transition-all duration-300"
                    title="تسجيل الخروج"
                  >
                    <LogOutIcon className="w-4 h-4" />
                    خروج
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="hidden sm:inline-flex items-center gap-2 rounded-full border border-app-border bg-app-surface-soft/70 px-4 py-2 text-sm font-medium text-app-text-muted hover:text-app-text hover:bg-app-surface transition-all duration-300">
                    تسجيل الدخول
                  </Link>
                  <Link to="/register" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-deep px-4 py-2 text-sm font-semibold text-app-text shadow-lg shadow-brand/15 hover:shadow-brand/25 hover:-translate-y-0.5 transition-all duration-300">
                    <UserIcon className="w-4 h-4" />
                    حساب جديد
                  </Link>
                </>
              )}

              <button
                onClick={toggleTheme}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-app-border bg-app-surface-soft/70 text-app-text-muted hover:text-app-text hover:bg-app-surface transition-all duration-300"
                title={isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}
                aria-label="Toggle theme"
              >
                {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
              </button>

              <button
                onClick={() => setMobileOpen((value) => !value)}
                className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-app-border bg-app-surface-soft/70 text-app-text-muted hover:text-app-text hover:bg-app-surface transition-all duration-300"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileOpen ? (
            <div className="lg:hidden pb-4">
              <div className="grid gap-2 rounded-3xl border border-app-border bg-app-surface/95 p-3 shadow-xl shadow-black/10">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      [
                        'rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300',
                        isActive
                          ? 'bg-brand/15 text-app-text border border-brand/20'
                          : 'text-app-text-muted hover:text-app-text hover:bg-app-surface-soft/70'
                      ].join(' ')
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}

                <div className="mt-2 grid gap-2 border-t border-app-border pt-3">
                  {isAuthenticated ? (
                    <>
                      <div className="rounded-2xl bg-app-surface-soft/70 px-4 py-3 text-sm text-app-text-muted">
                        مرحباً، <span className="font-semibold text-app-text">{user?.name}</span>
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setMobileOpen(false);
                        }}
                        className="rounded-2xl border border-danger/20 bg-danger/10 px-4 py-3 text-right text-sm font-medium text-danger transition-colors"
                      >
                        تسجيل الخروج
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-2xl bg-app-surface-soft/70 px-4 py-3 text-sm font-medium text-app-text-muted hover:text-app-text transition-colors"
                      >
                        تسجيل الدخول
                      </Link>
                      <Link
                        to="/register"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-2xl bg-gradient-to-r from-brand to-brand-deep px-4 py-3 text-sm font-semibold text-app-text shadow-lg shadow-brand/15"
                      >
                        إنشاء حساب
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-app-border bg-gradient-to-r from-brand/90 via-brand-deep to-brand-deep text-app-text">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10">
                  <span className="text-app-text font-bold text-lg">ل</span>
                </div>
                <span className="text-xl font-bold">LandX</span>
              </div>
              <p className="text-app-text-muted text-sm leading-7">
                منصة استثمارات الأراضي الموسمية - بوابتك لقرارات أوضح وشراكات أكثر موثوقية.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-app-text">روابط سريعة</h3>
              <ul className="space-y-2 text-app-text-muted text-sm">
                <li><Link to="/opportunities" className="hover:text-app-text transition-colors">الفرص الاستثمارية</Link></li>
                <li><Link to="/news" className="hover:text-app-text transition-colors">الأخبار</Link></li>
                <li><Link to="/about" className="hover:text-app-text transition-colors">عن المنصة</Link></li>
                <li><Link to="/contact" className="hover:text-app-text transition-colors">تواصل معنا</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-app-text">المناطق</h3>
              <ul className="space-y-2 text-app-text-muted text-sm">
                <li><Link to="/opportunities?region=hail" className="hover:text-app-text transition-colors">منطقة حائل</Link></li>
                <li><Link to="/opportunities?region=qassim" className="hover:text-app-text transition-colors">منطقة القصيم</Link></li>
                <li><Link to="/opportunities?region=tabuk" className="hover:text-app-text transition-colors">منطقة تبوك</Link></li>
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

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-app-text-muted text-sm">
            <p>© 2024 LandX. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
