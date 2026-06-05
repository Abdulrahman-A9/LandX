from pydantic import BaseModel

from app.schemas.common import TimestampedResponse


class MunicipalityProfileUpdate(BaseModel):
    name: str
    region: str
    description: str | None = None
    contact_email: str | None = None
    contact_phone: str | None = None


class MunicipalityProfileResponse(TimestampedResponse):
    name: str
    region: str
    description: str | None = None
    contact_email: str | None = None
    contact_phone: str | None = None
    is_active: bool
