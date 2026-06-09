# LandX Backend

## Quick start

1. Create a PostgreSQL database named `landx`.
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

## PostgreSQL notes

- Example local `DATABASE_URL`:

```text
postgresql+psycopg://postgres:password@127.0.0.1:5432/landx
```

- On Render, use the PostgreSQL connection details provided by your database service and place the final value in `DATABASE_URL`.
