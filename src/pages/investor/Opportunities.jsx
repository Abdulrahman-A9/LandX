import React from 'react';
import Card from '../../components/ui/Card';
import { HeartIcon, EyeIcon } from '../../components/ui/Icons';
import { mockOpportunities } from '../../data/mock/opportunities';

const InvestorOpportunities = () => {
  const opportunities = mockOpportunities;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">الفرص الاستثمارية المتاحة</h1>
        <p className="text-app-text-muted mt-2">تصفح واكتشف الفرص الاستثمارية المناسبة لك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {opportunities.map((opportunity, index) => (
          <div key={opportunity.id}>
            <Card className="bg-card-gradient border border-app-border overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-brand to-brand-deep relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl text-accent/30">🌾</span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-app-surface rounded-full hover:bg-app-surface-strong transition-colors">
                    <HeartIcon className="text-app-text-soft" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-app-surface-soft text-app-text-muted rounded-full text-xs border border-app-border">
                    {opportunity.season}
                  </span>
                  <span className="text-sm text-success font-bold">{opportunity.expectedReturn}% عائد</span>
                </div>
                <h3 className="text-lg font-bold text-app-text mb-2 line-clamp-2">
                  {opportunity.title}
                </h3>
                <p className="text-sm text-app-text-muted mb-3 line-clamp-2">
                  {opportunity.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-app-text-soft">الموقع:</span>
                    <span className="text-app-text">{opportunity.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-app-text-soft">المساحة:</span>
                    <span className="text-app-text">{opportunity.area}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-app-text-soft">الحد الأدنى:</span>
                    <span className="text-app-text">{formatCurrency(opportunity.minInvestment)} ر.س</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-brand to-brand-deep text-app-text rounded-lg hover:from-brand-deep hover:to-brand transition-all duration-300 font-medium">
                  عرض التفاصيل
                </button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestorOpportunities;
