import React from 'react';
import Card from '../../components/ui/Card';
import { MegaphoneIcon, EditIcon, TrashIcon, EyeIcon } from '../../components/ui/Icons';

const Announcements = () => {
  const announcements = [
    {
      id: 1,
      title: 'فتح باب التقديم للموسم الشتوي 2024',
      content: 'نعلن عن فتح باب التقديم للموسم الشتوي 2024 في جميع الفرص الاستثمارية المتاحة.',
      status: 'published',
      date: '2024-05-10',
      views: 1250,
    },
    {
      id: 2,
      title: 'تحديث شروط الاستثمار',
      content: 'تم تحديث شروط الاستثمار لتشمل متطلبات جديدة تتعلق بالبيئة والاستدامة.',
      status: 'published',
      date: '2024-05-05',
      views: 890,
    },
    {
      id: 3,
      title: 'إعلان جديد عن فرص استثمارية',
      content: 'إعلان قادم عن فرص استثمارية جديدة في منطقة تبوك.',
      status: 'draft',
      date: '2024-05-01',
      views: 0,
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      published: { label: 'منشور', className: 'bg-success/20 text-success border-success/30' },
      draft: { label: 'مسودة', className: 'bg-muted/20 text-muted border-muted/30' },
    };
    return badges[status] || badges.draft;
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-app-text">الإعلانات</h1>
          <p className="text-app-text-muted mt-2">إدارة ونشر الإعلانات للمستثمرين</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand to-brand-deep text-app-text rounded-lg hover:from-brand-deep hover:to-brand transition-all duration-300">
          <PlusIcon />
          <span>إضافة إعلان جديد</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي الإعلانات</h3>
              <MegaphoneIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-app-text">{announcements.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">منشور</h3>
              <MegaphoneIcon className="text-success" />
            </div>
            <p className="text-3xl font-bold text-success">
              {announcements.filter(a => a.status === 'published').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي المشاهدات</h3>
              <MegaphoneIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-app-text">
              {announcements.reduce((sum, a) => sum + a.views, 0)}
            </p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">قائمة الإعلانات</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {announcements.map((announcement) => {
                const badge = getStatusBadge(announcement.status);
                return (
                  <div
                    key={announcement.id}
                    className="p-4 bg-app-surface-soft border border-app-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-app-text">{announcement.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-sm text-app-text-muted mb-2">{announcement.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-app-surface rounded-lg transition-colors" title="تعديل">
                          <EditIcon className="text-brand" />
                        </button>
                        <button className="p-2 hover:bg-danger/10 rounded-lg transition-colors" title="حذف">
                          <TrashIcon className="text-danger" />
                        </button>
                      </div>
                    </div>
                    <p className="text-app-text mb-3">{announcement.content}</p>
                    <div className="flex items-center gap-2 text-sm text-app-text-muted">
                      <span>{announcement.views} مشاهدة</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Announcements;
