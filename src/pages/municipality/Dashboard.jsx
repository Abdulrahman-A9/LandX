import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';

const MunicipalityDashboard = () => {
  const stats = mockDashboardStats.municipality;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">لوحة تحكم البلدية</h1>
        <p className="text-dark-400 mt-2">إدارة الفرص الاستثمارية والاستفسارات</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-400">إجمالي الفرص</h3>
            <span className="text-2xl">🌾</span>
          </div>
          <p className="text-3xl font-bold text-white">{stats.totalOpportunities}</p>
          <p className="text-sm text-dark-500 mt-2">فرص استثمارية</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-400">الفرص النشطة</h3>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-3xl font-bold text-green-400">{stats.activeOpportunities}</p>
          <p className="text-sm text-dark-500 mt-2">متاحة للاستثمار</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-400">الاستفسارات</h3>
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-3xl font-bold text-yellow-400">{stats.pendingInquiries}</p>
          <p className="text-sm text-dark-500 mt-2">بانتظار الرد</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-dark-400">إجمالي الاستثمار</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-primary-400">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-dark-500 mt-2">ريال سعودي</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card-gradient border border-primary-500/30">
          <h2 className="text-xl font-bold text-white mb-4">الفرص الاستثمارية الأخيرة</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-dark-800/50 border border-primary-500/20 rounded-lg">
                <div>
                  <p className="font-medium text-white">وادي حائل الزراعي {i}</p>
                  <p className="text-sm text-dark-400">الموسم الشتوي 2024</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                  نشط
                </span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-primary-500/30">
          <h2 className="text-xl font-bold text-white mb-4">استفسارات المستثمرين</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-dark-800/50 border border-primary-500/20 rounded-lg">
                <div>
                  <p className="font-medium text-white">أحمد محمد</p>
                  <p className="text-sm text-dark-400">استفسار عن وادي حائل</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">
                  جديد
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MunicipalityDashboard;
