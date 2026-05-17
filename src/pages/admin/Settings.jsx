import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { SettingsIcon, SaveIcon, BellIcon, ShieldIcon, PaletteIcon, DatabaseIcon } from '../../components/ui/Icons';

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    siteName: 'LandX',
    siteDescription: 'منصة تحليل الفرص الاستثمارية في الأراضي الموسمية',
    contactEmail: 'info@landx.sa',
    contactPhone: '+966 50 123 4567',
    maintenanceMode: false,
    registrationOpen: true,
    emailNotifications: true,
    smsNotifications: false,
    maxFileSize: 5,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">إعدادات المنصة</h1>
        <p className="text-app-text-muted mt-2">إدارة إعدادات المنصة العامة</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <Card className="bg-card-gradient border border-app-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <PaletteIcon className="text-app-text-soft" />
              <h2 className="text-xl font-bold text-app-text">إعدادات الموقع</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  اسم الموقع
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  وصف الموقع
                </label>
                <textarea
                  name="siteDescription"
                  value={settings.siteDescription}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  البريد الإلكتروني للتواصل
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={settings.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  رقم الهاتف للتواصل
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={settings.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-card-gradient border border-app-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <ShieldIcon className="text-app-text-soft" />
              <h2 className="text-xl font-bold text-app-text">إعدادات النظام</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">وضع الصيانة</p>
                  <p className="text-sm text-app-text-muted">إيقاف الموقع مؤقتاً للصيانة</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">التسجيل المفتوح</p>
                  <p className="text-sm text-app-text-muted">السماح للمستخدمين الجدد بالتسجيل</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="registrationOpen"
                    checked={settings.registrationOpen}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  الحد الأقصى لحجم الملف (MB)
                </label>
                <input
                  type="number"
                  name="maxFileSize"
                  value={settings.maxFileSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-card-gradient border border-app-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <BellIcon className="text-app-text-soft" />
              <h2 className="text-xl font-bold text-app-text">إعدادات الإشعارات</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">إشعارات البريد الإلكتروني</p>
                  <p className="text-sm text-app-text-muted">إرسال إشعارات عبر البريد الإلكتروني</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={settings.emailNotifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <div>
                  <p className="font-medium text-app-text">إشعارات الرسائل النصية</p>
                  <p className="text-sm text-app-text-muted">إرسال إشعارات عبر SMS</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsNotifications"
                    checked={settings.smsNotifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="bg-card-gradient border border-app-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <DatabaseIcon className="text-app-text-soft" />
              <h2 className="text-xl font-bold text-app-text">إعدادات قاعدة البيانات</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <p className="font-medium text-app-text mb-2">حجم قاعدة البيانات</p>
                <p className="text-sm text-app-text-muted">125 MB من 1 GB</p>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-brand to-brand-deep h-2 rounded-full" style={{ width: '12.5%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-app-surface-soft border border-app-border rounded-lg">
                <p className="font-medium text-app-text mb-2">آخر نسخة احتياطية</p>
                <p className="text-sm text-app-text-muted">2024-05-15 02:00 AM</p>
              </div>

              <button className="w-full py-2 bg-gradient-to-r from-brand to-brand-deep text-app-text rounded-lg hover:from-brand-deep hover:to-brand transition-all duration-300">
                إنشاء نسخة احتياطية الآن
              </button>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-success to-success/90 text-app-text rounded-lg hover:from-success/90 hover:to-success transition-all duration-300"
        >
          <SaveIcon />
          <span>حفظ الإعدادات</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSettings;
