import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { LeafIcon } from '../ui/Icons';

const OpportunityCard = ({ opportunity }) => {
  const { id, title, municipality, location, season, area, areaUnit, expectedReturn, investmentRequired, currency, status, images } = opportunity;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <Card hover className="overflow-hidden">
      <div className="aspect-video bg-app-surface-soft relative overflow-hidden">
        {images && images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-app-surface-soft to-app-surface">
            <LeafIcon className="w-16 h-16 text-muted" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant={status === 'active' ? 'success' : 'warning'}>
            {status === 'active' ? 'نشط' : 'قيد المراجعة'}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-app-text mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-app-text-muted mb-3">
          {municipality}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-app-surface-soft border border-app-border rounded-lg p-2">
            <p className="text-app-text-soft text-xs">الموسم</p>
            <p className="font-medium text-app-text">{season === 'winter' ? 'شتوي' : season === 'summer' ? 'صيفي' : season === 'spring' ? 'ربيعي' : 'خريفي'}</p>
          </div>
          <div className="bg-app-surface-soft border border-app-border rounded-lg p-2">
            <p className="text-app-text-soft text-xs">المساحة</p>
            <p className="font-medium text-app-text">{area} {areaUnit}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-app-text-soft">العائد المتوقع</p>
            <p className="text-lg font-bold text-success">{expectedReturn}%</p>
          </div>
          <div className="text-left">
            <p className="text-xs text-app-text-soft">الاستثمار المطلوب</p>
            <p className="text-lg font-bold text-brand">{formatCurrency(investmentRequired)} {currency}</p>
          </div>
        </div>

        <Link
          to={`/opportunities/${id}`}
          className="block w-full text-center bg-app-surface border border-app-border text-app-text py-2 rounded-lg hover:bg-app-surface-strong hover:border-brand font-medium transition-all duration-300 hover:scale-105"
        >
          عرض التفاصيل
        </Link>
      </div>
    </Card>
  );
};

export default OpportunityCard;
