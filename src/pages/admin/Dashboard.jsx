import React from 'react';
import Card from '../../components/ui/Card';
import { mockDashboardStats } from '../../data/mock/dashboard';
import { UsersIcon, BuildingIcon, LeafIcon, DollarSignIcon, TrendingUpIcon, BarChartIcon, PieChartIcon, ShieldCheckIcon } from '../../components/ui/Icons';

const AdminDashboard = () => {
  const stats = mockDashboardStats.admin;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">لوحة إدارة المنصة</h1>
        <p className="text-app-text-muted mt-2">نظرة عامة على أداء المنصة</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي المستخدمين</h3>
            <UsersIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{stats.totalUsers}</p>
          <p className="text-sm text-app-text-soft mt-2">مستخدم مسجل</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">البلديات</h3>
            <BuildingIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-brand">{stats.totalMunicipalities}</p>
          <p className="text-sm text-app-text-soft mt-2">جهة حكومية</p>
        </Card>
        </div>

        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">الفرص الاستثمارية</h3>
            <LeafIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{stats.totalOpportunities}</p>
          <p className="text-sm text-app-text-soft mt-2">{stats.activeOpportunities} نشط</p>
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">قيد المراجعة</h3>
            <ShieldCheckIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-warning">{stats.pendingModeration}</p>
          <p className="text-sm text-app-text-soft mt-2">بانتظار الموافقة</p>
        </Card>
        </div>

        <div className="lg:col-span-2">
        <Card className="p-6 h-full bg-card-gradient border border-app-border">
          <h2 className="text-xl font-bold text-app-text mb-4">النشاط الحديث</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-brand rounded-full mt-2"></div>
              <div>
                <p className="text-app-text">تم تسجيل مستثمر جديد: أحمد محمد</p>
                <p className="text-sm text-app-text-soft">منذ 10 دقائق</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <div>
                <p className="text-app-text">تم نشر فرصة استثمارية جديدة في القصيم</p>
                <p className="text-sm text-app-text-soft">منذ ساعة</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
              <div>
                <p className="text-app-text">فرصة استثمارية جديدة تحتاج مراجعة</p>
                <p className="text-sm text-app-text-soft">منذ ساعتين</p>
              </div>
            </div>
          </div>
        </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <h2 className="text-xl font-bold text-app-text mb-4">البلديات النشطة</h2>
          <div className="space-y-4">
            {[
              { name: 'أمانة منطقة حائل', opportunities: 8 },
              { name: 'أمانة منطقة القصيم', opportunities: 12 },
              { name: 'أمانة منطقة تبوك', opportunities: 6 },
            ].map((municipality, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">{municipality.name}</p>
                  <p className="text-sm text-app-text-muted">{municipality.opportunities} فرصة استثمارية</p>
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
          <h2 className="text-xl font-bold text-app-text mb-4">المحتوى قيد المراجعة</h2>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">فرصة استثمارية جديدة {i}</p>
                  <p className="text-sm text-app-text-muted">من أمانة منطقة حائل</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 bg-success/10 text-success rounded-lg text-sm border border-success/30 hover:bg-success/20">
                    قبول
                  </button>
                  <button className="px-3 py-1 bg-danger/10 text-danger rounded-lg text-sm border border-danger/30 hover:bg-danger/20">
                    رفض
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
