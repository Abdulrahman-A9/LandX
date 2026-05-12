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
    <Card hover className="overflow-hidden bg-card-gradient backdrop-blur border border-brown-300 hover:border-brown-400 transition-all duration-300 hover:scale-105">
      <div className="aspect-video bg-pearl-200 dark:bg-stone-800 relative overflow-hidden">
        {images && images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pearl-200 to-pearl-300 dark:from-stone-800 dark:to-stone-700">
            <LeafIcon className="w-16 h-16 text-brown-400 dark:text-stone-500" />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant={status === 'active' ? 'success' : 'warning'}>
            {status === 'active' ? 'نشط' : 'قيد المراجعة'}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-brown-900 dark:text-stone-100 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-sm text-brown-700 dark:text-stone-400 mb-3">
          {municipality}
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg p-2">
            <p className="text-brown-600 dark:text-stone-400 text-xs">الموسم</p>
            <p className="font-medium text-brown-900 dark:text-stone-200">{season === 'winter' ? 'شتوي' : season === 'summer' ? 'صيفي' : season === 'spring' ? 'ربيعي' : 'خريفي'}</p>
          </div>
          <div className="bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg p-2">
            <p className="text-brown-600 dark:text-stone-400 text-xs">المساحة</p>
            <p className="font-medium text-brown-900 dark:text-stone-200">{area} {areaUnit}</p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-brown-600 dark:text-stone-400">العائد المتوقع</p>
            <p className="text-lg font-bold text-brown-600 dark:text-stone-300">{expectedReturn}%</p>
          </div>
          <div className="text-left">
            <p className="text-xs text-brown-600 dark:text-stone-400">الاستثمار المطلوب</p>
            <p className="text-lg font-bold text-pearl-700 dark:text-stone-300">{formatCurrency(investmentRequired)} {currency}</p>
          </div>
        </div>

        <Link
          to={`/opportunities/${id}`}
          className="block w-full text-center bg-gradient-to-r from-brown-200/20 to-brown-300/20 dark:from-stone-700/40 dark:to-stone-600/40 text-brown-700 dark:text-stone-300 py-2 rounded-lg hover:from-brown-300/30 hover:to-brown-400/30 dark:hover:from-stone-600/50 dark:hover:to-stone-500/50 font-medium transition-all duration-300 hover:scale-105"
        >
          عرض التفاصيل
        </Link>
      </div>
    </Card>
  );
};

export default OpportunityCard;
