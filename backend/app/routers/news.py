from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.db import get_db
from app.models import Municipality, NewsItem, NewsType, User, UserRole
from app.schemas.news import NewsCreate, NewsResponse, NewsUpdate
from sqlalchemy.exc import IntegrityError
from app.services.deps import require_roles

router = APIRouter(prefix="/news", tags=["news"])
municipality_router = APIRouter(prefix="/municipality/news", tags=["municipality-news"])


@router.get("", response_model=list[NewsResponse])
def list_news(
    type_filter: NewsType | None = Query(None, alias="type"),
    db: Session = Depends(get_db),
) -> list[NewsItem]:
    query = select(NewsItem).where(NewsItem.is_published.is_(True))
    if type_filter:
        query = query.where(NewsItem.type == type_filter)
    return list(db.scalars(query.order_by(NewsItem.created_at.desc())).all())


@router.post("", response_model=NewsResponse)
def create_news(
    payload: NewsCreate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> NewsItem:
    municipality_id = payload.municipality_id or user.municipality_id
    if user.role == UserRole.municipality and municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot publish for another municipality")
    if municipality_id is not None and not db.get(Municipality, municipality_id):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Municipality not found")

    item = NewsItem(**payload.model_dump(exclude={"municipality_id"}), municipality_id=municipality_id)
    db.add(item)
    db.commit()
    db.refresh(item)
    return item


@router.put("/{news_id}", response_model=NewsResponse)
def update_news(
    news_id: int,
    payload: NewsUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> NewsItem:
    item = db.get(NewsItem, news_id)
    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="News item not found")
    if user.role == UserRole.municipality and item.municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot update this news item")
    data = payload.model_dump()
    municipality_id = data.pop("municipality_id", item.municipality_id)
    if user.role == UserRole.municipality and municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot move this news item")
    for key, value in data.items():
        setattr(item, key, value)
    item.municipality_id = municipality_id
    db.commit()
    db.refresh(item)
    return item


@router.delete("/{news_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_news(
    news_id: int,
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> None:
    item = db.get(NewsItem, news_id)
    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="News item not found")
    if user.role == UserRole.municipality and item.municipality_id != user.municipality_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Cannot delete this news item")
    db.delete(item)
    try:
        db.commit()
    except IntegrityError as exc:
        db.rollback()
        raise HTTPException(status_code=status.HTTP_409_CONFLICT, detail="لا يمكن حذف هذا المحتوى الآن.") from exc


@municipality_router.get("", response_model=list[NewsResponse])
def list_municipality_news(
    db: Session = Depends(get_db),
    user: User = Depends(require_roles(UserRole.municipality, UserRole.admin)),
) -> list[NewsItem]:
    query = select(NewsItem).order_by(NewsItem.created_at.desc())
    if user.role == UserRole.municipality:
        query = query.where(NewsItem.municipality_id == user.municipality_id)
    return list(db.scalars(query).all())
