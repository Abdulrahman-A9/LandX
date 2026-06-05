from fastapi import APIRouter, Depends
from sqlalchemy import select
from sqlalchemy.orm import Session, selectinload

from app.db import get_db
from app.models import InvestmentAnalysis, User, UserRole
from app.schemas.analysis import AnalysisCreate, AnalysisResponse
from app.services.analysis_service import build_analysis_report
from app.services.deps import get_current_user, require_roles

router = APIRouter(prefix="/analyses", tags=["analyses"])


@router.post("", response_model=AnalysisResponse)
def create_analysis(
    payload: AnalysisCreate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
) -> InvestmentAnalysis:
    analysis = InvestmentAnalysis(owner_id=user.id, **payload.model_dump())
    db.add(analysis)
    db.flush()
    analysis.reports.append(build_analysis_report(analysis))
    db.commit()
    db.refresh(analysis)
    return analysis


@router.get("", response_model=list[AnalysisResponse])
def list_analyses(
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
) -> list[InvestmentAnalysis]:
    query = select(InvestmentAnalysis).options(selectinload(InvestmentAnalysis.reports)).order_by(InvestmentAnalysis.created_at.desc())
    if user.role != UserRole.admin:
        query = query.where(InvestmentAnalysis.owner_id == user.id)
    return list(db.scalars(query).all())
