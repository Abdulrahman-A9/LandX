import React, { useState } from 'react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import { mockOpportunities } from '../../data/mock/opportunities';

const Opportunities = () => {
  const [filterSeason, setFilterSeason] = useState('all');
  const [filterRegion, setFilterRegion] = useState('all');
  
  const filteredOpportunities = mockOpportunities.filter((opportunity) => {
    const seasonMatch = filterSeason === 'all' || opportunity.season === filterSeason;
    const regionMatch = filterRegion === 'all' || opportunity.municipality.includes(filterRegion);
    return seasonMatch && regionMatch;
  });
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white">
      <div className="bg-gradient-to-r from-dark-900/90 to-dark-800/90 border-b border-primary-500/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            الفرص الاستثمارية
          </h1>
          <p className="text-dark-400">
            استكشف جميع الفرص الاستثمارية المتاحة في الأراضي الزراعية الموسمية
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-8 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                الموسم
              </label>
              <select
                value={filterSeason}
                onChange={(e) => setFilterSeason(e.target.value)}
                className="w-full px-3 py-2 bg-dark-800/80 text-white border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="all">جميع المواسم</option>
                <option value="winter">شتوي</option>
                <option value="summer">صيفي</option>
                <option value="spring">ربيعي</option>
                <option value="autumn">خريفي</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-dark-300 mb-2">
                المنطقة
              </label>
              <select
                value={filterRegion}
                onChange={(e) => setFilterRegion(e.target.value)}
                className="w-full px-3 py-2 bg-dark-800/80 text-white border border-primary-500/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
        
        <div className="mb-4">
          <p className="text-dark-400">
            عرض {filteredOpportunities.length} من أصل {mockOpportunities.length} فرصة
          </p>
        </div>
        
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
        ) : (
          <Card className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              لا توجد نتائج
            </h3>
            <p className="text-dark-400">
              جرب تغيير فلاتر البحث للعثور على فرص استثمارية
            </p>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Opportunities;
