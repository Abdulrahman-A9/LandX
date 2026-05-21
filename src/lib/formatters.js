export const formatCurrency = (amount, currency = 'SAR') => {
  const value = Number(amount || 0);
  return `${new Intl.NumberFormat('ar-SA').format(value)} ${currency}`;
};

export const formatCompactNumber = (value) => {
  return new Intl.NumberFormat('ar-SA', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
};

export const formatArabicDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('ar-SA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const seasonLabel = (season) => {
  const labels = {
    winter: 'شتوي',
    spring: 'ربيعي',
    summer: 'صيفي',
    autumn: 'خريفي',
  };

  return labels[season] || season;
};

export const statusLabel = (status) => {
  const labels = {
    active: 'نشطة',
    pending: 'قيد المراجعة',
    inactive: 'غير متاحة',
  };

  return labels[status] || status;
};
