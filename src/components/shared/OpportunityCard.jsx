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
    <Card hover className="overflow-hidden border border-app-border/80 bg-card-gradient shadow-lg shadow-black/10">
      <div className="aspect-[16/10] bg-app-surface-soft relative overflow-hidden">
        {images && images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover scale-[1.01] hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-app-surface-soft to-app-surface">
            <LeafIcon className="w-16 h-16 text-muted" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f0a]/55 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge variant={status === 'active' ? 'success' : 'warning'}>
            {status === 'active' ? 'نشط' : 'قيد المراجعة'}
          </Badge>
        </div>
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
          <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md px-3 py-2 text-xs text-white/90 shadow-lg">
            {location}
          </div>
          <div className="rounded-2xl border border-brand/20 bg-brand/10 backdrop-blur-md px-3 py-2 text-xs font-medium text-app-text">
            {season === 'winter' ? 'شتوي' : season === 'summer' ? 'صيفي' : season === 'spring' ? 'ربيعي' : 'خريفي'}
          </div>
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
