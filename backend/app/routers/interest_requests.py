from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import InterestRequest, Opportunity, User, UserRole
from app.schemas.interest_request import InterestRequestCreate, InterestRequestResponse
from app.services.deps import require_roles

router = APIRouter(prefix="/interest-requests", tags=["interest-requests"])


@router.post("", response_model=InterestRequestResponse)
def create_interest_request(
    payload: InterestRequestCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.investor)),
) -> InterestRequest:
    opportunity = db.get(Opportunity, payload.opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Opportunity not found")
    item = InterestRequest(investor_id=user.id, **payload.model_dump())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item


@router.get("/my", response_model=list[InterestRequestResponse])
def get_my_interest_requests(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.investor)),
) -> list[InterestRequest]:
    query = select(InterestRequest).where(InterestRequest.investor_id == user.id).order_by(InterestRequest.created_at.desc())
    return list(db.scalars(query).all())
