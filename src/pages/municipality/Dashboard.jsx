import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockDashboardStats } from '../../data/mock/dashboard';
import { LeafIcon, CheckIcon, FileTextIcon, DollarSignIcon } from '../../components/ui/Icons';

const MunicipalityDashboard = () => {
  const stats = mockDashboardStats.municipality;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">لوحة تحكم البلدية</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">إدارة الفرص الاستثمارية والاستفسارات</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الفرص</h3>
            <LeafIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{stats.totalOpportunities}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">فرص استثمارية</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الفرص النشطة</h3>
            <CheckIcon className="text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.activeOpportunities}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">متاحة للاستثمار</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">الاستفسارات</h3>
            <FileTextIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingInquiries}</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">بانتظار الرد</p>
        </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الاستثمار</h3>
            <DollarSignIcon className="text-brown-600 dark:text-stone-400" />
          </div>
          <p className="text-3xl font-bold text-brown-700 dark:text-stone-400">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">ريال سعودي</p>
        </Card>
        </AnimatedSection>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedSection animation="slideLeft">
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-4">الفرص الاستثمارية الأخيرة</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">وادي حائل الزراعي {i}</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">الموسم الشتوي 2024</p>
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
          <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100 mb-4">استفسارات المستثمرين</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">أحمد محمد</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">استفسار عن وادي حائل</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 rounded-full text-sm border border-yellow-500/30">
                  جديد
                </span>
              </div>
            ))}
          </div>
        </Card>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default MunicipalityDashboard;
