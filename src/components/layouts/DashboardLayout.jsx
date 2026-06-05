import React, { useEffect, useState } from 'react';
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  BarChartIcon,
  BellIcon,
  BuildingIcon,
  FileTextIcon,
  HomeIcon,
  LeafIcon,
  LogOutIcon,
  MenuIcon,
  MegaphoneIcon,
  NewspaperIcon,
  PlusIcon,
  SettingsIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
  XIcon,
} from '../ui/Icons';

const investorNav = [
  { path: '/investor/dashboard', label: 'النظرة العامة', icon: <BarChartIcon /> },
  { path: '/investor/opportunities', label: 'الفرص المتاحة', icon: <LeafIcon /> },
  { path: '/investor/investments', label: 'استثماراتي', icon: <WalletIcon /> },
  { path: '/investor/inquiries', label: 'الاستفسارات', icon: <FileTextIcon /> },
  { path: '/investor/profile', label: 'الملف الشخصي', icon: <UserIcon /> },
];

const municipalityNav = [
  { path: '/municipality/dashboard', label: 'النظرة العامة', icon: <BarChartIcon /> },
  { path: '/municipality/opportunities', label: 'إدارة الفرص', icon: <LeafIcon /> },
  { path: '/municipality/opportunities/create', label: 'إضافة فرصة', icon: <PlusIcon /> },
  { path: '/municipality/announcements', label: 'الإعلانات', icon: <MegaphoneIcon /> },
  { path: '/municipality/news', label: 'الأخبار', icon: <NewspaperIcon /> },
  { path: '/municipality/inquiries', label: 'استفسارات المستثمرين', icon: <FileTextIcon /> },
  { path: '/municipality/profile', label: 'إعدادات البلدية', icon: <SettingsIcon /> },
];

const adminNav = [
  { path: '/admin/dashboard', label: 'النظرة العامة', icon: <BarChartIcon /> },
  { path: '/admin/users', label: 'المستخدمون', icon: <UsersIcon /> },
  { path: '/admin/municipalities', label: 'البلديات', icon: <BuildingIcon /> },
  { path: '/admin/opportunities', label: 'مراجعة الفرص', icon: <LeafIcon /> },
  { path: '/admin/analytics', label: 'التقارير', icon: <TrendingUpIcon /> },
  { path: '/admin/moderation', label: 'الإشراف', icon: <ShieldCheckIcon /> },
  { path: '/admin/settings', label: 'إعدادات المنصة', icon: <SettingsIcon /> },
];

const roleMeta = {
  investor: {
    title: 'لوحة المستثمر',
    subtitle: 'متابعة الفرص والاستثمارات والاستفسارات في مسار واحد واضح.',
    nav: investorNav,
  },
  municipality: {
    title: 'لوحة البلدية',
    subtitle: 'إدارة النشر والاستفسارات ومحتوى الفرص دون تشتيت تشغيلي.',
    nav: municipalityNav,
  },
  admin: {
    title: 'لوحة الإدارة',
    subtitle: 'رؤية تشغيلية موحدة عن المستخدمين والبلديات والمحتوى.',
    nav: adminNav,
  },
};

