import React from 'react';
import Card from '../../../components/ui/Card';
import { mockDashboardStats } from '../../../data/mock/dashboard';

const MunicipalityDashboard = () => {
  const stats = mockDashboardStats.municipality;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">لوحة تحكم البلدية</h1>
        <p className="text-gray-600 mt-2">إدارة الفرص الاستثمارية والاستفسارات</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">إجمالي الفرص</h3>
            <span className="text-2xl">🌾</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.totalOpportunities}</p>
          <p className="text-sm text-gray-500 mt-2">فرص استثمارية</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">الفرص النشطة</h3>
            <span className="text-2xl">✅</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.activeOpportunities}</p>
          <p className="text-sm text-gray-500 mt-2">متاحة للاستثمار</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">الاستفسارات</h3>
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingInquiries}</p>
          <p className="text-sm text-gray-500 mt-2">بانتظار الرد</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">إجمالي الاستثمار</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-primary-600">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-gray-500 mt-2">ريال سعودي</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">الفرص الاستثمارية الأخيرة</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">وادي حائل الزراعي {i}</p>
                  <p className="text-sm text-gray-600">الموسم الشتوي 2024</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  نشط
                </span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">استفسارات المستثمرين</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">أحمد محمد</p>
                  <p className="text-sm text-gray-600">استفسار عن وادي حائل</p>
                </div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
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
