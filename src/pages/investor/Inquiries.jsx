import React from 'react';
import Card from '../../components/ui/Card';
import { MessageCircleIcon, ReplyIcon, UploadIcon } from '../../components/ui/Icons';

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
      pending: { label: 'بانتظار الرد', className: 'bg-warning/10 text-warning border-warning/30', icon: <ReplyIcon /> },
      answered: { label: 'تم الرد', className: 'bg-success/10 text-success border-success/30', icon: <ReplyIcon /> },
    };
    return badges[status] || badges.pending;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">الاستفسارات</h1>
        <p className="text-app-text-muted mt-2">تتبع استفساراتك والتواصل مع البلديات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي الاستفسارات</h3>
              <MessageCircleIcon className="text-app-text-soft" />
            </div>
            <p className="text-3xl font-bold text-app-text">{inquiries.length}</p>
            <p className="text-sm text-app-text-soft mt-2">استفسار</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">بانتظار الرد</h3>
              <ReplyIcon className="text-warning" />
            </div>
            <p className="text-3xl font-bold text-warning">
              {inquiries.filter(i => i.status === 'pending').length}
            </p>
            <p className="text-sm text-app-text-soft mt-2">استفسار</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">تم الرد</h3>
              <ReplyIcon className="text-success" />
            </div>
            <p className="text-3xl font-bold text-success">
              {inquiries.filter(i => i.status === 'answered').length}
            </p>
            <p className="text-sm text-app-text-soft mt-2">استفسار</p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">قائمة الاستفسارات</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {inquiries.map((inquiry) => {
                const badge = getStatusBadge(inquiry.status);
                return (
                  <div
                    key={inquiry.id}
                    className="p-4 bg-app-surface-soft border border-app-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-app-text mb-1">{inquiry.subject}</h3>
                        <p className="text-sm text-app-text-muted">
                          {inquiry.opportunity} • {inquiry.municipality}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs border flex items-center gap-1 ${badge.className}`}>
                        {badge.icon}
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-app-text mb-3">{inquiry.message}</p>
                    <div className="text-xs text-app-text-soft mb-3">
                      {inquiry.date}
                    </div>
                    {inquiry.replies.length > 0 && (
                      <div className="space-y-2 mt-3 pt-3 border-t border-app-border">
                        {inquiry.replies.map((reply, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-app-surface rounded-lg"
                          >
                            <p className="text-sm text-app-text-muted mb-1">
                              <span className="font-bold">الرد من البلدية:</span> {reply.message}
                            </p>
                            <p className="text-xs text-app-text-soft">{reply.date}</p>
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
      </div>
    </div>
  );
};

export default Inquiries;
