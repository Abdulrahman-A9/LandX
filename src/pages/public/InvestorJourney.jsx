import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { LightbulbIcon, FileTextIcon, SearchIcon, HandshakeIcon, ArrowRightIcon } from '../../components/ui/Icons';

const InvestorJourney = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-200 text-brown-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brown-700 to-brown-600 mb-4 animate-fade-in">
            رحلة المستثمر
          </h1>
          <p className="text-brown-700 text-xl max-w-3xl mx-auto animate-slide-up">
            رحلة واضحة من الدخول حتى القرار
          </p>
          <p className="text-brown-600 max-w-4xl mx-auto mt-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            هذه الصفحة تجيب على السؤال الذي يخاف منه أي مستثمر: من أين أبدأ، ما الذي سأراه، متى أتعّمق، ومتى أخرج إلى القرار أو التقديم؟ المنصة هنا ليست متاهة خدمات، بل مسار قرار مبني على خطوات قصيرة ومفهومة.
          </p>
        </div>

        {/* Visual Journey Map */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="bg-card-gradient border border-brown-300 p-8">
            <h2 className="text-2xl font-bold text-brown-900 mb-2 text-center">المخطط البصري للرحلة</h2>
            <p className="text-brown-700 text-center mb-8">خط واحد واضح يختصر للمستثمر كيف يدخل، كيف يفهم، وكيف يخرج بقرار</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brown-200/20 to-brown-300/20 border-2 border-brown-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brown-700">01</span>
                </div>
                <h3 className="text-brown-900 font-semibold mb-2">ابدأ</h3>
                <p className="text-brown-800 text-sm">حدد المسار</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pearl-200/20 to-pearl-300/20 border-2 border-pearl-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pearl-700">02</span>
                </div>
                <h3 className="text-brown-900 font-semibold mb-2">افهم بسرعة</h3>
                <p className="text-brown-800 text-sm">ملخص ومخاطر</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brown-300/20 to-brown-400/20 border-2 border-brown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brown-600">03</span>
                </div>
                <h3 className="text-brown-900 font-semibold mb-2">تعمق عند الحاجة</h3>
                <p className="text-brown-800 text-sm">تحليل أو استشارة</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brown-200/20 to-brown-300/20 border-2 border-brown-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-brown-700">04</span>
                </div>
                <h3 className="text-brown-900 font-semibold mb-2">احسم القرار</h3>
                <p className="text-brown-800 text-sm">تقديم أو استبعاد</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Principle */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Card className="bg-gradient-to-r from-brown-200/10 to-brown-300/10 border border-brown-300 p-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-300">
                <LightbulbIcon className="text-2xl text-brown-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">القاعدة التي يجب أن يفهمها المستثمر من أول دقيقة</h3>
                <p className="text-brown-800 leading-relaxed">
                  المنصة لا تطلب من المستثمر أن يتعامل مع تعقيد منصة فرص من البداية. هي تفصل بين مرحلتين: أولاً فهم القرار، ثم ثانياً الانتقال إلى الإجراء الرسمي. هذا الفصل هو الذي يجعل التجربة أخف وأوضح وأكثر احترافية.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Stages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Stage 01 */}
          <Card className="bg-card-gradient border border-brown-300 p-6 hover:border-brown-400 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-300">
                <span className="text-xl font-bold text-brown-700">01</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">الدخول وتحديد نقطة البداية</h3>
                <p className="text-brown-800 text-sm mb-4">المستثمر لا يبدأ من قوائم معقدة. يبدأ بسؤال واحد فقط: هل أملك فرصة جاهزة أريد فحصها، أم أملك فكرة وأحتاج توجيهاً؟</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-200">
                <span className="text-brown-700">•</span>
                <span className="text-brown-800 text-sm">الدخول من الصفحة الرئيسية</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-200">
                <span className="text-brown-700">•</span>
                <span className="text-brown-800 text-sm">اختيار: فرص جاهزة أو استشارة مشروع أو تحليل حي</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-200">
                <span className="text-brown-700">•</span>
                <span className="text-brown-800 text-sm">الانتقال إلى المسار الأقصر بدل الدوران بين الصفحات</span>
              </div>
            </div>
          </Card>

          {/* Stage 02 */}
          <Card className="bg-card-gradient border border-pearl-400 p-6 hover:border-pearl-500 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pearl-200/20 to-pearl-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-pearl-400">
                <span className="text-xl font-bold text-pearl-700">02</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">قراءة سريعة قبل أي التزام</h3>
                <p className="text-brown-800 text-sm mb-4">قبل أن يضيع وقته في كراسة طويلة أو متطلبات معقدة، يرى ملخصاً بصرياً واضحاً: مناسبة الفرصة، مستوى المخاطر، رأس المال المتوقع، والعقبات المحتملة.</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-pearl-300">
                <span className="text-pearl-700">•</span>
                <span className="text-brown-800 text-sm">قراءة الملخص التنفيذي</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-pearl-300">
                <span className="text-pearl-700">•</span>
                <span className="text-brown-800 text-sm">فهم الجاهزية والمخاطر</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-pearl-300">
                <span className="text-pearl-700">•</span>
                <span className="text-brown-800 text-sm">استبعاد الفرص غير المناسبة مبكراً</span>
              </div>
            </div>
          </Card>

          {/* Stage 03 */}
          <Card className="bg-card-gradient border border-brown-500 p-6 hover:border-brown-600 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brown-300/20 to-brown-400/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-500">
                <span className="text-xl font-bold text-brown-600">03</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">تعميق القرار عند الحاجة</h3>
                <p className="text-brown-800 text-sm mb-4">إذا بدت الفرصة واعدة، يتوسع المستثمر تدريجياً فقط في المعلومات التي يحتاجها: تحليل حي، مقارنة بدائل، كراسة مبسطة، أو استشارة بشرية.</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-300">
                <span className="text-brown-600">•</span>
                <span className="text-brown-800 text-sm">تحليل الحي والمنافسة</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-300">
                <span className="text-brown-600">•</span>
                <span className="text-brown-800 text-sm">مقارنة الأحياء والأنشطة</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-300">
                <span className="text-brown-600">•</span>
                <span className="text-brown-800 text-sm">طلب استشارة أو مراجعة بشرية</span>
              </div>
            </div>
          </Card>

          {/* Stage 04 */}
          <Card className="bg-card-gradient border border-brown-300 p-6 hover:border-brown-400 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-300">
                <span className="text-xl font-bold text-brown-700">04</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brown-900 mb-2">استكمال الجاهزية والتنفيذ</h3>
                <p className="text-brown-800 text-sm mb-4">إذا احتاج شريكاً أو ملفاً أوضح، ينتقل إلى بوابة الشراكات أو لوحة المتابعة، ثم يخرج إلى الإجراء الرسمي وهو يعرف لماذا يدخل وماذا يتوقع.</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-200">
                <span className="text-brown-700">•</span>
                <span className="text-brown-800 text-sm">تنظيم الشراكة إن لزم</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-200">
                <span className="text-brown-700">•</span>
                <span className="text-brown-800 text-sm">متابعة الطلبات والتنبيهات</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-pearl-100/80 rounded-lg border border-brown-200">
                <span className="text-brown-700">•</span>
                <span className="text-brown-800 text-sm">الانتقال إلى فرص أو اتخاذ قرار واعٍ بعدم الدخول</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Real Scenarios */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <h2 className="text-2xl font-bold text-brown-900 mb-6 text-center">ابدأ من المسار الاستشاري</h2>
          <p className="text-brown-800 text-center mb-8 max-w-3xl mx-auto">السيناريوهات الواقعية داخل المنصة - ليست رحلة واحدة فقط، بل عدة بدايات تنتهي كلها إلى قرار واضح</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card-gradient border border-brown-300 p-6 hover:border-brown-400 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-300">
                  <FileTextIcon className="text-lg text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-900 mb-2">مستثمر لديه فرصة جاهزة</h3>
                  <p className="text-brown-800 text-sm mb-3">يريد حكماً سريعاً: هل هذه الفرصة تستحق أن يكمل أم لا؟</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-brown-800 text-sm">• يفتح الفرصة أو الكراسة</p>
                <p className="text-brown-800 text-sm">• يرى الملخص التنفيذي السريع</p>
                <p className="text-brown-800 text-sm">• يفهم الربحية والمخاطر والعقبات</p>
                <p className="text-brown-800 text-sm">• ينتقل إلى فرص إذا اقتنع</p>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm font-semibold">النتيجة: قرار سريع وواضح دون قراءة مرهقة من البداية</p>
              </div>
            </Card>

            <Card className="bg-card-gradient border border-pearl-400 p-6 hover:border-pearl-500 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pearl-200/20 to-pearl-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-pearl-400">
                  <LightbulbIcon className="text-lg text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-900 mb-2">مستثمر لديه فكرة وليس لديه موقع</h3>
                  <p className="text-brown-800 text-sm mb-3">لا يبحث عن فرصة منشورة فقط، بل عن أفضل مكان ونشاط لتنفيذ فكرته.</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-brown-800 text-sm">• يدخل إلى الاستشارة الذكية</p>
                <p className="text-brown-800 text-sm">• يحدد النشاط والميزانية</p>
                <p className="text-brown-800 text-sm">• يفتح تحليل الحي</p>
                <p className="text-brown-800 text-sm">• يقارن البدائل ثم يقرر</p>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm font-semibold">النتيجة: يصل إلى قرار مبني على الحي والطلب لا على التخمين</p>
              </div>
            </Card>

            <Card className="bg-card-gradient border border-brown-500 p-6 hover:border-brown-600 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brown-300/20 to-brown-400/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-500">
                  <SearchIcon className="text-lg text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-900 mb-2">مستثمر متردد ويخاف من التعقيد</h3>
                  <p className="text-brown-800 text-sm mb-3">يريد خطوات قصيرة وواضحة لا تجبره على الغوص في إجراءات كثيرة منذ البداية.</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-brown-800 text-sm">• يبدأ من صفحة رحلة المستثمر</p>
                <p className="text-brown-800 text-sm">• يفهم أين يبدأ وأين ينتهي</p>
                <p className="text-brown-800 text-sm">• يأخذ قراءة أولية فقط</p>
                <p className="text-brown-800 text-sm">• يقرر إما التعمق أو التوقف</p>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm font-semibold">النتيجة: يشعر أن المنصة تبسط القرار بدلاً من أن تربكه</p>
              </div>
            </Card>

            <Card className="bg-card-gradient border border-brown-300 p-6 hover:border-brown-400 transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-brown-200/20 to-brown-300/20 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-300">
                  <HandshakeIcon className="text-lg text-brown-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brown-900 mb-2">مستثمر يحتاج شريكاً أو دعماً تنفيذياً</h3>
                  <p className="text-brown-800 text-sm mb-3">يعرف أن الفرصة مناسبة لكنه لا يريد دخولها منفرداً أو بلا غطاء تشغيلي.</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-brown-800 text-sm">• يثبت جدوى الفرصة أولاً</p>
                <p className="text-brown-800 text-sm">• ينتقل إلى الشراكات</p>
                <p className="text-brown-800 text-sm">• ينظم المساهمة والدور</p>
                <p className="text-brown-800 text-sm">• يكمل الطلب بعد وضوح الهيكل</p>
              </div>
              <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p className="text-green-400 text-sm font-semibold">النتيجة: يحوّل الفكرة من قرار فردي متردد إلى مشروع قابل للتنفيذ</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Card className="bg-card-gradient border border-brown-300 p-8">
            <h2 className="text-2xl font-bold text-brown-900 mb-6 text-center">الإجراءات التي يمر بها المستثمر فعلياً</h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-brown-200/20 to-brown-300/20 border-2 border-brown-400 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-lg font-bold text-brown-700">{step}</span>
                  </div>
                  <p className="text-brown-800 text-sm">
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
          <h2 className="text-2xl font-bold text-brown-900 mb-6 text-center">كيف تنتهي الرحلة؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/30 p-6 hover:border-green-500/50 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">الانتقال للتقديم الرسمي</h3>
              </div>
              <p className="text-brown-800 text-sm text-center">
                هذه هي النهاية الطبيعية عندما تكون المؤشرات والجاهزية متوافقة مع هدف المستثمر.
              </p>
            </Card>

            <Card className="bg-gradient-to-r from-brown-200/10 to-brown-300/10 border border-brown-300 p-6 hover:border-brown-400 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-brown-200/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-brown-300">
                  <HandshakeIcon className="text-3xl text-brown-600" />
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">طلب استشارة أو شراكة قبل التقديم</h3>
              </div>
              <p className="text-brown-800 text-sm text-center">
                إذا كانت الفرصة جيدة لكن تحتاج دعماً أو تحققاً إضافياً، تبقى داخل المنصة خطوة واحدة فقط ثم تكمل.
              </p>
            </Card>

            <Card className="bg-gradient-to-r from-red-500/10 to-red-600/10 border border-red-500/30 p-6 hover:border-red-500/50 transition-all duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/30">
                  <span className="text-3xl">❌</span>
                </div>
                <h3 className="text-xl font-bold text-brown-900 mb-3">رفض واعٍ للفرصة</h3>
              </div>
              <p className="text-brown-800 text-sm text-center">
                وهذا نجاح أيضاً، لأن المنصة منعت قراراً متسرعاً قبل أن يتحول إلى خسارة وقت أو مال.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-brown-200/10 to-brown-300/10 border border-brown-300 inline-block w-full max-w-3xl">
            <h2 className="text-2xl font-bold text-brown-900 mb-3">ابدأ رحلتك الآن</h2>
            <p className="text-brown-800 mb-6 max-w-xl mx-auto">اختر المسار الأنسب لك واكتشف الفرص الاستثمارية المتاحة</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/opportunities">
                <Button size="lg" className="w-full sm:w-auto">استكشف الفرص</Button>
              </Link>
              <Link to="/investment-analysis">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">التحليل الاستثماري</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">استشارة مخصصة</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InvestorJourney;
