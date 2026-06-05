from datetime import datetime

from sqlalchemy import Boolean, DateTime, Enum, Float, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db import Base
from app.models.enums import InquiryStatus, InterestRequestStatus, NewsType, OpportunityStatus, UserRole


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    full_name: Mapped[str] = mapped_column(String(150))
    email: Mapped[str] = mapped_column(String(150), unique=True, index=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    role: Mapped[UserRole] = mapped_column(Enum(UserRole), index=True)
    phone: Mapped[str | None] = mapped_column(String(50), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    municipality_id: Mapped[int | None] = mapped_column(ForeignKey("municipalities.id"), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    municipality: Mapped["Municipality | None"] = relationship(back_populates="users")
    inquiries: Mapped[list["Inquiry"]] = relationship(back_populates="investor", foreign_keys="Inquiry.investor_id")
    inquiry_replies: Mapped[list["InquiryReply"]] = relationship(back_populates="sender")
    interest_requests: Mapped[list["InterestRequest"]] = relationship(back_populates="investor")
    analyses: Mapped[list["InvestmentAnalysis"]] = relationship(back_populates="owner")


class Municipality(Base):
    __tablename__ = "municipalities"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    name: Mapped[str] = mapped_column(String(150), unique=True)
    region: Mapped[str] = mapped_column(String(120))
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    contact_email: Mapped[str | None] = mapped_column(String(150), nullable=True)
    contact_phone: Mapped[str | None] = mapped_column(String(50), nullable=True)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    users: Mapped[list[User]] = relationship(back_populates="municipality")
    opportunities: Mapped[list["Opportunity"]] = relationship(back_populates="municipality")
    news_items: Mapped[list["NewsItem"]] = relationship(back_populates="municipality")


class Opportunity(Base):
    __tablename__ = "opportunities"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(200), index=True)
    description: Mapped[str] = mapped_column(Text)
    municipality_id: Mapped[int] = mapped_column(ForeignKey("municipalities.id"))
    location: Mapped[str] = mapped_column(String(150))
    season: Mapped[str | None] = mapped_column(String(100), nullable=True)
    area: Mapped[float | None] = mapped_column(Float, nullable=True)
    area_unit: Mapped[str | None] = mapped_column(String(50), nullable=True)
    expected_return: Mapped[float | None] = mapped_column(Float, nullable=True)
    investment_required: Mapped[float | None] = mapped_column(Float, nullable=True)
    status: Mapped[OpportunityStatus] = mapped_column(Enum(OpportunityStatus), default=OpportunityStatus.pending, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    municipality: Mapped[Municipality] = relationship(back_populates="opportunities")
    images: Mapped[list["OpportunityImage"]] = relationship(back_populates="opportunity", cascade="all, delete-orphan")
    inquiries: Mapped[list["Inquiry"]] = relationship(back_populates="opportunity")
    interest_requests: Mapped[list["InterestRequest"]] = relationship(back_populates="opportunity")


class OpportunityImage(Base):
    __tablename__ = "opportunity_images"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    opportunity_id: Mapped[int] = mapped_column(ForeignKey("opportunities.id"))
    file_name: Mapped[str] = mapped_column(String(255))
    file_path: Mapped[str] = mapped_column(String(500))
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    opportunity: Mapped[Opportunity] = relationship(back_populates="images")


class NewsItem(Base):
    __tablename__ = "news_items"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str] = mapped_column(String(200))
    content: Mapped[str] = mapped_column(Text)
    type: Mapped[NewsType] = mapped_column(Enum(NewsType), default=NewsType.news, index=True)
    priority: Mapped[str | None] = mapped_column(String(50), nullable=True)
    is_published: Mapped[bool] = mapped_column(Boolean, default=True)
    municipality_id: Mapped[int | None] = mapped_column(ForeignKey("municipalities.id"), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    municipality: Mapped["Municipality | None"] = relationship(back_populates="news_items")


class Inquiry(Base):
    __tablename__ = "inquiries"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    investor_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    opportunity_id: Mapped[int] = mapped_column(ForeignKey("opportunities.id"))
    subject: Mapped[str] = mapped_column(String(200))
    message: Mapped[str] = mapped_column(Text)
    status: Mapped[InquiryStatus] = mapped_column(Enum(InquiryStatus), default=InquiryStatus.pending, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    investor: Mapped[User] = relationship(back_populates="inquiries", foreign_keys=[investor_id])
    opportunity: Mapped[Opportunity] = relationship(back_populates="inquiries")
    replies: Mapped[list["InquiryReply"]] = relationship(back_populates="inquiry", cascade="all, delete-orphan")


class InquiryReply(Base):
    __tablename__ = "inquiry_replies"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    inquiry_id: Mapped[int] = mapped_column(ForeignKey("inquiries.id"))
    sender_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    message: Mapped[str] = mapped_column(Text)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    inquiry: Mapped[Inquiry] = relationship(back_populates="replies")
    sender: Mapped[User] = relationship(back_populates="inquiry_replies")


class InterestRequest(Base):
    __tablename__ = "interest_requests"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    investor_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    opportunity_id: Mapped[int] = mapped_column(ForeignKey("opportunities.id"))
    proposed_amount: Mapped[float | None] = mapped_column(Float, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    status: Mapped[InterestRequestStatus] = mapped_column(Enum(InterestRequestStatus), default=InterestRequestStatus.submitted, index=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    investor: Mapped[User] = relationship(back_populates="interest_requests")
    opportunity: Mapped[Opportunity] = relationship(back_populates="interest_requests")


class InvestmentAnalysis(Base):
    __tablename__ = "investment_analyses"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    owner_id: Mapped[int | None] = mapped_column(ForeignKey("users.id"), nullable=True)
    project_name: Mapped[str] = mapped_column(String(200))
    location: Mapped[str] = mapped_column(String(150))
    crop_type: Mapped[str | None] = mapped_column(String(150), nullable=True)
    area: Mapped[float | None] = mapped_column(Float, nullable=True)
    setup_cost: Mapped[float | None] = mapped_column(Float, nullable=True)
    operating_cost: Mapped[float | None] = mapped_column(Float, nullable=True)
    estimated_revenue: Mapped[float | None] = mapped_column(Float, nullable=True)
    status: Mapped[str] = mapped_column(String(50), default="generated")
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    owner: Mapped["User | None"] = relationship(back_populates="analyses")
    reports: Mapped[list["AnalysisReport"]] = relationship(back_populates="analysis", cascade="all, delete-orphan")


class AnalysisReport(Base):
    __tablename__ = "analysis_reports"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    analysis_id: Mapped[int] = mapped_column(ForeignKey("investment_analyses.id"))
    report_number: Mapped[str] = mapped_column(String(50), unique=True)
    summary: Mapped[str] = mapped_column(Text)
    roi_percentage: Mapped[float | None] = mapped_column(Float, nullable=True)
    payback_months: Mapped[float | None] = mapped_column(Float, nullable=True)
    notes: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

    analysis: Mapped[InvestmentAnalysis] = relationship(back_populates="reports")
