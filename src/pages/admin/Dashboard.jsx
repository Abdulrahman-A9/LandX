import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockDashboardStats } from '../../data/mock/dashboard';
import { UsersIcon, BuildingIcon, LeafIcon, DollarSignIcon, ShieldCheckIcon } from '../../components/ui/Icons';

const AdminDashboard = () => {
  const stats = mockDashboardStats.admin;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">لوحة إدارة المنصة</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">نظرة عامة على أداء المنصة</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي المستخدمين</h3>
            <UsersIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{stats.totalUsers}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">مستخدم مسجل</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">البلديات</h3>
            <BuildingIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-brown-700 dark:text-stone-400">{stats.totalMunicipalities}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">جهة حكومية</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الفرص الاستثمارية</h3>
            <LeafIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{stats.totalOpportunities}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">{stats.activeOpportunities} نشط</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الاستثمار</h3>
            <DollarSignIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-pearl-700">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">ريال سعودي</p>
        </Card>
        </AnimatedSection>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">قيد المراجعة</h3>
            <ShieldCheckIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingModeration}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">بانتظار الموافقة</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="slideRight" className="lg:col-span-2">
        <Card className="p-6 h-full bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-4">النشاط الحديث</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brown-600 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900 dark:text-stone-100">تم تسجيل مستثمر جديد: أحمد محمد</p>
                <p className="text-sm text-brown-600 dark:text-stone-400">منذ 10 دقائق</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900 dark:text-stone-100">تم نشر فرصة استثمارية جديدة في القصيم</p>
                <p className="text-sm text-brown-600 dark:text-stone-400">منذ ساعة</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900 dark:text-stone-100">فرصة استثمارية جديدة تحتاج مراجعة</p>
                <p className="text-sm text-brown-600 dark:text-stone-400">منذ ساعتين</p>
              </div>
            </div>
          </div>
        </Card>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedSection animation="slideLeft">
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-4">البلديات النشطة</h2>
          <div className="space-y-4">
            {[
              { name: 'أمانة منطقة حائل', opportunities: 8 },
              { name: 'أمانة منطقة القصيم', opportunities: 12 },
              { name: 'أمانة منطقة تبوك', opportunities: 6 },
            ].map((municipality, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">{municipality.name}</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">{municipality.opportunities} فرصة استثمارية</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm border border-green-500/30">
                  نشط
                </span>
              </div>
            ))}
          </div>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="slideRight">
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-4">المحتوى قيد المراجعة</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">فرصة استثمارية جديدة {i}</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">من أمانة منطقة حائل</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-500/20 text-green-600 rounded-lg text-sm border border-green-500/30 hover:bg-green-500/30">
                    قبول
                  </button>
                  <button className="px-3 py-1 bg-red-500/20 text-red-600 rounded-lg text-sm border border-red-500/30 hover:bg-red-500/30">
                    رفض
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AdminDashboard;
