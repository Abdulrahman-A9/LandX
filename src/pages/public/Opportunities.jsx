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
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 dark:from-[#1c1917] dark:via-[#292524] dark:to-[#44403c] text-brown-900 dark:text-stone-100">
      <div className="bg-gradient-to-r from-brown-600/90 to-brown-700/90 border-b border-brown-400/20 backdrop-blur animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in-down">
            الفرص الاستثمارية
          </h1>
          <p className="text-pearl-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            استكشف جميع الفرص الاستثمارية المتاحة في الأراضي الزراعية الموسمية
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection animation="fadeUp">
        <Card className="mb-8 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-brown-800 mb-2">
                الموسم
              </label>
              <select
                value={filterSeason}
                onChange={(e) => setFilterSeason(e.target.value)}
                className="w-full px-3 py-2 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
              >
                <option value="all">جميع المواسم</option>
                <option value="winter">شتوي</option>
                <option value="summer">صيفي</option>
                <option value="spring">ربيعي</option>
                <option value="autumn">خريفي</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brown-800 mb-2">
                المنطقة
              </label>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="w-full px-3 py-2 bg-pearl-100/80 text-brown-900 border border-brown-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
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
          <p className="text-brown-700">
            <span className="font-bold text-brown-900">{filteredOpportunities.length}</span> نتيجة من أصل <span className="font-bold text-brown-900">{mockOpportunities.length}</span> فرصة
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
              <SearchIcon className="w-16 h-16 text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold text-brown-900 mb-2">
                لا توجد نتائج
              </h3>
              <p className="text-brown-700">
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