const DashboardLayout = ({ role = 'investor' }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, loading } = useAuth();
  const meta = roleMeta[role] || roleMeta.investor;

  useEffect(() => {
    if (!loading && user && user.role !== role) {
      navigate(`/${user.role}/dashboard`, { replace: true });
    }
  }, [loading, navigate, role, user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (loading) {
    return <div className="landx-shell py-20 text-center text-app-text-muted">جاري تحميل الجلسة...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== role) {
    return null;
  }

  const displayName = user.full_name || user.name || 'مستخدم المنصة';

  return (
    <div className="min-h-screen bg-app-bg text-app-text">
      <div className="flex min-h-screen">
        <aside className="hidden w-[308px] shrink-0 border-l border-app-border/80 bg-[#160d09]/90 xl:block">
          <div className="sticky top-0 flex h-screen flex-col">
            <div className="border-b border-app-border/80 p-6">
              <Link to="/" className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand/20 bg-brand/10">
                  <span className="text-xl font-black text-brand">ل</span>
                </div>
                <div>
                  <div className="font-heading text-2xl font-black">LandX</div>
                  <div className="text-sm text-app-text-soft">{meta.title}</div>
                </div>
              </Link>
            </div>

            <div className="p-6">
              <div className="rounded-[1.75rem] border border-app-border bg-app-surface-soft/60 p-5">
                <div className="text-sm text-app-text-soft">الحساب النشط</div>
                <div className="mt-2 text-lg font-bold text-app-text">{displayName}</div>
                <div className="mt-1 text-sm text-app-text-muted">{meta.subtitle}</div>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 pb-4">
              <div className="space-y-1">
                {meta.nav.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? 'bg-brand/15 text-app-text'
                          : 'text-app-text-muted hover:bg-app-surface-soft hover:text-app-text'
                      }`}
                    >
                      <span className={isActive ? 'text-brand' : 'text-app-text-soft'}>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="border-t border-app-border/80 p-4">
              <Link
                to="/"
                className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-app-text-muted transition-colors hover:bg-app-surface-soft hover:text-app-text"
              >
                <HomeIcon className="h-5 w-5" />
                العودة للموقع العام
              </Link>
              <button
                onClick={handleLogout}
                className="mt-2 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-danger transition-colors hover:bg-danger/10"
              >
                <LogOutIcon className="h-5 w-5" />
                تسجيل الخروج
              </button>
            </div>
          </div>
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-40 border-b border-app-border/80 bg-app-bg/80 backdrop-blur-2xl">
            <div className="landx-shell py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setMobileOpen((value) => !value)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-app-border bg-app-surface-soft xl:hidden"
                    aria-label="Toggle dashboard menu"
                  >
                    {mobileOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                  </button>
                  <div>
                    <div className="font-heading text-2xl font-black">{meta.title}</div>
                    <div className="text-sm text-app-text-soft">{meta.subtitle}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="hidden rounded-full border border-app-border bg-app-surface-soft px-4 py-2 text-sm text-app-text-muted md:flex md:items-center md:gap-2">
                    <BellIcon className="h-4 w-4 text-brand" />
                    بيانات مباشرة من النظام
                  </div>
                  <div className="hidden h-11 items-center gap-3 rounded-full border border-app-border bg-app-surface-soft px-3 md:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand">
                      {displayName.charAt(0)}
                    </div>
                    <div className="text-sm">
                      <div className="font-semibold text-app-text">{displayName}</div>
                      <div className="text-app-text-soft">جلسة عمل نشطة</div>
                    </div>
                  </div>
                </div>
              </div>

              {mobileOpen ? (
                <div className="pt-4 xl:hidden">
                  <div className="landx-panel rounded-[1.75rem] p-3">
                    <div className="grid gap-2">
                      {meta.nav.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                          <Link
                            key={item.path}
                            to={item.path}
                            onClick={() => setMobileOpen(false)}
                            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold ${
                              isActive
                                ? 'bg-brand/15 text-app-text'
                                : 'text-app-text-muted hover:bg-app-surface-soft hover:text-app-text'
                            }`}
                          >
                            <span className={isActive ? 'text-brand' : 'text-app-text-soft'}>{item.icon}</span>
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                    <div className="mt-3 grid gap-2 border-t border-app-border/70 pt-3">
                      <Link
                        to="/"
                        onClick={() => setMobileOpen(false)}
                        className="rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm font-semibold text-app-text"
                      >
                        العودة للموقع العام
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout();
                          setMobileOpen(false);
                        }}
                        className="rounded-2xl border border-danger/20 bg-danger/10 px-4 py-3 text-right text-sm font-semibold text-danger"
                      >
                        تسجيل الخروج
                      </button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </header>

          <main className="flex-1">
            <div className="landx-shell py-8 lg:py-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
