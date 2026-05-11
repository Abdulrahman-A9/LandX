import React from 'react';
import Card from '../../components/ui/Card';
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
        <h1 className="text-3xl font-bold text-brown-900">لوحة تحكم البلدية</h1>
        <p className="text-brown-700 mt-2">إدارة الفرص الاستثمارية والاستفسارات</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">إجمالي الفرص</h3>
            <LeafIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-brown-900">{stats.totalOpportunities}</p>
          <p className="text-sm text-brown-600 mt-2">فرص استثمارية</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">الفرص النشطة</h3>
            <CheckIcon className="text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600">{stats.activeOpportunities}</p>
          <p className="text-sm text-brown-600 mt-2">متاحة للاستثمار</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">الاستفسارات</h3>
            <FileTextIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-yellow-600">{stats.pendingInquiries}</p>
          <p className="text-sm text-brown-600 mt-2">بانتظار الرد</p>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-brown-700">إجمالي الاستثمار</h3>
            <DollarSignIcon className="text-brown-600" />
          </div>
          <p className="text-3xl font-bold text-brown-700">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-brown-600 mt-2">ريال سعودي</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 mb-4">الفرص الاستثمارية الأخيرة</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 border border-brown-300 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900">وادي حائل الزراعي {i}</p>
                  <p className="text-sm text-brown-700">الموسم الشتوي 2024</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm border border-green-500/30">
                  نشط
                </span>
              </div>
            ))}
          </div>
        </Card>
        
        <Card className="p-6 bg-card-gradient border border-brown-300">
          <h2 className="text-xl font-bold text-brown-900 mb-4">استفسارات المستثمرين</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-pearl-100/50 border border-brown-300 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900">أحمد محمد</p>
                  <p className="text-sm text-brown-700">استفسار عن وادي حائل</p>
                </div>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-600 rounded-full text-sm border border-yellow-500/30">
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
