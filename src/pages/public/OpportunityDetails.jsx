import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { mockOpportunities } from '../../data/mock/opportunities';

const OpportunityDetails = () => {
  const { id } = useParams();
  const opportunity = mockOpportunities.find((op) => op.id === parseInt(id));
  
  if (!opportunity) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 flex items-center justify-center px-4">
        <Card className="text-center py-12 px-6 max-w-xl w-full bg-dark-800 border border-primary-500/20">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            الفرصة غير موجودة
          </h2>
          <p className="text-dark-400 mb-6">
            عذراً، الفرصة الاستثمارية التي تبحث عنها غير موجودة
          </p>
          <Link to="/opportunities">
            <Button>العودة للفرص الاستثمارية</Button>
          </Link>
        </Card>
      </div>
    );
  }
  
  const {
    title,
    municipality,
    location,
    season,
    area,
    areaUnit,
    expectedReturn,
    investmentRequired,
    currency,
    status,
    images,
    description,
    features,
  } = opportunity;
  
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };
  
  const seasonLabels = {
    winter: 'شتوي',
    summer: 'صيفي',
    spring: 'ربيعي',
    autumn: 'خريفي',
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white">
      <div className="bg-gradient-to-r from-dark-900/90 to-dark-800/90 border-b border-primary-500/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/opportunities" className="text-primary-400 hover:text-primary-300 font-medium mb-4 inline-block transition-colors">
            ← العودة للفرص الاستثمارية
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
            <div>
              <Badge variant={status === 'active' ? 'success' : 'warning'} className="mb-2">
                {status === 'active' ? 'نشط' : 'قيد المراجعة'}
              </Badge>
              <h1 className="text-3xl font-bold text-white">{title}</h1>
              <p className="text-dark-400 mt-2">{municipality}</p>
            </div>
            <Button size="lg">
              طلب استثمار
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="aspect-video bg-dark-800 rounded-lg overflow-hidden border border-primary-500/20">
                {images && images.length > 0 ? (
                  <img 
                    src={images[0]} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
                    <span className="text-dark-500 text-4xl">🌾</span>
                  </div>
                )}
              </div>
              {images && images.length > 1 && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video bg-dark-800 rounded-lg overflow-hidden border border-primary-500/20">
                      <img 
                        src={image} 
                        alt={`${title} ${index + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">وصف الفرصة</h2>
              <p className="text-dark-300 leading-relaxed">
                {description}
              </p>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">المميزات</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-primary-400">✓</span>
                    <span className="text-dark-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">معلومات الاستثمار</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-primary-500/20">
                  <span className="text-dark-400">الموسم</span>
                  <span className="font-semibold text-white">{seasonLabels[season]}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-primary-500/20">
                  <span className="text-dark-400">المساحة</span>
                  <span className="font-semibold text-white">{area} {areaUnit}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-primary-500/20">
                  <span className="text-dark-400">العائد المتوقع</span>
                  <span className="font-semibold text-primary-400 text-lg">{expectedReturn}%</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-primary-500/20">
                  <span className="text-dark-400">الاستثمار المطلوب</span>
                  <span className="font-semibold text-secondary-400 text-lg">
                    {formatCurrency(investmentRequired)} {currency}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-dark-400">الموقع</span>
                  <span className="font-semibold text-white text-right">{location}</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-bold text-white mb-4">الجهة المصدرة</h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full border border-primary-500/30 flex items-center justify-center">
                  <span className="text-primary-400 font-bold text-xl">🏛️</span>
                </div>
                <div>
                  <p className="font-semibold text-white">{municipality}</p>
                  <p className="text-sm text-dark-400">جهة حكومية معتمدة</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/30">
              <h2 className="text-xl font-bold text-white mb-4">هل لديك استفسار؟</h2>
              <p className="text-dark-300 mb-4">
                يمكنك التواصل معنا مباشرة للحصول على مزيد من المعلومات
              </p>
              <Link to="/contact">
                <Button className="w-full">
                  تواصل معنا
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetails;
