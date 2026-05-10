import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import NewsCard from '../../components/shared/NewsCard';
import { mockOpportunities, mockNews, mockAnnouncements } from '../../data/mock/opportunities';

const Home = () => {
  const featuredOpportunities = mockOpportunities.slice(0, 3);
  const latestNews = mockNews.slice(0, 2);
  const highPriorityAnnouncements = mockAnnouncements.filter(a => a.priority === 'high').slice(0, 2);
  
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              منصة استثمارات الأراضي الموسمية
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              بوابتك الآمنة للاستثمار في القطاع الزراعي في المملكة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/opportunities">
                <Button size="lg" className="w-full sm:w-auto">
                  استكشف الفرص الاستثمارية
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto !border-white !text-white hover:!bg-white/10">
                  اعرف المزيد عن المنصة
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {highPriorityAnnouncements.length > 0 && (
        <section className="bg-accent-50 border-y border-accent-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-accent-600 font-bold">📢 إعلانات هامة</span>
            </div>
            <div className="space-y-2">
              {highPriorityAnnouncements.map((announcement) => (
                <div key={announcement.id} className="text-sm">
                  <span className="font-medium text-accent-800">{announcement.title}</span>
                  <span className="text-accent-600 mr-2">- {announcement.content}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              فرص استثمارية مميزة
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استكشف أحدث الفرص الاستثمارية في الأراضي الزراعية الموسمية المتاحة عبر المنصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredOpportunities.map((opportunity) => (
              <OpportunityCard key={opportunity.id} opportunity={opportunity} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/opportunities">
              <Button variant="outline">
                عرض جميع الفرص الاستثمارية
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              لماذا تستثمر عبر منصتنا؟
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              نقدم بيئة استثمارية آمنة وشفافة مع شراكات رسمية مع البلديات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="font-semibold text-lg mb-2">آمن وموثوق</h3>
              <p className="text-gray-600 text-sm">
                شراكات رسمية مع البلديات وضمانات قانونية
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-semibold text-lg mb-2">شفافية كاملة</h3>
              <p className="text-gray-600 text-sm">
                معلومات مفصلة عن كل فرصة استثمارية
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-semibold text-lg mb-2">دعم مستمر</h3>
              <p className="text-gray-600 text-sm">
                فريق دعم متاح لمساعدتك في كل خطوة
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-semibold text-lg mb-2">عوائد مجزية</h3>
              <p className="text-gray-600 text-sm">
                فرص استثمارية بعوائد تنافسية
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أحدث الأخبار
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تابع آخر الأخبار والتحديثات من البلديات الشريكة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {latestNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/news">
              <Button variant="outline">
                عرض جميع الأخبار
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            جاهز لبدء الاستثمار؟
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            انضم إلى آلاف المستثمرين الذين يستفيدون من فرص الاستثمار الزراعي عبر منصتنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg">
                إنشاء حساب مجاني
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
