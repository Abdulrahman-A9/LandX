import React from 'react';
import Card from '../../components/ui/Card';
import { MessageCircleIcon, ReplyIcon } from '../../components/ui/Icons';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { inquiryApi } from '../../lib/api';
import { formatArabicDate } from '../../lib/formatters';

const Inquiries = () => {
  const { token } = useAuth();
  const { data: inquiries, loading, error } = useAsyncData(() => inquiryApi.my(token), [token]);

  const getStatusBadge = (status) => {
    const badges = {
      pending: { label: 'بانتظار الرد', className: 'bg-warning/10 text-warning border-warning/30' },
      answered: { label: 'تم الرد', className: 'bg-success/10 text-success border-success/30' },
      closed: { label: 'مغلق', className: 'bg-app-surface-soft text-app-text border-app-border' },
    };
    return badges[status] || badges.pending;
  };

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل الاستفسارات...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">الاستفسارات</h1>
        <p className="mt-2 text-app-text-muted">هذه القائمة مرتبطة مباشرة بالاستفسارات المحفوظة في قاعدة البيانات.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-8">
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">إجمالي الاستفسارات</h3>
            <MessageCircleIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{inquiries.length}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">بانتظار الرد</h3>
            <ReplyIcon className="text-warning" />
          </div>
          <p className="text-3xl font-bold text-warning">{inquiries.filter((item) => item.status === 'pending').length}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">تم الرد</h3>
            <ReplyIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{inquiries.filter((item) => item.status === 'answered').length}</p>
        </Card>
      </div>

      <Card className="bg-card-gradient border border-app-border">
        <div className="p-6 border-b border-app-border">
          <h2 className="text-xl font-bold text-app-text">قائمة الاستفسارات</h2>
        </div>
        <div className="p-6 space-y-4">
          {inquiries.map((inquiry) => {
            const badge = getStatusBadge(inquiry.status);
            return (
              <div key={inquiry.id} className="rounded-lg border border-app-border bg-app-surface-soft p-4">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-app-text mb-1">{inquiry.subject}</h3>
                    <p className="text-sm text-app-text-muted">الفرصة رقم #{inquiry.opportunity_id}</p>
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs ${badge.className}`}>{badge.label}</span>
                </div>
                <p className="mb-3 text-app-text">{inquiry.message}</p>
                <div className="text-xs text-app-text-soft">{formatArabicDate(inquiry.created_at)}</div>
                {inquiry.replies?.length ? (
                  <div className="mt-3 space-y-2 border-t border-app-border pt-3">
                    {inquiry.replies.map((reply) => (
                      <div key={reply.id} className="rounded-lg bg-app-surface p-3">
                        <p className="text-sm text-app-text-muted">{reply.message}</p>
                        <p className="mt-1 text-xs text-app-text-soft">{formatArabicDate(reply.created_at)}</p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Inquiries;
