import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import { useToast } from '../../context/ToastContext';
import { mockOpportunities } from '../../data/mock/opportunities';
import {
  SearchIcon, LeafIcon, BuildingIcon, MailIcon,
  FileTextIcon, ChevronDownIcon, ChevronUpIcon,
  CheckCircleIcon, AlertTriangleIcon, ClockIcon,
  MapPinIcon, ExternalLinkIcon, XIcon
} from '../../components/ui/Icons';

const timeline = [
  { step: 1, title: 'التسجيل', desc: 'إنشاء حساب على المنصة' },
  { step: 2, title: 'تقديم الطلب', desc: 'ملء نموذج الاستثمار' },
  { step: 3, title: 'المراجعة', desc: 'مراجعة الجهة المصدرة' },
  { step: 4, title: 'التوقيع', desc: 'إبرام العقد الرسمي' },
  { step: 5, title: 'بدء المشروع', desc: 'استلام الأرض والبدء' },
];

const documents = [
  { name: 'كراسة الشروط والأحكام', size: '2.4 MB', type: 'PDF' },
  { name: 'المخطط الهندسي للأرض', size: '5.1 MB', type: 'PDF' },
  { name: 'التقرير البيئي', size: '1.8 MB', type: 'PDF' },
];

const faqs = [
  { q: 'ما هي شروط الاستثمار في هذه الفرصة؟', a: 'يجب أن يكون المستثمر سعودي الجنسية أو شركة مسجلة في السعودية، وأن يكون رأس المال المتاح يغطي الاستثمار المطلوب.' },
  { q: 'هل يمكن الاستثمار الجزئي؟', a: 'نعم، يمكن الاستثمار الجزئي من خلال نظام الشراكات المتاح في المنصة.' },
  { q: 'ما هي مدة العقد؟', a: 'مدة العقد تعتمد على نوع المشروع والموسم، وعادة ما تتراوح بين 1 إلى 3 سنوات.' },
];

