import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { ShieldCheckIcon, BarChartIcon, HandshakeIcon, LightbulbIcon, BuildingIcon } from '../../components/ui/Icons';

const About = () => {
  return (
    <div className="min-h-screen bg-app-bg text-app-text py-16">
      <div className="bg-gradient-to-r from-brand/90 to-brand-deep/90 border-b border-brand/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-app-text mb-4">
            عن منصة لاند إكس
          </h1>
          <p className="text-xl text-app-text-muted max-w-3xl">
            منصة وطنية لاستثمارات الأراضي الموسمية، تهدف إلى تمكين المستثمرين من الوصول إلى فرص استثمارية آمنة وموثوقة في القطاع الزراعي
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <AnimatedSection animation="slideLeft">
            <h2 className="text-2xl font-bold text-app-text mb-4">
              رؤيتنا
            </h2>
            <p className="text-app-text-muted leading-relaxed mb-6">
              أن نكون المنصة الرائدة في المملكة لتمكين الاستثمارات الزراعية الموسمية، من خلال توفير بيئة استثمارية شفافة وآمنة تربط بين المستثمرين والجهات الحكومية المختصة.
            </p>
            
            <h2 className="text-2xl font-bold text-app-text mb-4">
              رسالتنا
            </h2>
            <p className="text-app-text-muted leading-relaxed">
              تسهيل الوصول إلى الفرص الاستثمارية في الأراضي الزراعية الموسمية عبر منصة رقمية موثوقة، مع ضمان الشفافية والامتثال للأنظمة واللوائح الحكومية، وتوفير تجربة استثمارية سلسة للمستثمرين.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="slideRight">
            <h2 className="text-2xl font-bold text-app-text mb-4">
              قيمنا
            </h2>
            <div className="space-y-4">
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300">
                <ShieldCheckIcon className="text-3xl text-brand" />
                <div>
                  <h3 className="font-semibold text-app-text mb-1">الأمان والموثوقية</h3>
                  <p className="text-app-text-muted text-sm">
                    نضمن بيئة استثمارية آمنة مع شراكات رسمية مع الجهات الحكومية
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300">
                <BarChartIcon className="text-3xl text-brand" />
                <div>
                  <h3 className="font-semibold text-app-text mb-1">الشفافية</h3>
                  <p className="text-app-text-muted text-sm">
                    نقدم معلومات دقيقة ومفصلة عن كل فرصة استثمارية
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300">
                <HandshakeIcon className="text-3xl text-brand" />
                <div>
                  <h3 className="font-semibold text-app-text mb-1">الشراكة</h3>
                  <p className="text-app-text-muted text-sm">
                    نعمل مع البلديات والجهات الحكومية لتوفير أفضل الفرص
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300">
                <LightbulbIcon className="text-3xl text-brand" />
                <div>
                  <h3 className="font-semibold text-app-text mb-1">الابتكار</h3>
                  <p className="text-app-text-muted text-sm">
                    نستخدم أحدث التقنيات لتحسين تجربة المستثمرين
                  </p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeUp" className="mb-16">
          <h2 className="text-2xl font-bold text-app-text mb-8 text-center">
            كيف نعمل؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand">
                <span className="text-brand font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-app-text mb-2">التسجيل</h3>
              <p className="text-app-text-muted text-sm">
                أنشئ حسابك المجاني في دقائق
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand">
                <span className="text-brand font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-app-text mb-2">استكشاف الفرص</h3>
              <p className="text-app-text-muted text-sm">
                تصفح الفرص الاستثمارية المتاحة
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand">
                <span className="text-brand font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-app-text mb-2">طلب الاستثمار</h3>
              <p className="text-app-text-muted text-sm">
                قدم طلب استثمارك للفرصة المناسبة
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand">
                <span className="text-brand font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-app-text mb-2">بدء الاستثمار</h3>
              <p className="text-app-text-muted text-sm">
                ابدأ رحلتك الاستثمارية معنا
              </p>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp">
          <h2 className="text-2xl font-bold text-app-text mb-8 text-center">
            شركاؤنا
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand">
                <BuildingIcon className="text-3xl text-brand" />
              </div>
              <h3 className="font-semibold text-app-text mb-2">أمانة منطقة حائل</h3>
              <p className="text-app-text-muted text-sm">
                الجهة الحكومية المسؤولة عن منطقة حائل
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand">
                <BuildingIcon className="text-3xl text-brand" />
              </div>
              <h3 className="font-semibold text-app-text mb-2">أمانة منطقة القصيم</h3>
              <p className="text-app-text-muted text-sm">
                الجهة الحكومية المسؤولة عن منطقة القصيم
              </p>
            </Card>
            
            <Card className="text-center p-6 bg-card-gradient border border-app-border hover:border-brand transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brand">
                <BuildingIcon className="text-3xl text-brand" />
              </div>
              <h3 className="font-semibold text-app-text mb-2">أمانة منطقة تبوك</h3>
              <p className="text-app-text-muted text-sm">
                الجهة الحكومية المسؤولة عن منطقة تبوك
              </p>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scaleIn" className="mt-16 bg-gradient-to-r from-brand/90 to-brand-deep/90 rounded-2xl p-8 md:p-12 text-center border border-brand/20 backdrop-blur">
          <h2 className="text-2xl md:text-3xl font-bold text-app-text mb-4">
            ابدأ رحلتك الاستثمارية اليوم
          </h2>
          <p className="text-app-text-muted mb-8 max-w-2xl mx-auto">
            انضم إلى آلاف المستثمرين واستفد من الفرص الاستثمارية المتاحة في الأراضي الزراعية الموسمية
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/opportunities" className="inline-flex items-center gap-2 bg-app-surface text-app-text px-8 py-3 rounded-lg font-bold hover:bg-app-surface-strong transition-all duration-300 shadow-lg">
              استكشف الفرص
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border border-app-border text-app-text px-8 py-3 rounded-lg font-medium hover:bg-app-surface transition-all duration-300">
              تواصل معنا
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
