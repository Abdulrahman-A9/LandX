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
  const [editing, setEditing] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const { data: announcements, loading, error, setData } = useAsyncData(async () => {
    const result = await newsApi.municipality(token);
    return result.filter((item) => item.type === 'announcement');
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setSubmitting(true);
      const payload = {
        title: formData.title,
        content: formData.content,
        priority: formData.priority,
        type: 'announcement',
        municipality_id: user?.municipality_id,
        is_published: true,
      };
      const saved = editing ? await newsApi.update(token, editing.id, payload) : await newsApi.create(token, payload);
      setData((prev) => editing ? prev.map((item) => item.id === saved.id ? saved : item) : [saved, ...prev]);
      setFormData({ title: '', content: '', priority: 'medium' });
      setEditing(null);
      addToast(editing ? 'تم تحديث الإعلان.' : 'تم نشر الإعلان بنجاح.', 'success');
    } catch (err) {
      addToast(err.message || 'تعذر نشر الإعلان.', 'error');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جارٍ تحميل الإعلانات...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">{error}</Card>;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-app-text">الإعلانات</h1>
        <p className="mt-2 max-w-3xl text-base leading-8 text-app-text-muted">
          استخدم هذه الصفحة لنشر الإعلانات التشغيلية أو التنبيهية التي يجب أن تظهر مباشرة للمستثمرين والزوار.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border border-app-border bg-card-gradient p-6">
          <h2 className="text-xl font-bold text-app-text">{editing ? 'تعديل الإعلان' : 'إعلان جديد'}</h2>
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <input value={formData.title} onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))} required placeholder="عنوان الإعلان" className="w-full rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <select value={formData.priority} onChange={(e) => setFormData((p) => ({ ...p, priority: e.target.value }))} className="w-full rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text">
              <option value="high">عاجل</option>
              <option value="medium">متوسط</option>
              <option value="low">عادي</option>
            </select>
            <textarea value={formData.content} onChange={(e) => setFormData((p) => ({ ...p, content: e.target.value }))} required rows={5} placeholder="محتوى الإعلان" className="w-full resize-none rounded-2xl border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <Button type="submit" disabled={submitting}>{submitting ? 'جارٍ الحفظ...' : editing ? 'حفظ التعديلات' : 'نشر الإعلان'}</Button>
          </form>
        </Card>

        <Card className="border border-app-border bg-card-gradient">
          <div className="border-b border-app-border p-6">
            <h2 className="text-xl font-bold text-app-text">قائمة الإعلانات</h2>
          </div>
          <div className="space-y-4 p-6">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="rounded-2xl border border-[#e2c8b2] bg-white/70 p-4 shadow-[0_18px_40px_rgba(90,52,26,0.07)]">
                <div className="mb-2 flex items-center gap-3">
                  <MegaphoneIcon className="text-brand" />
                  <h3 className="font-bold text-app-text">{announcement.title}</h3>
                </div>
                <p className="text-sm font-medium text-app-text-muted">{formatArabicDate(announcement.created_at)}</p>
                <p className="mt-3 text-sm leading-8 text-app-text">{announcement.content}</p>
                <div className="mt-4 flex gap-2"><button onClick={() => { setEditing(announcement); setFormData({ title: announcement.title, content: announcement.content, priority: announcement.priority || 'medium' }); }} className="rounded-lg border border-[#e5cdbb] px-3 py-2 text-xs font-bold text-[#9b5d3d]">تعديل</button><button onClick={async () => { if (!window.confirm('حذف الإعلان؟')) return; try { await newsApi.remove(token, announcement.id); setData((prev) => prev.filter((item) => item.id !== announcement.id)); addToast('تم حذف الإعلان.', 'success'); } catch (removeError) { addToast(removeError.message || 'تعذر حذف الإعلان.', 'error'); } }} className="rounded-lg border border-danger/20 px-3 py-2 text-xs font-bold text-danger">حذف</button></div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Announcements;
