import React from 'react';
import Card from '../../components/ui/Card';
import { MessageCircleIcon, ReplyIcon } from '../../components/ui/Icons';

const MunicipalityInquiries = () => {
  const inquiries = [
    {
      id: 1,
      investor: 'أحمد محمد',
      opportunity: 'وادي حائل الزراعي',
      subject: 'استفسار عن البنية التحتية',
      message: 'ما هي البنية التحتية المتاحة في المنطقة؟ هل هناك طرق معبدة ومصادر مياه؟',
      status: 'pending',
      date: '2024-05-15',
    },
    {
      id: 2,
      investor: 'خالد العتيبي',
      opportunity: 'سهول القصيم',
      subject: 'تفاصيل العائد المتوقع',
      message: 'كيف يتم حساب العائد المتوقع؟ هل هناك ضمانات؟',
      status: 'answered',
      date: '2024-05-10',
    },
    {
      id: 3,
      investor: 'سعيد الدوسري',
      opportunity: 'وادي تبوك',
      subject: 'المواعيد النهائية',
      message: 'ما هو الموعد النهائي للتقديم؟',
      status: 'pending',
      date: '2024-05-08',
    },
    {
      id: 4,
      investor: 'محمد الشمري',
      opportunity: 'وادي الجوف',
      subject: 'الوثائق المطلوبة',
      message: 'ما هي الوثائق المطلوبة للتقديم؟',
      status: 'pending',
      date: '2024-05-05',
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      pending: { label: 'جديد', className: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30' },
      answered: { label: 'تم الرد', className: 'bg-green-500/20 text-green-600 border-green-500/30' },
    };
    return badges[status] || badges.pending;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">استفسارات المستثمرين</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">الرد على استفسارات المستثمرين وتوفير المعلومات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الاستفسارات</h3>
              <MessageCircleIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{inquiries.length}</p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">استفسار</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">جديد</h3>
              <MessageCircleIcon className="text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              {inquiries.filter(i => i.status === 'pending').length}
            </p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">بانتظار الرد</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">تم الرد</h3>
              <CheckIcon className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              {inquiries.filter(i => i.status === 'answered').length}
            </p>
            <p className="text-sm text-brown-600 dark:text-stone-400 mt-2">استفسار</p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">قائمة الاستفسارات</h2>
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
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-brown-900 dark:text-stone-100">{inquiry.investor}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-sm text-brown-700 dark:text-stone-400 mb-1">
                          {inquiry.opportunity} • {inquiry.date}
                        </p>
                        <p className="font-medium text-brown-900 dark:text-stone-100 mb-2">{inquiry.subject}</p>
                      </div>
                    </div>
                    <p className="text-brown-900 dark:text-stone-100 mb-4">{inquiry.message}</p>
                    {inquiry.status === 'pending' && (
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 text-sm">
                        <ReplyIcon />
                        <span>الرد على الاستفسار</span>
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MunicipalityInquiries;
