import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BarChartIcon, LeafIcon, WalletIcon, FileTextIcon, UserIcon, PlusIcon, MegaphoneIcon, NewspaperIcon, BuildingIcon, UsersIcon, TrendingUpIcon, ShieldCheckIcon, SettingsIcon, HomeIcon, LogOutIcon } from '../ui/Icons';

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
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 dark:from-[#1c1917] dark:via-[#292524] dark:to-[#44403c] text-brown-900 dark:text-stone-100">
      <aside className="w-full md:w-64 bg-gradient-to-b from-brown-600 to-brown-700 border-r border-brown-400/20 flex-shrink-0">
        <div className="p-6 border-b border-brown-400/20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pearl-200 to-pearl-300 rounded-lg flex items-center justify-center">
              <span className="text-brown-700 font-bold text-lg">ل</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-pearl-100 to-pearl-200 bg-clip-text text-transparent">LandX</span>
          </Link>
        </div>
        
        <nav className="p-4">
          <p className="text-xs font-semibold text-pearl-100 uppercase tracking-wider mb-4">
            {roleTitle}
          </p>
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-pearl-200/20 to-pearl-300/20 text-pearl-100 border border-pearl-400/30 font-medium'
                      : 'text-pearl-100 hover:bg-pearl-300/30 hover:text-white'
                  }`}
                >
                  <span className="text-lg text-pearl-100">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-brown-400/20">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2 text-pearl-100 hover:bg-pearl-300/30 hover:text-white rounded-lg transition-all duration-300"
          >
            <HomeIcon className="text-lg text-pearl-100" />
            <span>العودة للرئيسية</span>
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-all duration-300 mt-2"
          >
            <LogOutIcon className="text-lg text-pearl-100" />
            <span>تسجيل الخروج</span>
          </Link>
        </div>
      </aside>
      
      <main className="flex-1 overflow-auto bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 dark:from-[#1c1917] dark:via-[#292524] dark:to-[#44403c]">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
