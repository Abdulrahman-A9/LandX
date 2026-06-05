from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.db import get_db
from app.models import Inquiry, InquiryReply, Opportunity, User, UserRole
from app.schemas.inquiry import InquiryCreate, InquiryReplyCreate, InquiryResponse
from app.services.deps import get_current_user, require_roles

router = APIRouter(prefix="/inquiries", tags=["inquiries"])
municipality_router = APIRouter(prefix="/municipality/inquiries", tags=["municipality-inquiries"])


@router.post("", response_model=InquiryResponse)
def create_inquiry(
    payload: InquiryCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.investor)),
) -> Inquiry:
    opportunity = db.get(Opportunity, payload.opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Opportunity not found")
    inquiry = Inquiry(investor_id=user.id, **payload.model_dump())
    db.add(inquiry)
    db.commit()
    db.refresh(inquiry)
    return inquiry


@router.get("/my", response_model=list[InquiryResponse])
def get_my_inquiries(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.investor)),
) -> list[Inquiry]:
    query = (
        select(Inquiry)
        .options(selectinload(Inquiry.replies))
        .where(Inquiry.investor_id == user.id)
        .order_by(Inquiry.created_at.desc())
    )
    return list(db.scalars(query).all())


@municipality_router.get("", response_model=list[InquiryResponse])
def get_municipality_inquiries(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> list[Inquiry]:
    query = (
        select(Inquiry)
        .join(Opportunity, Inquiry.opportunity_id == Opportunity.id)
        .options(selectinload(Inquiry.replies))
        .order_by(Inquiry.created_at.desc())
    )
    if user.role == UserRole.municipality:
        query = query.where(Opportunity.municipality_id == user.municipality_id)
    return list(db.scalars(query).all())


@municipality_router.post("/{inquiry_id}/reply", response_model=InquiryResponse)
def reply_to_inquiry(
    inquiry_id: int,
    payload: InquiryReplyCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> Inquiry:
    inquiry = db.scalar(
        select(Inquiry).options(selectinload(Inquiry.replies)).where(Inquiry.id == inquiry_id)
    )
    if not inquiry:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Inquiry not found")
    opportunity = db.get(Opportunity, inquiry.opportunity_id)
    if user.role == UserRole.municipality and opportunity.municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot reply to this inquiry")

    inquiry.replies.append(InquiryReply(sender_id=user.id, message=payload.message))
    inquiry.status = "answered"
    db.commit()
    db.refresh(inquiry)
    return inquiry
