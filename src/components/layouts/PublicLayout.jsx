import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import BrandLogo from '../shared/BrandLogo';
import {
  ArrowRightIcon,
  BuildingIcon,
  LogOutIcon,
  MenuIcon,
  MessageCircleIcon,
  SearchIcon,
  TargetIcon,
  UserIcon,
  XIcon,
} from '../ui/Icons';

const navLinks = [
  { to: '/', label: 'الرئيسية' },
  { to: '/opportunities', label: 'الفرص' },
  { to: '/investment-analysis', label: 'تحليل الفكرة' },
  { to: '/investor-journey', label: 'كيف تستفيد من LandX' },
];

const quickStats = [
  { label: 'فرص منشورة', value: '120+' },
  { label: 'بلديات شريكة', value: '15' },
  { label: 'مؤشر وضوح القرار', value: '72%' },
];

const roleHome = {
  investor: '/investor/dashboard',
  municipality: '/municipality/dashboard',
  admin: '/admin/dashboard',
};

const PublicLayout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const closeMobileMenu = () => setMobileOpen(false);

  const navClass = ({ isActive }) =>
    [
      'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300',
      isActive
        ? 'bg-brand/15 text-app-text shadow-[0_8px_20px_rgba(0,0,0,0.12)]'
        : 'text-app-text-muted hover:bg-app-surface-soft hover:text-app-text',
    ].join(' ');

  return (
    <div className="relative min-h-screen overflow-hidden bg-app-bg text-app-text">
      <div className="landx-orbit right-[6%] top-28 h-48 w-48" />
      <div className="landx-orbit left-[8%] top-[22rem] h-32 w-32 [animation-delay:1.8s]" />
      <div className="landx-orbit bottom-40 right-[14%] h-56 w-56 [animation-delay:3.2s]" />
      <div className="landx-line left-[8%] top-40 w-72 rotate-[12deg]" />
      <div className="landx-line right-[6%] top-[30rem] w-80 -rotate-[10deg] [animation-delay:2s]" />

      <div className="sticky top-0 z-50 border-b border-app-border/70 bg-white/55 backdrop-blur-2xl">
        <header className="landx-shell">
          <div className="flex items-center justify-between gap-4 py-4">
            <Link to="/" className="flex items-center gap-3">
              <BrandLogo imageClassName="h-12 w-auto" />
              <div className="hidden text-sm text-app-text-soft sm:block">فرص استثمارية أوضح، وقرارات أكثر ثقة</div>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex">
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={navClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              {isAuthenticated ? (
                <>
                  <Link
                    to={roleHome[user?.role] || '/investor/dashboard'}
                    className="inline-flex items-center gap-2 rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm font-semibold text-app-text hover:border-brand/30 hover:bg-app-surface"
                  >
                    <BuildingIcon className="h-4 w-4" />
                    لوحة التحكم
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="inline-flex items-center gap-2 rounded-full border border-danger/20 bg-danger/10 px-4 py-2 text-sm font-semibold text-danger transition-colors hover:bg-danger/15"
                  >
                    <LogOutIcon className="h-4 w-4" />
                    تسجيل الخروج
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="inline-flex items-center gap-2 rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm font-semibold text-app-text hover:border-brand/30 hover:bg-app-surface"
                  >
                    دخول
                  </Link>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand to-brand-deep px-4 py-2 text-sm font-semibold text-app-text shadow-lg shadow-brand/20 hover:-translate-y-0.5"
                  >
                    ابدأ الآن
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </>
              )}
            </div>

            <button
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-app-border bg-app-surface-soft text-app-text xl:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="pb-4 xl:hidden">
              <div className="landx-panel rounded-[1.75rem] p-3">
                <div className="grid gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={closeMobileMenu}
                      className={({ isActive }) =>
                        [
                          'rounded-2xl px-4 py-3 text-sm font-semibold transition-colors',
                          isActive
                            ? 'bg-brand/15 text-app-text'
                            : 'text-app-text-muted hover:bg-app-surface-soft hover:text-app-text',
                        ].join(' ')
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>

                <div className="mt-3 grid gap-2 border-t border-app-border/70 pt-3">
                  {isAuthenticated ? (
                    <>
                      <div className="rounded-2xl bg-app-surface-soft px-4 py-3 text-sm text-app-text-muted">
                        مرحبًا، <span className="font-semibold text-app-text">{user?.name}</span>
                      </div>
                      <Link
                        to={roleHome[user?.role] || '/investor/dashboard'}
                        onClick={closeMobileMenu}
                        className="rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm font-semibold text-app-text"
                      >
                        الذهاب إلى لوحة التحكم
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          closeMobileMenu();
                        }}
                        className="rounded-2xl border border-danger/20 bg-danger/10 px-4 py-3 text-right text-sm font-semibold text-danger"
                      >
                        تسجيل الخروج
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        onClick={closeMobileMenu}
                        className="rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm font-semibold text-app-text"
                      >
                        تسجيل الدخول
                      </Link>
                      <Link
                        to="/register"
                        onClick={closeMobileMenu}
                        className="rounded-2xl bg-gradient-to-r from-brand to-brand-deep px-4 py-3 text-sm font-semibold text-app-text"
                      >
                        إنشاء حساب
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </header>
      </div>

      <main>{children}</main>

      <footer className="relative mt-20 overflow-hidden border-t border-app-border/70 bg-[linear-gradient(180deg,rgba(242,228,212,0.74),rgba(227,206,185,0.96))]">
        <div className="landx-orbit bottom-10 left-[8%] h-40 w-40" />
        <div className="landx-line right-[12%] top-24 w-72 -rotate-[8deg]" />
        <div className="landx-shell py-14">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_1fr]">
            <div className="space-y-5">
              <div className="space-y-2">
                <BrandLogo imageClassName="h-14 w-auto" />
                <div className="text-sm text-app-text-soft">منصة تجمع الفرصة بالمستثمر المناسب</div>
              </div>
              <p className="max-w-md text-sm leading-8 text-app-text-muted">
                LandX تجمع الفرص الاستثمارية والجهات المعلنة والمستثمرين في مساحة واحدة تساعد على التقييم والتواصل وتحويل الاهتمام إلى خطوة عملية.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {quickStats.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#e4cdb6] bg-white/55 p-4">
                    <div className="text-lg font-black text-app-text">{item.value}</div>
                    <div className="mt-1 text-xs leading-6 text-app-text-soft">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-4 text-sm font-bold text-app-text">اكتشف</div>
              <ul className="space-y-3 text-sm text-app-text-muted">
                <li><Link to="/opportunities" className="hover:text-app-text">الفرص الاستثمارية</Link></li>
                <li><Link to="/investment-analysis" className="hover:text-app-text">تحليل الفكرة</Link></li>
                <li><Link to="/investor-journey" className="hover:text-app-text">كيف تستفيد من LandX</Link></li>
                <li><Link to="/news" className="hover:text-app-text">الأخبار والإعلانات</Link></li>
              </ul>
            </div>

            <div>
              <div className="mb-4 text-sm font-bold text-app-text">لمن صممت LandX؟</div>
              <ul className="space-y-3 text-sm text-app-text-muted">
                <li className="flex items-start gap-2"><TargetIcon className="mt-1 h-4 w-4 text-brand" /> للمستثمر الباحث عن فرصة مناسبة</li>
                <li className="flex items-start gap-2"><SearchIcon className="mt-1 h-4 w-4 text-brand" /> للجهة التي تريد جذب استثمارات نوعية</li>
                <li className="flex items-start gap-2"><MessageCircleIcon className="mt-1 h-4 w-4 text-brand" /> للفريق الذي يتابع الطلبات والشراكات</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="mb-4 text-sm font-bold text-app-text">ابدأ الآن</div>
              {isAuthenticated ? (
                <Link
                  to={roleHome[user?.role] || '/investor/dashboard'}
                  className="flex items-center justify-between rounded-[1.5rem] border border-[#e2c7ae] bg-white/60 px-5 py-4"
                >
                  <div>
                    <div className="text-sm text-app-text-soft">حسابك الحالي</div>
                    <div className="mt-1 font-semibold text-app-text">{user?.name}</div>
                  </div>
                  <UserIcon className="h-5 w-5 text-brand" />
                </Link>
              ) : (
                <div className="landx-glass rounded-[1.5rem] p-5">
                  <div className="text-sm leading-7 text-app-text-muted">
                    أنشئ حسابك وابدأ باستكشاف الفرص أو تقييم فكرتك الاستثمارية.
                  </div>
                  <div className="mt-4 grid gap-3">
                    <Link to="/register" className="rounded-2xl bg-gradient-to-r from-[#8f4f2d] via-[#aa653c] to-[#c38256] px-4 py-3 text-center text-sm font-semibold text-[#fff8f0]">
                      إنشاء حساب جديد
                    </Link>
                    <Link to="/login" className="rounded-2xl border border-[#dfc4ac] bg-white/60 px-4 py-3 text-center text-sm font-semibold text-app-text">
                      تسجيل الدخول
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-app-border/70 pt-6 text-sm text-app-text-soft md:flex-row md:items-center md:justify-between">
            <p>© 2024 LandX. جميع الحقوق محفوظة.</p>
            <p>فرص أوضح، تواصل مباشر، وقرارات استثمارية مدروسة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;
