import React from 'react';
import Card from '../../components/ui/Card';
import { ShieldCheckIcon, CheckIcon, XIcon, EyeIcon, ClockIcon } from '../../components/ui/Icons';

const AdminModeration = () => {
  const pendingItems = [
    {
      id: 1,
      type: 'opportunity',
      title: 'وادي تبوك الجديد',
      municipality: 'أمانة منطقة تبوك',
      submittedBy: 'أمانة منطقة تبوك',
      submittedDate: '2024-05-14',
      priority: 'high',
    },
    {
      id: 2,
      type: 'opportunity',
      title: 'وادي الجوف الزراعي',
      municipality: 'أمانة منطقة الجوف',
      submittedBy: 'أمانة منطقة الجوف',
      submittedDate: '2024-05-13',
      priority: 'medium',
    },
    {
      id: 3,
      type: 'news',
      title: 'تحديثات الموسم الصيفي',
      municipality: 'أمانة منطقة حائل',
      submittedBy: 'أمانة منطقة حائل',
      submittedDate: '2024-05-12',
      priority: 'low',
    },
    {
      id: 4,
      type: 'municipality',
      title: 'أمانة منطقة الجوف',
      municipality: 'أمانة منطقة الجوف',
      submittedBy: 'أمانة منطقة الجوف',
      submittedDate: '2024-05-10',
      priority: 'high',
    },
  ];

  const getTypeBadge = (type) => {
    const badges = {
      opportunity: { label: 'فرصة استثمارية', className: 'bg-brand/20 text-brand border-brand/30' },
      news: { label: 'خبر', className: 'bg-accent/20 text-accent border-accent/30' },
      municipality: { label: 'بلدية', className: 'bg-success/20 text-success border-success/30' },
    };
    return badges[type] || badges.opportunity;
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      high: { label: 'عالية', className: 'bg-danger/20 text-danger border-danger/30' },
      medium: { label: 'متوسطة', className: 'bg-warning/20 text-warning border-warning/30' },
      low: { label: 'منخفضة', className: 'bg-muted/20 text-muted border-muted/30' },
    };
    return badges[priority] || badges.low;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-app-text">المراجعة</h1>
        <p className="text-app-text-muted mt-2">مراجعة والموافقة على المحتوى المقدم</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">قيد المراجعة</h3>
              <ClockIcon className="text-warning" />
            </div>
            <p className="text-3xl font-bold text-warning">{pendingItems.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">أولوية عالية</h3>
              <ShieldCheckIcon className="text-danger" />
            </div>
            <p className="text-3xl font-bold text-danger">
              {pendingItems.filter(i => i.priority === 'high').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-app-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-app-text-muted">تمت المراجعة اليوم</h3>
              <CheckIcon className="text-success" />
            </div>
            <p className="text-3xl font-bold text-success">5</p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-app-border">
          <div className="p-6 border-b border-app-border">
            <h2 className="text-xl font-bold text-app-text">المحتوى قيد المراجعة</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {pendingItems.map((item) => {
                const typeBadge = getTypeBadge(item.type);
                const priorityBadge = getPriorityBadge(item.priority);
                return (
                  <div
                    key={item.id}
                    className="p-4 bg-app-surface-soft border border-app-border rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-app-text">{item.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs border ${typeBadge.className}`}>
                            {typeBadge.label}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs border ${priorityBadge.className}`}>
                            {priorityBadge.label}
                          </span>
                        </div>
                        <p className="text-sm text-app-text-muted">
                          {item.municipality} • {item.submittedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-app-text-muted">قدم بواسطة: {item.submittedBy}</p>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-app-surface rounded-lg transition-colors" title="عرض">
                          <EyeIcon className="text-brand" />
                        </button>
                        <button className="p-2 hover:bg-success/10 rounded-lg transition-colors" title="موافقة">
                          <CheckIcon className="text-success" />
                        </button>
                        <button className="p-2 hover:bg-danger/10 rounded-lg transition-colors" title="رفض">
                          <XIcon className="text-danger" />
                        </button>
                      </div>
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

export default AdminModeration;
