import React from 'react';
import Card from '../../components/ui/Card';
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
        <h1 className="text-3xl font-bold text-brown-900">لوحة إدارة المنصة</h1>
        <p className="text-brown-700 mt-2">نظرة عامة على أداء المنصة</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">إجمالي المستخدمين</h3>
            <UsersIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-brown-900">{stats.totalUsers}</p>
          <p className="text-sm text-brown-600 mt-2">مستخدم مسجل</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">البلديات</h3>
            <BuildingIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-brown-700">{stats.totalMunicipalities}</p>
          <p className="text-sm text-brown-600 mt-2">جهة حكومية</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">الفرص الاستثمارية</h3>
            <LeafIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-brown-900">{stats.totalOpportunities}</p>
          <p className="text-sm text-brown-600 mt-2">{stats.activeOpportunities} نشط</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">إجمالي الاستثمار</h3>
            <DollarSignIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-pearl-700">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-brown-600 mt-2">ريال سعودي</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">قيد المراجعة</h3>
            <ShieldCheckIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingModeration}</p>
          <p className="text-sm text-brown-600 mt-2">بانتظار الموافقة</p>
        </Card>
        
        <Card className="p-6 lg:col-span-2 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 mb-4">النشاط الحديث</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brown-600 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900">تم تسجيل مستثمر جديد: أحمد محمد</p>
                <p className="text-sm text-brown-600">منذ 10 دقائق</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900">تم نشر فرصة استثمارية جديدة في القصيم</p>
                <p className="text-sm text-brown-600">منذ ساعة</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
              <div>
                <p className="text-brown-900">فرصة استثمارية جديدة تحتاج مراجعة</p>
                <p className="text-sm text-brown-600">منذ ساعتين</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 mb-4">البلديات النشطة</h2>
          <div className="space-y-4">
            {[
              { name: 'أمانة منطقة حائل', opportunities: 8 },
              { name: 'أمانة منطقة القصيم', opportunities: 12 },
              { name: 'أمانة منطقة تبوك', opportunities: 6 },
            ].map((municipality, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 border border-brown-300 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900">{municipality.name}</p>
                  <p className="text-sm text-brown-700">{municipality.opportunities} فرصة استثمارية</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm border border-green-500/30">
                  نشط
                </span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 mb-4">المحتوى قيد المراجعة</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 border border-brown-300 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900">فرصة استثمارية جديدة {i}</p>
                  <p className="text-sm text-brown-700">من أمانة منطقة حائل</p>
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
      </div>
    </div>
  );
};

export default AdminDashboard;
