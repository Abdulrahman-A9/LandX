import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import OpportunityCard from '../../components/shared/OpportunityCard';
import NewsCard from '../../components/shared/NewsCard';
import { mockOpportunities } from '../../data/mock/opportunities';
import { mockNews } from '../../data/mock/news';
import {
  TargetIcon, UsersIcon, BuildingIcon, DollarSignIcon,
  SearchIcon, EyeIcon, PieChartIcon, HandshakeIcon,
  ShieldCheckIcon, ZapIcon, GlobeIcon, AwardIcon,
  NewspaperIcon, ArrowRightIcon, ChevronLeftIcon, MessageCircleIcon,
  SparklesIcon
} from '../../components/ui/Icons';

const Home = () => {
  const featuredOpportunities = mockOpportunities.slice(0, 3);
  const featuredNews = mockNews.slice(0, 3);

  const stats = [
    { icon: <TargetIcon />, value: '+120', label: 'فرصة استثمارية', color: 'text-brown-600' },
    { icon: <UsersIcon />, value: '+350', label: 'مستثمر مسجل', color: 'text-brown-600' },
    { icon: <BuildingIcon />, value: '15', label: 'بلدية شريكة', color: 'text-brown-600' },
    { icon: <DollarSignIcon />, value: '85M', label: 'ريال إجمالي الاستثمار', color: 'text-brown-600' },
  ];

  const steps = [
    {
      icon: <SearchIcon />,
      title: 'استكشف الفرص',
      description: 'تصفح الفرص الاستثمارية المتاحة في مختلف المناطق والمواسم الزراعية',
      step: '01'
    },
    {
      icon: <EyeIcon />,
      title: 'حلل وقارن',
      description: 'اطلع على التحليلات التفصيلية للفرص، المخاطر، والعوائد المتوقعة',
      step: '02'
    },
    {
      icon: <PieChartIcon />,
      title: 'خذ قرارك',
      description: 'استخدم الأدوات التحليلية لاتخاذ قرار استثماري مبني على بيانات دقيقة',
      step: '03'
    },
    {
      icon: <HandshakeIcon />,
      title: 'ابدأ الاستثمار',
      description: 'تواصل مع البلدية وابدأ رحلتك الاستثمارية بخطوات رسمية واضحة',
      step: '04'
    }
  ];

  const features = [
    {
      icon: <ShieldCheckIcon />,
      title: 'فرص موثقة رسمياً',
      description: 'جميع الفرص مقدمة من بلديات حكومية معتمدة ومرخصة'
    },
    {
      icon: <ZapIcon />,
      title: 'تحليل فوري ذكي',
      description: 'أدوات تحليلية متقدمة توفر لك قراءة واضحة للمخاطر والعوائد'
    },
    {
      icon: <GlobeIcon />,
      title: 'تغطية جغرافية واسعة',
      description: 'فرص استثمارية في مختلف مناطق المملكة من شمالها إلى جنوبها'
    },
    {
      icon: <AwardIcon />,
      title: 'دعم كامل للمستثمر',
      description: 'فريق متخصص لتوجيهك وإرشادك في كل مرحلة من مراحل الاستثمار'
    }
  ];

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
      
      {/* Statistics Section */}
      <section className="bg-gradient-to-r from-brown-600 to-brown-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <div className="w-16 h-16 bg-pearl-100/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pearl-300/30">
                  <span className="text-pearl-100">{stat.icon}</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-pearl-100 mb-2">{stat.value}</div>
                <div className="text-pearl-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-pearl-50 to-pearl-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-600 mb-4">
              كيف تعمل المنصة
            </h2>
            <p className="text-brown-700 max-w-2xl mx-auto">
              رحلة استثمارية واضحة من الاستكشاف حتى تنفيذ المشروع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brown-300 via-brown-400 to-brown-300 transform -translate-y-1/2 z-0"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative z-10 animate-fade-in" style={{ animationDelay: `${0.15 * index}s` }}>
                <Card className="bg-card-gradient border border-brown-300 hover:border-brown-500 transition-all duration-300 hover:scale-105 p-6 h-full text-center">
                  <div className="w-14 h-14 bg-gradient-to-r from-brown-200/30 to-brown-300/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-brown-400">
                    <span className="text-brown-600">{step.icon}</span>
                  </div>
                  <div className="text-xs font-bold text-brown-500 mb-2 tracking-wider">خطوة {step.step}</div>
                  <h3 className="text-lg font-bold text-brown-900 mb-3">{step.title}</h3>
                  <p className="text-brown-700 text-sm leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why LandX Section */}
      <section className="bg-gradient-to-b from-pearl-100 to-pearl-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-600 mb-6">
                لماذا LandX؟
              </h2>
              <p className="text-brown-700 text-lg leading-relaxed mb-8">
                نحن نقدم تجربة استثمارية فريدة تجمع بين البيانات الدقيقة، التحليل الذكي، والشراكات الرسمية مع الجهات الحكومية
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 animate-slide-up" style={{ animationDelay: `${0.1 * index}s` }}>
                    <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                      <span className="text-brown-600">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-brown-900 mb-1">{feature.title}</h3>
                      <p className="text-brown-700 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brown-200/30 to-brown-300/30 rounded-2xl transform rotate-3"></div>
                <Card className="relative bg-card-gradient border border-brown-300 p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-pearl-100/50 rounded-lg p-4 text-center border border-brown-300">
                      <div className="text-2xl font-bold text-brown-700 mb-1">98%</div>
                      <div className="text-xs text-brown-600">نسبة رضا المستثمرين</div>
                    </div>
                    <div className="bg-pearl-100/50 rounded-lg p-4 text-center border border-brown-300">
                      <div className="text-2xl font-bold text-brown-700 mb-1">24/7</div>
                      <div className="text-xs text-brown-600">دعم فني متواصل</div>
                    </div>
                    <div className="bg-pearl-100/50 rounded-lg p-4 text-center border border-brown-300">
                      <div className="text-2xl font-bold text-brown-700 mb-1">+40%</div>
                      <div className="text-xs text-brown-600">متوسط العائد السنوي</div>
                    </div>
                    <div className="bg-pearl-100/50 rounded-lg p-4 text-center border border-brown-300">
                      <div className="text-2xl font-bold text-brown-700 mb-1">&lt;24h</div>
                      <div className="text-xs text-brown-600">وقت الرد على الاستفسارات</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-b from-pearl-100 via-pearl-50 to-pearl-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brown-200/30 to-brown-300/30 rounded-full border border-brown-400 text-brown-700 text-sm font-semibold mb-4">
              <SparklesIcon className="w-4 h-4" />
              خدمات مميزة
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-600 mb-4">
              خدمات المنصة
            </h2>
            <p className="text-brown-700 max-w-2xl mx-auto text-lg">
              أدوات ذكية وخدمات تحليلية شاملة تدعم قرارك الاستثماري من البداية للنهاية
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1: AI Analysis */}
            <Card className="bg-card-gradient border border-brown-300 hover:border-brown-500 transition-all duration-300 hover:scale-105 hover:shadow-xl p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mx-auto mb-5 border-2 border-amber-300 group-hover:scale-110 transition-transform duration-300">
                <SparklesIcon className="text-amber-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brown-900 mb-3">التحليل الاستثماري الذكي</h3>
              <p className="text-brown-700 text-sm mb-6 leading-relaxed">
                أدخل بيانات مشروعك ويقوم الذكاء الاصطناعي بتحليل الجدوى وتقدير التكاليف والعوائد وإصدار تقرير احترافي
              </p>
              <Link
                to="/investment-analysis"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 font-bold rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center"
              >
                <SparklesIcon className="w-4 h-4" />
                جرب الخدمة الآن
              </Link>
            </Card>

            {/* Service 2: Browse Opportunities */}
            <Card className="bg-card-gradient border border-brown-300 hover:border-brown-500 transition-all duration-300 hover:scale-105 hover:shadow-xl p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-5 border-2 border-green-300 group-hover:scale-110 transition-transform duration-300">
                <SearchIcon className="text-green-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brown-900 mb-3">استكشاف الفرص</h3>
              <p className="text-brown-700 text-sm mb-6 leading-relaxed">
                تصفح فرص استثمارية موثقة من بلديات حكومية في مختلف المناطق مع تفاصيل شاملة لكل فرصة
              </p>
              <Link
                to="/opportunities"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center"
              >
                <SearchIcon className="w-4 h-4" />
                استعرض الفرص
              </Link>
            </Card>

            {/* Service 3: Consulting */}
            <Card className="bg-card-gradient border border-brown-300 hover:border-brown-500 transition-all duration-300 hover:scale-105 hover:shadow-xl p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-5 border-2 border-blue-300 group-hover:scale-110 transition-transform duration-300">
                <HandshakeIcon className="text-blue-700 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-brown-900 mb-3">الاستشارات المخصصة</h3>
              <p className="text-brown-700 text-sm mb-6 leading-relaxed">
                تواصل مع فريق المتخصصين للحصول على مراجعة بشرية عميقة لمشروعك وتوصيات مخصصة
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg w-full justify-center"
              >
                <HandshakeIcon className="w-4 h-4" />
                تواصل معنا
              </Link>
            </Card>
          </div>
        </div>
      </section>

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
              <ChevronLeftIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gradient-to-b from-pearl-50 to-pearl-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-600 mb-2">
                آخر الأخبار والإعلانات
              </h2>
              <p className="text-brown-700">تابع آخر مستجدات الفرص والمشاريع الاستثمارية</p>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center gap-2 text-brown-700 hover:text-brown-900 font-semibold transition-all duration-300 hover:translate-x-1">
              عرض الكل
              <ChevronLeftIcon />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNews.map((news, index) => (
              <div key={news.id} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
                <NewsCard news={news} />
              </div>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/news" className="inline-flex items-center gap-2 text-brown-700 hover:text-brown-900 font-semibold transition-all duration-300">
              عرض الكل
              <ChevronLeftIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-brown-600 via-brown-700 to-brown-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pearl-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-pearl-100 mb-6">
            جاهز لبدء رحلتك الاستثمارية؟
          </h2>
          <p className="text-pearl-200 text-lg mb-10 max-w-2xl mx-auto">
            انضم إلى مئات المستثمرين الذين يثقون بـ LandX لاتخاذ قرارات استثمارية ذكية ومبنية على بيانات دقيقة
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-pearl-100 text-brown-700 font-bold rounded-lg hover:bg-pearl-200 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              سجل الآن مجاناً
              <ArrowRightIcon />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-pearl-300 text-pearl-100 font-bold rounded-lg hover:bg-pearl-100/10 transition-all duration-300"
            >
              تواصل معنا
              <MessageCircleIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
