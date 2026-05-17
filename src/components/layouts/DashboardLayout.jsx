import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { BarChartIcon, LeafIcon, WalletIcon, FileTextIcon, UserIcon, PlusIcon, MegaphoneIcon, NewspaperIcon, BuildingIcon, UsersIcon, TrendingUpIcon, ShieldCheckIcon, SettingsIcon, HomeIcon, LogOutIcon, MoonIcon, SunIcon } from '../ui/Icons';

const DashboardLayout = ({ role = 'investor' }) => {
  const location = useLocation();
  
  const investorNav = [
    { path: '/investor/dashboard', label: 'لوحة التحكم', icon: <BarChartIcon /> },
    { path: '/investor/opportunities', label: 'الفرص الاستثمارية', icon: <LeafIcon /> },
    { path: '/investor/investments', label: 'استثماراتي', icon: <WalletIcon /> },
    { path: '/investor/inquiries', label: 'الاستفسارات', icon: <FileTextIcon /> },
    { path: '/investor/profile', label: 'الملف الشخصي', icon: <UserIcon /> },
  ];
  
  const municipalityNav = [
    { path: '/municipality/dashboard', label: 'لوحة التحكم', icon: <BarChartIcon /> },
    { path: '/municipality/opportunities', label: 'إدارة الفرص', icon: <LeafIcon /> },
    { path: '/municipality/opportunities/create', label: 'إضافة فرصة', icon: <PlusIcon /> },
    { path: '/municipality/announcements', label: 'الإعلانات', icon: <MegaphoneIcon /> },
    { path: '/municipality/news', label: 'الأخبار', icon: <NewspaperIcon /> },
    { path: '/municipality/inquiries', label: 'استفسارات المستثمرين', icon: <FileTextIcon /> },
    { path: '/municipality/profile', label: 'إعدادات البلدية', icon: <SettingsIcon /> },
  ];
  
  const adminNav = [
    { path: '/admin/dashboard', label: 'نظرة عامة', icon: <BarChartIcon /> },
    { path: '/admin/users', label: 'إدارة المستخدمين', icon: <UsersIcon /> },
    { path: '/admin/municipalities', label: 'إدارة البلديات', icon: <BuildingIcon /> },
    { path: '/admin/opportunities', label: 'إشراف الفرص', icon: <LeafIcon /> },
    { path: '/admin/analytics', label: 'التقارير والتحليلات', icon: <TrendingUpIcon /> },
    { path: '/admin/moderation', label: 'المراجعة', icon: <ShieldCheckIcon /> },
    { path: '/admin/settings', label: 'إعدادات المنصة', icon: <SettingsIcon /> },
  ];
  
  const navItems = role === 'investor' ? investorNav : role === 'municipality' ? municipalityNav : adminNav;
  const roleTitle = role === 'investor' ? 'لوحة المستثمر' : role === 'municipality' ? 'لوحة البلدية' : 'لوحة الإدارة';
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-app-bg text-app-text">
      <aside className="w-full md:w-64 bg-gradient-to-b from-brand to-brand-deep border-r border-app-border flex-shrink-0">
        <div className="p-6 border-b border-app-border">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand/30 to-brand-deep/30 rounded-lg flex items-center justify-center">
              <span className="text-brand font-bold text-lg">ل</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-brand/50 to-brand-deep/50 bg-clip-text text-transparent">LandX</span>
          </Link>
        </div>
        
        <nav className="p-4">
          <p className="text-xs font-semibold text-app-text-muted uppercase tracking-wider mb-4">
            {roleTitle}
          </p>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-brand/20 to-brand-deep/20 text-app-text border border-brand/30 font-medium'
                      : 'text-app-text-muted hover:bg-brand/10 hover:text-app-text'
                  }`}
                >
                  <span className="text-lg text-app-text-muted">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-app-border">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 px-3 py-2 text-app-text-muted hover:bg-brand/10 hover:text-app-text rounded-lg transition-all duration-300 w-full"
            title={isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon className="text-lg" /> : <MoonIcon className="text-lg" />}
            <span>{isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}</span>
          </button>
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2 text-app-text-muted hover:bg-brand/10 hover:text-app-text rounded-lg transition-all duration-300 mt-2"
          >
            <HomeIcon className="text-lg text-app-text-muted" />
            <span>العودة للرئيسية</span>
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-3 px-3 py-2 text-danger hover:bg-danger/10 rounded-lg transition-all duration-300 mt-2"
          >
            <LogOutIcon className="text-lg text-app-text-muted" />
            <span>تسجيل الخروج</span>
          </Link>
        </div>
      </aside>
      
      <main className="flex-1 overflow-auto bg-app-bg">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
