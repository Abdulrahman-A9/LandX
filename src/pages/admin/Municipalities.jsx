import React from 'react';
import Card from '../../components/ui/Card';
import { BuildingIcon, EditIcon, TrashIcon, CheckIcon, XIcon } from '../../components/ui/Icons';

const AdminMunicipalities = () => {
  const municipalities = [
    {
      id: 1,
      name: 'أمانة منطقة حائل',
      email: 'hail@municipality.gov.sa',
      phone: '+966 16 534 5678',
      location: 'حائل',
      status: 'active',
      opportunities: 8,
      registrationDate: '2024-01-10',
    },
    {
      id: 2,
      name: 'أمانة منطقة القصيم',
      email: 'qassim@municipality.gov.sa',
      phone: '+966 16 534 1234',
      location: 'القصيم',
      status: 'active',
      opportunities: 12,
      registrationDate: '2024-01-08',
    },
    {
      id: 3,
      name: 'أمانة منطقة تبوك',
      email: 'tabuk@municipality.gov.sa',
      phone: '+966 14 534 5678',
      location: 'تبوك',
      status: 'active',
      opportunities: 6,
      registrationDate: '2024-02-15',
    },
    {
      id: 4,
      name: 'أمانة منطقة الجوف',
      email: 'jouf@municipality.gov.sa',
      phone: '+966 14 534 9012',
      location: 'الجوف',
      status: 'pending',
      opportunities: 0,
      registrationDate: '2024-04-01',
    },
  ];

  const getStatusBadge = (status) => {
    const badges = {
      active: { label: 'نشط', className: 'bg-green-500/20 text-green-600 border-green-500/30' },
      pending: { label: 'قيد المراجعة', className: 'bg-yellow-500/20 text-yellow-600 border-yellow-500/30' },
      suspended: { label: 'موقوف', className: 'bg-red-500/20 text-red-600 border-red-500/30' },
    };
    return badges[status] || badges.pending;
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-brown-900 dark:text-stone-100">إدارة البلديات</h1>
        <p className="text-brown-700 dark:text-stone-400 mt-2">إضافة وتفعيل وإدارة حسابات البلديات</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">إجمالي البلديات</h3>
              <BuildingIcon className="text-brown-600 dark:text-stone-400" />
            </div>
            <p className="text-3xl font-bold text-brown-900 dark:text-stone-100">{municipalities.length}</p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">النشطة</h3>
              <CheckIcon className="text-green-600" />
            </div>
            <p className="text-3xl font-bold text-green-600">
              {municipalities.filter(m => m.status === 'active').length}
            </p>
          </Card>
        </div>

        <div>
          <Card className="p-6 bg-card-gradient border border-brown-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-brown-700 dark:text-stone-400">قيد المراجعة</h3>
              <XIcon className="text-yellow-600" />
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              {municipalities.filter(m => m.status === 'pending').length}
            </p>
          </Card>
        </div>
      </div>

      <div>
        <Card className="bg-card-gradient border border-brown-300">
          <div className="p-6 border-b border-brown-300 dark:border-stone-700 flex items-center justify-between">
            <h2 className="text-xl font-bold text-brown-900 dark:text-stone-100">قائمة البلديات</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brown-600 to-brown-700 text-pearl-100 rounded-lg hover:from-brown-700 hover:to-brown-800 transition-all duration-300 text-sm">
              <BuildingIcon />
              <span>إضافة بلدية جديدة</span>
            </button>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-brown-300 dark:border-stone-700">
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">البلدية</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">البريد الإلكتروني</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الموقع</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الفرص</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الحالة</th>
                    <th className="text-right py-3 px-4 text-sm font-medium text-brown-700 dark:text-stone-400">الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {municipalities.map((municipality) => {
                    const badge = getStatusBadge(municipality.status);
                    return (
                      <tr key={municipality.id} className="border-b border-brown-200 dark:border-stone-800 hover:bg-pearl-100/30 dark:hover:bg-stone-800/30">
                        <td className="py-4 px-4">
                          <p className="font-medium text-brown-900 dark:text-stone-100">{municipality.name}</p>
                          <p className="text-sm text-brown-700 dark:text-stone-400">{municipality.phone}</p>
                        </td>
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{municipality.email}</td>
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{municipality.location}</td>
                        <td className="py-4 px-4 text-brown-900 dark:text-stone-100">{municipality.opportunities}</td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-full text-xs border ${badge.className}`}>
                            {badge.label}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
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
      </div>
    </div>
  );
};

export default AdminMunicipalities;
