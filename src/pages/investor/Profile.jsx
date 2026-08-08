import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { authApi } from '../../lib/api';
import { MailIcon, PhoneIcon, UserIcon } from '../../components/ui/Icons';

const Profile = () => {
  const { user, token } = useAuth();
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: user?.full_name || user?.name || '',
    phone: user?.phone || '',
  });

  const handleSave = async () => {
    try {
      await authApi.updateMe(token, formData);
      addToast('تم تحديث الملف الشخصي.', 'success');
      setIsEditing(false);
    } catch (error) {
      addToast(error.message || 'تعذر تحديث الملف الشخصي.', 'error');
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-app-text">الملف الشخصي</h1>
          <p className="mt-2 max-w-3xl text-base leading-8 text-app-text-muted">
            حدّث بياناتك لتسهيل التقديم والتواصل مع الجهات المعلنة.
          </p>
        </div>
        {!isEditing ? <Button onClick={() => setIsEditing(true)}>تعديل</Button> : null}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="border border-app-border bg-card-gradient p-6 text-center">
          <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-[#d6b79c] bg-[radial-gradient(circle_at_top,_rgba(183,113,65,0.3),_rgba(92,58,34,0.94))] shadow-[0_20px_45px_rgba(92,58,34,0.22)]">
            <UserIcon className="text-5xl text-[#fff8f2]" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-app-text">{formData.full_name}</h2>
          <p className="mb-4 text-sm font-semibold text-app-text-muted">مستثمر نشط في المنصة</p>
          <div className="space-y-3 text-sm text-app-text-muted">
            <div className="flex items-center justify-center gap-2"><MailIcon className="text-brand" /> <span>{user?.email}</span></div>
            <div className="flex items-center justify-center gap-2"><PhoneIcon className="text-brand" /> <span>{formData.phone || '-'}</span></div>
          </div>
        </Card>

        <Card className="border border-app-border bg-card-gradient p-6 lg:col-span-2">
          <h3 className="mb-6 text-xl font-bold text-app-text">المعلومات الشخصية</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-app-text-muted">الاسم الكامل</label>
              {isEditing ? (
                <input value={formData.full_name} onChange={(e) => setFormData((p) => ({ ...p, full_name: e.target.value }))} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
              ) : (
                <p className="text-app-text">{formData.full_name}</p>
              )}
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-app-text-muted">البريد الإلكتروني</label>
              <p className="text-app-text">{user?.email}</p>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold text-app-text-muted">رقم الهاتف</label>
              {isEditing ? (
                <input value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
              ) : (
                <p className="text-app-text">{formData.phone || '-'}</p>
              )}
            </div>
            {isEditing ? (
              <div className="flex gap-3 pt-4">
                <Button onClick={handleSave}>حفظ التغييرات</Button>
                <Button variant="outline" onClick={() => setIsEditing(false)}>إلغاء</Button>
              </div>
            ) : null}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Profile;
