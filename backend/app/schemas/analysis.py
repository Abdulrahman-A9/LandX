from pydantic import BaseModel

from app.schemas.common import TimestampedResponse


class AnalysisCreate(BaseModel):
    project_name: str
    location: str
    crop_type: str | None = None
    area: float | None = None
    setup_cost: float | None = None
    operating_cost: float | None = None
    estimated_revenue: float | None = None


class AnalysisReportResponse(TimestampedResponse):
    analysis_id: int
    report_number: str
    summary: str
    roi_percentage: float | None = None
    payback_months: float | None = None
    notes: str | None = None


class AnalysisResponse(TimestampedResponse):
    owner_id: int | None = None
    project_name: str
    location: str
    crop_type: str | None = None
    area: float | None = None
    setup_cost: float | None = None
    operating_cost: float | None = None
    estimated_revenue: float | None = None
    status: str
    reports: list[AnalysisReportResponse] = []
