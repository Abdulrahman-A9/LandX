from sqlalchemy import select

from app.db import Base, SessionLocal, engine
from app.models import Inquiry, InterestRequest, Municipality, NewsItem, NewsType, Opportunity, OpportunityStatus, User, UserRole
from app.utils.security import hash_password


def seed() -> None:
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        if db.scalar(select(User).limit(1)):
            return

        municipality = Municipality(
            name="بلدية حائل",
            region="حائل",
            description="جهة محلية تدير طرح الفرص الزراعية والاستثمارية.",
            contact_email="municipality@landx.sa",
            contact_phone="0550000000",
        )
        db.add(municipality)
        db.flush()

        admin = User(
            full_name="مدير المنصة",
            email="admin@landx.sa",
            password_hash=hash_password("123456"),
            role=UserRole.admin,
            phone="0500000000",
        )
        municipality_user = User(
            full_name="مسؤول البلدية",
            email="municipality@landx.sa",
            password_hash=hash_password("123456"),
            role=UserRole.municipality,
            phone="0551111111",
            municipality_id=municipality.id,
        )
        investor = User(
            full_name="المستثمر أحمد",
            email="investor@landx.sa",
            password_hash=hash_password("123456"),
            role=UserRole.investor,
            phone="0562222222",
        )
        db.add_all([admin, municipality_user, investor])
        db.flush()

        opportunity_1 = Opportunity(
            title="فرصة زراعة الزيتون",
            description="تطوير أرض زراعية متكاملة مخصصة لإنتاج الزيتون ومنتجاته.",
            municipality_id=municipality.id,
            location="حائل - الغرب",
            season="موسمي",
            area=4200,
            area_unit="متر مربع",
            expected_return=18.5,
            investment_required=250000,
            status=OpportunityStatus.active,
        )
        opportunity_2 = Opportunity(
            title="مشتل محلي متكامل",
            description="إنشاء مشتل لإنتاج الشتلات وتوريدها للمزارع والمشاريع البلدية.",
            municipality_id=municipality.id,
            location="حائل - الشمال",
            season="طوال العام",
            area=3100,
            area_unit="متر مربع",
            expected_return=14.0,
            investment_required=180000,
            status=OpportunityStatus.pending,
        )
        db.add_all([opportunity_1, opportunity_2])
        db.flush()

        db.add_all(
            [
                NewsItem(
                    title="إطلاق دورة جديدة من الفرص الزراعية",
                    content="تم فتح استقبال الطلبات لعدد من الفرص الزراعية داخل النطاق البلدي.",
                    type=NewsType.announcement,
                    priority="high",
                    municipality_id=municipality.id,
                ),
                NewsItem(
                    title="تحديث اشتراطات التقديم",
                    content="تم تحديث بعض المتطلبات التنظيمية لتسريع إجراءات دراسة الطلبات.",
                    type=NewsType.news,
                    priority="medium",
                    municipality_id=municipality.id,
                ),
            ]
        )

        inquiry = Inquiry(
            investor_id=investor.id,
            opportunity_id=opportunity_1.id,
            subject="الجدول الزمني للتنفيذ",
            message="هل يوجد جدول زمني متوقع لتسليم الموقع وبدء التنفيذ؟",
        )
        interest = InterestRequest(
            investor_id=investor.id,
            opportunity_id=opportunity_1.id,
            proposed_amount=260000,
            notes="مهتم بالدخول في شراكة تشغيلية مع خطة توسع على مرحلتين.",
        )
        db.add_all([inquiry, interest])
        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    seed()
