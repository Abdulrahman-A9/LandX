import React, { useState } from 'react';
import Card from '../../components/ui/Card';
import { UserIcon, MailIcon, PhoneIcon, MapPinIcon, EditIcon, SaveIcon, XIcon } from '../../components/ui/Icons';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'أحمد محمد',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
    bio: 'مستثمر مهتم بالفرص الزراعية الموسمية في المملكة',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-app-text">الملف الشخصي</h1>
          <p className="text-app-text-muted mt-2">إدارة معلوماتك الشخصية</p>
        </div>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand to-brand-deep text-app-text rounded-lg hover:from-brand-deep hover:to-brand transition-all duration-300"
          >
            <EditIcon />
            <span>تعديل</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card className="bg-card-gradient border border-app-border p-6 text-center">
            <div className="w-32 h-32 bg-gradient-to-br from-brand to-brand-deep rounded-full mx-auto mb-4 flex items-center justify-center">
              <UserIcon className="text-5xl text-app-text" />
            </div>
            <h2 className="text-xl font-bold text-app-text mb-2">{formData.name}</h2>
            <p className="text-app-text-muted text-sm mb-4">مستثمر</p>
            <div className="space-y-2 text-sm text-app-text-muted">
              <div className="flex items-center justify-center gap-2">
                <MailIcon className="text-app-text-soft" />
                <span>{formData.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <PhoneIcon className="text-app-text-soft" />
                <span>{formData.phone}</span>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card className="lg:col-span-2 bg-card-gradient border border-app-border p-6">
            <h3 className="text-xl font-bold text-app-text mb-6">المعلومات الشخصية</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  الاسم الكامل
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                ) : (
                  <p className="text-app-text">{formData.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  البريد الإلكتروني
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                ) : (
                  <p className="text-app-text">{formData.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  رقم الهاتف
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                ) : (
                  <p className="text-app-text">{formData.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  الموقع
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand"
                  />
                ) : (
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="text-app-text-soft" />
                    <p className="text-app-text">{formData.location}</p>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-app-text-muted mb-2">
                  نبذة عني
                </label>
                {isEditing ? (
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2 border border-app-border rounded-lg bg-app-surface text-app-text focus:outline-none focus:ring-2 focus:ring-brand resize-none"
                  />
                ) : (
                  <p className="text-app-text">{formData.bio}</p>
                )}
              </div>

              {isEditing && (
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-success to-success/90 text-app-text rounded-lg hover:from-success/90 hover:to-success transition-all duration-300"
                  >
                    <SaveIcon />
                    <span>حفظ التغييرات</span>
                  </button>
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-danger to-danger/90 text-app-text rounded-lg hover:from-danger/90 hover:to-danger transition-all duration-300"
                  >
                    <XIcon />
                    <span>إلغاء</span>
                  </button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
