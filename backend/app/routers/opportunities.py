from fastapi import APIRouter, Depends, File, HTTPException, Query, UploadFile, status
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.db import get_db
from app.models import Municipality, Opportunity, OpportunityImage, OpportunityStatus, User, UserRole
from app.schemas.opportunity import OpportunityCreate, OpportunityImageResponse, OpportunityResponse, OpportunityUpdate
from app.services.deps import get_current_user, require_roles
from app.utils.uploads import save_upload

router = APIRouter(prefix="/opportunities", tags=["opportunities"])


@router.get("", response_model=list[OpportunityResponse])
def list_opportunities(
    status_filter: OpportunityStatus | None = Query(None, alias="status"),
    municipality_id: int | None = None,
    db: Session = Depends(get_db),
) -> list[Opportunity]:
    query = select(Opportunity).options(selectinload(Opportunity.images))
    if status_filter:
        query = query.where(Opportunity.status == status_filter)
    if municipality_id:
        query = query.where(Opportunity.municipality_id == municipality_id)
    return list(db.scalars(query.order_by(Opportunity.created_at.desc())).all())


@router.get("/{opportunity_id}", response_model=OpportunityResponse)
def get_opportunity(opportunity_id: int, db: Session = Depends(get_db)) -> Opportunity:
    opportunity = db.scalar(
        select(Opportunity).options(selectinload(Opportunity.images)).where(Opportunity.id == opportunity_id)
    )
    if not opportunity:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Opportunity not found")
    return opportunity


@router.post("", response_model=OpportunityResponse)
def create_opportunity(
    payload: OpportunityCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> Opportunity:
    municipality_id = payload.municipality_id or user.municipality_id
    if user.role == UserRole.municipality and municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot create for another municipality")
    municipality = db.get(Municipality, municipality_id)
    if not municipality:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Municipality not found")

    opportunity = Opportunity(**payload.model_dump(exclude={"municipality_id"}), municipality_id=municipality_id)
    db.add(opportunity)
    db.commit()
    db.refresh(opportunity)
    return opportunity


@router.put("/{opportunity_id}", response_model=OpportunityResponse)
def update_opportunity(
    opportunity_id: int,
    payload: OpportunityUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> Opportunity:
    opportunity = db.get(Opportunity, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Opportunity not found")
    if user.role == UserRole.municipality and opportunity.municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot update this opportunity")

    data = payload.model_dump(exclude_unset=True)
    municipality_id = data.pop("municipality_id", opportunity.municipality_id)
    if user.role == UserRole.municipality and municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot move opportunity")
    for key, value in data.items():
        setattr(opportunity, key, value)
    opportunity.municipality_id = municipality_id
    db.commit()
    db.refresh(opportunity)
    return opportunity


@router.post("/{opportunity_id}/images", response_model=OpportunityImageResponse)
def upload_opportunity_image(
    opportunity_id: int,
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> OpportunityImage:
    opportunity = db.get(Opportunity, opportunity_id)
    if not opportunity:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Opportunity not found")
    if user.role == UserRole.municipality and opportunity.municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot upload to this opportunity")

    file_name, file_path = save_upload(file, "opportunities")
    image = OpportunityImage(opportunity_id=opportunity_id, file_name=file_name, file_path=file_path)
    db.add(image)
    db.commit()
    db.refresh(image)
    return image
