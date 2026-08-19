export const roleDashboardMap = {
  admin: '/admin/dashboard',
  municipality: '/municipality/dashboard',
  investor: '/investor/dashboard',
};

export const serviceIntentCopy = {
  explore: {
    badge: 'استكشاف الفرص',
    title: 'سجّل دخولك لمتابعة فرصك الاستثمارية',
    description: 'بعد الدخول ستصل مباشرة إلى الفرص وطلبات الاهتمام المرتبطة بحسابك.',
  },
  analysis: {
    badge: 'تقييم الفكرة',
    title: 'سجّل دخولك لحفظ تقييم مشروعك',
    description: 'احفظ نتائج التقييم وارجع إليها متى احتجت قبل اتخاذ قرار الاستثمار.',
  },
  interest: {
    badge: 'التواصل مع الجهة المعلنة',
    title: 'سجّل دخولك لإرسال اهتمامك واستفسارك',
    description: 'بعد الدخول سنعيدك مباشرة إلى الفرصة لتكمل الإجراء دون تكرار الخطوات.',
  },
  default: {
    badge: 'مرحبًا بك',
    title: 'سجّل الدخول إلى حسابك',
    description: 'تابع رحلتك في LandX بسهولة وأدخل إلى مساحة العمل المناسبة لك.',
  },
};

export const buildAuthRoute = (path, params = {}) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      query.set(key, value);
    }
  });

  const queryString = query.toString();
  return queryString ? `${path}?${queryString}` : path;
};

export const resolvePostAuthRoute = ({ role, next, fallback = '/investor/dashboard' }) => {
  if (next) {
    return next;
  }

  return roleDashboardMap[role] || fallback;
};
