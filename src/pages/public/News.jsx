import React, { useMemo, useState } from 'react';
import AnimatedSection from '../../components/shared/AnimatedSection';
import NewsCard from '../../components/shared/NewsCard';
import PageHero from '../../components/shared/PageHero';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import { FilterIcon, NewspaperIcon, SearchIcon, XIcon } from '../../components/ui/Icons';
import { mockAnnouncements, mockNews } from '../../data/mock/news';

const tabs = [
  { id: 'news', label: 'الأخبار', count: mockNews.length },
  { id: 'announcements', label: 'الإعلانات', count: mockAnnouncements.length },
];

const municipalities = ['الكل', ...new Set([...mockNews, ...mockAnnouncements].map((item) => item.municipality))];

const News = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('الكل');

  const source = activeTab === 'news' ? mockNews : mockAnnouncements;

  const filteredData = useMemo(() => {
    return source.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.title.includes(searchQuery) ||
        item.content.includes(searchQuery) ||
        item.municipality.includes(searchQuery);
      const matchesMunicipality =
        selectedMunicipality === 'الكل' || item.municipality === selectedMunicipality;

      return matchesSearch && matchesMunicipality;
    });
  }, [searchQuery, selectedMunicipality, source]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedMunicipality('الكل');
  };

  return (
    <div>
      <PageHero
        eyebrow="الأخبار والإعلانات"
        title="تحديثات المنصة والجهات الشريكة في شاشة واحدة قابلة للمسح السريع."
        description="صممنا صفحة الأخبار لتكون واضحة ومباشرة: تبويب واضح، فلترة بسيطة، وبطاقات تقرأ بسرعة دون ازدحام."
      />

      <section className="py-12 lg:py-16">
        <div className="landx-shell space-y-8">
          <AnimatedSection>
            <div className="flex flex-wrap gap-3">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-brand to-brand-deep text-app-text shadow-lg shadow-brand/20'
                        : 'border border-app-border bg-app-surface-soft text-app-text-muted hover:text-app-text'
                    }`}
                  >
                    <NewspaperIcon className="h-4 w-4" />
                    {tab.label}
                    <span className={`rounded-full px-2 py-0.5 text-xs ${isActive ? 'bg-white/10' : 'bg-app-bg/50 text-app-text-soft'}`}>
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <Card className="p-5 lg:p-6">
              <div className="grid gap-4 lg:grid-cols-[1.1fr_0.6fr_auto]">
                <div className="relative">
                  <SearchIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث في العنوان أو المحتوى أو الجهة"
                    className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text placeholder:text-app-text-soft"
                  />
                </div>

                <div className="relative">
                  <FilterIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-app-text-soft" />
                  <select
                    value={selectedMunicipality}
                    onChange={(e) => setSelectedMunicipality(e.target.value)}
                    className="w-full rounded-2xl border border-app-border bg-app-surface-soft px-4 py-3 pr-12 text-sm text-app-text"
                  >
                    {municipalities.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <Button variant="outline" onClick={clearFilters}>
                  <XIcon className="h-4 w-4" />
                  مسح الفلاتر
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          <div className="text-sm text-app-text-muted">
            <span className="font-bold text-app-text">{filteredData.length}</span> نتيجة معروضة
          </div>

          {filteredData.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredData.map((item, index) => (
                <AnimatedSection key={item.id} delay={index * 80}>
                  <NewsCard news={item} type={activeTab} />
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <AnimatedSection>
              <Card className="p-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-app-border bg-app-surface-soft text-app-text-soft">
                  <SearchIcon className="h-8 w-8" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-app-text">لا توجد نتائج حالياً</h2>
                <p className="mx-auto mt-3 max-w-xl text-sm leading-8 text-app-text-muted">
                  غيّر كلمات البحث أو عد إلى عرض الكل للوصول إلى الأخبار والإعلانات المتاحة.
                </p>
              </Card>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
