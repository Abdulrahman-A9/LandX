import React, { useMemo, useState } from 'react';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { useAsyncData } from '../../hooks/useAsyncData';
import { adminApi } from '../../lib/api';
import { useToast } from '../../context/ToastContext';
import { formatArabicDate } from '../../lib/formatters';
import { PlusIcon, SearchIcon, UserIcon, XIcon } from '../../components/ui/Icons';

const emptyForm = { full_name: '', email: '', password: '', phone: '', role: 'investor', is_active: true, municipality_id: '' };
const roleLabels = { admin: 'مدير منصة', municipality: 'جهة شريكة', investor: 'مستثمر' };

const Users = () => {
  const { token, user: currentUser } = useAuth();
  const { addToast } = useToast();
  const { data: users, loading, error, setData } = useAsyncData(() => adminApi.users(token), [token]);
  const [query, setQuery] = useState('');
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const filteredUsers = useMemo(() => users.filter((item) => `${item.full_name} ${item.email} ${item.role}`.toLowerCase().includes(query.toLowerCase())), [users, query]);
  const openCreate = () => { setEditing(null); setForm(emptyForm); };
  const openEdit = (item) => { setEditing(item); setForm({ full_name: item.full_name || '', email: item.email || '', password: '', phone: item.phone || '', role: item.role, is_active: item.is_active, municipality_id: item.municipality_id || '' }); };
  const handleChange = (event) => setForm((previous) => ({ ...previous, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }));

  const saveUser = async (event) => {
    event.preventDefault();
    try {
      setSaving(true);
      const payload = { full_name: form.full_name, phone: form.phone || null, role: form.role, is_active: form.is_active, municipality_id: form.municipality_id ? Number(form.municipality_id) : null };
      let saved;
      if (editing) saved = await adminApi.updateUser(token, editing.id, payload);
      else saved = await adminApi.createUser(token, { ...payload, email: form.email, password: form.password });
      setData((previous) => editing ? previous.map((item) => item.id === saved.id ? saved : item) : [saved, ...previous]);
      setEditing(null); setForm(emptyForm); addToast(editing ? 'تم تحديث بيانات المستخدم.' : 'تم إنشاء حساب المستخدم.', 'success');
    } catch (saveError) { addToast(saveError.message || 'تعذر حفظ المستخدم.', 'error'); } finally { setSaving(false); }
  };

  const toggleStatus = async (item) => {
    try { const updated = await adminApi.updateUserStatus(token, item.id, !item.is_active); setData((previous) => previous.map((row) => row.id === updated.id ? updated : row)); addToast(updated.is_active ? 'تم تفعيل الحساب.' : 'تم إيقاف الحساب.', 'success'); } catch (statusError) { addToast(statusError.message || 'تعذر تغيير حالة الحساب.', 'error'); }
  };

  const deleteUser = async (item) => {
    if (!window.confirm(`هل تريد حذف حساب ${item.full_name}؟`)) return;
    try { await adminApi.deleteUser(token, item.id); setData((previous) => previous.filter((row) => row.id !== item.id)); addToast('تم حذف الحساب.', 'success'); } catch (deleteError) { addToast(deleteError.message || 'تعذر حذف الحساب.', 'error'); }
  };

  if (!token || currentUser?.role !== 'admin') return <Card className="p-10 text-center"><h1 className="text-3xl font-black text-app-text">إدارة المستخدمين محمية</h1><p className="mt-3 text-sm leading-8 text-app-text-muted">سجّل الدخول بحساب مدير المنصة للوصول إلى الحسابات.</p></Card>;
  if (loading) return <Card className="p-10 text-center text-app-text-muted">جاري تحميل الحسابات...</Card>;
  if (error) return <Card className="p-10 text-center text-danger">تعذر تحميل المستخدمين: {error}</Card>;

  return <div className="space-y-6">
    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end"><div><div className="landx-kicker"><UserIcon className="h-4 w-4" /> إدارة الحسابات</div><h1 className="mt-4 text-3xl font-black text-app-text">المستخدمون والشركاء</h1><p className="mt-2 text-sm leading-7 text-app-text-muted">أنشئ الحسابات، حدّث بياناتها، وتابع صلاحية الوصول من مركز واحد.</p></div><Button onClick={openCreate}><PlusIcon className="h-4 w-4" /> مستخدم جديد</Button></div>
    <div className="grid gap-4 sm:grid-cols-3"><Card className="border-[#eadacc] p-5"><div className="text-xs font-bold text-app-text-muted">إجمالي الحسابات</div><div className="mt-3 text-3xl font-black text-[#8c4e2f]">{users.length}</div></Card><Card className="border-[#eadacc] p-5"><div className="text-xs font-bold text-app-text-muted">الحسابات النشطة</div><div className="mt-3 text-3xl font-black text-[#5d9872]">{users.filter((item) => item.is_active).length}</div></Card><Card className="border-[#eadacc] p-5"><div className="text-xs font-bold text-app-text-muted">المستثمرون</div><div className="mt-3 text-3xl font-black text-[#b17b3e]">{users.filter((item) => item.role === 'investor').length}</div></Card></div>
    {form && (editing || form === emptyForm || !editing) ? <Card className="border-[#e3c6b0] bg-[#fffaf5] p-6"><div className="flex items-start justify-between"><div><div className="text-xs font-bold text-[#a4623e]">{editing ? 'تعديل الحساب' : 'حساب جديد'}</div><h2 className="mt-2 text-xl font-black text-app-text">{editing ? editing.full_name : 'إضافة مستخدم إلى LandX'}</h2></div><button onClick={() => { setEditing(null); setForm(null); }} className="rounded-xl p-2 text-app-text-muted hover:bg-[#f2dfd1]" aria-label="إغلاق"><XIcon /></button></div><form onSubmit={saveUser} className="mt-5 grid gap-4 md:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-app-text">الاسم الكامل<input required name="full_name" value={form.full_name} onChange={handleChange} className="landx-form-input" /></label><label className="grid gap-2 text-sm font-bold text-app-text">البريد الإلكتروني<input required={!editing} disabled={Boolean(editing)} type="email" name="email" value={form.email} onChange={handleChange} className="landx-form-input disabled:opacity-60" /></label><label className="grid gap-2 text-sm font-bold text-app-text">رقم الجوال<input name="phone" value={form.phone} onChange={handleChange} className="landx-form-input" /></label><label className="grid gap-2 text-sm font-bold text-app-text">نوع الحساب<select name="role" value={form.role} onChange={handleChange} className="landx-form-input"><option value="investor">مستثمر</option><option value="municipality">جهة شريكة</option><option value="admin">مدير منصة</option></select></label>{!editing && <label className="grid gap-2 text-sm font-bold text-app-text">كلمة المرور<input required name="password" type="password" value={form.password} onChange={handleChange} className="landx-form-input" /></label>}<label className="flex items-center gap-3 self-end rounded-xl border border-[#eadacc] bg-white px-4 py-3 text-sm font-bold text-app-text"><input type="checkbox" name="is_active" checked={form.is_active} onChange={handleChange} className="h-4 w-4 accent-[#a4623e]" /> حساب نشط</label><div className="flex gap-3 md:col-span-2"><Button type="submit" disabled={saving}>{saving ? 'جاري الحفظ...' : editing ? 'حفظ التعديلات' : 'إنشاء الحساب'}</Button><Button type="button" variant="outline" onClick={() => { setEditing(null); setForm(null); }}>إلغاء</Button></div></form></Card> : null}
    <Card className="overflow-hidden border-[#eadacc]"><div className="flex flex-col justify-between gap-4 border-b border-[#eadacc] p-5 md:flex-row md:items-center"><div><h2 className="text-xl font-black text-app-text">سجل الحسابات</h2><p className="mt-1 text-xs text-app-text-muted">{filteredUsers.length} حساب ظاهر</p></div><label className="flex items-center gap-2 rounded-xl border border-[#eadacc] bg-[#fffdf9] px-3 py-2"><SearchIcon className="h-4 w-4 text-[#b17855]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ابحث بالاسم أو البريد" className="w-full bg-transparent text-sm outline-none placeholder:text-app-text-soft md:w-64" /></label></div><div className="overflow-x-auto"><table className="min-w-full text-right text-sm"><thead className="bg-[#fbf5ef] text-xs text-app-text-muted"><tr>{['المستخدم','البريد','الدور','الحالة','تاريخ الانضمام','إجراءات'].map((heading) => <th key={heading} className="px-5 py-4">{heading}</th>)}</tr></thead><tbody>{filteredUsers.map((item) => <tr key={item.id} className="border-t border-[#efe4db] transition-colors hover:bg-[#fffaf5]"><td className="px-5 py-4"><div className="flex items-center gap-3"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f2dfd1] text-xs font-black text-[#9b5d3d]">{(item.full_name || '?').charAt(0)}</div><span className="font-bold text-app-text">{item.full_name}</span></div></td><td className="px-5 py-4 text-app-text-muted">{item.email}</td><td className="px-5 py-4"><span className="rounded-full bg-[#f7eadf] px-3 py-1 text-xs font-bold text-[#9b5d3d]">{roleLabels[item.role] || item.role}</span></td><td className="px-5 py-4"><button onClick={() => toggleStatus(item)} className={`rounded-full px-3 py-1 text-xs font-bold ${item.is_active ? 'bg-[#e5f3e8] text-[#4b8b61]' : 'bg-[#f8e5e1] text-[#ae5d50]'}`}>{item.is_active ? 'نشط' : 'موقوف'}</button></td><td className="px-5 py-4 text-xs text-app-text-soft">{formatArabicDate(item.created_at)}</td><td className="px-5 py-4"><div className="flex gap-2"><button onClick={() => openEdit(item)} className="rounded-lg border border-[#e5cdbb] px-3 py-2 text-xs font-bold text-[#9b5d3d] hover:bg-[#f7eadf]">تعديل</button><button disabled={item.id === currentUser.id} onClick={() => deleteUser(item)} className="rounded-lg border border-danger/20 px-3 py-2 text-xs font-bold text-danger hover:bg-danger/5 disabled:cursor-not-allowed disabled:opacity-30">حذف</button></div></td></tr>)}</tbody></table></div></Card>
  </div>;
};

export default Users;
