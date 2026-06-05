from pydantic import BaseModel

from app.models.enums import InterestRequestStatus
from app.schemas.common import TimestampedResponse


class InterestRequestCreate(BaseModel):
    opportunity_id: int
    proposed_amount: float | None = None
    notes: str | None = None


class InterestRequestResponse(TimestampedResponse):
    investor_id: int
    opportunity_id: int
    proposed_amount: float | None = None
    notes: str | None = None
    status: InterestRequestStatus
