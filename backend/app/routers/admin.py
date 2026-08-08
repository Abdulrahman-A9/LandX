from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Inquiry, InterestRequest, InvestmentAnalysis, Municipality, NewsItem, Opportunity, User
from app.schemas.admin import (
    DashboardStats,
    MunicipalityCreate,
    MunicipalityResponse,
    MunicipalityUpdate,
    OpportunityStatusUpdate,
    UserCreate,
    UserResponse,
    UserStatusUpdate,
    UserUpdate,
)
from app.schemas.news import NewsResponse
from app.schemas.opportunity import OpportunityResponse
from app.services.deps import require_roles
from app.utils.security import hash_password
from app.models.enums import UserRole

router = APIRouter(prefix="/admin", tags=["admin"])


@router.get("/users", response_model=list[UserResponse])
def list_users(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> list[User]:
    return list(db.scalars(select(User).order_by(User.created_at.desc())).all())


@router.post("/users", response_model=UserResponse)
def create_user(
    payload: UserCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> User:
    if db.scalar(select(User).where(User.email == payload.email)):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Email already exists")
    created = User(
        full_name=payload.full_name,
        email=payload.email,
        password_hash=hash_password(payload.password),
        role=payload.role,
        phone=payload.phone,
        municipality_id=payload.municipality_id,
    )
    db.add(created)
    db.commit()
    db.refresh(created)
    return created


@router.put("/users/{user_id}", response_model=UserResponse)
def update_user(
    user_id: int,
    payload: UserUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> User:
    target = db.get(User, user_id)
    if not target:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    for key, value in payload.model_dump().items():
        setattr(target, key, value)
    db.commit()
    db.refresh(target)
    return target


@router.patch("/users/{user_id}/status", response_model=UserResponse)
def update_user_status(
    user_id: int,
    payload: UserStatusUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> User:
    target = db.get(User, user_id)
    if not target:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    target.is_active = payload.is_active
    db.commit()
    db.refresh(target)
    return target


@router.delete("/users/{user_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> None:
    target = db.get(User, user_id)
    if not target:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    if target.id == user.id:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Cannot delete the current admin")
    db.delete(target)
    try:
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="لا يمكن حذف حساب مرتبط بطلبات أو تحليلات. أوقفه بدلًا من ذلك.") from exc


@router.get("/municipalities", response_model=list[MunicipalityResponse])
def list_municipalities(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> list[Municipality]:
    return list(db.scalars(select(Municipality).order_by(Municipality.created_at.desc())).all())


@router.post("/municipalities", response_model=MunicipalityResponse)
def create_municipality(
    payload: MunicipalityCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> Municipality:
    municipality = Municipality(**payload.model_dump())
    db.add(municipality)
    db.commit()
    db.refresh(municipality)
    return municipality


@router.put("/municipalities/{municipality_id}", response_model=MunicipalityResponse)
def update_municipality(
    municipality_id: int,
    payload: MunicipalityUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> Municipality:
    municipality = db.get(Municipality, municipality_id)
    if not municipality:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Municipality not found")
    for key, value in payload.model_dump().items():
        setattr(municipality, key, value)
    db.commit()
    db.refresh(municipality)
    return municipality


@router.delete("/municipalities/{municipality_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_municipality(
    municipality_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> None:
    municipality = db.get(Municipality, municipality_id)
    if not municipality:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Municipality not found")
    db.delete(municipality)
    try:
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="لا يمكن حذف جهة لديها فرص أو مستخدمون مرتبطون. عطّلها بدلًا من ذلك.") from exc


@router.get("/opportunities", response_model=list[OpportunityResponse])
def admin_list_opportunities(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> list[Opportunity]:
    return list(db.scalars(select(Opportunity).order_by(Opportunity.created_at.desc())).all())


@router.patch("/opportunities/{opportunity_id}/status", response_model=OpportunityResponse)
def update_opportunity_status(
    opportunity_id: int,
    payload: OpportunityStatusUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> Opportunity:
    opportunity = db.get(Opportunity, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Opportunity not found")
    opportunity.status = payload.status
    db.commit()
    db.refresh(opportunity)
    return opportunity


@router.delete("/opportunities/{opportunity_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_opportunity(
    opportunity_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> None:
    opportunity = db.get(Opportunity, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Opportunity not found")
    db.delete(opportunity)
    try:
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="لا يمكن حذف فرصة لديها طلبات أو استفسارات. أغلقها بدلًا من ذلك.") from exc


@router.get("/news", response_model=list[NewsResponse])
def admin_list_news(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> list[NewsItem]:
    return list(db.scalars(select(NewsItem).order_by(NewsItem.created_at.desc())).all())


@router.get("/dashboard/stats", response_model=DashboardStats)
def get_dashboard_stats(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.admin)),
) -> DashboardStats:
    return DashboardStats(
        users=db.scalar(select(func.count()).select_from(User)) or 0,
        municipalities=db.scalar(select(func.count()).select_from(Municipality)) or 0,
        opportunities=db.scalar(select(func.count()).select_from(Opportunity)) or 0,
        active_opportunities=db.scalar(select(func.count()).select_from(Opportunity).where(Opportunity.status == "active")) or 0,
        inquiries=db.scalar(select(func.count()).select_from(Inquiry)) or 0,
        interest_requests=db.scalar(select(func.count()).select_from(InterestRequest)) or 0,
        analyses=db.scalar(select(func.count()).select_from(InvestmentAnalysis)) or 0,
    )
