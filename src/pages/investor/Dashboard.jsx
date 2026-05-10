import React from 'react';
import Card from '../../../components/ui/Card';
import { mockDashboardStats } from '../../../data/mock/dashboard';

const InvestorDashboard = () => {
  const stats = mockDashboardStats.investor;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">لوحة المستثمر</h1>
        <p className="text-gray-600 mt-2">نظرة عامة على استثماراتك</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">إجمالي الاستثمارات</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.totalInvestments}</p>
          <p className="text-sm text-gray-500 mt-2">فرص استثمارية</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">الاستثمارات النشطة</h3>
            <span className="text-2xl">📈</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.activeInvestments}</p>
          <p className="text-sm text-gray-500 mt-2">قيد التنفيذ</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">إجمالي المستثمر</h3>
            <span className="text-2xl">🏦</span>
          </div>
          <p className="text-3xl font-bold text-primary-600">{formatCurrency(stats.totalInvested)} ر.س</p>
          <p className="text-sm text-gray-500 mt-2">ريال سعودي</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">الاستفسارات المعلقة</h3>
            <span className="text-2xl">📝</span>
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingInquiries}</p>
          <p className="text-sm text-gray-500 mt-2">بانتظار الرد</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">آخر الاستثمارات</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">حائل - وادي حائل الزراعي</p>
                  <p className="text-sm text-gray-600">الموسم الشتوي 2024</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-green-600">15%</p>
                  <p className="text-xs text-gray-500">عائد متوقع</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">الأنشطة الحديثة</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900">تم قبول طلب استثمارك في وادي حائل</p>
                <p className="text-sm text-gray-500">منذ ساعتين</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900">تم إرسال استفسارك إلى البلدية</p>
                <p className="text-sm text-gray-500">منذ يوم</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gray-300 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900">تم تحديث معلومات الفرصة</p>
                <p className="text-sm text-gray-500">منذ 3 أيام</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default InvestorDashboard;
