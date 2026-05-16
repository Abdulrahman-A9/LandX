import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { ClockIcon, CheckCircleIcon, MessageCircleIcon } from '../../components/ui/Icons';

const Inquiries = () => {
  const inquiries = [
    {
      id: 1,
      opportunity: 'وادي حائل الزراعي',
      municipality: 'أمانة منطقة حائل',
      subject: 'استفسار عن البنية التحتية',
      message: 'ما هي البنية التحتية المتاحة في المنطقة؟ هل هناك طرق معبدة ومصادر مياه؟',
      status: 'pending',
      date: '2024-05-15',
      replies: [],
    },
    {
      id: 2,
      opportunity: 'سهول القصيم',
      municipality: 'أمانة منطقة القصيم',
      subject: 'تفاصيل العائد المتوقع',
      message: 'كيف يتم حساب العائد المتوقع؟ هل هناك ضمانات؟',
      status: 'answered',
      date: '2024-05-10',
      replies: [
        {
          from: 'municipality',
          message: 'العائد المتوقع يحسب بناءً على بيانات تاريخية للأعوام الخمسة الماضية، وتوجد ضمانات من البلدية.',
          date: '2024-05-11',
        },
      ],
    },
    {
      id: 3,
      opportunity: 'وادي تبوك',
      municipality: 'أمانة منطقة تبوك',
      subject: 'المواعيد النهائية',
      message: 'ما هو الموعد النهائي للتقديم؟',
      status: 'pending',
      date: '2024-05-08',
      replies: [],
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: { label: 'بانتظار الرد', className: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30', icon: <ClockIcon /> },
      answered: { label: 'تم الرد', className: 'bg-green-500/20 text-green-600 border-green-500/30', icon: <CheckCircleIcon /> },
    };
    return badges[status] || badges.pending;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">الاستفسارات</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">تتبع استفساراتك والتواصل مع البلديات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الاستفسارات</h3>
              <MessageCircleIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{inquiries.length}</p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">استفسار</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">بانتظار الرد</h3>
              <ClockIcon className="text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              {inquiries.filter(i => i.status === 'pending').length}
            </p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">استفسار</p>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" delay={200}>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">سجل الاستفسارات</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {inquiries.map((inquiry) => {
                const badge = getStatusBadge(inquiry.status);
                return (
                  <div
                    key={inquiry.id}
                    className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-brown-900 dark:text-stone-100 mb-1">{inquiry.subject}</h3>
                        <p className="text-sm text-brown-700 dark:text-stone-400">
                          {inquiry.opportunity} • {inquiry.municipality}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs border flex items-center gap-1 ${badge.className}`}>
                        {badge.icon}
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-brown-900 dark:text-stone-100 mb-3">{inquiry.message}</p>
                    <div className="text-xs text-brown-600 dark:text-stone-400 mb-3">
                      {inquiry.date}
                    </div>
                    {inquiry.replies.length > 0 && (
                      <div className="space-y-2 mt-3 pt-3 border-t border-brown-300 dark:border-stone-700">
                        {inquiry.replies.map((reply, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-brown-100/50 dark:bg-stone-700/50 rounded-lg"
                          >
                            <p className="text-sm text-brown-700 dark:text-stone-300 mb-1">
                              <span className="font-bold">الرد من البلدية:</span> {reply.message}
                            </p>
                            <p className="text-xs text-brown-600 dark:text-stone-400">{reply.date}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default Inquiries;
