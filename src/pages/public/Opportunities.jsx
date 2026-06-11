import React, { useMemo, useState } from 'react';
import AnimatedSection from '../../components/shared/AnimatedSection';
import OpportunityCard from '../../components/shared/OpportunityCard';
import PageHero from '../../components/shared/PageHero';
import Card from '../../components/ui/Card';
import { FilterIcon, LeafIcon, SearchIcon } from '../../components/ui/Icons';
import { useAsyncData } from '../../hooks/useAsyncData';
import { mapOpportunity } from '../../lib/adapters';
import { opportunitiesApi } from '../../lib/api';

const Opportunities = () => {
  const [filters, setFilters] = useState({
    municipality: 'all',
    status: 'all',
    query: '',
  });

  const { data, loading, error } = useAsyncData(async () => {
    const result = await opportunitiesApi.list();
    return result.map(mapOpportunity);
  }, []);

  const municipalities = useMemo(
    () => ['all', ...new Set(data.map((item) => item.municipality))],
    [data],
  );

  const filteredOpportunities = useMemo(() => {
    return data.filter((opportunity) => {
      const matchesMunicipality =
        filters.municipality === 'all' || opportunity.municipality === filters.municipality;
      const matchesStatus = filters.status === 'all' || opportunity.status === filters.status;
      const query = filters.query.trim().toLowerCase();
      const matchesQuery =
        !query ||
        opportunity.title.toLowerCase().includes(query) ||
        opportunity.description.toLowerCase().includes(query) ||
        opportunity.location.toLowerCase().includes(query);

      return matchesMunicipality && matchesStatus && matchesQuery;
    });
  }, [data, filters]);

  const resetFilters = () =>
    setFilters({
      municipality: 'all',
      status: 'all',
      query: '',
    });

  return (
    <div>
      <PageHero
        eyebrow="قاعدة الفرص"
        title="استكشف الفرص داخل مساحة أهدأ وأوضح وأسهل للمقارنة."
        description="هنا ترى الفرص المنشورة فعلياً من النظام، مع فلاتر سريعة وبطاقات أغنى بصرياً تساعدك على التقاط الفارق بين الخيارات بسرعة."
      />

      <section className="py-12 lg:py-16">
        <div className="landx-shell space-y-8">
          <AnimatedSection>
            <Card className="overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="landx-dark-card rounded-none rounded-t-[1.75rem] p-6 lg:rounded-r-[1.75rem] lg:rounded-tl-none">
                  <div className="text-sm text-[#f0cfb3]">فلترة ذكية</div>
                  <div className="mt-4 text-4xl font-black text-[#fff8f0]">{filteredOpportunities.length}</div>
                  <p className="mt-4 text-sm leading-8 text-[#f7e6d7]">
                    صف الفرص حسب الجهة والحالة أو ابحث بكلمة مفتاحية، وستتحدث النتائج مباشرة على نفس البيانات الحقيقية.
                  </p>
                </div>

                <div className="p-5 lg:p-6">
                  <div className="grid gap-4 lg:grid-cols-[1.2fr_0.7fr_0.6fr]">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-app-text-muted">بحث مباشر</label>
                      <div className="relative">
                        <SearchIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                        <input
                          value={filters.query}
                          onChange={(e) => setFilters((prev) => ({ ...prev, query: e.target.value }))}
                          placeholder="ابحث باسم الفرصة أو الموقع أو الوصف"
                          className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-app-text-muted">الجهة</label>
                      <select
                        value={filters.municipality}
                        onChange={(e) => setFilters((prev) => ({ ...prev, municipality: e.target.value }))}
                        className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text"
                      >
                        {municipalities.map((item) => (
                          <option key={item} value={item}>
                            {item === 'all' ? 'الكل' : item}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-app-text-muted">الحالة</label>
                      <select
                        value={filters.status}
                        onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
                        className="w-full rounded-2xl border border-[#e5cfba] bg-white/75 px-4 py-3 text-sm text-app-text"
                      >
                        <option value="all">الكل</option>
                        <option value="active">نشطة</option>
                        <option value="pending">قيد المراجعة</option>
                        <option value="closed">مغلقة</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-app-border/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2 text-sm text-app-text-muted">
                      <FilterIcon className="h-4 w-4 text-brand" />
                      <span>
                        <span className="font-bold text-app-text">{filteredOpportunities.length}</span> نتيجة
                      </span>
                    </div>

                    <button
                      onClick={resetFilters}
                      className="rounded-2xl border border-[#dfc4ac] bg-[#fffaf4] px-4 py-2 text-sm font-semibold text-app-text"
                    >
                      إعادة ضبط الفلاتر
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </AnimatedSection>

          {loading ? (
            <Card className="p-10 text-center text-app-text-muted">جاري تحميل الفرص...</Card>
          ) : error ? (
            <Card className="p-10 text-center text-danger">{error}</Card>
          ) : filteredOpportunities.length ? (
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
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#e6d0b8] bg-white/55 text-app-text-soft">
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
