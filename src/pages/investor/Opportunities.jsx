import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockOpportunities } from '../../data/mock/opportunities';
import { HeartIcon, EyeIcon } from '../../components/ui/Icons';

const InvestorOpportunities = () => {
  const opportunities = mockOpportunities;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">الفرص الاستثمارية المتاحة</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">تصفح واكتشف الفرص الاستثمارية المناسبة لك</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {opportunities.map((opportunity, index) => (
          <AnimatedSection key={opportunity.id} animation="fadeUp" delay={index * 100}>
            <Card className="bg-card-gradient border border-brown-300 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-brown-400 to-brown-600 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl text-pearl-200/30">🌾</span>
                </div>
                <div className="absolute top-3 right-3 flex gap-2">
                  <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
                    <HeartIcon className="text-brown-600" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-brown-100 dark:bg-brown-900/30 text-brown-700 dark:text-brown-300 rounded-full text-xs border border-brown-300">
                    {opportunity.season}
                  </span>
                  <span className="text-sm text-green-600 font-bold">{opportunity.expectedReturn}% عائد</span>
                </div>
                <h3 className="text-lg font-bold text-brown-900 dark:text-stone-100 mb-2 line-clamp-2">
                  {opportunity.title}
                </h3>
                <p className="text-sm text-brown-700 dark:text-stone-400 mb-3 line-clamp-2">
                  {opportunity.description}
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-brown-600 dark:text-stone-400">الموقع:</span>
                    <span className="text-brown-900 dark:text-stone-100">{opportunity.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brown-600 dark:text-stone-400">المساحة:</span>
                    <span className="text-brown-900 dark:text-stone-100">{opportunity.area}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brown-600 dark:text-stone-400">الحد الأدنى:</span>
                    <span className="text-brown-900 dark:text-stone-100">{formatCurrency(opportunity.minInvestment)} ر.س</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 font-medium">
                  عرض التفاصيل
                </button>
              </div>
            </Card>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default InvestorOpportunities;
