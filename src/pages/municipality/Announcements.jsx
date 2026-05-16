import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { MegaphoneIcon, PlusIcon, EditIcon, TrashIcon } from '../../components/ui/Icons';

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
      published: { label: 'منشور', className: 'bg-green-500/20 text-green-600 border-green-500/30' },
      draft: { label: 'مسودة', className: 'bg-gray-500/20 text-gray-600 border-gray-500/30' },
    };
    return badges[status] || badges.draft;
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">الإعلانات</h1>
          <p className="text-brown-700 dark:text-stone-400 mt-2">إدارة ونشر الإعلانات للمستثمرين</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300">
          <PlusIcon />
          <span>إضافة إعلان جديد</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي الإعلانات</h3>
              <MegaphoneIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{announcements.length}</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">منشور</h3>
              <MegaphoneIcon className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              {announcements.filter(a => a.status === 'published').length}
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي المشاهدات</h3>
              <MegaphoneIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">
              {announcements.reduce((sum, a) => sum + a.views, 0)}
            </p>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" delay={300}>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">قائمة الإعلانات</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {announcements.map((announcement) => {
                const badge = getStatusBadge(announcement.status);
                return (
                  <div
                    key={announcement.id}
                    className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-brown-900 dark:text-stone-100">{announcement.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-sm text-brown-700 dark:text-stone-400 mb-2">{announcement.date}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-brown-100 dark:hover:bg-stone-700 rounded-lg transition-colors" title="تعديل">
                          <EditIcon className="text-brown-600 dark:text-stone-400" />
                        </button>
                        <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors" title="حذف">
                          <TrashIcon className="text-red-600" />
                        </button>
                      </div>
                    </div>
                    <p className="text-brown-900 dark:text-stone-100 mb-3">{announcement.content}</p>
                    <div className="flex items-center gap-2 text-sm text-brown-600 dark:text-stone-400">
                      <span>{announcement.views} مشاهدة</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default Announcements;
