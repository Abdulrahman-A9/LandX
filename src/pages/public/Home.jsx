import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import { mockOpportunities } from '../../data/mock/opportunities';

const Home = () => {
  const featuredOpportunities = mockOpportunities.slice(0, 3);
  
  return (
    <div className="min-h-screen bg-dark-950">
      {/* Hero Section */}
      <div className="min-h-screen bg-dark-950 bg-grid-pattern bg-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Left Section - Cards */}
            <div className="space-y-6">
              <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
                <span className="text-primary-400 text-sm font-medium">رؤية ٢٠٣٠: استثمار مستدام</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-dark-900/80 backdrop-blur border border-dark-700 p-5">
                  <h3 className="text-dark-400 text-sm mb-2">الأحياء ذات الأولوية</h3>
                  <p className="text-white font-semibold">النقرة، مشار</p>
                </Card>
                
                <Card className="bg-dark-900/80 backdrop-blur border border-dark-700 p-5">
                  <h3 className="text-dark-400 text-sm mb-2">التحويل إلى فرص</h3>
                  <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">جاهز</span>
                </Card>
              </div>
              
              <div className="bg-dark-900/80 backdrop-blur border border-dark-700 rounded-lg p-6">
                <h3 className="text-primary-400 font-semibold mb-4">مركز القرار الاستثماري</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-dark-800 border border-dark-600 p-4">
                    <h4 className="text-dark-400 text-xs mb-1">الطلب الموسمي</h4>
                    <p className="text-green-400 font-semibold">مرتفع</p>
                  </Card>
                  <Card className="bg-dark-800 border border-dark-600 p-4">
                    <h4 className="text-dark-400 text-xs mb-1">المخاطر القابلة للإدارة</h4>
                    <p className="text-white font-semibold">7 فرص</p>
                  </Card>
                </div>
              </div>
              
              <Card className="bg-dark-900/80 backdrop-blur border border-dark-700 p-6">
                <h3 className="text-primary-400 font-semibold mb-3">لماذا هذا مهم؟</h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  منصة LandX تقدم تحليلاً أوضح للفرص الاستثمارية في الأراضي الموسمية، مما يوفر للمستثمرين والجهات التنظيمية قراءة أوضح للفرص والأحياء والمخاطر والعوائد قبل التقديم عبر المسارات الرسمية.
                </p>
              </Card>
            </div>
            
            {/* Right Section - Hero Content */}
            <div className="text-right space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-white">
                  LandX | لاند إكس
                </h1>
                <p className="text-primary-400 text-xl">في لاند إكس نقدم</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed">
                تحليلاً أوضح للفرص قبل التقديم على المسارات الرسمية.
              </h2>
              
              <p className="text-dark-400 text-lg leading-relaxed">
                منصة استدلالية لدعم القرار الاستثماري في منطقة حائل، تقدم للمستثمرين والجهات التنظيمية قراءة أوضح للفرص والأحياء والمخاطر والعوائد قبل التقديم الرسمي.
              </p>
              
              <div className="space-y-4 pt-4">
                <Link to="/register" className="group flex items-center justify-end gap-3 text-primary-400 hover:text-primary-300 transition-colors">
                  <span className="text-lg font-semibold">ابدأ طلب استشاري</span>
                  <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    ←
                  </span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-end gap-3 text-primary-400 hover:text-primary-300 transition-colors">
                  <span className="text-lg font-semibold">استعرض الفرص</span>
                  <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    ←
                  </span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-end gap-3 text-primary-400 hover:text-primary-300 transition-colors">
                  <span className="text-lg font-semibold">استعرض الأراضي المتاحة</span>
                  <span className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                    ←
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Opportunities Section */}
      <section className="bg-dark-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              فرص استثمارية مميزة
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto">
              استكشف أحدث الفرص الاستثمارية في الأراضي الزراعية الموسمية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/opportunities" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold">
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
