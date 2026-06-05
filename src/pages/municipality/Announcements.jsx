import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { MegaphoneIcon } from '../../components/ui/Icons';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { newsApi } from '../../lib/api';
import { formatArabicDate } from '../../lib/formatters';

const Announcements = () => {
  const { token, user } = useAuth();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ title: '', content: '', priority: 'medium' });
  const [submitting, setSubmitting] = useState(false);
  const { data: announcements, loading, error, setData } = useAsyncData(async () => {
    const result = await newsApi.municipality(token);
    return result.filter((item) => item.type === 'announcement');
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      const created = await newsApi.create(token, {
        title: formData.title,
        content: formData.content,
        priority: formData.priority,
        type: 'announcement',
        municipality_id: user?.municipality_id,
        is_published: true,
      });
      setData((prev) => [created, ...prev]);
      setFormData({ title: '', content: '', priority: 'medium' });
      addToast('تم نشر الإعلان بنجاح.', 'success');
    } catch (err) {
      addToast(err.message || 'تعذر نشر الإعلان.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل الإعلانات...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">الإعلانات</h1>
        <p className="mt-2 text-app-text-muted">يمكنك نشر إعلان جديد وسيظهر مباشرة في الصفحة العامة.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="p-6">
          <h2 className="text-xl font-bold text-app-text">إعلان جديد</h2>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <input value={formData.title} onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))} required placeholder="عنوان الإعلان" className="w-full rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <select value={formData.priority} onChange={(e) => setFormData((p) => ({ ...p, priority: e.target.value }))} className="w-full rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text">
              <option value="high">عاجل</option>
              <option value="medium">متوسط</option>
              <option value="low">عادي</option>
            </select>
            <textarea value={formData.content} onChange={(e) => setFormData((p) => ({ ...p, content: e.target.value }))} required rows={5} placeholder="محتوى الإعلان" className="w-full resize-none rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <Button type="submit" disabled={submitting}>{submitting ? 'جاري النشر...' : 'نشر الإعلان'}</Button>
          </form>
        </Card>

        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">قائمة الإعلانات</h2>
          </div>
          <div className="p-6 space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="rounded-lg border border-app-border bg-app-surface-soft p-4">
                <div className="mb-2 flex items-center gap-3">
                  <MegaphoneIcon className="text-brand" />
                  <h3 className="font-bold text-app-text">{announcement.title}</h3>
                </div>
                <p className="text-sm text-app-text-muted">{formatArabicDate(announcement.created_at)}</p>
                <p className="mt-3 text-app-text">{announcement.content}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Announcements;
