export const mockUsers = {
  current: null,
  investors: [
    {
      id: 1,
      name: 'أحمد محمد',
      nameEn: 'Ahmed Mohammed',
      email: 'ahmed@example.com',
      role: 'investor',
      phone: '+966501234567',
      createdAt: '2024-01-10',
    },
  ],
  municipalities: [
    {
      id: 2,
      name: 'أمانة منطقة حائل',
      nameEn: 'Hail Region Municipality',
      email: 'hail@municipality.gov.sa',
      role: 'municipality',
      phone: '+966161234567',
      region: 'حائل',
      regionEn: 'Hail',
      createdAt: '2024-01-01',
    },
    {
      id: 3,
      name: 'أمانة منطقة القصيم',
      nameEn: 'Al-Qassim Region Municipality',
      email: 'qassim@municipality.gov.sa',
      role: 'municipality',
      phone: '+966161234568',
      region: 'القصيم',
      regionEn: 'Al-Qassim',
      createdAt: '2024-01-01',
    },
  ],
  admins: [
    {
      id: 4,
      name: 'مدير النظام',
      nameEn: 'System Administrator',
      email: 'admin@landx.sa',
      role: 'admin',
      phone: '+966509876543',
      createdAt: '2024-01-01',
    },
  ],
};
