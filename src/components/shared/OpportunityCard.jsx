import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const OpportunityCard = ({ opportunity }) => {
  const { id, title, municipality, location, season, area, areaUnit, expectedReturn, investmentRequired, currency, status, images } = opportunity;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  return (
    <Card hover className="overflow-hidden bg-card-gradient backdrop-blur border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
      <div className="aspect-video bg-dark-800 relative overflow-hidden">
        {images && images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
            <span className="text-dark-600 text-4xl">🌾</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant={status === 'active' ? 'success' : 'warning'}>
            {status === 'active' ? 'نشط' : 'قيد المراجعة'}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-dark-400 mb-3">
          {municipality}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-dark-800/50 border border-primary-500/20 rounded-lg p-2">
            <p className="text-dark-500 text-xs">الموسم</p>
            <p className="font-medium text-white">{season === 'winter' ? 'شتوي' : season === 'summer' ? 'صيفي' : season === 'spring' ? 'ربيعي' : 'خريفي'}</p>
          </div>
          <div className="bg-dark-800/50 border border-primary-500/20 rounded-lg p-2">
            <p className="text-dark-500 text-xs">المساحة</p>
            <p className="font-medium text-white">{area} {areaUnit}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-dark-500">العائد المتوقع</p>
            <p className="text-lg font-bold text-primary-400">{expectedReturn}%</p>
          </div>
          <div className="text-left">
            <p className="text-xs text-dark-500">الاستثمار المطلوب</p>
            <p className="text-lg font-bold text-secondary-400">{formatCurrency(investmentRequired)} {currency}</p>
          </div>
        </div>
        
        <Link
          to={`/opportunities/${id}`}
          className="block w-full text-center bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 py-2 rounded-lg hover:from-primary-500/30 hover:to-secondary-500/30 font-medium transition-all duration-300 hover:scale-105"
        >
          عرض التفاصيل
        </Link>
      </div>
    </Card>
  );
};

export default OpportunityCard;
