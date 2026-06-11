import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { NewspaperIcon } from '../../components/ui/Icons';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { newsApi } from '../../lib/api';
import { formatArabicDate } from '../../lib/formatters';

const MunicipalityNews = () => {
  const { token, user } = useAuth();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ title: '', content: '', priority: 'medium' });
  const [submitting, setSubmitting] = useState(false);
  const { data: news, loading, error, setData } = useAsyncData(async () => {
    const result = await newsApi.municipality(token);
    return result.filter((item) => item.type === 'news');
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      const created = await newsApi.create(token, {
        title: formData.title,
        content: formData.content,
        priority: formData.priority,
        type: 'news',
        municipality_id: user?.municipality_id,
        is_published: true,
      });
      setData((prev) => [created, ...prev]);
      setFormData({ title: '', content: '', priority: 'medium' });
      addToast('تم نشر الخبر بنجاح.', 'success');
    } catch (err) {
      addToast(err.message || 'تعذر نشر الخبر.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جارٍ تحميل الأخبار...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-app-text">الأخبار</h1>
        <p className="mt-2 max-w-3xl text-base leading-8 text-app-text-muted">
          الأخبار تظهر للزوار والمستثمرين كواجهة حيوية لنشاط البلدية ومواسمها ومشاريعها الحالية.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border border-app-border bg-card-gradient p-6">
          <h2 className="text-xl font-bold text-app-text">خبر جديد</h2>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <input value={formData.title} onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))} required placeholder="عنوان الخبر" className="w-full rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <select value={formData.priority} onChange={(e) => setFormData((p) => ({ ...p, priority: e.target.value }))} className="w-full rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text">
              <option value="high">عاجل</option>
              <option value="medium">متوسط</option>
              <option value="low">عادي</option>
            </select>
            <textarea value={formData.content} onChange={(e) => setFormData((p) => ({ ...p, content: e.target.value }))} required rows={5} placeholder="محتوى الخبر" className="w-full resize-none rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <Button type="submit" disabled={submitting}>{submitting ? 'جارٍ النشر...' : 'نشر الخبر'}</Button>
          </form>
        </Card>

        <Card className="border border-app-border bg-card-gradient">
          <div className="border-b border-app-border p-6">
            <h2 className="text-xl font-bold text-app-text">قائمة الأخبار</h2>
          </div>
          <div className="space-y-4 p-6">
            {news.map((item) => (
              <div key={item.id} className="rounded-2xl border border-[#e2c8b2] bg-white/70 p-4 shadow-[0_18px_40px_rgba(90,52,26,0.07)]">
                <div className="mb-2 flex items-center gap-3">
                  <NewspaperIcon className="text-brand" />
                  <h3 className="font-bold text-app-text">{item.title}</h3>
                </div>
                <p className="text-sm font-medium text-app-text-muted">{formatArabicDate(item.created_at)}</p>
                <p className="mt-3 text-sm leading-8 text-app-text">{item.content}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default MunicipalityNews;