const OpportunityDetails = () => {
  const { id } = useParams();
  const { addToast } = useToast();
  const opportunity = mockOpportunities.find((op) => op.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [modalSubmitted, setModalSubmitted] = useState(false);

  const related = mockOpportunities.filter((op) => op.id !== parseInt(id) && op.status === 'active').slice(0, 3);

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-app-bg flex items-center justify-center px-4">
        <Card className="text-center py-12 px-6 max-w-xl w-full bg-card-gradient border border-app-border">
          <SearchIcon className="w-16 h-16 text-app-text-soft mb-4" />
          <h2 className="text-2xl font-bold text-app-text mb-2">الفرصة غير موجودة</h2>
          <p className="text-app-text-muted mb-6">عذراً، الفرصة الاستثمارية التي تبحث عنها غير موجودة</p>
          <Link to="/opportunities"><Button>العودة للفرص الاستثمارية</Button></Link>
        </Card>
      </div>
    );
  }

  const { title, municipality, location, season, area, areaUnit, expectedReturn, investmentRequired, currency, status, images, description, features } = opportunity;

  const formatCurrency = (amount) => new Intl.NumberFormat('ar-SA').format(amount);

  const seasonLabels = { winter: 'شتوي', summer: 'صيفي', spring: 'ربيعي', autumn: 'خريفي' };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setModalSubmitted(true);
    addToast('تم إرسال طلب الاستثمار بنجاح! سنتواصل معك قريباً.', 'success');
    setTimeout(() => { setModalSubmitted(false); setShowModal(false); }, 2000);
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand/90 to-brand-deep/90 border-b border-brand/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/opportunities" className="text-app-text-muted hover:text-app-text font-medium mb-4 inline-block transition-colors">← العودة للفرص الاستثمارية</Link>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4">
            <div>
              <Badge variant={status === 'active' ? 'success' : 'warning'} className="mb-2">{status === 'active' ? 'نشط' : 'قيد المراجعة'}</Badge>
              <h1 className="text-3xl font-bold text-app-text">{title}</h1>
              <p className="text-app-text-muted mt-2">{municipality}</p>
            </div>
            <Button size="lg" onClick={() => setShowModal(true)}>طلب استثمار</Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Images */}
            <Card>
              <div className="aspect-video bg-app-surface-strong rounded-lg overflow-hidden border border-app-border">
                {images?.length > 0 ? <img src={images[0]} alt={title} className="w-full h-full object-cover" /> : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-app-surface to-app-surface-strong"><LeafIcon className="w-16 h-16 text-app-text-soft" /></div>
                )}
              </div>
              {images?.length > 1 && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {images.slice(1).map((img, i) => (
                    <div key={i} className="aspect-video bg-app-surface-strong rounded-lg overflow-hidden border border-app-border"><img src={img} alt={`${title} ${i + 2}`} className="w-full h-full object-cover" /></div>
                  ))}
                </div>
              )}
            </Card>

            {/* Description */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text mb-4">وصف الفرصة</h2>
              <p className="text-app-text-muted leading-relaxed">{description}</p>
            </Card>

            {/* Features */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text mb-4">المميزات</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2"><CheckCircleIcon className="w-4 h-4 text-success flex-shrink-0" /><span className="text-app-text-muted">{feature}</span></li>
                ))}
              </ul>
            </Card>

            {/* Timeline */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text mb-6">مراحل الاستثمار</h2>
              <div className="relative">
                <div className="absolute right-5 top-0 bottom-0 w-0.5 bg-app-border" />
                <div className="space-y-6">
                  {timeline.map((t) => (
                    <div key={t.step} className="flex items-start gap-4 relative pr-12">
                      <div className="absolute right-0 w-10 h-10 bg-gradient-to-r from-brand to-brand-deep rounded-full flex items-center justify-center text-app-text font-bold text-sm border-4 border-app-bg z-10">{t.step}</div>
                      <div className="bg-app-surface-soft rounded-lg p-4 flex-1 border border-app-border">
                        <h3 className="font-bold text-app-text mb-1">{t.title}</h3>
                        <p className="text-sm text-app-text-muted">{t.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Documents */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text mb-4">المستندات المتاحة</h2>
              <div className="space-y-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-app-surface-soft rounded-lg border border-app-border hover:border-brand transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-lg flex items-center justify-center border border-brand"><FileTextIcon className="text-brand" /></div>
                      <div><p className="font-semibold text-app-text text-sm">{doc.name}</p><p className="text-xs text-app-text-soft">{doc.size} • {doc.type}</p></div>
                    </div>
                    <button onClick={() => alert(`سيتم تحميل: ${doc.name}`)} className="text-app-text-muted hover:text-app-text font-medium text-sm flex items-center gap-1"><ExternalLinkIcon className="w-4 h-4" /> تحميل</button>
                  </div>
                ))}
              </div>
            </Card>

            {/* FAQ */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text mb-4">أسئلة شائعة</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-app-border rounded-lg overflow-hidden">
                    <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)} className="w-full text-right p-4 flex items-center justify-between gap-4 bg-app-surface-soft hover:bg-app-surface transition-colors">
                      <span className="font-semibold text-app-text text-sm">{faq.q}</span>
                      {expandedFaq === i ? <ChevronUpIcon className="w-4 h-4 text-app-text-soft" /> : <ChevronDownIcon className="w-4 h-4 text-app-text-soft" />}
                    </button>
                    {expandedFaq === i && <div className="px-4 pb-4 text-app-text-muted text-sm leading-relaxed">{faq.a}</div>}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text mb-4">معلومات الاستثمار</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-app-border"><span className="text-app-text-muted">الموسم</span><span className="font-semibold text-app-text">{seasonLabels[season]}</span></div>
                <div className="flex justify-between items-center py-3 border-b border-app-border"><span className="text-app-text-muted">المساحة</span><span className="font-semibold text-app-text">{area} {areaUnit}</span></div>
                <div className="flex justify-between items-center py-3 border-b border-app-border"><span className="text-app-text-muted">العائد المتوقع</span><span className="font-semibold text-success text-lg">{expectedReturn}%</span></div>
                <div className="flex justify-between items-center py-3 border-b border-app-border"><span className="text-app-text-muted">الاستثمار المطلوب</span><span className="font-semibold text-app-text text-lg">{formatCurrency(investmentRequired)} {currency}</span></div>
                <div className="flex justify-between items-center py-3"><span className="text-app-text-muted">الموقع</span><span className="font-semibold text-app-text text-right">{location}</span></div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold text-app-text mb-4">الجهة المصدرة</h2>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-brand/20 to-brand-deep/20 rounded-full border border-brand flex items-center justify-center"><BuildingIcon className="text-3xl text-brand" /></div>
                <div><p className="font-semibold text-app-text">{municipality}</p><p className="text-sm text-app-text-muted">جهة حكومية معتمدة</p></div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-brand/10 to-brand-deep/10 border border-app-border">
              <h2 className="text-xl font-bold text-app-text mb-4">هل لديك استفسار؟</h2>
              <p className="text-app-text-muted mb-4">يمكنك التواصل معنا مباشرة للحصول على مزيد من المعلومات</p>
              <Link to="/contact"><Button className="w-full">تواصل معنا</Button></Link>
            </Card>
          </div>
        </div>

        {/* Related Opportunities */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-app-text mb-6">فرص مشابهة</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((op) => (
                <Link key={op.id} to={`/opportunities/${op.id}`} className="block group">
                  <Card className="overflow-hidden border border-app-border hover:border-brand transition-all duration-300 hover:shadow-lg h-full">
                    <div className="aspect-video bg-app-surface-strong relative overflow-hidden">
                      {op.images?.[0] ? <img src={op.images[0]} alt={op.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <div className="w-full h-full flex items-center justify-center"><LeafIcon className="w-12 h-12 text-app-text-soft" /></div>}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-app-text mb-1 group-hover:text-brand transition-colors">{op.title}</h3>
                      <p className="text-sm text-app-text-soft mb-2">{op.municipality}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-success font-semibold">{op.expectedReturn}% عائد</span>
                        <span className="text-app-text-muted">{formatCurrency(op.investmentRequired)} {op.currency}</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Investment Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)}>
          <Card className="w-full max-w-lg bg-card-gradient border border-app-border shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-app-text">طلب استثمار</h2>
                <button onClick={() => setShowModal(false)} className="text-app-text-soft hover:text-app-text transition-colors"><XIcon className="w-6 h-6" /></button>
              </div>
              {modalSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircleIcon className="w-12 h-12 text-success mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-app-text mb-2">تم إرسال الطلب!</h3>
                  <p className="text-app-text-muted text-sm">سنتواصل معك قريباً لاستكمال الإجراءات.</p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div><label className="block text-sm font-medium text-app-text-muted mb-1">الاسم الكامل</label><input required className="w-full px-3 py-2 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-sm" placeholder="أدخل اسمك" /></div>
                  <div><label className="block text-sm font-medium text-app-text-muted mb-1">البريد الإلكتروني</label><input type="email" required className="w-full px-3 py-2 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-sm" placeholder="example@email.com" /></div>
                  <div><label className="block text-sm font-medium text-app-text-muted mb-1">رقم الهاتف</label><input type="tel" required className="w-full px-3 py-2 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-sm" placeholder="+966 XX XXX XXXX" /></div>
                  <div><label className="block text-sm font-medium text-app-text-muted mb-1">مبلغ الاستثمار المقترح</label><input type="number" required className="w-full px-3 py-2 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-sm" placeholder="500000" /></div>
                  <div><label className="block text-sm font-medium text-app-text-muted mb-1">ملاحظات</label><textarea rows={3} className="w-full px-3 py-2 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand resize-none text-sm" placeholder="أي ملاحظات إضافية..."></textarea></div>
                  <div className="flex gap-3 pt-2">
                    <Button type="submit" className="flex-1">إرسال الطلب</Button>
                    <Button type="button" variant="outline" onClick={() => setShowModal(false)}>إلغاء</Button>
                  </div>
                </form>
              )}
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default OpportunityDetails;
