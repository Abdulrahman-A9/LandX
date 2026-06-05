import enum


class UserRole(str, enum.Enum):
    admin = "admin"
    municipality = "municipality"
    investor = "investor"


class OpportunityStatus(str, enum.Enum):
    draft = "draft"
    pending = "pending"
    active = "active"
    closed = "closed"
    rejected = "rejected"


class InquiryStatus(str, enum.Enum):
    pending = "pending"
    answered = "answered"
    closed = "closed"


class InterestRequestStatus(str, enum.Enum):
    submitted = "submitted"
    under_review = "under_review"
    approved = "approved"
    rejected = "rejected"


class NewsType(str, enum.Enum):
    news = "news"
    announcement = "announcement"
