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
    <Card hover className="overflow-hidden">
      <div className="aspect-video bg-gray-200 relative">
        {images && images.length > 0 ? (
          <img 
            src={images[0]} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500 text-4xl">🌾</span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <Badge variant={status === 'active' ? 'success' : 'warning'}>
            {status === 'active' ? 'نشط' : 'قيد المراجعة'}
          </Badge>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">
          {municipality}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
          <div className="bg-gray-50 rounded-lg p-2">
            <p className="text-gray-500 text-xs">الموسم</p>
            <p className="font-medium text-gray-900">{season === 'winter' ? 'شتوي' : season === 'summer' ? 'صيفي' : season === 'spring' ? 'ربيعي' : 'خريفي'}</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-2">
            <p className="text-gray-500 text-xs">المساحة</p>
            <p className="font-medium text-gray-900">{area} {areaUnit}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-gray-500">العائد المتوقع</p>
            <p className="text-lg font-bold text-green-600">{expectedReturn}%</p>
          </div>
          <div className="text-left">
            <p className="text-xs text-gray-500">الاستثمار المطلوب</p>
            <p className="text-lg font-bold text-primary-600">{formatCurrency(investmentRequired)} {currency}</p>
          </div>
        </div>
        
        <Link
          to={`/opportunities/${id}`}
          className="block w-full text-center bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 font-medium transition-colors"
        >
          عرض التفاصيل
        </Link>
      </div>
    </Card>
  );
};

export default OpportunityCard;
