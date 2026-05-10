import React from 'react';
import Card from '../../components/ui/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white">
      <div className="bg-gradient-to-r from-dark-900/90 to-dark-800/90 border-b border-primary-500/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            عن منصة لاند إكس
          </h1>
          <p className="text-xl text-dark-400 max-w-3xl">
            منصة وطنية لاستثمارات الأراضي الموسمية، تهدف إلى تمكين المستثمرين من الوصول إلى فرص استثمارية آمنة وموثوقة في القطاع الزراعي
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              رؤيتنا
            </h2>
            <p className="text-dark-300 leading-relaxed mb-6">
              أن نكون المنصة الرائدة في المملكة لتمكين الاستثمارات الزراعية الموسمية، من خلال توفير بيئة استثمارية شفافة وآمنة تربط بين المستثمرين والجهات الحكومية المختصة.
            </p>
            
            <h2 className="text-2xl font-bold text-white mb-4">
              رسالتنا
            </h2>
            <p className="text-dark-300 leading-relaxed">
              تسهيل الوصول إلى الفرص الاستثمارية في الأراضي الزراعية الموسمية عبر منصة رقمية موثوقة، مع ضمان الشفافية والامتثال للأنظمة واللوائح الحكومية، وتوفير تجربة استثمارية سلسة للمستثمرين.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              قيمنا
            </h2>
            <div className="space-y-4">
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">الأمان والموثوقية</h3>
                  <p className="text-dark-400 text-sm">
                    نضمن بيئة استثمارية آمنة مع شراكات رسمية مع الجهات الحكومية
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">الشفافية</h3>
                  <p className="text-dark-400 text-sm">
                    نقدم معلومات دقيقة ومفصلة عن كل فرصة استثمارية
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">الشراكة</h3>
                  <p className="text-dark-400 text-sm">
                    نعمل مع البلديات والجهات الحكومية لتوفير أفضل الفرص
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">الابتكار</h3>
                  <p className="text-dark-400 text-sm">
                    نستخدم أحدث التقنيات لتحسين تجربة المستثمرين
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            كيف نعمل؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                <span className="text-primary-400 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">التسجيل</h3>
              <p className="text-dark-400 text-sm">
                أنشئ حسابك المجاني في دقائق
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                <span className="text-primary-400 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">استكشاف الفرص</h3>
              <p className="text-dark-400 text-sm">
                تصفح الفرص الاستثمارية المتاحة
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                <span className="text-primary-400 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">طلب الاستثمار</h3>
              <p className="text-dark-400 text-sm">
                قدم طلب استثمارك للفرصة المناسبة
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                <span className="text-primary-400 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-white mb-2">بدء الاستثمار</h3>
              <p className="text-dark-400 text-sm">
                ابدأ رحلتك الاستثمارية معنا
              </p>
            </Card>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            شركاؤنا
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-white mb-2">أمانة منطقة حائل</h3>
              <p className="text-dark-400 text-sm">
                الجهة الحكومية المسؤولة عن منطقة حائل
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-white mb-2">أمانة منطقة القصيم</h3>
              <p className="text-dark-400 text-sm">
                الجهة الحكومية المسؤولة عن منطقة القصيم
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-primary-500/30">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-white mb-2">أمانة منطقة تبوك</h3>
              <p className="text-dark-400 text-sm">
                الجهة الحكومية المسؤولة عن منطقة تبوك
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
