# LandX Platform

منصة Full Stack لعرض وإدارة الفرص الاستثمارية الزراعية، تربط بين المستثمرين والبلديات والإدارة ضمن تدفق واضح وقابل للعرض أمام لجنة المناقشة.

## Stack

- Frontend: React 19 + Vite + Tailwind CSS + React Router
- Backend: FastAPI + PostgreSQL + SQLAlchemy + Alembic
- Auth: JWT
- Storage: Local uploads داخل `backend/uploads/`

## Roles

- `visitor`: تصفح الفرص والأخبار
- `investor`: التسجيل، إرسال استفسارات، طلبات اهتمام، وتحليلات استثمارية
- `municipality`: إدارة الفرص والأخبار والرد على الاستفسارات
- `admin`: إدارة المستخدمين والبلديات ومراجعة بيانات المنصة

## Frontend setup

1. ثبت التبعيات:

```powershell
npm install
```

2. انسخ ملف البيئة المناسب:

تشغيل محلي مع باك اند محلي:

```powershell
Copy-Item .env.example .env
```

تشغيل الفرونت مع باك اند Render:

```powershell
Copy-Item .env.render.example .env
```

3. عدل `VITE_API_BASE_URL` داخل `.env` إذا لزم.

4. شغّل الواجهة:

```powershell
npm run dev
```

## Backend setup

راجع [backend/README.md](/abs/path/c:/Users/S7175/OneDrive/سطح%20المكتب/LandX/landx-platform/backend/README.md) لتشغيل قاعدة البيانات والـ API والـ seed.

## Environment files

- `.env.example`: يربط الفرونت مع `http://127.0.0.1:8000/api`
- `.env.render.example`: يربط الفرونت مع باك اند منشور على Render
- في حال النشر بدون `VITE_API_BASE_URL`، سيحاول الفرونت استخدام `https://landx.onrender.com/api` كـ fallback إنتاجي

قيمة Render النهائية تكون بهذا الشكل:

```env
VITE_API_BASE_URL=https://YOUR-RENDER-BACKEND.onrender.com/api
```

## Build

```powershell
npm run build
```

## Notes

- إذا ظهرت `ERR_CONNECTION_REFUSED` فهذا يعني أن `VITE_API_BASE_URL` يشير إلى API غير شغال.
- الفرص والأخبار لن تظهر إلا إذا كان الباك اند متاحاً، والـ seed قد تم تشغيله على قاعدة البيانات المستهدفة.
