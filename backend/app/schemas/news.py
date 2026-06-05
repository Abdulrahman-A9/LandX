from pydantic import BaseModel

from app.models.enums import NewsType
from app.schemas.common import TimestampedResponse


class NewsCreate(BaseModel):
    title: str
    content: str
    type: NewsType = NewsType.news
    priority: str | None = None
    is_published: bool = True
    municipality_id: int | None = None


class NewsResponse(TimestampedResponse):
    title: str
    content: str
    type: NewsType
    priority: str | None = None
    is_published: bool
    municipality_id: int | None = None
