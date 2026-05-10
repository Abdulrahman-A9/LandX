import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import { mockOpportunities } from '../../data/mock/opportunities';

const Home = () => {
  const featuredOpportunities = mockOpportunities.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-pearl-50">
      {/* Hero Section */}
      <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brown-200/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pearl-300/40 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brown-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Right Section - Hero Content */}
            <div className="text-right space-y-6 animate-slide-in-left">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-600 animate-fade-in">
                  LandX
                </h1>
                <p className="text-brown-600 text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>في LandX نقدم</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-brown-900 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                تحليلاً أوضح للفرص قبل التقديم على المسارات الرسمية.
              </h2>
              
              <p className="text-brown-700 text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                منصة استدلالية لدعم القرار الاستثماري في منطقة حائل، تقدم للمستثمرين والجهات التنظيمية قراءة أوضح للفرص والأحياء والمخاطر والعوائد قبل التقديم الرسمي.
              </p>
              
              <div className="space-y-4 pt-4">
                <Link to="/register" className="group flex items-center justify-end gap-3 text-brown-700 hover:text-brown-900 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <span className="text-lg font-semibold">ابدأ طلب استشاري</span>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-brown-200 to-brown-300 flex items-center justify-center group-hover:from-brown-300 group-hover:to-brown-400 transition-all duration-300 group-hover:scale-110">
                    ←
                  </span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-end gap-3 text-brown-700 hover:text-brown-900 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <span className="text-lg font-semibold">استعرض الفرص</span>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-brown-200 to-brown-300 flex items-center justify-center group-hover:from-brown-300 group-hover:to-brown-400 transition-all duration-300 group-hover:scale-110">
                    ←
                  </span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-end gap-3 text-brown-700 hover:text-brown-900 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <span className="text-lg font-semibold">استعرض الأراضي المتاحة</span>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-brown-200 to-brown-300 flex items-center justify-center group-hover:from-brown-300 group-hover:to-brown-400 transition-all duration-300 group-hover:scale-110">
                    ←
                  </span>
                </Link>
              </div>
            </div>

            {/* Left Section - Cards */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-gradient-to-r from-brown-200/50 to-pearl-200/50 border border-brown-300 rounded-lg p-4 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-brown-700 text-sm font-medium">رؤية ٢٠٣٠: استثمار مستدام</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card-gradient backdrop-blur border border-brown-300 p-5 hover:border-brown-400 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-brown-600 text-sm mb-2">الأحياء ذات الأولوية</h3>
                  <p className="text-brown-900 font-semibold">النقرة، مشار</p>
                </Card>
                
                <Card className="bg-card-gradient backdrop-blur border border-brown-300 p-5 hover:border-brown-400 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-brown-600 text-sm mb-2">التحويل إلى فرص</h3>
                  <span className="inline-block px-3 py-1 bg-brown-200 text-brown-700 rounded-full text-sm animate-pulse">جاهز</span>
                </Card>
              </div>
              
              <div className="bg-card-gradient backdrop-blur border border-brown-300 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-brown-700 font-semibold mb-4">مركز القرار الاستثماري</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-pearl-50/80 border border-pearl-300 p-4 hover:border-pearl-400 transition-all duration-300">
                    <h4 className="text-brown-600 text-xs mb-1">الطلب الموسمي</h4>
                    <p className="text-brown-800 font-semibold">مرتفع</p>
                  </Card>
                  <Card className="bg-pearl-50/80 border border-pearl-300 p-4 hover:border-pearl-400 transition-all duration-300">
                    <h4 className="text-brown-600 text-xs mb-1">المخاطر القابلة للإدارة</h4>
                    <p className="text-brown-900 font-semibold">7 فرص</p>
                  </Card>
                </div>
              </div>
              
              <Card className="bg-card-gradient backdrop-blur border border-brown-300 p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-brown-700 font-semibold mb-3">لماذا هذا مهم؟</h3>
                <p className="text-brown-800 text-sm leading-relaxed">
                  منصة LandX تقدم تحليلاً أوضح للفرص الاستثمارية في الأراضي الموسمية، مما يوفر للمستثمرين والجهات التنظيمية قراءة أوضح للفرص والأحياء والمخاطر والعوائد قبل التقديم عبر المسارات الرسمية.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Opportunities Section */}
      <section className="bg-gradient-to-b from-pearl-100 to-pearl-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-600 mb-4 animate-fade-in">
              فرص استثمارية مميزة
            </h2>
            <p className="text-brown-700 max-w-2xl mx-auto animate-slide-up">
              استكشف أحدث الفرص الاستثمارية في الأراضي الزراعية الموسمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity, index) => (
              <div key={opportunity.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <OpportunityCard opportunity={opportunity} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/opportunities" className="inline-flex items-center gap-2 text-brown-700 hover:text-brown-900 font-semibold transition-all duration-300 hover:translate-x-2">
              عرض جميع الفرص الاستثمارية
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
