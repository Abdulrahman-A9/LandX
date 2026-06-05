from pydantic import BaseModel, EmailStr

from app.models.enums import OpportunityStatus, UserRole
from app.schemas.common import TimestampedResponse


class UserCreate(BaseModel):
    full_name: str
    email: EmailStr
    password: str
    role: UserRole
    phone: str | None = None
    municipality_id: int | None = None


class UserUpdate(BaseModel):
    full_name: str
    phone: str | None = None
    role: UserRole
    is_active: bool
    municipality_id: int | None = None


class UserStatusUpdate(BaseModel):
    is_active: bool


class UserResponse(TimestampedResponse):
    full_name: str
    email: EmailStr
    role: UserRole
    phone: str | None = None
    is_active: bool
    municipality_id: int | None = None


class MunicipalityCreate(BaseModel):
    name: str
    region: str
    description: str | None = None
    contact_email: str | None = None
    contact_phone: str | None = None
    is_active: bool = True


class MunicipalityUpdate(MunicipalityCreate):
    pass


class MunicipalityResponse(TimestampedResponse):
    name: str
    region: str
    description: str | None = None
    contact_email: str | None = None
    contact_phone: str | None = None
    is_active: bool


class OpportunityStatusUpdate(BaseModel):
    status: OpportunityStatus


class DashboardStats(BaseModel):
    users: int
    municipalities: int
    opportunities: int
    active_opportunities: int
    inquiries: int
    interest_requests: int
    analyses: int
