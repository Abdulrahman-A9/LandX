import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';
import { DollarSignIcon, LeafIcon, CheckIcon, FileTextIcon, TrendingUpIcon, BarChartIcon, PieChartIcon } from '../../components/ui/Icons';

const InvestorDashboard = () => {
  const stats = mockDashboardStats.investor;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">لوحة المستثمر</h1>
        <p className="text-app-text-muted mt-2">نظرة عامة على استثماراتك</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي الاستثمارات</h3>
            <DollarSignIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{stats.totalInvestments}</p>
          <p className="text-sm text-app-text-soft mt-2">فرص استثمارية</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">الاستثمارات النشطة</h3>
            <TrendingUpIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{stats.activeInvestments}</p>
          <p className="text-sm text-app-text-soft mt-2">قيد التنفيذ</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي المستثمر</h3>
            <LeafIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-brand">{formatCurrency(stats.totalInvested)} ر.س</p>
          <p className="text-sm text-app-text-soft mt-2">ريال سعودي</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">الاستفسارات المعلقة</h3>
            <FileTextIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-warning">{stats.pendingInquiries}</p>
          <p className="text-sm text-app-text-soft mt-2">بانتظار الرد</p>
        </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h2 className="text-xl font-bold text-app-text mb-4">آخر الاستثمارات</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">حائل - وادي حائل الزراعي</p>
                  <p className="text-sm text-app-text-muted">الموسم الشتوي 2024</p>
                </div>
                <div className="text-left">
                  <p className="font-bold text-success">15%</p>
                  <p className="text-xs text-app-text-soft">عائد متوقع</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h2 className="text-xl font-bold text-app-text mb-4">الأنشطة الحديثة</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
              <div>
                <p className="text-app-text">تم قبول طلب استثمارك في وادي حائل</p>
                <p className="text-sm text-app-text-soft">منذ ساعتين</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
              <div>
                <p className="text-app-text">تم إرسال استفسارك إلى البلدية</p>
                <p className="text-sm text-app-text-soft">منذ يوم</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-muted rounded-full mt-2"></div>
              <div>
                <p className="text-app-text">تم تحديث معلومات الفرصة</p>
                <p className="text-sm text-app-text-soft">منذ 3 أيام</p>
              </div>
            </div>
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestorDashboard;
