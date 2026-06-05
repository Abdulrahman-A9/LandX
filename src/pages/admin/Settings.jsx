import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { useToast } from '../../context/ToastContext';
import { SaveIcon, BellIcon, ShieldIcon, PaletteIcon, DatabaseIcon } from '../../components/ui/Icons';

const AdminSettings = () => {
  const { addToast } = useToast();
  const [settings, setSettings] = useState({
    siteName: 'LandX',
    siteDescription: 'منصة تحليل الفرص الاستثمارية في الأراضي والمشاريع المرتبطة بها',
    contactEmail: 'info@landx.sa',
    contactPhone: '+966 50 123 4567',
    maintenanceMode: false,
    registrationOpen: true,
    emailNotifications: true,
    smsNotifications: false,
    maxFileSize: 5,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSave = () => {
    addToast('تم حفظ الإعدادات محلياً لنسخة العرض.', 'success');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إعدادات المنصة</h1>
        <p className="mt-2 text-app-text-muted">واجهة إعدادات عرضية منظمة بدل عناصر تجريبية غير مكتملة.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card className="bg-card-gradient border border-app-border p-6">
          <div className="mb-6 flex items-center gap-3">
            <PaletteIcon className="text-app-text-soft" />
            <h2 className="text-xl font-bold text-app-text">إعدادات الموقع</h2>
          </div>
          <div className="space-y-4">
            <input name="siteName" value={settings.siteName} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <textarea name="siteDescription" value={settings.siteDescription} onChange={handleChange} rows="3" className="w-full resize-none rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <input name="contactEmail" value={settings.contactEmail} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
            <input name="contactPhone" value={settings.contactPhone} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
          </div>
        </Card>

        <Card className="bg-card-gradient border border-app-border p-6">
          <div className="mb-6 flex items-center gap-3">
            <ShieldIcon className="text-app-text-soft" />
            <h2 className="text-xl font-bold text-app-text">إعدادات النظام</h2>
          </div>
          <div className="space-y-4">
            {[
              ['maintenanceMode', 'وضع الصيانة'],
              ['registrationOpen', 'التسجيل المفتوح'],
              ['emailNotifications', 'إشعارات البريد الإلكتروني'],
              ['smsNotifications', 'إشعارات الرسائل النصية'],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center justify-between rounded-lg border border-app-border bg-app-surface-soft p-4">
                <span className="font-medium text-app-text">{label}</span>
                <input type="checkbox" name={key} checked={settings[key]} onChange={handleChange} className="h-4 w-4 accent-brand" />
              </label>
            ))}
            <input name="maxFileSize" type="number" value={settings.maxFileSize} onChange={handleChange} className="w-full rounded-lg border border-app-border bg-app-surface px-4 py-3 text-app-text" />
          </div>
        </Card>

        <Card className="bg-card-gradient border border-app-border p-6">
          <div className="mb-6 flex items-center gap-3">
            <BellIcon className="text-app-text-soft" />
            <h2 className="text-xl font-bold text-app-text">تنبيه</h2>
          </div>
          <p className="text-sm leading-8 text-app-text-muted">
            هذه الصفحة مخصصة لنسخة العرض. تم تنظيفها لتبقى واضحة ومهنية بدون أوامر وهمية أو عناصر غير مكتملة.
          </p>
        </Card>

        <Card className="bg-card-gradient border border-app-border p-6">
          <div className="mb-6 flex items-center gap-3">
            <DatabaseIcon className="text-app-text-soft" />
            <h2 className="text-xl font-bold text-app-text">قاعدة البيانات</h2>
          </div>
          <div className="space-y-4 text-sm text-app-text-muted">
            <div className="rounded-lg border border-app-border bg-app-surface-soft p-4">MySQL مرتبطة عبر FastAPI وSQLAlchemy.</div>
            <div className="rounded-lg border border-app-border bg-app-surface-soft p-4">يمكن عرض الجداول والسجلات مباشرة من Workbench أو phpMyAdmin.</div>
          </div>
        </Card>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-success to-success/90 px-6 py-2 text-app-text transition-all duration-300 hover:from-success/90 hover:to-success"
        >
          <SaveIcon />
          <span>حفظ الإعدادات</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
