import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockOpportunities } from '../../data/mock/opportunities';
import { SearchIcon } from '../../components/ui/Icons';

const Opportunities = () => {
  const [filterSeason, setFilterSeason] = useState('all');
  const [filterRegion, setFilterRegion] = useState('all');
  
  const filteredOpportunities = mockOpportunities.filter((opportunity) => {
    const seasonMatch = filterSeason === 'all' || opportunity.season === filterSeason;
    const regionMatch = filterRegion === 'all' || opportunity.municipality.includes(filterRegion);
    return seasonMatch && regionMatch;
  });
  
  return (
    <div className="min-h-screen bg-app-bg text-app-text">
      <div className="bg-gradient-to-r from-brand/90 to-brand-deep/90 border-b border-brand/20 backdrop-blur animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-app-text mb-2 animate-fade-in-down">
            الفرص الاستثمارية
          </h1>
          <p className="text-app-text-muted animate-fade-in" style={{ animationDelay: '0.2s' }}>
            استكشف جميع الفرص الاستثمارية المتاحة في الأراضي الزراعية الموسمية
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection animation="fadeUp">
        <Card className="mb-8 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-app-text-muted mb-2">
                الموسم
              </label>
              <select
                value={filterSeason}
                onChange={(e) => setFilterSeason(e.target.value)}
                className="w-full px-3 py-2 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="all">جميع المواسم</option>
                <option value="winter">شتوي</option>
                <option value="summer">صيفي</option>
                <option value="spring">ربيعي</option>
                <option value="autumn">خريفي</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-app-text-muted mb-2">
                المنطقة
              </label>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="w-full px-3 py-2 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="all">جميع المناطق</option>
                <option value="حائل">منطقة حائل</option>
                <option value="القصيم">منطقة القصيم</option>
                <option value="تبوك">منطقة تبوك</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <Button
                variant="outline"
                onClick={() => {
                  setFilterSeason('all');
                  setFilterRegion('all');
                }}
                className="w-full"
              >
                إعادة تعيين الفلاتر
              </Button>
            </div>
          </div>
        </Card>
        </AnimatedSection>

        <div className="mb-4">
          <p className="text-app-text-muted">
            <span className="font-bold text-app-text">{filteredOpportunities.length}</span> نتيجة من أصل <span className="font-bold text-app-text">{mockOpportunities.length}</span> فرصة
          </p>
        </div>
        
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity, index) => (
              <AnimatedSection key={opportunity.id} animation="scaleIn" delay={index * 100}>
                <OpportunityCard opportunity={opportunity} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection animation="scaleIn">
            <Card className="text-center py-12">
              <SearchIcon className="w-16 h-16 text-app-text-soft mb-4" />
              <h3 className="text-xl font-semibold text-app-text mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-app-text-muted">
                جرب تغيير فلاتر البحث للعثور على فرص استثمارية
              </p>
            </Card>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
