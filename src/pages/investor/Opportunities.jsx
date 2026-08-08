import React from 'react';
import OpportunityCard from '../../components/shared/OpportunityCard';
import Card from '../../components/ui/Card';
import { useAsyncData } from '../../hooks/useAsyncData';
import { mapOpportunity } from '../../lib/adapters';
import { opportunitiesApi } from '../../lib/api';

const InvestorOpportunities = () => {
  const { data: opportunities, loading, error } = useAsyncData(async () => {
    const result = await opportunitiesApi.list();
    return result.map(mapOpportunity);
  }, []);

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل الفرص...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">الفرص الاستثمارية المتاحة</h1>
        <p className="mt-2 text-app-text-muted">استعرض الفرص المنشورة وقارن بينها وفق أهدافك الاستثمارية.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
        {opportunities.map((opportunity) => (
          <OpportunityCard key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
};

export default InvestorOpportunities;
