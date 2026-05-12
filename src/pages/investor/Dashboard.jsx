import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockDashboardStats } from '../../data/mock/dashboard';
import { WalletIcon, TrendingUpIcon, BuildingIcon, FileTextIcon } from '../../components/ui/Icons';

const InvestorDashboard = () => {
  const stats = mockDashboardStats.investor;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">لوحة المستثمر</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">نظرة عامة على استثماراتك</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الاستثمارات</h3>
            <WalletIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{stats.totalInvestments}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">فرص استثمارية</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الاستثمارات النشطة</h3>
            <TrendingUpIcon className="text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.activeInvestments}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">قيد التنفيذ</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي المستثمر</h3>
            <BuildingIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-brown-700 dark:text-stone-400">{formatCurrency(stats.totalInvested)} ر.س</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">ريال سعودي</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الاستفسارات المعلقة</h3>
            <FileTextIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingInquiries}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">بانتظار الرد</p>
        </Card>
        </AnimatedSection>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedSection animation="slideLeft">
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-4">آخر الاستثمارات</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">حائل - وادي حائل الزراعي</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">الموسم الشتوي 2024</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-green-600">15%</p>
                  <p className="text-xs text-brown-600 dark:text-stone-400">عائد متوقع</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="slideRight">
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-4">الأنشطة الحديثة</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brown-600 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900 dark:text-stone-100">تم قبول طلب استثمارك في وادي حائل</p>
                <p className="text-sm text-brown-600 dark:text-stone-400">منذ ساعتين</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brown-400 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900 dark:text-stone-100">تم إرسال استفسارك إلى البلدية</p>
                <p className="text-sm text-brown-600 dark:text-stone-400">منذ يوم</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brown-400 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900 dark:text-stone-100">تم تحديث معلومات الفرصة</p>
                <p className="text-sm text-brown-600 dark:text-stone-400">منذ 3 أيام</p>
              </div>
            </div>
          </div>
        </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default InvestorDashboard;
