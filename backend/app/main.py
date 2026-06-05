from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.config import get_settings
from app.routers import admin, analysis, auth, inquiries, interest_requests, municipality, news, opportunities

settings = get_settings()

app = FastAPI(title="LandX API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_prefix = settings.api_prefix
app.include_router(auth.router, prefix=api_prefix)
app.include_router(opportunities.router, prefix=api_prefix)
app.include_router(news.router, prefix=api_prefix)
app.include_router(news.municipality_router, prefix=api_prefix)
app.include_router(inquiries.router, prefix=api_prefix)
app.include_router(inquiries.municipality_router, prefix=api_prefix)
app.include_router(interest_requests.router, prefix=api_prefix)
app.include_router(analysis.router, prefix=api_prefix)
app.include_router(admin.router, prefix=api_prefix)
app.include_router(municipality.router, prefix=api_prefix)

uploads_dir = Path(__file__).resolve().parents[1] / settings.upload_dir
uploads_dir.mkdir(parents=True, exist_ok=True)
app.mount("/uploads", StaticFiles(directory=uploads_dir), name="uploads")


@app.get("/")
def root() -> dict[str, str]:
    return {"message": "LandX backend is running"}
