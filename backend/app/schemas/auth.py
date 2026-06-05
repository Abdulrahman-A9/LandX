from pydantic import BaseModel, EmailStr

from app.models.enums import UserRole
from app.schemas.common import ORMModel


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class RegisterRequest(BaseModel):
    full_name: str
    email: EmailStr
    phone: str | None = None
    role: UserRole = UserRole.investor
    password: str


class UserMeUpdate(BaseModel):
    full_name: str
    phone: str | None = None


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


class UserMe(ORMModel):
    id: int
    full_name: str
    email: EmailStr
    role: UserRole
    phone: str | None = None
    municipality_id: int | None = None
