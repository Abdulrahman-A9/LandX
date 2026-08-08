const isBrowser = typeof window !== 'undefined';
const isLocalHost =
  isBrowser &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1');

const fallbackApiBaseUrl = isLocalHost
  ? 'http://127.0.0.1:8000/api'
  : 'https://landx-backend.onrender.com/api';

const rawApiBaseUrl = import.meta.env.VITE_API_BASE_URL || fallbackApiBaseUrl;
const API_BASE_URL = rawApiBaseUrl.replace(/\/+$/, '');

const authHeaders = (token, headers = {}) => {
  const nextHeaders = { ...headers };
  if (token) {
    nextHeaders.Authorization = `Bearer ${token}`;
  }
  return nextHeaders;
};

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_BASE_URL}${path}`, options);
  } catch {
    throw new Error('Backend service is unavailable. Check API deployment or VITE_API_BASE_URL.');
  }
  if (!response.ok) {
    const payload = await response.json().catch(() => ({}));
    throw new Error(payload.detail || 'Request failed');
  }
  if (response.status === 204) {
    return null;
  }
  return response.json();
}

export const authApi = {
  login: (email, password) =>
    request('/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }),
  me: (token) =>
    request('/auth/me', {
      headers: authHeaders(token),
    }),
  register: (payload) =>
    request('/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }),
  updateMe: (token, payload) =>
    request('/auth/me', {
      method: 'PATCH',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
};

export const opportunitiesApi = {
  list: () => request('/opportunities'),
  getById: (id) => request(`/opportunities/${id}`),
  create: (token, payload) =>
    request('/opportunities', {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  update: (token, id, payload) =>
    request(`/opportunities/${id}`, {
      method: 'PUT',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  remove: (token, id) =>
    request(`/opportunities/${id}`, {
      method: 'DELETE',
      headers: authHeaders(token),
    }),
};

export const newsApi = {
  list: (type) => request(type ? `/news?type=${type}` : '/news'),
  municipality: (token) =>
    request('/municipality/news', {
      headers: authHeaders(token),
    }),
  create: (token, payload) =>
    request('/news', {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  update: (token, id, payload) =>
    request(`/news/${id}`, {
      method: 'PUT',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  remove: (token, id) => request(`/news/${id}`, { method: 'DELETE', headers: authHeaders(token) }),
};

export const municipalityApi = {
  list: (token) =>
    request('/admin/municipalities', {
      headers: authHeaders(token),
    }),
  getProfile: (token) =>
    request('/municipality/profile', {
      headers: authHeaders(token),
    }),
  updateProfile: (token, payload) =>
    request('/municipality/profile', {
      method: 'PUT',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
};

export const inquiryApi = {
  create: (token, payload) =>
    request('/inquiries', {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  my: (token) =>
    request('/inquiries/my', {
      headers: authHeaders(token),
    }),
  municipality: (token) =>
    request('/municipality/inquiries', {
      headers: authHeaders(token),
    }),
  reply: (token, inquiryId, payload) =>
    request(`/municipality/inquiries/${inquiryId}/reply`, {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
};

export const interestRequestApi = {
  create: (token, payload) =>
    request('/interest-requests', {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  my: (token) =>
    request('/interest-requests/my', {
      headers: authHeaders(token),
    }),
};

export const analysisApi = {
  create: (token, payload) =>
    request('/analyses', {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  list: (token) =>
    request('/analyses', {
      headers: authHeaders(token),
    }),
};

export const adminApi = {
  stats: (token) =>
    request('/admin/dashboard/stats', {
      headers: authHeaders(token),
    }),
  users: (token) =>
    request('/admin/users', {
      headers: authHeaders(token),
    }),
  createUser: (token, payload) =>
    request('/admin/users', {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  updateUser: (token, id, payload) =>
    request(`/admin/users/${id}`, {
      method: 'PUT',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  updateUserStatus: (token, id, is_active) =>
    request(`/admin/users/${id}/status`, {
      method: 'PATCH',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify({ is_active }),
    }),
  deleteUser: (token, id) =>
    request(`/admin/users/${id}`, { method: 'DELETE', headers: authHeaders(token) }),
  municipalities: (token) =>
    request('/admin/municipalities', {
      headers: authHeaders(token),
    }),
  createMunicipality: (token, payload) =>
    request('/admin/municipalities', {
      method: 'POST',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  updateMunicipality: (token, id, payload) =>
    request(`/admin/municipalities/${id}`, {
      method: 'PUT',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify(payload),
    }),
  deleteMunicipality: (token, id) =>
    request(`/admin/municipalities/${id}`, { method: 'DELETE', headers: authHeaders(token) }),
  opportunities: (token) =>
    request('/admin/opportunities', {
      headers: authHeaders(token),
    }),
  updateOpportunityStatus: (token, id, status) =>
    request(`/admin/opportunities/${id}/status`, {
      method: 'PATCH',
      headers: authHeaders(token, { 'Content-Type': 'application/json' }),
      body: JSON.stringify({ status }),
    }),
  deleteOpportunity: (token, id) =>
    request(`/admin/opportunities/${id}`, { method: 'DELETE', headers: authHeaders(token) }),
  news: (token) =>
    request('/admin/news', {
      headers: authHeaders(token),
    }),
};

export { API_BASE_URL };
