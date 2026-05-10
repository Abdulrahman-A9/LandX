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
      <div className="min-h-screen bg-hero-gradient relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
            {/* Right Section - Hero Content */}
            <div className="text-right space-y-6 animate-slide-in-left">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 animate-fade-in">
                  LandX
                </h1>
                <p className="text-primary-400 text-xl animate-fade-in" style={{ animationDelay: '0.1s' }}>في LandX نقدم</p>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                تحليلاً أوضح للفرص قبل التقديم على المسارات الرسمية.
              </h2>
              
              <p className="text-dark-400 text-lg leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                منصة استدلالية لدعم القرار الاستثماري في منطقة حائل، تقدم للمستثمرين والجهات التنظيمية قراءة أوضح للفرص والأحياء والمخاطر والعوائد قبل التقديم الرسمي.
              </p>
              
              <div className="space-y-4 pt-4">
                <Link to="/register" className="group flex items-center justify-end gap-3 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <span className="text-lg font-semibold">ابدأ طلب استشاري</span>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300 group-hover:scale-110">
                    ←
                  </span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-end gap-3 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <span className="text-lg font-semibold">استعرض الفرص</span>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300 group-hover:scale-110">
                    ←
                  </span>
                </Link>
                
                <Link to="/opportunities" className="group flex items-center justify-end gap-3 text-primary-400 hover:text-primary-300 transition-all duration-300 hover:translate-x-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <span className="text-lg font-semibold">استعرض الأراضي المتاحة</span>
                  <span className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300 group-hover:scale-110">
                    ←
                  </span>
                </Link>
              </div>
            </div>

            {/* Left Section - Cards */}
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-4 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <span className="text-primary-400 text-sm font-medium">رؤية ٢٠٣٠: استثمار مستدام</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-card-gradient backdrop-blur border border-primary-500/30 p-5 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  <h3 className="text-dark-400 text-sm mb-2">الأحياء ذات الأولوية</h3>
                  <p className="text-white font-semibold">النقرة، مشار</p>
                </Card>
                
                <Card className="bg-card-gradient backdrop-blur border border-primary-500/30 p-5 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="text-dark-400 text-sm mb-2">التحويل إلى فرص</h3>
                  <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm animate-pulse">جاهز</span>
                </Card>
              </div>
              
              <div className="bg-card-gradient backdrop-blur border border-primary-500/30 rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h3 className="text-primary-400 font-semibold mb-4">مركز القرار الاستثماري</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-dark-800/50 border border-secondary-500/30 p-4 hover:border-secondary-500/50 transition-all duration-300">
                    <h4 className="text-dark-400 text-xs mb-1">الطلب الموسمي</h4>
                    <p className="text-primary-400 font-semibold">مرتفع</p>
                  </Card>
                  <Card className="bg-dark-800/50 border border-secondary-500/30 p-4 hover:border-secondary-500/50 transition-all duration-300">
                    <h4 className="text-dark-400 text-xs mb-1">المخاطر القابلة للإدارة</h4>
                    <p className="text-white font-semibold">7 فرص</p>
                  </Card>
                </div>
              </div>
              
              <Card className="bg-card-gradient backdrop-blur border border-primary-500/30 p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-primary-400 font-semibold mb-3">لماذا هذا مهم؟</h3>
                <p className="text-dark-300 text-sm leading-relaxed">
                  منصة LandX تقدم تحليلاً أوضح للفرص الاستثمارية في الأراضي الموسمية، مما يوفر للمستثمرين والجهات التنظيمية قراءة أوضح للفرص والأحياء والمخاطر والعوائد قبل التقديم عبر المسارات الرسمية.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Opportunities Section */}
      <section className="bg-gradient-to-b from-dark-900 to-dark-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4 animate-fade-in">
              فرص استثمارية مميزة
            </h2>
            <p className="text-dark-400 max-w-2xl mx-auto animate-slide-up">
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
            <Link to="/opportunities" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 hover:translate-x-2">
              عرض جميع الفرص الاستثمارية
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Investor Journey Section */}
      <section className="bg-gradient-to-b from-dark-950 to-dark-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-4 animate-fade-in">
              رحلة المستثمر
            </h2>
            <p className="text-dark-400 text-xl max-w-3xl mx-auto animate-slide-up">
              رحلة واضحة من الدخول حتى القرار
            </p>
            <p className="text-dark-500 max-w-4xl mx-auto mt-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              هذه الصفحة تجيب على السؤال الذي يخاف منه أي مستثمر: من أين أبدأ، ما الذي سأراه، متى أتعّمق، ومتى أخرج إلى القرار أو التقديم؟ المنصة هنا ليست متاهة خدمات، بل مسار قرار مبني على خطوات قصيرة ومفهومة.
            </p>
          </div>

          {/* Visual Journey Map */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card-gradient border border-primary-500/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-2 text-center">المخطط البصري للرحلة</h3>
              <p className="text-dark-400 text-center mb-8">خط واحد واضح يختصر للمستثمر كيف يدخل، كيف يفهم، وكيف يخرج بقرار</p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-2 border-primary-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-400">01</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">ابدأ</h4>
                  <p className="text-dark-400 text-sm">حدد المسار</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 border-2 border-secondary-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-secondary-400">02</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">افهم بسرعة</h4>
                  <p className="text-dark-400 text-sm">ملخص ومخاطر</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border-2 border-accent-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-400">03</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">تعمق عند الحاجة</h4>
                  <p className="text-dark-400 text-sm">تحليل أو استشارة</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-2 border-primary-500/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-400">04</span>
                  </div>
                  <h4 className="text-white font-semibold mb-2">احسم القرار</h4>
                  <p className="text-dark-400 text-sm">تقديم أو استبعاد</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Core Principle */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Card className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/30 p-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                  <span className="text-2xl">💡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">القاعدة التي يجب أن يفهمها المستثمر من أول دقيقة</h3>
                  <p className="text-dark-300 leading-relaxed">
                    المنصة لا تطلب من المستثمر أن يتعامل مع تعقيد منصة فرص من البداية. هي تفصل بين مرحلتين: أولاً فهم القرار، ثم ثانياً الانتقال إلى الإجراء الرسمي. هذا الفصل هو الذي يجعل التجربة أخف وأوضح وأكثر احترافية.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Stage 01 */}
            <Card className="bg-card-gradient border border-primary-500/30 p-6 hover:border-primary-500/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                  <span className="text-xl font-bold text-primary-400">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">الدخول وتحديد نقطة البداية</h3>
                  <p className="text-dark-400 text-sm mb-4">المستثمر لا يبدأ من قوائم معقدة. يبدأ بسؤال واحد فقط: هل أملك فرصة جاهزة أريد فحصها، أم أملك فكرة وأحتاج توجيهاً؟</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-primary-500/20">
                  <span className="text-primary-400">•</span>
                  <span className="text-dark-300 text-sm">الدخول من الصفحة الرئيسية</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-primary-500/20">
                  <span className="text-primary-400">•</span>
                  <span className="text-dark-300 text-sm">اختيار: فرص جاهزة أو استشارة مشروع أو تحليل حي</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-primary-500/20">
                  <span className="text-primary-400">•</span>
                  <span className="text-dark-300 text-sm">الانتقال إلى المسار الأقصر بدل الدوران بين الصفحات</span>
                </div>
              </div>
            </Card>

            {/* Stage 02 */}
            <Card className="bg-card-gradient border border-secondary-500/30 p-6 hover:border-secondary-500/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-secondary-500/30">
                  <span className="text-xl font-bold text-secondary-400">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">قراءة سريعة قبل أي التزام</h3>
                  <p className="text-dark-400 text-sm mb-4">قبل أن يضيع وقته في كراسة طويلة أو متطلبات معقدة، يرى ملخصاً بصرياً واضحاً: مناسبة الفرصة، مستوى المخاطر، رأس المال المتوقع، والعقبات المحتملة.</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-secondary-500/20">
                  <span className="text-secondary-400">•</span>
                  <span className="text-dark-300 text-sm">قراءة الملخص التنفيذي</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-secondary-500/20">
                  <span className="text-secondary-400">•</span>
                  <span className="text-dark-300 text-sm">فهم الجاهزية والمخاطر</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-secondary-500/20">
                  <span className="text-secondary-400">•</span>
                  <span className="text-dark-300 text-sm">استبعاد الفرص غير المناسبة مبكراً</span>
                </div>
              </div>
            </Card>

            {/* Stage 03 */}
            <Card className="bg-card-gradient border border-accent-500/30 p-6 hover:border-accent-500/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent-500/30">
                  <span className="text-xl font-bold text-accent-400">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">تعميق القرار عند الحاجة</h3>
                  <p className="text-dark-400 text-sm mb-4">إذا بدت الفرصة واعدة، يتوسع المستثمر تدريجياً فقط في المعلومات التي يحتاجها: تحليل حي، مقارنة بدائل، كراسة مبسطة، أو استشارة بشرية.</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-accent-500/20">
                  <span className="text-accent-400">•</span>
                  <span className="text-dark-300 text-sm">تحليل الحي والمنافسة</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-accent-500/20">
                  <span className="text-accent-400">•</span>
                  <span className="text-dark-300 text-sm">مقارنة الأحياء والأنشطة</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-accent-500/20">
                  <span className="text-accent-400">•</span>
                  <span className="text-dark-300 text-sm">طلب استشارة أو مراجعة بشرية</span>
                </div>
              </div>
            </Card>

            {/* Stage 04 */}
            <Card className="bg-card-gradient border border-primary-500/30 p-6 hover:border-primary-500/50 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                  <span className="text-xl font-bold text-primary-400">04</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">استكمال الجاهزية والتنفيذ</h3>
                  <p className="text-dark-400 text-sm mb-4">إذا احتاج شريكاً أو ملفاً أوضح، ينتقل إلى بوابة الشراكات أو لوحة المتابعة، ثم يخرج إلى الإجراء الرسمي وهو يعرف لماذا يدخل وماذا يتوقع.</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-primary-500/20">
                  <span className="text-primary-400">•</span>
                  <span className="text-dark-300 text-sm">تنظيم الشراكة إن لزم</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-primary-500/20">
                  <span className="text-primary-400">•</span>
                  <span className="text-dark-300 text-sm">متابعة الطلبات والتنبيهات</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-dark-800/50 rounded-lg border border-primary-500/20">
                  <span className="text-primary-400">•</span>
                  <span className="text-dark-300 text-sm">الانتقال إلى فرص أو اتخاذ قرار واعٍ بعدم الدخول</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Real Scenarios */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">ابدأ من المسار الاستشاري</h3>
            <p className="text-dark-400 text-center mb-8 max-w-3xl mx-auto">السيناريوهات الواقعية داخل المنصة - ليست رحلة واحدة فقط، بل عدة بدايات تنتهي كلها إلى قرار واضح</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card-gradient border border-primary-500/30 p-6 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                    <span className="text-lg">📋</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">مستثمر لديه فرصة جاهزة</h4>
                    <p className="text-dark-400 text-sm mb-3">يريد حكماً سريعاً: هل هذه الفرصة تستحق أن يكمل أم لا؟</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-dark-300 text-sm">• يفتح الفرصة أو الكراسة</p>
                  <p className="text-dark-300 text-sm">• يرى الملخص التنفيذي السريع</p>
                  <p className="text-dark-300 text-sm">• يفهم الربحية والمخاطر والعقبات</p>
                  <p className="text-dark-300 text-sm">• ينتقل إلى فرص إذا اقتنع</p>
                </div>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm font-semibold">النتيجة: قرار سريع وواضح دون قراءة مرهقة من البداية</p>
                </div>
              </Card>

              <Card className="bg-card-gradient border border-secondary-500/30 p-6 hover:border-secondary-500/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-secondary-500/30">
                    <span className="text-lg">💡</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">مستثمر لديه فكرة وليس لديه موقع</h4>
                    <p className="text-dark-400 text-sm mb-3">لا يبحث عن فرصة منشورة فقط، بل عن أفضل مكان ونشاط لتنفيذ فكرته.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-dark-300 text-sm">• يدخل إلى الاستشارة الذكية</p>
                  <p className="text-dark-300 text-sm">• يحدد النشاط والميزانية</p>
                  <p className="text-dark-300 text-sm">• يفتح تحليل الحي</p>
                  <p className="text-dark-300 text-sm">• يقارن البدائل ثم يقرر</p>
                </div>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm font-semibold">النتيجة: يصل إلى قرار مبني على الحي والطلب لا على التخمين</p>
                </div>
              </Card>

              <Card className="bg-card-gradient border border-accent-500/30 p-6 hover:border-accent-500/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-accent-500/30">
                    <span className="text-lg">🤔</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">مستثمر متردد ويخاف من التعقيد</h4>
                    <p className="text-dark-400 text-sm mb-3">يريد خطوات قصيرة وواضحة لا تجبره على الغوص في إجراءات كثيرة منذ البداية.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-dark-300 text-sm">• يبدأ من صفحة رحلة المستثمر</p>
                  <p className="text-dark-300 text-sm">• يفهم أين يبدأ وأين ينتهي</p>
                  <p className="text-dark-300 text-sm">• يأخذ قراءة أولية فقط</p>
                  <p className="text-dark-300 text-sm">• يقرر إما التعمق أو التوقف</p>
                </div>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm font-semibold">النتيجة: يشعر أن المنصة تبسط القرار بدلاً من أن تربكه</p>
                </div>
              </Card>

              <Card className="bg-card-gradient border border-primary-500/30 p-6 hover:border-primary-500/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                    <span className="text-lg">🤝</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">مستثمر يحتاج شريكاً أو دعماً تنفيذياً</h4>
                    <p className="text-dark-400 text-sm mb-3">يعرف أن الفرصة مناسبة لكنه لا يريد دخولها منفرداً أو بلا غطاء تشغيلي.</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-dark-300 text-sm">• يثبت جدوى الفرصة أولاً</p>
                  <p className="text-dark-300 text-sm">• ينتقل إلى الشراكات</p>
                  <p className="text-dark-300 text-sm">• ينظم المساهمة والدور</p>
                  <p className="text-dark-300 text-sm">• يكمل الطلب بعد وضوح الهيكل</p>
                </div>
                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-green-400 text-sm font-semibold">النتيجة: يحوّل الفكرة من قرار فردي متردد إلى مشروع قابل للتنفيذ</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Process Steps */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Card className="bg-card-gradient border border-primary-500/30 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">الإجراءات التي يمر بها المستثمر فعلياً</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border-2 border-primary-500/50 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-primary-400">{step}</span>
                    </div>
                    <p className="text-dark-300 text-sm">
                      {step === 1 && 'فتح الصفحة الرئيسية وتحديد المسار المناسب'}
                      {step === 2 && 'فحص فرصة أو حي أو مشروع عبر قراءة سريعة أولية'}
                      {step === 3 && 'التوسع فقط في المعلومات الضرورية: كراسة، تحليل حي، استشارة، أو شراكة'}
                      {step === 4 && 'تجهيز الملف أو تثبيت القرار النهائي'}
                      {step === 5 && 'الانتقال إلى فرص أو متابعة الملف من لوحة المستثمر'}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Journey Endings */}
          <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">كيف تنتهي الرحلة؟</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 p-6 hover:border-green-500/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">الانتقال للتقديم الرسمي</h4>
                </div>
                <p className="text-dark-300 text-sm text-center">
                  هذه هي النهاية الطبيعية عندما تكون المؤشرات والجاهزية متوافقة مع هدف المستثمر.
                </p>
              </Card>

              <Card className="bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-500/30 p-6 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">طلب استشارة أو شراكة قبل التقديم</h4>
                </div>
                <p className="text-dark-300 text-sm text-center">
                  إذا كانت الفرصة جيدة لكن تحتاج دعماً أو تحققاً إضافياً، تبقى داخل المنصة خطوة واحدة فقط ثم تكمل.
                </p>
              </Card>

              <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                    <span className="text-3xl">❌</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">رفض واعٍ للفرصة</h4>
                </div>
                <p className="text-dark-300 text-sm text-center">
                  وهذا نجاح أيضاً، لأن المنصة منعت قراراً متسرعاً قبل أن يتحول إلى خسارة وقت أو مال.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
