from pydantic import BaseModel

from app.models.enums import InquiryStatus
from app.schemas.common import TimestampedResponse


class InquiryCreate(BaseModel):
    opportunity_id: int
    subject: str
    message: str


class InquiryReplyCreate(BaseModel):
    message: str


class InquiryReplyResponse(TimestampedResponse):
    inquiry_id: int
    sender_id: int
    message: str


class InquiryResponse(TimestampedResponse):
    investor_id: int
    opportunity_id: int
    subject: str
    message: str
    status: InquiryStatus
    replies: list[InquiryReplyResponse] = []
