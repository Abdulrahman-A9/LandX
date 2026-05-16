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
      opportunity: { label: 'فرصة استثمارية', className: 'bg-blue-500/20 text-blue-600 border-blue-500/30' },
      news: { label: 'خبر', className: 'bg-purple-500/20 text-purple-600 border-purple-500/30' },
      municipality: { label: 'بلدية', className: 'bg-green-500/20 text-green-600 border-green-500/30' },
    };
    return badges[type] || badges.opportunity;
  };

  const getPriorityBadge = (priority) => {
    const badges = {
      high: { label: 'عالية', className: 'bg-red-500/20 text-red-600 border-red-500/30' },
      medium: { label: 'متوسطة', className: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30' },
      low: { label: 'منخفضة', className: 'bg-gray-500/20 text-gray-600 border-gray-500/30' },
    };
    return badges[priority] || badges.low;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">المراجعة</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">مراجعة والموافقة على المحتوى المقدم</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">قيد المراجعة</h3>
              <ClockIcon className="text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-yellow-600">{pendingItems.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">أولوية عالية</h3>
              <ShieldCheckIcon className="text-red-600" />
            </div>
            <p className="text-3xl font-bold text-red-600">
              {pendingItems.filter(i => i.priority === 'high').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">تمت المراجعة اليوم</h3>
              <CheckIcon className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">5</p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">المحتوى قيد المراجعة</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {pendingItems.map((item) => {
                const typeBadge = getTypeBadge(item.type);
                const priorityBadge = getPriorityBadge(item.priority);
                return (
                  <div
                    key={item.id}
                    className="p-4 bg-pearl-100/50 dark:bg-stone-800/50 border border-brown-300 dark:border-stone-700 rounded-lg"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-brown-900 dark:text-stone-100">{item.title}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs border ${typeBadge.className}`}>
                            {typeBadge.label}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs border ${priorityBadge.className}`}>
                            {priorityBadge.label}
                          </span>
                        </div>
                        <p className="text-sm text-brown-700 dark:text-stone-400">
                          {item.municipality} • {item.submittedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-brown-600 dark:text-stone-400">قدم بواسطة: {item.submittedBy}</p>
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-brown-100 dark:hover:bg-stone-700 rounded-lg transition-colors" title="عرض">
                          <EyeIcon className="text-brown-600 dark:text-stone-400" />
                        </button>
                        <button className="p-2 hover:bg-green-100 dark:hover:bg-green-900/30 rounded-lg transition-colors" title="موافقة">
                          <CheckIcon className="text-green-600" />
                        </button>
                        <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors" title="رفض">
                          <XIcon className="text-red-600" />
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
