import React from 'react';
import Card from '../../components/ui/Card';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            عن منصة لاند إكس
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            منصة وطنية لاستثمارات الأراضي الموسمية، تهدف إلى تمكين المستثمرين من الوصول إلى فرص استثمارية آمنة وموثوقة في القطاع الزراعي
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              رؤيتنا
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              أن نكون المنصة الرائدة في المملكة لتمكين الاستثمارات الزراعية الموسمية، من خلال توفير بيئة استثمارية شفافة وآمنة تربط بين المستثمرين والجهات الحكومية المختصة.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              رسالتنا
            </h2>
            <p className="text-gray-700 leading-relaxed">
              تسهيل الوصول إلى الفرص الاستثمارية في الأراضي الزراعية الموسمية عبر منصة رقمية موثوقة، مع ضمان الشفافية والامتثال للأنظمة واللوائح الحكومية، وتوفير تجربة استثمارية سلسة للمستثمرين.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              قيمنا
            </h2>
            <div className="space-y-4">
              <Card className="p-4 flex items-start gap-4">
                <div className="text-3xl">🛡️</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">الأمان والموثوقية</h3>
                  <p className="text-gray-600 text-sm">
                    نضمن بيئة استثمارية آمنة مع شراكات رسمية مع الجهات الحكومية
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">الشفافية</h3>
                  <p className="text-gray-600 text-sm">
                    نقدم معلومات دقيقة ومفصلة عن كل فرصة استثمارية
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4">
                <div className="text-3xl">🤝</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">الشراكة</h3>
                  <p className="text-gray-600 text-sm">
                    نعمل مع البلديات والجهات الحكومية لتوفير أفضل الفرص
                  </p>
                </div>
              </Card>
              
              <Card className="p-4 flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">الابتكار</h3>
                  <p className="text-gray-600 text-sm">
                    نستخدم أحدث التقنيات لتحسين تجربة المستثمرين
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            كيف نعمل؟
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">التسجيل</h3>
              <p className="text-gray-600 text-sm">
                أنشئ حسابك المجاني في دقائق
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">استكشاف الفرص</h3>
              <p className="text-gray-600 text-sm">
                تصفح الفرص الاستثمارية المتاحة
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">طلب الاستثمار</h3>
              <p className="text-gray-600 text-sm">
                قدم طلب استثمارك للفرصة المناسبة
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">بدء الاستثمار</h3>
              <p className="text-gray-600 text-sm">
                ابدأ رحلتك الاستثمارية معنا
              </p>
            </Card>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            شركاؤنا
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">أمانة منطقة حائل</h3>
              <p className="text-gray-600 text-sm">
                الجهة الحكومية المسؤولة عن منطقة حائل
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">أمانة منطقة القصيم</h3>
              <p className="text-gray-600 text-sm">
                الجهة الحكومية المسؤولة عن منطقة القصيم
              </p>
            </Card>
            
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏛️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">أمانة منطقة تبوك</h3>
              <p className="text-gray-600 text-sm">
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
