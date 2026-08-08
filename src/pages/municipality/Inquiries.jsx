import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { MessageCircleIcon, ReplyIcon, CheckIcon } from '../../components/ui/Icons';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { inquiryApi } from '../../lib/api';
import { formatArabicDate } from '../../lib/formatters';

const MunicipalityInquiries = () => {
  const { token } = useAuth();
  const { addToast } = useToast();
  const [replyingId, setReplyingId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const { data: inquiries, loading, error, setData } = useAsyncData(() => inquiryApi.municipality(token), [token]);

  const handleReply = async (inquiryId) => {
    if (!replyText.trim()) return;
    try {
      const updated = await inquiryApi.reply(token, inquiryId, { message: replyText });
      setData((prev) => prev.map((item) => (item.id === inquiryId ? updated : item)));
      setReplyingId(null);
      setReplyText('');
      addToast('تم إرسال الرد بنجاح.', 'success');
    } catch (err) {
      addToast(err.message || 'تعذر إرسال الرد.', 'error');
    }
  };

  const getStatusBadge = (status) => {
    const badges = {
      pending: { label: 'جديد', className: 'bg-warning/10 text-warning border-warning/30' },
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
        <h1 className="text-3xl font-black text-app-text">استفسارات المستثمرين</h1>
        <p className="mt-2 max-w-3xl text-base leading-8 text-app-text-muted">
          كل استفسار هنا مرتبط بفرصة محددة، ويظهر ردك للمستثمر داخل حسابه مباشرة. استخدم هذه الصفحة
          لإدارة التواصل وتحويل الاهتمام إلى فرصة تعاون.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-app-text-muted">إجمالي الاستفسارات</h3>
            <MessageCircleIcon className="text-app-text-soft" />
          </div>
          <p className="text-3xl font-bold text-app-text">{inquiries.length}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">جديد</h3>
            <MessageCircleIcon className="text-warning" />
          </div>
          <p className="text-3xl font-bold text-warning">{inquiries.filter((i) => i.status === 'pending').length}</p>
        </Card>

        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-app-text-muted">تم الرد</h3>
            <CheckIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{inquiries.filter((i) => i.status === 'answered').length}</p>
        </Card>
      </div>

      <Card className="bg-card-gradient border border-app-border">
        <div className="p-6 border-b border-app-border">
          <h2 className="text-xl font-black text-app-text">قائمة الاستفسارات</h2>
        </div>
        <div className="p-6 space-y-4">
          {inquiries.map((inquiry) => {
            const badge = getStatusBadge(inquiry.status);
            return (
              <div key={inquiry.id} className="rounded-2xl border border-[#e2c8b2] bg-white/65 p-5">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="font-bold text-app-text">{inquiry.subject}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>{badge.label}</span>
                    </div>
                    <p className="text-sm leading-7 text-app-text-muted mb-1">الفرصة رقم #{inquiry.opportunity_id}</p>
                    <p className="text-xs text-app-text-soft">{formatArabicDate(inquiry.created_at)}</p>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-8 text-app-text-muted">{inquiry.message}</p>

                {inquiry.replies?.length ? (
                  <div className="mb-4 space-y-2 border-t border-[#ead9c7] pt-3">
                    {inquiry.replies.map((reply) => (
                      <div key={reply.id} className="rounded-2xl bg-[#fbf5ef] p-3">
                        <p className="text-sm leading-8 text-app-text-muted">{reply.message}</p>
                        <p className="mt-1 text-xs text-app-text-soft">{formatArabicDate(reply.created_at)}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {replyingId === inquiry.id ? (
                  <div className="space-y-3">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      rows={4}
                      className="w-full resize-none rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text placeholder:text-app-text-soft"
                      placeholder="اكتب ردك هنا"
                    />
                    <div className="flex gap-3">
                      <Button onClick={() => handleReply(inquiry.id)}>إرسال الرد</Button>
                      <Button variant="outline" onClick={() => { setReplyingId(null); setReplyText(''); }}>إلغاء</Button>
                    </div>
                  </div>
                ) : inquiry.status === 'pending' ? (
                  <button
                    onClick={() => setReplyingId(inquiry.id)}
                    className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand to-brand-deep px-4 py-2 text-sm text-app-text"
                  >
                    <ReplyIcon />
                    <span>الرد على الاستفسار</span>
                  </button>
                ) : null}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default MunicipalityInquiries;
