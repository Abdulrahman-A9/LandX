from sqlalchemy import select

from app.db import Base, SessionLocal, engine
from app.models import (
    AnalysisReport,
    Inquiry,
    InquiryReply,
    InquiryStatus,
    InterestRequest,
    InterestRequestStatus,
    InvestmentAnalysis,
    Municipality,
    NewsItem,
    NewsType,
    Opportunity,
    OpportunityStatus,
    User,
    UserRole,
)
from app.services.analysis_service import build_analysis_report
from app.utils.security import hash_password


def get_or_create_user(db, *, email: str, defaults: dict) -> User:
    user = db.scalar(select(User).where(User.email == email))
    if user:
        return user

    user = User(email=email, **defaults)
    db.add(user)
    db.flush()
    return user


def get_or_create_municipality(db, *, name: str, defaults: dict) -> Municipality:
    municipality = db.scalar(select(Municipality).where(Municipality.name == name))
    if municipality:
        return municipality

    municipality = Municipality(name=name, **defaults)
    db.add(municipality)
    db.flush()
    return municipality


def get_or_create_opportunity(db, *, title: str, defaults: dict) -> Opportunity:
    opportunity = db.scalar(select(Opportunity).where(Opportunity.title == title))
    if opportunity:
        return opportunity

    opportunity = Opportunity(title=title, **defaults)
    db.add(opportunity)
    db.flush()
    return opportunity


def get_or_create_news(db, *, title: str, defaults: dict) -> NewsItem:
    item = db.scalar(select(NewsItem).where(NewsItem.title == title))
    if item:
        return item

    item = NewsItem(title=title, **defaults)
    db.add(item)
    db.flush()
    return item


def get_or_create_inquiry(db, *, investor_id: int, opportunity_id: int, subject: str, message: str, status=InquiryStatus.pending) -> Inquiry:
    inquiry = db.scalar(
        select(Inquiry).where(
            Inquiry.investor_id == investor_id,
            Inquiry.opportunity_id == opportunity_id,
            Inquiry.subject == subject,
        )
    )
    if inquiry:
        return inquiry

    inquiry = Inquiry(
        investor_id=investor_id,
        opportunity_id=opportunity_id,
        subject=subject,
        message=message,
        status=status,
    )
    db.add(inquiry)
    db.flush()
    return inquiry


def get_or_create_reply(db, *, inquiry_id: int, sender_id: int, message: str) -> InquiryReply:
    reply = db.scalar(
        select(InquiryReply).where(
            InquiryReply.inquiry_id == inquiry_id,
            InquiryReply.sender_id == sender_id,
            InquiryReply.message == message,
        )
    )
    if reply:
        return reply

    reply = InquiryReply(inquiry_id=inquiry_id, sender_id=sender_id, message=message)
    db.add(reply)
    db.flush()
    return reply


def get_or_create_interest_request(
    db,
    *,
    investor_id: int,
    opportunity_id: int,
    proposed_amount: float,
    notes: str,
    status: InterestRequestStatus,
) -> InterestRequest:
    request = db.scalar(
        select(InterestRequest).where(
            InterestRequest.investor_id == investor_id,
            InterestRequest.opportunity_id == opportunity_id,
            InterestRequest.notes == notes,
        )
    )
    if request:
        return request

    request = InterestRequest(
        investor_id=investor_id,
        opportunity_id=opportunity_id,
        proposed_amount=proposed_amount,
        notes=notes,
        status=status,
    )
    db.add(request)
    db.flush()
    return request


def get_or_create_analysis(
    db,
    *,
    owner_id: int,
    project_name: str,
    location: str,
    crop_type: str,
    area: float,
    setup_cost: float,
    operating_cost: float,
    estimated_revenue: float,
) -> InvestmentAnalysis:
    analysis = db.scalar(
        select(InvestmentAnalysis).where(
            InvestmentAnalysis.owner_id == owner_id,
            InvestmentAnalysis.project_name == project_name,
        )
    )
    if analysis:
        return analysis

    analysis = InvestmentAnalysis(
        owner_id=owner_id,
        project_name=project_name,
        location=location,
        crop_type=crop_type,
        area=area,
        setup_cost=setup_cost,
        operating_cost=operating_cost,
        estimated_revenue=estimated_revenue,
        status="generated",
    )
    db.add(analysis)
    db.flush()

    report = build_analysis_report(analysis)
    db.add(report)
    db.flush()
    return analysis


