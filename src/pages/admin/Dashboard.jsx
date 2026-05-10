import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';

const AdminDashboard = () => {
  const stats = mockDashboardStats.admin;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">لوحة إدارة المنصة</h1>
        <p className="text-gray-600 mt-2">نظرة عامة على أداء المنصة</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">إجمالي المستخدمين</h3>
            <span className="text-2xl">👥</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.totalUsers}</p>
          <p className="text-sm text-gray-500 mt-2">مستخدم مسجل</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">البلديات</h3>
            <span className="text-2xl">🏛️</span>
          </div>
          <p className="text-3xl font-bold text-primary-600">{stats.totalMunicipalities}</p>
          <p className="text-sm text-gray-500 mt-2">جهة حكومية</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">الفرص الاستثمارية</h3>
            <span className="text-2xl">🌾</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{stats.totalOpportunities}</p>
          <p className="text-sm text-gray-500 mt-2">{stats.activeOpportunities} نشط</p>
        </Card>
        
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">إجمالي الاستثمار</h3>
            <span className="text-2xl">💰</span>
          </div>
          <p className="text-3xl font-bold text-green-600">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-gray-500 mt-2">ريال سعودي</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-600">قيد المراجعة</h3>
            <span className="text-2xl">⏳</span>
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingModeration}</p>
          <p className="text-sm text-gray-500 mt-2">بانتظار الموافقة</p>
        </Card>
        
        <Card className="p-6 lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">النشاط الحديث</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900">تم تسجيل مستثمر جديد: أحمد محمد</p>
                <p className="text-sm text-gray-500">منذ 10 دقائق</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900">تم نشر فرصة استثمارية جديدة في القصيم</p>
                <p className="text-sm text-gray-500">منذ ساعة</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-900">فرصة استثمارية جديدة تحتاج مراجعة</p>
                <p className="text-sm text-gray-500">منذ ساعتين</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">البلديات النشطة</h2>
          <div className="space-y-4">
            {[
              { name: 'أمانة منطقة حائل', opportunities: 8 },
              { name: 'أمانة منطقة القصيم', opportunities: 12 },
              { name: 'أمانة منطقة تبوك', opportunities: 6 },
            ].map((municipality, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{municipality.name}</p>
                  <p className="text-sm text-gray-600">{municipality.opportunities} فرصة استثمارية</p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  نشط
                </span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">المحتوى قيد المراجعة</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">فرصة استثمارية جديدة {i}</p>
                  <p className="text-sm text-gray-600">من أمانة منطقة حائل</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                    قبول
                  </button>
                  <button className="px-3 py-1 bg-accent-600 text-white rounded-lg text-sm hover:bg-accent-700">
                    رفض
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
