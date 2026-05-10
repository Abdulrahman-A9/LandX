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
      <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 flex items-center justify-center px-4">
        <Card className="text-center py-12 px-6 max-w-xl w-full bg-card-gradient border border-brown-300">
          <div className="text-6xl mb-4">😕</div>
          <h2 className="text-2xl font-bold text-brown-900 mb-2">
            الفرصة غير موجودة
          </h2>
          <p className="text-brown-700 mb-6">
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
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 text-brown-900">
      <div className="bg-gradient-to-r from-brown-600/90 to-brown-700/90 border-b border-brown-400/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/opportunities" className="text-pearl-200 hover:text-pearl-100 font-medium mb-4 inline-block transition-colors">
            ← العودة للفرص الاستثمارية
          </Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
            <div>
              <Badge variant={status === 'active' ? 'success' : 'warning'} className="mb-2">
                {status === 'active' ? 'نشط' : 'قيد المراجعة'}
              </Badge>
              <h1 className="text-3xl font-bold text-white">{title}</h1>
              <p className="text-pearl-100 mt-2">{municipality}</p>
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
              <div className="aspect-video bg-pearl-200 rounded-lg overflow-hidden border border-brown-300">
                {images && images.length > 0 ? (
                  <img 
                    src={images[0]} 
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pearl-200 to-pearl-300">
                    <span className="text-brown-400 text-4xl">🌾</span>
                  </div>
                )}
              </div>
              {images && images.length > 1 && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video bg-pearl-200 rounded-lg overflow-hidden border border-brown-300">
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
              <h2 className="text-xl font-bold text-brown-900 mb-4">وصف الفرصة</h2>
              <p className="text-brown-800 leading-relaxed">
                {description}
              </p>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-bold text-brown-900 mb-4">المميزات</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-brown-600">✓</span>
                    <span className="text-brown-800">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-brown-900 mb-4">معلومات الاستثمار</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-brown-300">
                  <span className="text-brown-700">الموسم</span>
                  <span className="font-semibold text-brown-900">{seasonLabels[season]}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-brown-300">
                  <span className="text-brown-700">المساحة</span>
                  <span className="font-semibold text-brown-900">{area} {areaUnit}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-brown-300">
                  <span className="text-brown-700">العائد المتوقع</span>
                  <span className="font-semibold text-brown-600 text-lg">{expectedReturn}%</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-brown-300">
                  <span className="text-brown-700">الاستثمار المطلوب</span>
                  <span className="font-semibold text-pearl-700 text-lg">
                    {formatCurrency(investmentRequired)} {currency}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="text-brown-700">الموقع</span>
                  <span className="font-semibold text-white text-right">{location}</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h2 className="text-xl font-bold text-brown-900 mb-4">الجهة المصدرة</h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-full border border-brown-400 flex items-center justify-center">
                  <span className="text-brown-700 font-bold text-xl">🏛️</span>
                </div>
                <div>
                  <p className="font-semibold text-brown-900">{municipality}</p>
                  <p className="text-sm text-brown-700">جهة حكومية معتمدة</p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-to-r from-brown-200/10 to-brown-300/10 border border-brown-300">
              <h2 className="text-xl font-bold text-brown-900 mb-4">هل لديك استفسار؟</h2>
              <p className="text-brown-800 mb-4">
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