def seed() -> None:
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        hail = get_or_create_municipality(
            db,
            name="بلدية حائل",
            defaults={
                "region": "حائل",
                "description": "جهة محلية تدير طرح الفرص الزراعية والاستثمارية داخل مدينة حائل والمراكز التابعة لها.",
                "contact_email": "municipality@landx.sa",
                "contact_phone": "0550000000",
            },
        )
        qassim = get_or_create_municipality(
            db,
            name="بلدية القصيم",
            defaults={
                "region": "القصيم",
                "description": "جهة تركز على تفعيل الفرص الزراعية والغذائية وتحويل الأراضي والمرافق إلى فرص قابلة للتشغيل.",
                "contact_email": "qassim@landx.sa",
                "contact_phone": "0553333333",
            },
        )
        jouf = get_or_create_municipality(
            db,
            name="بلدية الجوف",
            defaults={
                "region": "الجوف",
                "description": "جهة محلية تدعم فرص النخيل والزيتون والخدمات الزراعية المساندة للمستثمرين.",
                "contact_email": "jouf@landx.sa",
                "contact_phone": "0554444444",
            },
        )

        admin = get_or_create_user(
            db,
            email="admin@landx.sa",
            defaults={
                "full_name": "مدير المنصة",
                "password_hash": hash_password("123456"),
                "role": UserRole.admin,
                "phone": "0500000000",
            },
        )
        municipality_user = get_or_create_user(
            db,
            email="municipality@landx.sa",
            defaults={
                "full_name": "مسؤول بلدية حائل",
                "password_hash": hash_password("123456"),
                "role": UserRole.municipality,
                "phone": "0551111111",
                "municipality_id": hail.id,
            },
        )
        investor = get_or_create_user(
            db,
            email="investor@landx.sa",
            defaults={
                "full_name": "المستثمر أحمد",
                "password_hash": hash_password("123456"),
                "role": UserRole.investor,
                "phone": "0562222222",
            },
        )
        second_investor = get_or_create_user(
            db,
            email="investor2@landx.sa",
            defaults={
                "full_name": "المستثمرة سارة",
                "password_hash": hash_password("123456"),
                "role": UserRole.investor,
                "phone": "0565555555",
            },
        )

        opportunities = [
            (
                "فرصة زراعة الزيتون المكثف",
                {
                    "description": "تطوير أرض زراعية متكاملة لإنتاج الزيتون وزيته مع خطة تشغيل مرحلية وتوسعة مستقبلية.",
                    "municipality_id": hail.id,
                    "location": "حائل - الغرب",
                    "season": "موسمي",
                    "area": 4200,
                    "area_unit": "متر مربع",
                    "expected_return": 18.5,
                    "investment_required": 250000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "مشتل محلي متكامل",
                {
                    "description": "إنشاء مشتل لإنتاج الشتلات وتوريدها للمزارع والمشاريع البلدية مع تشغيل سنوي مستقر.",
                    "municipality_id": hail.id,
                    "location": "حائل - الشمال",
                    "season": "طوال العام",
                    "area": 3100,
                    "area_unit": "متر مربع",
                    "expected_return": 14.0,
                    "investment_required": 180000,
                    "status": OpportunityStatus.pending,
                },
            ),
            (
                "سوق تمور وتجفيف تعبوي",
                {
                    "description": "تشغيل موقع مخصص لاستلام وفرز وتجفيف التمور مع خدمات تعبئة وتغليف موسمية وتجارية.",
                    "municipality_id": qassim.id,
                    "location": "القصيم - بريدة",
                    "season": "موسمي",
                    "area": 5600,
                    "area_unit": "متر مربع",
                    "expected_return": 21.0,
                    "investment_required": 420000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "مركز خدمات لوجستية زراعية",
                {
                    "description": "مركز تجميع وتبريد ونقل للمنتجات الزراعية لدعم المزارع الصغيرة والمتوسطة وتقليل الهدر.",
                    "municipality_id": qassim.id,
                    "location": "القصيم - عنيزة",
                    "season": "طوال العام",
                    "area": 6300,
                    "area_unit": "متر مربع",
                    "expected_return": 16.2,
                    "investment_required": 510000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "واحة زيتون تعليمية وسياحية",
                {
                    "description": "مشروع يجمع بين التشغيل الزراعي والزوار والخبرات التعليمية في بيئة استثمارية خفيفة التشغيل.",
                    "municipality_id": jouf.id,
                    "location": "الجوف - سكاكا",
                    "season": "طوال العام",
                    "area": 4700,
                    "area_unit": "متر مربع",
                    "expected_return": 15.7,
                    "investment_required": 295000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "محطة فرز وتغليف خضار",
                {
                    "description": "تشغيل محطة فرز وتغليف للمحاصيل المحلية لتحسين الجودة ورفع القيمة السوقية قبل التوزيع.",
                    "municipality_id": jouf.id,
                    "location": "الجوف - دومة الجندل",
                    "season": "طوال العام",
                    "area": 3800,
                    "area_unit": "متر مربع",
                    "expected_return": 13.4,
                    "investment_required": 230000,
                    "status": OpportunityStatus.pending,
                },
            ),
            (
                "مزرعة أعلاف ذكية",
                {
                    "description": "استثمار في زراعة الأعلاف بنظام ري حديث منخفض الاستهلاك مع فرص توريد ثابتة للمربين.",
                    "municipality_id": hail.id,
                    "location": "حائل - الجنوب",
                    "season": "طوال العام",
                    "area": 7100,
                    "area_unit": "متر مربع",
                    "expected_return": 17.3,
                    "investment_required": 390000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "موقع استزراع تجريبي مغلق",
                {
                    "description": "مشروع تجريبي للاستزراع المغلق يحتاج شريك تشغيل وخطة توسع قبل فتحه للاستثمار العام.",
                    "municipality_id": qassim.id,
                    "location": "القصيم - البكيرية",
                    "season": "طوال العام",
                    "area": 2500,
                    "area_unit": "متر مربع",
                    "expected_return": 10.8,
                    "investment_required": 150000,
                    "status": OpportunityStatus.draft,
                },
            ),
        ]

        created_opportunities = {
            title: get_or_create_opportunity(db, title=title, defaults=defaults)
            for title, defaults in opportunities
        }

        news_items = [
            (
                "إطلاق دفعة جديدة من الفرص الزراعية",
                {
                    "content": "تم فتح استقبال الطلبات لعدد من الفرص الزراعية والاستثمارية ضمن البلديات المشاركة في المنصة.",
                    "type": NewsType.announcement,
                    "priority": "high",
                    "municipality_id": hail.id,
                },
            ),
            (
                "تحديث اشتراطات التقديم للمستثمرين",
                {
                    "content": "جرى تبسيط متطلبات التقديم الأولي لتقليل وقت المراجعة وتمكين المستثمر من الوصول إلى القرار بسرعة.",
                    "type": NewsType.news,
                    "priority": "medium",
                    "municipality_id": hail.id,
                },
            ),
            (
                "بلدية القصيم تعلن فرص تشغيل لوجستي جديدة",
                {
                    "content": "تمت إضافة مشاريع داعمة لسلسلة الإمداد الزراعي مع فرص للشركات المتخصصة في التبريد والنقل.",
                    "type": NewsType.announcement,
                    "priority": "high",
                    "municipality_id": qassim.id,
                },
            ),
            (
                "توسيع نطاق المبادرات الزراعية في الجوف",
                {
                    "content": "تم إدراج فرص تستهدف الزيتون والتغليف والخدمات المساندة ضمن خطة تنموية متدرجة.",
                    "type": NewsType.news,
                    "priority": "medium",
                    "municipality_id": jouf.id,
                },
            ),
            (
                "رفع جاهزية التراخيص الأولية للمشاريع الصغيرة",
                {
                    "content": "تعمل الجهات الشريكة على تسريع مسار الاعتماد الأولي للمشاريع الزراعية ذات الأثر المحلي.",
                    "type": NewsType.news,
                    "priority": "medium",
                    "municipality_id": qassim.id,
                },
            ),
        ]
        for title, defaults in news_items:
            get_or_create_news(db, title=title, defaults=defaults)

        inquiry_1 = get_or_create_inquiry(
            db,
            investor_id=investor.id,
            opportunity_id=created_opportunities["فرصة زراعة الزيتون المكثف"].id,
            subject="الجدول الزمني للتنفيذ",
            message="هل يوجد جدول زمني متوقع لتسليم الموقع وبدء التنفيذ؟",
            status=InquiryStatus.answered,
        )
        inquiry_2 = get_or_create_inquiry(
            db,
            investor_id=investor.id,
            opportunity_id=created_opportunities["سوق تمور وتجفيف تعبوي"].id,
            subject="آلية التشغيل الموسمي",
            message="هل التشغيل سيكون بعقود موسمية فقط أم يوجد حد أدنى للتشغيل السنوي؟",
            status=InquiryStatus.pending,
        )
        inquiry_3 = get_or_create_inquiry(
            db,
            investor_id=second_investor.id,
            opportunity_id=created_opportunities["واحة زيتون تعليمية وسياحية"].id,
            subject="الزيارات والخدمات المساندة",
            message="هل يشمل المشروع مسارات سياحية أو فقط تشغيل زراعي؟",
            status=InquiryStatus.answered,
        )

        get_or_create_reply(
            db,
            inquiry_id=inquiry_1.id,
            sender_id=municipality_user.id,
            message="الجدول المبدئي يستهدف التسليم خلال 60 يومًا من اكتمال المستندات الأولية.",
        )
        get_or_create_reply(
            db,
            inquiry_id=inquiry_3.id,
            sender_id=municipality_user.id,
            message="المشروع يقبل التوسع السياحي ضمن ضوابط تشغيل محددة ويمكن مناقشة ذلك في مرحلة التعاقد.",
        )

        get_or_create_interest_request(
            db,
            investor_id=investor.id,
            opportunity_id=created_opportunities["فرصة زراعة الزيتون المكثف"].id,
            proposed_amount=260000,
            notes="مهتم بالدخول في شراكة تشغيلية مع خطة توسع على مرحلتين.",
            status=InterestRequestStatus.under_review,
        )
        get_or_create_interest_request(
            db,
            investor_id=investor.id,
            opportunity_id=created_opportunities["مركز خدمات لوجستية زراعية"].id,
            proposed_amount=525000,
            notes="أرغب في معرفة فرص التوسع اللوجستي والعقود المتوقعة مع الموردين.",
            status=InterestRequestStatus.submitted,
        )
        get_or_create_interest_request(
            db,
            investor_id=second_investor.id,
            opportunity_id=created_opportunities["واحة زيتون تعليمية وسياحية"].id,
            proposed_amount=310000,
            notes="المشروع مناسب لمستثمر فردي مع شريك تشغيلي، وأرغب في بدء دراسة تفصيلية.",
            status=InterestRequestStatus.approved,
        )

        get_or_create_analysis(
            db,
            owner_id=investor.id,
            project_name="مزرعة زيتون متوسطة",
            location="حائل",
            crop_type="زيتون",
            area=5000,
            setup_cost=180000,
            operating_cost=90000,
            estimated_revenue=390000,
        )
        get_or_create_analysis(
            db,
            owner_id=investor.id,
            project_name="مركز تعبئة تمور",
            location="القصيم",
            crop_type="تمور",
            area=2800,
            setup_cost=240000,
            operating_cost=110000,
            estimated_revenue=520000,
        )
        get_or_create_analysis(
            db,
            owner_id=second_investor.id,
            project_name="واحة تجربة زراعية",
            location="الجوف",
            crop_type="زيتون وسياحة زراعية",
            area=3600,
            setup_cost=210000,
            operating_cost=95000,
            estimated_revenue=430000,
        )

        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    seed()
