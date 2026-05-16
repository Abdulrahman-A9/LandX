import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
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
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">إعدادات المنصة</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">إدارة إعدادات المنصة العامة</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AnimatedSection animation="fadeUp" delay={0}>
          <Card className="bg-card-gradient border border-brown-300 p-6">
            <div className="flex items-center gap-3 mb-6">
              <PaletteIcon className="text-brown-600 dark:text-stone-400" />
              <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">إعدادات الموقع</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  اسم الموقع
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={settings.siteName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  وصف الموقع
                </label>
                <textarea
                  name="siteDescription"
                  value={settings.siteDescription}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  البريد الإلكتروني للتواصل
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={settings.contactEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  رقم الهاتف للتواصل
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={settings.contactPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                />
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <Card className="bg-card-gradient border border-brown-300 p-6">
            <div className="flex items-center gap-3 mb-6">
              <ShieldIcon className="text-brown-600 dark:text-stone-400" />
              <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">إعدادات النظام</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">وضع الصيانة</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">إيقاف الموقع مؤقتاً للصيانة</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={settings.maintenanceMode}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-brown-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brown-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brown-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">التسجيل المفتوح</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">السماح للمستخدمين الجدد بالتسجيل</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="registrationOpen"
                    checked={settings.registrationOpen}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-brown-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brown-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brown-600"></div>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">
                  الحد الأقصى لحجم الملف (MB)
                </label>
                <input
                  type="number"
                  name="maxFileSize"
                  value={settings.maxFileSize}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-brown-300 rounded-lg bg-pearl-100 dark:bg-stone-800 text-brown-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-brown-500"
                />
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <Card className="bg-card-gradient border border-brown-300 p-6">
            <div className="flex items-center gap-3 mb-6">
              <BellIcon className="text-brown-600 dark:text-stone-400" />
              <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">إعدادات الإشعارات</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">إشعارات البريد الإلكتروني</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">إرسال إشعارات عبر البريد الإلكتروني</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="emailNotifications"
                    checked={settings.emailNotifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-brown-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brown-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brown-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <div>
                  <p className="font-medium text-brown-900 dark:text-stone-100">إشعارات الرسائل النصية</p>
                  <p className="text-sm text-brown-700 dark:text-stone-400">إرسال إشعارات عبر SMS</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="smsNotifications"
                    checked={settings.smsNotifications}
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-brown-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brown-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brown-600"></div>
                </label>
              </div>
            </div>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
          <Card className="bg-card-gradient border border-brown-300 p-6">
            <div className="flex items-center gap-3 mb-6">
              <DatabaseIcon className="text-brown-600 dark:text-stone-400" />
              <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">إعدادات قاعدة البيانات</h2>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <p className="font-medium text-brown-900 dark:text-stone-100 mb-2">حجم قاعدة البيانات</p>
                <p className="text-sm text-brown-700 dark:text-stone-400">125 MB من 1 GB</p>
                <div className="w-full bg-brown-200 dark:bg-stone-700 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-brown-600 to-brown-700 h-2 rounded-full" style={{ width: '12.5%' }}></div>
                </div>
              </div>

              <div className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg">
                <p className="font-medium text-brown-900 dark:text-stone-100 mb-2">آخر نسخة احتياطية</p>
                <p className="text-sm text-brown-700 dark:text-stone-400">2024-05-15 02:00 AM</p>
              </div>

              <button className="w-full py-2 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300">
                إنشاء نسخة احتياطية الآن
              </button>
            </div>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" delay={400}>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-600 to-green-700 text-pearl-100 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300"
          >
            <SaveIcon />
            <span>حفظ الإعدادات</span>
          </button>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default AdminSettings;
