from sqlalchemy import select

from app.db import Base, SessionLocal, engine
from app.models import (
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


def get_or_create_inquiry(
    db,
    *,
    investor_id: int,
    opportunity_id: int,
    subject: str,
    message: str,
    status: InquiryStatus = InquiryStatus.pending,
) -> Inquiry:
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
        municipalities = {
            "hail": get_or_create_municipality(
                db,
                name="بلدية حائل",
                defaults={
                    "region": "حائل",
                    "description": "جهة محلية تدير الفرص الزراعية والغذائية وتطرح مشاريع جاهزة للتشغيل أمام المستثمرين.",
                    "contact_email": "municipality@landx.sa",
                    "contact_phone": "0550000000",
                },
            ),
            "qassim": get_or_create_municipality(
                db,
                name="بلدية القصيم",
                defaults={
                    "region": "القصيم",
                    "description": "تركز على تنشيط سلاسل الإمداد الزراعي وربط المنتج المحلي بفرص تشغيل قابلة للنمو.",
                    "contact_email": "qassim@landx.sa",
                    "contact_phone": "0553333333",
                },
            ),
            "jouf": get_or_create_municipality(
                db,
                name="بلدية الجوف",
                defaults={
                    "region": "الجوف",
                    "description": "تدعم فرص الزيتون والتمور والخدمات المساندة، مع تركيز على القيمة المضافة للمحاصيل.",
                    "contact_email": "jouf@landx.sa",
                    "contact_phone": "0554444444",
                },
            ),
            "tabuk": get_or_create_municipality(
                db,
                name="بلدية تبوك",
                defaults={
                    "region": "تبوك",
                    "description": "تعمل على تفعيل الفرص الزراعية الحديثة في البيئات الواعدة وربطها بمشغلين مؤهلين.",
                    "contact_email": "tabuk@landx.sa",
                    "contact_phone": "0556666666",
                },
            ),
        }

        users = {
            "admin": get_or_create_user(
                db,
                email="admin@landx.sa",
                defaults={
                    "full_name": "مدير المنصة",
                    "password_hash": hash_password("123456"),
                    "role": UserRole.admin,
                    "phone": "0500000000",
                },
            ),
            "municipality_hail": get_or_create_user(
                db,
                email="municipality@landx.sa",
                defaults={
                    "full_name": "مسؤول بلدية حائل",
                    "password_hash": hash_password("123456"),
                    "role": UserRole.municipality,
                    "phone": "0551111111",
                    "municipality_id": municipalities["hail"].id,
                },
            ),
            "investor_ahmed": get_or_create_user(
                db,
                email="investor@landx.sa",
                defaults={
                    "full_name": "المستثمر أحمد",
                    "password_hash": hash_password("123456"),
                    "role": UserRole.investor,
                    "phone": "0562222222",
                },
            ),
            "investor_sara": get_or_create_user(
                db,
                email="investor2@landx.sa",
                defaults={
                    "full_name": "المستثمرة سارة",
                    "password_hash": hash_password("123456"),
                    "role": UserRole.investor,
                    "phone": "0565555555",
                },
            ),
            "investor_majed": get_or_create_user(
                db,
                email="investor3@landx.sa",
                defaults={
                    "full_name": "المستثمر ماجد",
                    "password_hash": hash_password("123456"),
                    "role": UserRole.investor,
                    "phone": "0567777777",
                },
            ),
        }

        opportunities = [
            (
                "فرصة زراعة الزيتون المكثف",
                {
                    "description": "تطوير أرض زراعية متكاملة لإنتاج الزيتون وزيته مع خطة تشغيل مرحلية وتوسعة مستقبلية.",
                    "municipality_id": municipalities["hail"].id,
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
                    "municipality_id": municipalities["hail"].id,
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
                "مزرعة أعلاف ذكية",
                {
                    "description": "استثمار في زراعة الأعلاف بنظام ري حديث منخفض الاستهلاك مع فرص توريد ثابتة للمربين.",
                    "municipality_id": municipalities["hail"].id,
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
                "حاضنة منتجات ريفية",
                {
                    "description": "موقع تشغيلي صغير لتجهيز منتجات الأسر الريفية ورفع جاهزيتها للتوزيع المحلي والبيع المنظم.",
                    "municipality_id": municipalities["hail"].id,
                    "location": "حائل - وسط المدينة",
                    "season": "طوال العام",
                    "area": 2200,
                    "area_unit": "متر مربع",
                    "expected_return": 12.8,
                    "investment_required": 145000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "سوق تمور وتجفيف تعبوي",
                {
                    "description": "تشغيل موقع مخصص لاستلام وفرز وتجفيف التمور مع خدمات تعبئة وتغليف موسمية وتجارية.",
                    "municipality_id": municipalities["qassim"].id,
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
                    "municipality_id": municipalities["qassim"].id,
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
                "محطة تعبئة وتغليف تمور فاخرة",
                {
                    "description": "منشأة متخصصة لتجهيز التمور عالية الجودة للتوزيع التجاري والهدايا والأسواق الموسمية.",
                    "municipality_id": municipalities["qassim"].id,
                    "location": "القصيم - الرس",
                    "season": "موسمي",
                    "area": 3400,
                    "area_unit": "متر مربع",
                    "expected_return": 19.4,
                    "investment_required": 275000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "موقع استزراع تجريبي مغلق",
                {
                    "description": "مشروع تجريبي للاستزراع المغلق يحتاج شريك تشغيل وخطة توسع قبل فتحه للاستثمار العام.",
                    "municipality_id": municipalities["qassim"].id,
                    "location": "القصيم - البكيرية",
                    "season": "طوال العام",
                    "area": 2500,
                    "area_unit": "متر مربع",
                    "expected_return": 10.8,
                    "investment_required": 150000,
                    "status": OpportunityStatus.draft,
                },
            ),
            (
                "واحة زيتون تعليمية وسياحية",
                {
                    "description": "مشروع يجمع بين التشغيل الزراعي والزوار والخبرات التعليمية في بيئة استثمارية خفيفة التشغيل.",
                    "municipality_id": municipalities["jouf"].id,
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
                    "municipality_id": municipalities["jouf"].id,
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
                "مركز تجربة وتسويق زيت الزيتون",
                {
                    "description": "مساحة تعرض المنتجات المحلية وتربط البيع بالتجربة والتذوق مع تشغيل إداري وتجاري مرن.",
                    "municipality_id": municipalities["jouf"].id,
                    "location": "الجوف - القريات",
                    "season": "طوال العام",
                    "area": 2900,
                    "area_unit": "متر مربع",
                    "expected_return": 14.9,
                    "investment_required": 210000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "مزرعة بيوت محمية ذكية",
                {
                    "description": "فرصة لتشغيل بيوت محمية بإدارة رقمية وترشيد استهلاك المياه مع إنتاج دوري للمحاصيل عالية الطلب.",
                    "municipality_id": municipalities["tabuk"].id,
                    "location": "تبوك - ضباء",
                    "season": "طوال العام",
                    "area": 5200,
                    "area_unit": "متر مربع",
                    "expected_return": 20.1,
                    "investment_required": 470000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "مركز تجميع وفرز منتجات عضوية",
                {
                    "description": "نقطة تجميع ومنصة تجهيز أولية للمنتجات العضوية مع ربط مباشر بالمنافذ والأسواق المتخصصة.",
                    "municipality_id": municipalities["tabuk"].id,
                    "location": "تبوك - تيماء",
                    "season": "طوال العام",
                    "area": 3600,
                    "area_unit": "متر مربع",
                    "expected_return": 16.8,
                    "investment_required": 255000,
                    "status": OpportunityStatus.active,
                },
            ),
            (
                "حديقة زراعية تعليمية للأطفال",
                {
                    "description": "مشروع مجتمعي ترفيهي تعليمي يدمج الزراعة المصغرة بالورش والفعاليات الموسمية.",
                    "municipality_id": municipalities["tabuk"].id,
                    "location": "تبوك - المدينة",
                    "season": "طوال العام",
                    "area": 2600,
                    "area_unit": "متر مربع",
                    "expected_return": 11.6,
                    "investment_required": 165000,
                    "status": OpportunityStatus.closed,
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
                    "content": "تم فتح استقبال الطلبات لعدد جديد من الفرص الزراعية والاستثمارية ضمن البلديات المشاركة في المنصة.",
                    "type": NewsType.announcement,
                    "priority": "high",
                    "municipality_id": municipalities["hail"].id,
                },
            ),
            (
                "تحديث اشتراطات التقديم للمستثمرين",
                {
                    "content": "جرى تبسيط متطلبات التقديم الأولي لتقليل وقت المراجعة وتمكين المستثمر من الوصول إلى القرار بسرعة.",
                    "type": NewsType.news,
                    "priority": "medium",
                    "municipality_id": municipalities["hail"].id,
                },
            ),
            (
                "بلدية القصيم تعلن فرص تشغيل لوجستي جديدة",
                {
                    "content": "تمت إضافة مشاريع داعمة لسلسلة الإمداد الزراعي مع فرص للشركات المتخصصة في التبريد والنقل.",
                    "type": NewsType.announcement,
                    "priority": "high",
                    "municipality_id": municipalities["qassim"].id,
                },
            ),
            (
                "توسيع نطاق المبادرات الزراعية في الجوف",
                {
                    "content": "تم إدراج فرص تستهدف الزيتون والتغليف والخدمات المساندة ضمن خطة تنموية متدرجة.",
                    "type": NewsType.news,
                    "priority": "medium",
                    "municipality_id": municipalities["jouf"].id,
                },
            ),
            (
                "رفع جاهزية التراخيص الأولية للمشاريع الصغيرة",
                {
                    "content": "تعمل الجهات الشريكة على تسريع مسار الاعتماد الأولي للمشاريع الزراعية ذات الأثر المحلي.",
                    "type": NewsType.news,
                    "priority": "medium",
                    "municipality_id": municipalities["qassim"].id,
                },
            ),
            (
                "طرح فرص جديدة في تبوك للبيوت المحمية",
                {
                    "content": "أضيفت مواقع جاهزة للتشغيل الزراعي الحديث مع بنية تحتية أولية ومسارات متابعة تشغيلية واضحة.",
                    "type": NewsType.announcement,
                    "priority": "high",
                    "municipality_id": municipalities["tabuk"].id,
                },
            ),
            (
                "المنصة تسجل تزايداً في طلبات الاهتمام",
                {
                    "content": "شهدت المنصة ارتفاعاً في استفسارات المستثمرين وطلبات دراسة الفرص ذات العائد المتوسط والمستقر.",
                    "type": NewsType.news,
                    "priority": "medium",
                    "municipality_id": municipalities["hail"].id,
                },
            ),
            (
                "اعتماد مسار متابعة أوضح بين المستثمر والبلدية",
                {
                    "content": "تم توحيد دورة متابعة الاستفسارات والطلبات بما يسهل عرض حالة كل طلب بشكل مباشر وواضح.",
                    "type": NewsType.news,
                    "priority": "low",
                    "municipality_id": municipalities["jouf"].id,
                },
            ),
        ]
        for title, defaults in news_items:
            get_or_create_news(db, title=title, defaults=defaults)

        inquiries = [
            (
                "investor_ahmed",
                "فرصة زراعة الزيتون المكثف",
                "الجدول الزمني للتنفيذ",
                "هل يوجد جدول زمني متوقع لتسليم الموقع وبدء التنفيذ؟",
                InquiryStatus.answered,
            ),
            (
                "investor_ahmed",
                "سوق تمور وتجفيف تعبوي",
                "آلية التشغيل الموسمي",
                "هل التشغيل سيكون بعقود موسمية فقط أم يوجد حد أدنى للتشغيل السنوي؟",
                InquiryStatus.pending,
            ),
            (
                "investor_sara",
                "واحة زيتون تعليمية وسياحية",
                "الزيارات والخدمات المساندة",
                "هل يشمل المشروع مسارات سياحية أو فقط تشغيل زراعي؟",
                InquiryStatus.answered,
            ),
            (
                "investor_majed",
                "مزرعة بيوت محمية ذكية",
                "التجهيزات الحالية للموقع",
                "هل البنية التحتية للري والتحكم المناخي جاهزة أم ضمن نطاق المستثمر؟",
                InquiryStatus.answered,
            ),
            (
                "investor_sara",
                "مركز خدمات لوجستية زراعية",
                "طبيعة العقود المتوقعة",
                "هل توجد مؤشرات أولية على حجم الموردين أو عقود التشغيل السنوية؟",
                InquiryStatus.pending,
            ),
            (
                "investor_ahmed",
                "حاضنة منتجات ريفية",
                "عدد الوحدات التشغيلية",
                "كم عدد الوحدات أو الورش الممكن تشغيلها داخل الموقع بشكل متزامن؟",
                InquiryStatus.closed,
            ),
        ]

        created_inquiries = {}
        for investor_key, opportunity_title, subject, message, status in inquiries:
            inquiry = get_or_create_inquiry(
                db,
                investor_id=users[investor_key].id,
                opportunity_id=created_opportunities[opportunity_title].id,
                subject=subject,
                message=message,
                status=status,
            )
            created_inquiries[(investor_key, opportunity_title, subject)] = inquiry

        replies = [
            (
                ("investor_ahmed", "فرصة زراعة الزيتون المكثف", "الجدول الزمني للتنفيذ"),
                "municipality_hail",
                "الجدول المبدئي يستهدف التسليم خلال 60 يوماً من اكتمال المستندات الأولية.",
            ),
            (
                ("investor_sara", "واحة زيتون تعليمية وسياحية", "الزيارات والخدمات المساندة"),
                "admin",
                "المشروع يقبل التوسع السياحي ضمن ضوابط تشغيل محددة ويمكن مناقشة ذلك في مرحلة التعاقد.",
            ),
            (
                ("investor_majed", "مزرعة بيوت محمية ذكية", "التجهيزات الحالية للموقع"),
                "admin",
                "الموقع يحتوي على تجهيزات أولية، بينما أنظمة التحكم التفصيلية ضمن خطة المستثمر التشغيلية.",
            ),
            (
                ("investor_ahmed", "حاضنة منتجات ريفية", "عدد الوحدات التشغيلية"),
                "municipality_hail",
                "التصور الحالي يستوعب أربع وحدات تشغيلية مستقلة مع مساحة مرنة للخدمات المشتركة.",
            ),
        ]
        for inquiry_key, sender_key, message in replies:
            get_or_create_reply(
                db,
                inquiry_id=created_inquiries[inquiry_key].id,
                sender_id=users[sender_key].id,
                message=message,
            )

        interest_requests = [
            (
                "investor_ahmed",
                "فرصة زراعة الزيتون المكثف",
                260000,
                "مهتم بالدخول في شراكة تشغيلية مع خطة توسع على مرحلتين.",
                InterestRequestStatus.under_review,
            ),
            (
                "investor_ahmed",
                "مركز خدمات لوجستية زراعية",
                525000,
                "أرغب في معرفة فرص التوسع اللوجستي والعقود المتوقعة مع الموردين.",
                InterestRequestStatus.submitted,
            ),
            (
                "investor_sara",
                "واحة زيتون تعليمية وسياحية",
                310000,
                "المشروع مناسب لمستثمر فردي مع شريك تشغيلي، وأرغب في بدء دراسة تفصيلية.",
                InterestRequestStatus.approved,
            ),
            (
                "investor_majed",
                "مزرعة بيوت محمية ذكية",
                490000,
                "أفضل نموذج تشغيل بعقد متوسط المدى مع توسع في المرحلة الثانية.",
                InterestRequestStatus.under_review,
            ),
            (
                "investor_sara",
                "محطة تعبئة وتغليف تمور فاخرة",
                290000,
                "أبحث عن فرصة بعائد موسمي مرتفع مع إمكانية بناء علامة خاصة لاحقاً.",
                InterestRequestStatus.submitted,
            ),
            (
                "investor_ahmed",
                "مركز تجربة وتسويق زيت الزيتون",
                225000,
                "الفرصة مناسبة لعلامة تجارية ناشئة مع نموذج بيع مباشر وتجربة زوار.",
                InterestRequestStatus.approved,
            ),
            (
                "investor_majed",
                "مركز تجميع وفرز منتجات عضوية",
                270000,
                "مهتم بربط المشروع بمسار بيع بالجملة والتعاقد مع منافذ متخصصة.",
                InterestRequestStatus.rejected,
            ),
        ]
        for investor_key, opportunity_title, amount, notes, status in interest_requests:
            get_or_create_interest_request(
                db,
                investor_id=users[investor_key].id,
                opportunity_id=created_opportunities[opportunity_title].id,
                proposed_amount=amount,
                notes=notes,
                status=status,
            )

        analyses = [
            ("investor_ahmed", "مزرعة زيتون متوسطة", "حائل", "زيتون", 5000, 180000, 90000, 390000),
            ("investor_ahmed", "مركز تعبئة تمور", "القصيم", "تمور", 2800, 240000, 110000, 520000),
            ("investor_sara", "واحة تجربة زراعية", "الجوف", "زيتون وسياحة زراعية", 3600, 210000, 95000, 430000),
            ("investor_majed", "بيوت محمية خضروات عالية القيمة", "تبوك", "خضروات محمية", 4100, 320000, 130000, 610000),
            ("investor_sara", "مركز فرز عضوي", "تبوك", "منتجات عضوية", 3000, 195000, 85000, 380000),
        ]
        for owner_key, project_name, location, crop_type, area, setup_cost, operating_cost, estimated_revenue in analyses:
            get_or_create_analysis(
                db,
                owner_id=users[owner_key].id,
                project_name=project_name,
                location=location,
                crop_type=crop_type,
                area=area,
                setup_cost=setup_cost,
                operating_cost=operating_cost,
                estimated_revenue=estimated_revenue,
            )

        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    seed()
