from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Municipality, User, UserRole
from app.schemas.municipality_profile import MunicipalityProfileResponse, MunicipalityProfileUpdate
from app.services.deps import require_roles

router = APIRouter(prefix="/municipality/profile", tags=["municipality-profile"])


@router.get("", response_model=MunicipalityProfileResponse)
def get_profile(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> Municipality:
    municipality = db.get(Municipality, user.municipality_id)
    if not municipality:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Municipality not found")
    return municipality


@router.put("", response_model=MunicipalityProfileResponse)
def update_profile(
    payload: MunicipalityProfileUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> Municipality:
    municipality = db.get(Municipality, user.municipality_id)
    if not municipality:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Municipality not found")
    for key, value in payload.model_dump().items():
        setattr(municipality, key, value)
    db.commit()
    db.refresh(municipality)
    return municipality
