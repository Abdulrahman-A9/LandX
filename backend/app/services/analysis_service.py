from datetime import datetime

from app.models import AnalysisReport, InvestmentAnalysis


def build_analysis_report(analysis: InvestmentAnalysis) -> AnalysisReport:
    total_cost = (analysis.setup_cost or 0) + (analysis.operating_cost or 0)
    estimated_revenue = analysis.estimated_revenue or 0
    profit = estimated_revenue - total_cost
    roi = (profit / total_cost * 100) if total_cost > 0 else None
    payback = (total_cost / estimated_revenue * 12) if estimated_revenue > 0 else None
    report_number = f"AN-{analysis.id}-{datetime.utcnow().strftime('%Y%m%d%H%M%S')}"
    summary = (
        f"Project {analysis.project_name} in {analysis.location} has an estimated revenue of "
        f"{estimated_revenue:.2f} against total costs of {total_cost:.2f}."
    )

    return AnalysisReport(
        analysis=analysis,
        report_number=report_number,
        summary=summary,
        roi_percentage=roi,
        payback_months=payback,
        notes="Auto-generated feasibility snapshot for LandX demo.",
    )
