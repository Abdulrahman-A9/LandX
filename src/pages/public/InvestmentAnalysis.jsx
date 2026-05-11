import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/ui/Card';
import {
  SparklesIcon, BriefcaseIcon, MapIcon, DollarSignIcon,
  CalculatorIcon, FileTextIcon, CheckCircleIcon, AlertTriangleIcon,
  InfoIcon, BarChartIcon, TrendingUpIcon, ShieldCheckIcon,
  SearchIcon, ArrowRightIcon, ChevronLeftIcon, UsersIcon,
  BuildingIcon, PieChartIcon, PercentIcon
} from '../../components/ui/Icons';

const InvestmentAnalysis = () => {
  const [activeTab, setActiveTab] = useState('project');
  const [showReport, setShowReport] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    projectName: '',
    activityType: '',
    operatingModel: '',
    targetAudience: '',
    city: 'حائل',
    district: '',
    locationDescription: '',
    area: '',
    launchDuration: '',
    facadeType: '',
    parking: '',
    competitors: '',
    capital: '',
    setupCost: '',
    monthlyExpenses: '',
    monthlyRent: '',
    teamSize: '',
    notes: '',
    isJointProject: false,
    requestHumanReview: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const tabs = [
    { id: 'project', label: 'بيانات المشروع', icon: <BriefcaseIcon /> },
    { id: 'location', label: 'بيانات الموقع', icon: <MapIcon /> },
    { id: 'financial', label: 'المدخلات المالية', icon: <DollarSignIcon /> },
    { id: 'review', label: 'المراجعة والإرسال', icon: <FileTextIcon /> },
  ];

  const generateReport = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowReport(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2500);
  };

  const resetForm = () => {
    setShowReport(false);
    setActiveTab('project');
    setFormData({
      projectName: '',
      activityType: '',
      operatingModel: '',
      targetAudience: '',
      city: 'حائل',
      district: '',
      locationDescription: '',
      area: '',
      launchDuration: '',
      facadeType: '',
      parking: '',
      competitors: '',
      capital: '',
      setupCost: '',
      monthlyExpenses: '',
      monthlyRent: '',
      teamSize: '',
      notes: '',
      isJointProject: false,
      requestHumanReview: false,
    });
  };

  const isTabComplete = (tabId) => {
    switch (tabId) {
      case 'project':
        return formData.projectName && formData.activityType && formData.operatingModel;
      case 'location':
        return formData.district && formData.area && formData.locationDescription;
      case 'financial':
        return formData.capital && formData.setupCost && formData.monthlyExpenses;
      default:
        return true;
    }
  };

  if (showReport) {
    const reportDate = new Date().toLocaleDateString('ar-SA', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
    const reportId = 'LX-' + Math.floor(Math.random() * 100000).toString().padStart(5, '0');

    return (
      <div className="min-h-screen bg-[#e8e4df]">
        {/* Toolbar */}
        <div className="bg-gradient-to-r from-brown-600 to-brown-700 py-3 sticky top-0 z-50 shadow-lg">
          <div className="max-w-4xl mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-pearl-100 text-sm">
              <SparklesIcon className="w-4 h-4" />
              <span>تقرير آلي — المرحلة الأولى</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-1.5 bg-pearl-100/20 text-pearl-100 text-sm font-semibold rounded hover:bg-pearl-100/30 transition-colors"
              >
                طباعة PDF
              </button>
              <button
                onClick={resetForm}
                className="px-4 py-1.5 bg-pearl-100/20 text-pearl-100 text-sm font-semibold rounded hover:bg-pearl-100/30 transition-colors"
              >
                تحليل جديد
              </button>
            </div>
          </div>
        </div>

        {/* A4 Paper */}
        <div className="max-w-[210mm] mx-auto py-8 px-4">
          <div className="bg-white shadow-2xl mx-auto" style={{ maxWidth: '210mm', minHeight: '297mm' }}>
            {/* Letterhead */}
            <div className="bg-gradient-to-r from-brown-700 to-brown-600 text-white p-8">
              <div className="flex items-center justify-between border-b border-pearl-300/30 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-pearl-100/20 rounded-lg flex items-center justify-center border border-pearl-300/30">
                    <span className="font-bold text-lg">ل</span>
                  </div>
                  <div>
                    <h1 className="text-xl font-bold">LandX</h1>
                    <p className="text-pearl-200 text-xs">منصة الفرص الاستثمارية</p>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold">{reportId}</div>
                  <div className="text-xs text-pearl-200">{reportDate}</div>
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-1">التقرير الاستثماري الأولي</h2>
                <p className="text-pearl-200 text-sm">تقرير ذكي لتقييم جدوى المشروع بناءً على المدخلات المقدمة</p>
              </div>
            </div>

            {/* Paper Body */}
            <div className="p-8 space-y-6">
              {/* Section 1: Project Identity */}
              <div>
                <div className="flex items-center gap-2 border-b-2 border-brown-200 pb-2 mb-4">
                  <BriefcaseIcon className="text-brown-600 w-5 h-5" />
                  <h3 className="text-lg font-bold text-brown-900">1. هوية المشروع</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">اسم المشروع</span>
                    <span className="font-semibold text-brown-900">{formData.projectName || 'مشروع استثماري جديد'}</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">نوع النشاط</span>
                    <span className="font-semibold text-brown-900">{formData.activityType || 'كافيه'}</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">نموذج التشغيل</span>
                    <span className="font-semibold text-brown-900">{formData.operatingModel || 'Dine-In + Takeaway'}</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">الجمهور المستهدف</span>
                    <span className="font-semibold text-brown-900">{formData.targetAudience || 'طلاب، موظفون، عائلات'}</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Location */}
              <div>
                <div className="flex items-center gap-2 border-b-2 border-brown-200 pb-2 mb-4">
                  <MapIcon className="text-brown-600 w-5 h-5" />
                  <h3 className="text-lg font-bold text-brown-900">2. الموقع والمواصفات</h3>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">المدينة</span>
                    <span className="font-semibold text-brown-900">{formData.city}</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">الحي</span>
                    <span className="font-semibold text-brown-900">{formData.district || 'حي الجامعيين'}</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">المساحة</span>
                    <span className="font-semibold text-brown-900">{formData.area || '180'} م²</span>
                  </div>
                  <div className="flex justify-between border-b border-dashed border-gray-200 pb-2">
                    <span className="text-gray-600">نوع الواجهة</span>
                    <span className="font-semibold text-brown-900">{formData.facadeType || 'شارع رئيسي'}</span>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-gray-50 border border-gray-200 rounded text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-brown-800">وصف الموقع:</span>{' '}
                  {formData.locationDescription || 'موقع متميز على تقاطع رئيسي بحركة مرتفعة'}
                </div>
              </div>

              {/* Section 3: Feasibility Score Box */}
              <div className="bg-gradient-to-r from-gray-50 to-pearl-100 border-2 border-brown-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircleIcon className="text-green-600 w-5 h-5" />
                  <h3 className="text-lg font-bold text-brown-900">3. نتيجة التقييم الذكي</h3>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white border border-green-300 rounded-lg p-4">
                    <div className="text-3xl font-bold text-green-600 mb-1">82%</div>
                    <div className="text-sm text-gray-600 font-semibold">درجة الجدوى</div>
                    <div className="text-xs text-gray-500 mt-1">مشروع واعد</div>
                  </div>
                  <div className="bg-white border border-brown-300 rounded-lg p-4">
                    <div className="text-3xl font-bold text-brown-600 mb-1">18</div>
                    <div className="text-sm text-gray-600 font-semibold">شهر استرداد</div>
                    <div className="text-xs text-gray-500 mt-1">تقديري</div>
                  </div>
                  <div className="bg-white border border-yellow-300 rounded-lg p-4">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">متوسطة</div>
                    <div className="text-sm text-gray-600 font-semibold">درجة المخاطرة</div>
                    <div className="text-xs text-gray-500 mt-1">قابلة للإدارة</div>
                  </div>
                </div>
              </div>

              {/* Section 4: Location Metrics */}
              <div>
                <div className="flex items-center gap-2 border-b-2 border-brown-200 pb-2 mb-4">
                  <BarChartIcon className="text-brown-600 w-5 h-5" />
                  <h3 className="text-lg font-bold text-brown-900">4. مؤشرات الحي</h3>
                </div>
                <div className="grid grid-cols-4 gap-3 text-center">
                  {[
                    { label: 'الحركة', value: '86%', color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'المنافسة', value: '62%', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                    { label: 'الوصول', value: '88%', color: 'text-green-600', bg: 'bg-green-50' },
                    { label: 'المواقف', value: '60%', color: 'text-yellow-600', bg: 'bg-yellow-50' },
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} border border-gray-200 rounded-lg p-3`}>
                      <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                      <div className="text-xs text-gray-600 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-sm text-gray-700 leading-relaxed">
                  <span className="font-bold text-blue-800">تقرير الحي:</span>{' '}
                  حي {formData.district || 'الجامعيين'} يتميز بحركة سريعة ويخدم شريحة طلابية ووظيفية مع طلب مرتفع على الخدمات السريعة.
                  الإيجار المرجعي يتراوح بين 15,000 — 20,000 ريال سنوياً.
                  المنافسة متوسطة مع وجود فرصة للتمايز بتقديم خدمة فريدة.
                </div>
              </div>

              {/* Section 5: Financials */}
              <div>
                <div className="flex items-center gap-2 border-b-2 border-brown-200 pb-2 mb-4">
                  <CalculatorIcon className="text-brown-600 w-5 h-5" />
                  <h3 className="text-lg font-bold text-brown-900">5. التحليل المالي</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-brown-800 mb-3 text-sm border-b border-brown-200 pb-1">التكاليف الأولية</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        {[
                          { label: 'رأس المال المتاح', value: `${Number(formData.capital || 300000).toLocaleString()} ر.س` },
                          { label: 'تكلفة التأسيس', value: `${Number(formData.setupCost || 120000).toLocaleString()} ر.س` },
                          { label: 'الإيجار السنوي', value: `${Number((formData.monthlyRent || 16000) * 12).toLocaleString()} ر.س` },
                        ].map((item, i) => (
                          <tr key={i} className="border-b border-dashed border-gray-200">
                            <td className="py-2 text-gray-600">{item.label}</td>
                            <td className="py-2 text-right font-semibold text-brown-900">{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <h4 className="font-bold text-brown-800 mb-3 text-sm border-b border-brown-200 pb-1">التوقعات السنوية</h4>
                    <table className="w-full text-sm">
                      <tbody>
                        {[
                          { label: 'الإيرادات المتوقعة', value: '520,000 ر.س' },
                          { label: 'المصاريف التشغيلية', value: `${Number((formData.monthlyExpenses || 35000) * 12).toLocaleString()} ر.س` },
                          { label: 'صافي الربح السنوي', value: '100,000 ر.س', highlight: true },
                        ].map((item, i) => (
                          <tr key={i} className={`border-b border-dashed border-gray-200 ${item.highlight ? 'bg-green-50' : ''}`}>
                            <td className="py-2 text-gray-600">{item.label}</td>
                            <td className={`py-2 text-right font-bold ${item.highlight ? 'text-green-700' : 'text-brown-900'}`}>{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Section 6: Scenarios */}
              <div>
                <div className="flex items-center gap-2 border-b-2 border-brown-200 pb-2 mb-4">
                  <PercentIcon className="text-brown-600 w-5 h-5" />
                  <h3 className="text-lg font-bold text-brown-900">6. سيناريوهات العائد السنوي</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center border-2 border-red-200 bg-red-50 rounded-lg p-4">
                    <div className="text-red-700 text-sm font-bold mb-1">أسوأ حالة</div>
                    <div className="text-2xl font-bold text-red-600">+12%</div>
                    <div className="text-xs text-gray-500 mt-1">62,400 ر.س</div>
                  </div>
                  <div className="text-center border-2 border-yellow-200 bg-yellow-50 rounded-lg p-4">
                    <div className="text-yellow-700 text-sm font-bold mb-1">المتوقع</div>
                    <div className="text-2xl font-bold text-yellow-600">+28%</div>
                    <div className="text-xs text-gray-500 mt-1">145,600 ر.س</div>
                  </div>
                  <div className="text-center border-2 border-green-200 bg-green-50 rounded-lg p-4">
                    <div className="text-green-700 text-sm font-bold mb-1">أفضل حالة</div>
                    <div className="text-2xl font-bold text-green-600">+45%</div>
                    <div className="text-xs text-gray-500 mt-1">234,000 ر.س</div>
                  </div>
                </div>
              </div>

              {/* Section 7: Risks */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 border-b-2 border-yellow-300 pb-2 mb-3">
                    <AlertTriangleIcon className="text-yellow-600 w-5 h-5" />
                    <h3 className="text-lg font-bold text-brown-900">7. نقاط الانتباه</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      'المنافسة متوسطة إلى مرتفعة في النشاط المختار',
                      'تكلفة التأسيس قد ترتفع 15% حسب مواصفات التشطيب',
                      'الحركة الجامعية تنخفض في فترات الامتحانات',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="flex items-center gap-2 border-b-2 border-green-300 pb-2 mb-3">
                    <CheckCircleIcon className="text-green-600 w-5 h-5" />
                    <h3 className="text-lg font-bold text-brown-900">8. توصيات المنصة</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {[
                      'تقديم عروض خاصة للطلاب في أوقات الذروة',
                      'التركيز على جودة الخدمة السريعة كعامل تمايز',
                      'دراسة إضافة خدمة توصيل للمناطق المحيطة',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Section 9: Disclaimer */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600 leading-relaxed">
                <div className="flex items-start gap-2">
                  <InfoIcon className="text-gray-500 w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-700">تنبيه قانوني:</span>{' '}
                    هذا التقرير مُنشأ ذكياً بناءً على المدخلات المقدمة ويتمثل في قراءة أولية توجيهية فقط.
                    لا تعتبر LandX مسؤولة عن أي قرارات استثمارية تُتخذ استناداً إلى هذا التقرير.
                    يُوصى بالحصول على مراجعة بشرية قبل الاتفاقيات النهائية.
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-brown-600 to-brown-700 text-white p-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-bold">LandX</span>
                  <span className="text-pearl-200">|</span>
                  <span className="text-pearl-200">منصة الفرص الاستثمارية</span>
                </div>
                <div className="text-pearl-200 text-xs">
                  تم إنشاء هذا التقرير بواسطة الذكاء الاصطناعي — المرحلة الأولى
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons below paper */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              onClick={resetForm}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 font-bold rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 shadow-lg"
            >
              <SparklesIcon />
              تحليل مشروع جديد
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brown-400 text-brown-700 font-bold rounded-lg hover:bg-brown-50 transition-all duration-300"
            >
              <UsersIcon />
              طلب مراجعة بشرية
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pearl-50 via-pearl-100 to-brown-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brown-600 to-brown-700 py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pearl-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brown-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="w-16 h-16 bg-pearl-100/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-pearl-300/30">
              <SparklesIcon className="text-pearl-100" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-pearl-100 mb-3">
              التحليل الاستثماري الذكي
            </h1>
            <p className="text-pearl-200 max-w-2xl mx-auto">
              أدخل بيانات مشروعك وسيقوم الذكاء الاصطناعي بتحليل الجدوى وتقدير التكاليف والعوائد
            </p>
          </div>
        </div>
      </div>

      {/* Service Info Banner */}
      <div className="bg-gradient-to-b from-pearl-100 to-pearl-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card-gradient border border-brown-300 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-brown-200/30 to-brown-300/30 rounded-lg flex items-center justify-center flex-shrink-0 border border-brown-400">
                <InfoIcon className="text-brown-600" />
              </div>
              <div>
                <h3 className="font-bold text-brown-900 mb-2">الطلب الاستشاري الذكي</h3>
                <p className="text-brown-700 text-sm leading-relaxed">
                  هذا المسار مخصص للمشاريع الحرة غير المرتبطة بفرص المنصة. أدخل الموقع، نوع النشاط، والميزانية، 
                  وستحصل على تقرير أولي يتضمن: تحليل موقع وملاءمة سوق، تقدير مخاطر وتشبع ومنافسة، 
                  قراءة مالية أولية وسيناريوهات، واقتراح أفضل أحياء بديلة حسب النشاط.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 shadow-lg'
                  : 'bg-pearl-100/50 text-brown-700 border border-brown-300 hover:bg-pearl-200/50'
              }`}
            >
              <span className={activeTab === tab.id ? 'text-pearl-100' : 'text-brown-600'}>
                {tab.icon}
              </span>
              {tab.label}
              {isTabComplete(tab.id) && (
                <CheckCircleIcon className={`w-4 h-4 ${activeTab === tab.id ? 'text-pearl-200' : 'text-green-600'}`} />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <Card className="bg-card-gradient border border-brown-300 p-6 md:p-8">
          {/* Project Data Tab */}
          {activeTab === 'project' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <BriefcaseIcon className="text-brown-600" />
                <h2 className="text-xl font-bold text-brown-900">بيانات المشروع</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">اسم المشروع</label>
                  <input
                    type="text"
                    name="projectName"
                    value={formData.projectName}
                    onChange={handleChange}
                    placeholder="مثال: كافيه الجامعيين"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">نوع النشاط</label>
                  <select
                    name="activityType"
                    value={formData.activityType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  >
                    <option value="">اختر نوع النشاط</option>
                    <option value="كافيه">كافيه</option>
                    <option value="مطعم">مطعم</option>
                    <option value="حلويات">محل حلويات</option>
                    <option value="مخبوزات">مخبوزات</option>
                    <option value="مقهى">مقهى</option>
                    <option value="وجبات سريعة">وجبات سريعة</option>
                    <option value="آخر">نشاط آخر</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">نموذج التشغيل</label>
                  <select
                    name="operatingModel"
                    value={formData.operatingModel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  >
                    <option value="">اختر نموذج التشغيل</option>
                    <option value=" dine-in">Dine-In (صالة جلوس)</option>
                    <option value="Drive-Thru">Drive-Thru</option>
                    <option value="Takeaway">Takeaway فقط</option>
                    <option value="توصيل">توصيل + صالة</option>
                    <option value="بوفيه">بوفيه مفتوح</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">الجمهور المستهدف</label>
                  <input
                    type="text"
                    name="targetAudience"
                    value={formData.targetAudience}
                    onChange={handleChange}
                    placeholder="طلاب، عائلات، موظفون..."
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setActiveTab('location')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 font-bold rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300"
                >
                  التالي
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === 'location' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <MapIcon className="text-brown-600" />
                <h2 className="text-xl font-bold text-brown-900">بيانات الموقع</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">المدينة</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  >
                    <option value="حائل">حائل</option>
                    <option value="القصيم">القصيم</option>
                    <option value="تبوك">تبوك</option>
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="الدمام">الدمام</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">الحي</label>
                  <input
                    type="text"
                    name="district"
                    value={formData.district}
                    onChange={handleChange}
                    placeholder="مثال: حي الجامعيين"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">الوصف الدقيق للموقع</label>
                  <input
                    type="text"
                    name="locationDescription"
                    value={formData.locationDescription}
                    onChange={handleChange}
                    placeholder="مثال: طريق الملك عبدالعزيز، زاوية تقاطع مع شارع خدمات"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">مساحة الموقع (متر مربع)</label>
                  <input
                    type="number"
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="180"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">مدة الإطلاق المتوقعة (أشهر)</label>
                  <input
                    type="number"
                    name="launchDuration"
                    value={formData.launchDuration}
                    onChange={handleChange}
                    placeholder="4"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">نوع الواجهة</label>
                  <select
                    name="facadeType"
                    value={formData.facadeType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  >
                    <option value="">اختر نوع الواجهة</option>
                    <option value="شارع رئيسي">شارع رئيسي</option>
                    <option value="شارع فرعي">شارع فرعي</option>
                    <option value="زاوية">زاوية</option>
                    <option value="داخل مجمع">داخل مجمع تجاري</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">توفر المواقف</label>
                  <select
                    name="parking"
                    value={formData.parking}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  >
                    <option value="">اختر التوفر</option>
                    <option value="ممتاز">ممتاز</option>
                    <option value="متوسط">متوسط</option>
                    <option value="محدود">محدود</option>
                    <option value="بدون">بدون مواقف</option>
                  </select>
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">عدد المنافسين المباشرين القريبين</label>
                  <input
                    type="number"
                    name="competitors"
                    value={formData.competitors}
                    onChange={handleChange}
                    placeholder="4"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setActiveTab('project')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-brown-300 text-brown-700 font-bold rounded-lg hover:bg-pearl-100 transition-all duration-300"
                >
                  <ChevronLeftIcon />
                  السابق
                </button>
                <button
                  onClick={() => setActiveTab('financial')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 font-bold rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300"
                >
                  التالي
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}

          {/* Financial Tab */}
          {activeTab === 'financial' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <DollarSignIcon className="text-brown-600" />
                <h2 className="text-xl font-bold text-brown-900">المدخلات المالية</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">رأس المال المتاح (ريال)</label>
                  <input
                    type="number"
                    name="capital"
                    value={formData.capital}
                    onChange={handleChange}
                    placeholder="300000"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">تكلفة التأسيس (ريال)</label>
                  <input
                    type="number"
                    name="setupCost"
                    value={formData.setupCost}
                    onChange={handleChange}
                    placeholder="120000"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">المصاريف التشغيلية الشهرية (ريال)</label>
                  <input
                    type="number"
                    name="monthlyExpenses"
                    value={formData.monthlyExpenses}
                    onChange={handleChange}
                    placeholder="35000"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">الإيجار الشهري المتوقع (ريال)</label>
                  <input
                    type="number"
                    name="monthlyRent"
                    value={formData.monthlyRent}
                    onChange={handleChange}
                    placeholder="16000"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-brown-700 font-semibold mb-2 text-sm">عدد الفريق المتوقع</label>
                  <input
                    type="number"
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleChange}
                    placeholder="6"
                    className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => setActiveTab('location')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-brown-300 text-brown-700 font-bold rounded-lg hover:bg-pearl-100 transition-all duration-300"
                >
                  <ChevronLeftIcon />
                  السابق
                </button>
                <button
                  onClick={() => setActiveTab('review')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 font-bold rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300"
                >
                  التالي
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          )}

          {/* Review Tab */}
          {activeTab === 'review' && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <FileTextIcon className="text-brown-600" />
                <h2 className="text-xl font-bold text-brown-900">المراجعة والإرسال</h2>
              </div>

              {/* Summary */}
              <div className="bg-pearl-100/50 rounded-lg p-6 border border-brown-300 space-y-4">
                <h3 className="font-bold text-brown-900 mb-4">ملخص البيانات المدخلة</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-brown-600 text-sm">المشروع:</span>
                    <span className="text-brown-900 font-semibold mr-2">{formData.projectName || '—'}</span>
                  </div>
                  <div>
                    <span className="text-brown-600 text-sm">النشاط:</span>
                    <span className="text-brown-900 font-semibold mr-2">{formData.activityType || '—'}</span>
                  </div>
                  <div>
                    <span className="text-brown-600 text-sm">الموقع:</span>
                    <span className="text-brown-900 font-semibold mr-2">{formData.city} — {formData.district || '—'}</span>
                  </div>
                  <div>
                    <span className="text-brown-600 text-sm">المساحة:</span>
                    <span className="text-brown-900 font-semibold mr-2">{formData.area || '—'} م²</span>
                  </div>
                  <div>
                    <span className="text-brown-600 text-sm">رأس المال:</span>
                    <span className="text-brown-900 font-semibold mr-2">{formData.capital ? `${Number(formData.capital).toLocaleString()} ريال` : '—'}</span>
                  </div>
                  <div>
                    <span className="text-brown-600 text-sm">التأسيس:</span>
                    <span className="text-brown-900 font-semibold mr-2">{formData.setupCost ? `${Number(formData.setupCost).toLocaleString()} ريال` : '—'}</span>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-brown-700 font-semibold mb-2 text-sm">ملاحظات إضافية أو وصف للمخطط</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="مثال: أفضّل واجهة 2 خطوط خدمة، مواقف مباشرة، تشغيل مسائي قوي..."
                  className="w-full px-4 py-3 bg-pearl-50 border border-brown-300 rounded-lg text-brown-900 placeholder-brown-400 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Options */}
              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 bg-pearl-100/30 rounded-lg border border-brown-300 cursor-pointer hover:bg-pearl-100/50 transition-colors">
                  <input
                    type="checkbox"
                    name="isJointProject"
                    checked={formData.isJointProject}
                    onChange={handleChange}
                    className="w-5 h-5 text-brown-600 border-brown-300 rounded focus:ring-brown-500"
                  />
                  <div>
                    <span className="font-semibold text-brown-900 block">هذا المشروع مشترك</span>
                    <span className="text-brown-700 text-sm">سيتم إظهار هيكل الشركاء ضمن التقرير النهائي</span>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-4 bg-pearl-100/30 rounded-lg border border-brown-300 cursor-pointer hover:bg-pearl-100/50 transition-colors">
                  <input
                    type="checkbox"
                    name="requestHumanReview"
                    checked={formData.requestHumanReview}
                    onChange={handleChange}
                    className="w-5 h-5 text-brown-600 border-brown-300 rounded focus:ring-brown-500"
                  />
                  <div>
                    <span className="font-semibold text-brown-900 block">طلب مراجعة بشرية اختيارية</span>
                    <span className="text-brown-700 text-sm">إضافة قراءة تشغيلية أكثر عمقًا من فريق المنصة بعد التقرير الآلي</span>
                  </div>
                </label>
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setActiveTab('financial')}
                  className="inline-flex items-center gap-2 px-6 py-3 border border-brown-300 text-brown-700 font-bold rounded-lg hover:bg-pearl-100 transition-all duration-300"
                >
                  <ChevronLeftIcon />
                  السابق
                </button>
                <button
                  onClick={generateReport}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 font-bold rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 shadow-lg disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-pearl-100 border-t-transparent rounded-full animate-spin"></div>
                      جاري التحليل...
                    </>
                  ) : (
                    <>
                      <SparklesIcon />
                      إنشاء التقرير الأولي
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default InvestmentAnalysis;
