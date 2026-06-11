import React from 'react';
import Card from '../../components/ui/Card';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi, newsApi, opportunitiesApi } from '../../lib/api';
import { CheckIcon, ClockIcon, EyeIcon, ShieldCheckIcon, XIcon } from '../../components/ui/Icons';

const AdminModeration = () => {
  const { token } = useAuth();
  const { data, loading, error } = useAsyncData(async () => {
    const [stats, opportunities, news] = await Promise.all([
      adminApi.stats(token),
      opportunitiesApi.list(),
      newsApi.list(),
    ]);
    return {
      stats,
      pendingOpportunities: opportunities.filter((item) => item.status === 'pending'),
      pendingNews: news.filter((item) => item.priority === 'high'),
    };
  }, [token]);

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل الإشراف...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  const pendingItems = [
    ...data.pendingOpportunities.map((item) => ({ id: `opp-${item.id}`, type: 'فرصة', title: item.title, meta: item.location })),
    ...data.pendingNews.map((item) => ({ id: `news-${item.id}`, type: 'خبر/إعلان', title: item.title, meta: item.created_at })),
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-app-text">الإشراف</h1>
        <p className="mt-2 max-w-3xl text-base leading-8 text-app-text-muted">
          هذه الصفحة تجمع العناصر التي تحتاج مراجعة إدارية، مع إبراز ما هو مهم بصرياً حتى لا تضيع الإشارة وسط التفاصيل.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-3">
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-app-text-muted">قيد المراجعة</h3>
            <ClockIcon className="text-warning" />
          </div>
          <p className="text-3xl font-bold text-warning">{pendingItems.length}</p>
        </Card>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-app-text-muted">الفرص المعلقة</h3>
            <ShieldCheckIcon className="text-danger" />
          </div>
          <p className="text-3xl font-bold text-danger">{data.pendingOpportunities.length}</p>
        </Card>
        <Card className="p-6 bg-card-gradient border border-app-border">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-medium text-app-text-muted">الإشعارات العالية</h3>
            <CheckIcon className="text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{data.pendingNews.length}</p>
        </Card>
      </div>

      <Card className="bg-card-gradient border border-app-border">
        <div className="p-6 border-b border-app-border">
          <h2 className="text-xl font-black text-app-text">العناصر التي تحتاج متابعة</h2>
        </div>
        <div className="p-6 space-y-4">
          {pendingItems.map((item) => (
            <div key={item.id} className="rounded-2xl border border-[#e2c8b2] bg-white/65 p-4">
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <h3 className="font-bold text-app-text">{item.title}</h3>
                    <span className="rounded-full border border-brand/30 bg-brand/20 px-3 py-1 text-xs text-brand">{item.type}</span>
                  </div>
                  <p className="text-sm leading-7 text-app-text-muted">{item.meta}</p>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button className="rounded-lg p-2 transition-colors hover:bg-app-surface" title="عرض"><EyeIcon className="text-brand" /></button>
                <button className="rounded-lg p-2 transition-colors hover:bg-success/10" title="موافقة"><CheckIcon className="text-success" /></button>
                <button className="rounded-lg p-2 transition-colors hover:bg-danger/10" title="رفض"><XIcon className="text-danger" /></button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminModeration;
