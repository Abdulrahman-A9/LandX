export const roleDashboardMap = {
  admin: '/admin/dashboard',
  municipality: '/municipality/dashboard',
  investor: '/investor/dashboard',
};

export const serviceIntentCopy = {
  explore: {
    badge: 'مسار استكشاف الفرص',
    title: 'سجّل دخولك لمتابعة الفرص وطلبات الاهتمام',
    description: 'بعد الدخول سننقلك مباشرة إلى صفحة الفرص أو لوحة المستثمر حسب المسار الذي بدأته.',
  },
  analysis: {
    badge: 'مسار التحليل الاستثماري',
    title: 'سجّل دخولك لحفظ التحليل وإصدار التقرير',
    description: 'التحليل يُحفظ في قاعدة البيانات باسمك، لذلك نحتاج تسجيل الدخول قبل إرسال النموذج.',
  },
  interest: {
    badge: 'مسار إبداء الاهتمام',
    title: 'سجّل دخولك لإرسال طلب الاهتمام والاستفسار',
    description: 'بعد الدخول سنعيدك مباشرة إلى الفرصة لتكمل الإجراء دون تكرار الخطوات.',
  },
  default: {
    badge: 'دخول إلى المنصة',
    title: 'ادخل وأكمل المسار الذي يهمك',
    description: 'سنوجّهك بعد الدخول إلى اللوحة أو الصفحة الأنسب حسب صلاحيتك والهدف الذي بدأت منه.',
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
