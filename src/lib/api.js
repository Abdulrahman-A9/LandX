const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';

const authHeaders = (token, headers = {}) => {
  const nextHeaders = { ...headers };
  if (token) {
    nextHeaders.Authorization = `Bearer ${token}`;
  }
  return nextHeaders;
};

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, options);
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
};

export { API_BASE_URL };
