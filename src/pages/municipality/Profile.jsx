import React, { useEffect, useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { municipalityApi } from '../../lib/api';
import { BuildingIcon, MailIcon, PhoneIcon } from '../../components/ui/Icons';

const MunicipalityProfile = () => {
  const { token } = useAuth();
  const { addToast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    region: '',
    description: '',
    contact_email: '',
    contact_phone: '',
  });

  useEffect(() => {
    municipalityApi.getProfile(token).then((profile) => {
      setFormData({
        name: profile.name || '',
        region: profile.region || '',
        description: profile.description || '',
        contact_email: profile.contact_email || '',
        contact_phone: profile.contact_phone || '',
      });
      setLoading(false);
    });
  }, [token]);

  const handleSave = async () => {
    try {
      await municipalityApi.updateProfile(token, formData);
      addToast('تم تحديث بيانات البلدية.', 'success');
      setIsEditing(false);
    } catch (error) {
      addToast(error.message || 'تعذر تحديث البيانات.', 'error');
    }
  };

  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل بيانات البلدية...</Card>;

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-app-text">إعدادات البلدية</h1>
          <p className="mt-2 text-app-text-muted">عرض وتحديث بيانات البلدية المرتبطة بالحساب الحالي.</p>
        </div>
        {!isEditing ? <Button onClick={() => setIsEditing(true)}>تعديل</Button> : null}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="bg-card-gradient border border-app-border p-6 text-center">
          <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-deep">
            <BuildingIcon className="text-5xl text-app-text" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-app-text">{formData.name}</h2>
          <div className="space-y-2 text-sm text-app-text-muted">
            <div className="flex items-center justify-center gap-2"><MailIcon className="text-app-text-soft" /> <span>{formData.contact_email || '-'}</span></div>
            <div className="flex items-center justify-center gap-2"><PhoneIcon className="text-app-text-soft" /> <span>{formData.contact_phone || '-'}</span></div>
          </div>
        </Card>

        <Card className="bg-card-gradient border border-app-border p-6 lg:col-span-2">
          <h3 className="mb-6 text-xl font-bold text-app-text">معلومات البلدية</h3>
          <div className="space-y-4">
            {[
              ['name', 'اسم البلدية'],
              ['region', 'المنطقة'],
              ['contact_email', 'البريد الإلكتروني'],
              ['contact_phone', 'رقم الهاتف'],
            ].map(([key, label]) => (
              <div key={key}>
                <label className="mb-2 block text-sm font-medium text-app-text-muted">{label}</label>
                {isEditing ? (
                  <input value={formData[key]} onChange={(e) => setFormData((p) => ({ ...p, [key]: e.target.value }))} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
                ) : (
                  <p className="text-app-text">{formData[key] || '-'}</p>
                )}
              </div>
            ))}
            <div>
              <label className="mb-2 block text-sm font-medium text-app-text-muted">الوصف</label>
              {isEditing ? (
                <textarea value={formData.description} onChange={(e) => setFormData((p) => ({ ...p, description: e.target.value }))} rows={4} className="w-full resize-none rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
              ) : (
                <p className="text-app-text">{formData.description || '-'}</p>
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

export default MunicipalityProfile;
