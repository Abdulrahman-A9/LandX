import React from 'react';
import Card from '../../components/ui/Card';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { PlusIcon, EditIcon, TrashIcon, EyeIcon } from '../../components/ui/Icons';

const MunicipalityOpportunities = () => {
  const opportunities = [
    {
      id: 1,
      title: 'وادي حائل الزراعي',
      location: 'حائل',
      season: 'الموسم الشتوي 2024',
      status: 'active',
      applications: 15,
      area: '500 هكتار',
      minInvestment: 50000,
    },
    {
      id: 2,
      title: 'سهول القصيم',
      location: 'القصيم',
      season: 'الموسم الشتوي 2024',
      status: 'active',
      applications: 23,
      area: '750 هكتار',
      minInvestment: 75000,
    },
    {
      id: 3,
      title: 'وادي تبوك',
      location: 'تبوك',
      season: 'الموسم الشتوي 2024',
      status: 'draft',
      applications: 0,
      area: '300 هكتار',
      minInvestment: 30000,
    },
    {
      id: 4,
      title: 'وادي الجوف',
      location: 'الجوف',
      season: 'الموسم الصيفي 2024',
      status: 'closed',
      applications: 18,
      area: '400 هكتار',
      minInvestment: 40000,
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-green-500/20 text-green-600 border-green-500/30' },
      draft: { label: 'مسودة', className: 'bg-gray-500/20 text-gray-600 border-gray-500/30' },
      closed: { label: 'مغلق', className: 'bg-red-500/20 text-red-600 border-red-500/30' },
    };
    return badges[status] || badges.draft;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('ar-SA').format(amount);
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">إدارة الفرص الاستثمارية</h1>
          <p className="text-brown-700 dark:text-stone-400 mt-2">إضافة وتعديل وإدارة الفرص الاستثمارية</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300">
          <PlusIcon />
          <span>إضافة فرصة جديدة</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <AnimatedSection animation="fadeUp" delay={0}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">إجمالي الفرص</h3>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{opportunities.length}</p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={100}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">الفرص النشطة</h3>
            <p className="text-3xl font-bold text-green-600">
              {opportunities.filter(o => o.status === 'active').length}
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={200}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">المسودات</h3>
            <p className="text-3xl font-bold text-gray-600">
              {opportunities.filter(o => o.status === 'draft').length}
            </p>
          </Card>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={300}>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400 mb-2">إجمالي الطلبات</h3>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">
              {opportunities.reduce((sum, o) => sum + o.applications, 0)}
            </p>
          </Card>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="fadeUp" delay={400}>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">قائمة الفرص</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-brown-300 dark:border-stone-700">
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الفرصة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الموقع</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الموسم</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الحالة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الطلبات</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {opportunities.map((opportunity) => {
                    const badge = getStatusBadge(opportunity.status);
                    return (
                      <tr key={opportunity.id} className="border-b border-brown-200 dark:border-stone-800 hover:bg-pearl-100/30 dark:hover:bg-stone-800/30">
                        <td className="py-4 px-4">
                          <p className="font-medium text-brown-900 dark:text-stone-100">{opportunity.title}</p>
                          <p className="text-sm text-brown-700 dark:text-stone-400">{opportunity.area} • {formatCurrency(opportunity.minInvestment)} ر.س</p>
                        </td>
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{opportunity.location}</td>
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{opportunity.season}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{opportunity.applications}</td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            <button className="p-2 hover:bg-brown-100 dark:hover:bg-stone-700 rounded-lg transition-colors" title="عرض">
                              <EyeIcon className="text-brown-600 dark:text-stone-400" />
                            </button>
                            <button className="p-2 hover:bg-brown-100 dark:hover:bg-stone-700 rounded-lg transition-colors" title="تعديل">
                              <EditIcon className="text-brown-600 dark:text-stone-400" />
                            </button>
                            <button className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-lg transition-colors" title="حذف">
                              <TrashIcon className="text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default MunicipalityOpportunities;
