import React from 'react';
import Card from '../../components/ui/Card';
import { NewspaperIcon, EditIcon, TrashIcon, EyeIcon } from '../../components/ui/Icons';

const MunicipalityNews = () => {
  const news = [
    {
      id: 1,
      title: 'افتتاح وادي حائل الزراعي للموسم الجديد',
      summary: 'تم افتتاح وادي حائل الزراعي للموسم الشتوي الجديد مع فرص استثمارية متعددة.',
      status: 'published',
      date: '2024-05-12',
      category: 'فرص استثمارية',
    },
    {
      id: 2,
      title: 'توقيع اتفاقية مع أمانة القصيم',
      summary: 'تم توقيع اتفاقية تعاون جديدة مع أمانة منطقة القصيم لتطوير الفرص الزراعية.',
      status: 'published',
      date: '2024-05-08',
      category: 'شراكات',
    },
    {
      id: 3,
      title: 'تحديثات الموسم الصيفي',
      summary: 'إعلان جديد عن تحديثات الموسم الصيفي القادم.',
      status: 'draft',
      date: '2024-05-03',
      category: 'تحديثات',
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
          <h1 className="text-3xl font-bold text-app-text">الأخبار</h1>
          <p className="text-app-text-muted mt-2">إدارة ونشر الأخبار والمستجدات</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand to-brand-deep text-app-text rounded-lg hover:from-brand-deep hover:to-brand transition-all duration-300">
          <PlusIcon />
          <span>إضافة خبر جديد</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">إجمالي الأخبار</h3>
              <NewspaperIcon className="text-brand" />
            </div>
            <p className="text-3xl font-bold text-app-text">{news.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">منشور</h3>
              <NewspaperIcon className="text-success" />
            </div>
            <p className="text-3xl font-bold text-success">
              {news.filter(n => n.status === 'published').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">مسودات</h3>
              <NewspaperIcon className="text-muted" />
            </div>
            <p className="text-3xl font-bold text-muted">
              {news.filter(n => n.status === 'draft').length}
            </p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">قائمة الأخبار</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {news.map((item) => {
                const badge = getStatusBadge(item.status);
                return (
                  <div
                    key={item.id}
                    className="p-4 bg-app-surface-soft border border-app-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-app-text">{item.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </div>
                        <p className="text-sm text-app-text-muted mb-2">
                          {item.category} • {item.date}
                        </p>
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
                    <p className="text-app-text">{item.summary}</p>
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

export default MunicipalityNews;
