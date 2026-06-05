from app.schemas.common import TimestampedResponse


class MunicipalityBase(TimestampedResponse):
    name: str
    region: str
    description: str | None = None
    contact_email: str | None = None
    contact_phone: str | None = None
    is_active: bool


class MunicipalityCreate(TimestampedResponse):
    pass
