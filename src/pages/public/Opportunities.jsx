import React, { useMemo, useState } from 'react';
import AnimatedSection from '../../components/shared/AnimatedSection';
import OpportunityCard from '../../components/shared/OpportunityCard';
import PageHero from '../../components/shared/PageHero';
import Card from '../../components/ui/Card';
import { FilterIcon, LeafIcon, SearchIcon } from '../../components/ui/Icons';
import { mockOpportunities } from '../../data/mock/opportunities';

const seasons = [
  { value: 'all', label: 'جميع المواسم' },
  { value: 'winter', label: 'شتوي' },
  { value: 'spring', label: 'ربيعي' },
  { value: 'summer', label: 'صيفي' },
  { value: 'autumn', label: 'خريفي' },
];

const municipalities = ['الكل', ...new Set(mockOpportunities.map((item) => item.municipality))];

const Opportunities = () => {
  const [filters, setFilters] = useState({
    season: 'all',
    municipality: 'الكل',
    status: 'all',
    query: '',
  });

  const filteredOpportunities = useMemo(() => {
    return mockOpportunities.filter((opportunity) => {
      const matchesSeason = filters.season === 'all' || opportunity.season === filters.season;
      const matchesMunicipality =
        filters.municipality === 'الكل' || opportunity.municipality === filters.municipality;
      const matchesStatus = filters.status === 'all' || opportunity.status === filters.status;
      const query = filters.query.trim();
      const matchesQuery =
        !query ||
        opportunity.title.includes(query) ||
        opportunity.description.includes(query) ||
        opportunity.location.includes(query);

      return matchesSeason && matchesMunicipality && matchesStatus && matchesQuery;
    });
  }, [filters]);

  const resetFilters = () =>
    setFilters({
      season: 'all',
      municipality: 'الكل',
      status: 'all',
      query: '',
    });

  return (
    <div>
      <PageHero
        eyebrow="قاعدة الفرص"
        title="كل فرصة هنا تعرض ما تحتاجه لتفهمها بسرعة قبل أن تقرر التعمق."
        description="التصفية في هذه الصفحة مبنية لتقليل الضوضاء: اختر الموسم، الجهة، وحالة النشر ثم ابدأ المقارنة على نفس مستوى القراءة."
      />

      <section className="py-12 lg:py-16">
        <div className="landx-shell space-y-8">
          <AnimatedSection>
            <Card className="p-5 lg:p-6">
              <div className="grid gap-4 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.6fr]">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">بحث مباشر</label>
                  <div className="relative">
                    <SearchIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                    <input
                      value={filters.query}
                      onChange={(e) => setFilters((prev) => ({ ...prev, query: e.target.value }))}
                      placeholder="ابحث باسم الفرصة أو الموقع أو الوصف"
                      className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">الموسم</label>
                  <select
                    value={filters.season}
                    onChange={(e) => setFilters((prev) => ({ ...prev, season: e.target.value }))}
                    className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text"
                  >
                    {seasons.map((season) => (
                      <option key={season.value} value={season.value}>
                        {season.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">الجهة</label>
                  <select
                    value={filters.municipality}
                    onChange={(e) => setFilters((prev) => ({ ...prev, municipality: e.target.value }))}
                    className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text"
                  >
                    {municipalities.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-app-text-muted">الحالة</label>
                  <select
                    value={filters.status}
                    onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
                    className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 text-sm text-app-text"
                  >
                    <option value="all">الكل</option>
                    <option value="active">نشطة</option>
                    <option value="pending">قيد المراجعة</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 border-t border-app-border/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-sm text-app-text-muted">
                  <FilterIcon className="h-4 w-4 text-brand" />
                  <span>
                    <span className="font-bold text-app-text">{filteredOpportunities.length}</span> نتيجة
                    من أصل <span className="font-bold text-app-text">{mockOpportunities.length}</span>
                  </span>
                </div>
                <button
                  onClick={resetFilters}
                  className="rounded-2xl border border-app-border bg-app-surface-soft px-4 py-2 text-sm font-semibold text-app-text"
                >
                  إعادة ضبط الفلاتر
                </button>
              </div>
            </Card>
          </AnimatedSection>

          {filteredOpportunities.length ? (
            <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {filteredOpportunities.map((opportunity, index) => (
                <AnimatedSection key={opportunity.id} delay={index * 70}>
                  <OpportunityCard opportunity={opportunity} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <Card className="p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-app-border bg-app-surface-soft text-app-text-soft">
                  <LeafIcon className="h-8 w-8" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-app-text">لا توجد نتائج مطابقة</h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-app-text-muted">
                  غيّر معايير البحث أو أعد ضبط الفلاتر للعودة إلى جميع الفرص المتاحة.
                </p>
              </Card>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default Opportunities;
