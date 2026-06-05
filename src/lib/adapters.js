import { API_BASE_URL } from './api';

export const mapOpportunity = (item) => ({
  id: item.id,
  title: item.title,
  municipality: item.municipality_name || item.municipality?.name || `بلدية #${item.municipality_id}`,
  location: item.location,
  season: item.season || 'all',
  area: item.area || 0,
  areaUnit: item.area_unit || '',
  expectedReturn: item.expected_return || 0,
  investmentRequired: item.investment_required || 0,
  currency: 'SAR',
  status: item.status,
  description: item.description,
  images: (item.images || []).map((image) => {
    if (image.file_path?.startsWith('http')) return image.file_path;
    return `${API_BASE_URL.replace('/api', '')}/${image.file_path}`;
  }),
  features: item.features || [
    'فرصة موثقة بمؤشرات أولية واضحة.',
    'مرتبطة بجهة معلنة ومسار متابعة مباشر.',
    'صممت لتقليل الضبابية قبل قرار التقديم.',
  ],
});

export const mapNewsItem = (item) => ({
  id: item.id,
  title: item.title,
  content: item.content,
  municipality: item.municipality_name || item.municipality?.name || (item.municipality_id ? `بلدية #${item.municipality_id}` : 'LandX'),
  date: item.created_at,
  priority: item.priority,
  image: item.image || null,
  type: item.type,
});
