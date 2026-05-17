import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';
import { LeafIcon, CheckIcon, FileTextIcon, DollarSignIcon, UsersIcon, TrendingUpIcon, BarChartIcon, PieChartIcon } from '../../components/ui/Icons';

const MunicipalityDashboard = () => {
  const stats = mockDashboardStats.municipality;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">لوحة تحكم البلدية</h1>
        <p className="text-app-text-muted mt-2">إدارة الفرص الاستثمارية والاستفسارات</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي الفرص</h3>
            <LeafIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{stats.totalOpportunities}</p>
          <p className="text-sm text-app-text-soft mt-2">فرص استثمارية</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">الفرص النشطة</h3>
            <CheckIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{stats.activeOpportunities}</p>
          <p className="text-sm text-app-text-soft mt-2">متاحة للاستثمار</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">الاستفسارات</h3>
            <FileTextIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-warning">{stats.pendingInquiries}</p>
          <p className="text-sm text-app-text-soft mt-2">بانتظار الرد</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي الاستثمار</h3>
            <DollarSignIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-brand">{formatCurrency(stats.totalInvestment)} ر.س</p>
          <p className="text-sm text-app-text-soft mt-2">ريال سعودي</p>
        </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h2 className="text-xl font-bold text-app-text mb-4">الفرص الاستثمارية الأخيرة</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">وادي حائل الزراعي {i}</p>
                  <p className="text-sm text-app-text-muted">الموسم الشتوي 2024</p>
                </div>
                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm border border-success/30">
                  نشط
                </span>
              </div>
            ))}
          </div>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h2 className="text-xl font-bold text-app-text mb-4">استفسارات المستثمرين</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">أحمد محمد</p>
                  <p className="text-sm text-app-text-muted">استفسار عن وادي حائل</p>
                </div>
                <span className="px-3 py-1 bg-warning/10 text-warning rounded-full text-sm border border-warning/30">
                  جديد
                </span>
              </div>
            ))}
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default MunicipalityDashboard;
