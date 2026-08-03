# LandX Backend

## Quick start

1. Create a PostgreSQL database named `landx` (MySQL is also supported when `DATABASE_URL` uses `mysql+pymysql`).
2. Copy `.env.example` to `.env` and update credentials.
3. Install dependencies:

```powershell
pip install -r requirements.txt
```

4. Seed the database:

```powershell
python -m app.seed
```

5. Run the API:

```powershell
uvicorn app.main:app --reload
```

## Demo accounts

- `admin@landx.sa` / `123456`
- `municipality@landx.sa` / `123456`
- `investor@landx.sa` / `123456`
- `investor2@landx.sa` / `123456`
- `investor3@landx.sa` / `123456`

## PostgreSQL notes

- Example local `DATABASE_URL`:

```text
postgresql+psycopg://postgres:password@127.0.0.1:5432/landx
```

- Example MySQL `DATABASE_URL`:

```text
mysql+pymysql://root:password@127.0.0.1:3306/landx
```

- On Render, use the PostgreSQL connection details provided by your database service and place the final value in `DATABASE_URL`.
- If you cannot access a shell on Render, set `AUTO_SEED_ON_STARTUP=true` once to create tables and inject demo data automatically on deploy.

## Demo dataset

The seed creates a complete presentation-ready dataset including:

- 4 municipalities
- 14 opportunities across multiple statuses
- 8 news and announcement records
- linked inquiries, replies, and interest requests
- saved investment analyses with generated reports
