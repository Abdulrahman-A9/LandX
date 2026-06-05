from pydantic import BaseModel

from app.models.enums import OpportunityStatus
from app.schemas.common import TimestampedResponse


class OpportunityCreate(BaseModel):
    title: str
    description: str
    location: str
    season: str | None = None
    area: float | None = None
    area_unit: str | None = None
    expected_return: float | None = None
    investment_required: float | None = None
    municipality_id: int | None = None
    status: OpportunityStatus = OpportunityStatus.pending


class OpportunityUpdate(OpportunityCreate):
    pass


class OpportunityImageResponse(TimestampedResponse):
    opportunity_id: int
    file_name: str
    file_path: str


class OpportunityResponse(TimestampedResponse):
    title: str
    description: str
    municipality_id: int
    location: str
    season: str | None = None
    area: float | None = None
    area_unit: str | None = None
    expected_return: float | None = None
    investment_required: float | None = None
    status: OpportunityStatus
    images: list[OpportunityImageResponse] = []
