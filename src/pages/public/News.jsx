import React, { useState, useMemo } from 'react';
import NewsCard from '../../components/shared/NewsCard';
import Card from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import AnimatedSection from '../../components/shared/AnimatedSection';
import { mockNews, mockAnnouncements } from '../../data/mock/opportunities';
import { SearchIcon, FilterIcon, NewspaperIcon, MegaphoneIcon, XIcon } from '../../components/ui/Icons';

const tabs = [
  { id: 'news', label: 'الأخبار', icon: NewspaperIcon },
  { id: 'announcements', label: 'الإعلانات', icon: MegaphoneIcon },
];

const municipalities = ['الكل', 'أمانة منطقة حائل', 'أمانة منطقة القصيم', 'أمانة منطقة تبوك', 'منصة لاند إكس'];

const News = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMunicipality, setSelectedMunicipality] = useState('الكل');

  const data = activeTab === 'news' ? mockNews : mockAnnouncements;

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesMunicipality =
        selectedMunicipality === 'الكل' || item.municipality === selectedMunicipality;
      return matchesSearch && matchesMunicipality;
    });
  }, [data, searchQuery, selectedMunicipality]);

  const hasFilters = searchQuery || selectedMunicipality !== 'الكل';

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedMunicipality('الكل');
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-brand/90 to-brand-deep/90 border-b border-brand/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-app-text mb-4">
            الأخبار والإعلانات
          </h1>
          <p className="text-xl text-app-text-muted max-w-3xl">
            تابع آخر الأخبار والتحديثات من البلديات الشريكة والمنصة
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection animation="fadeUp">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-app-border pb-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-t-lg ${
                  isActive
                    ? 'bg-gradient-to-r from-brand to-brand-deep text-app-text shadow-md'
                    : 'text-app-text-muted hover:text-app-text hover:bg-app-surface-soft'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                <span className={`mr-1 text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-app-surface/20 text-app-text' : 'bg-app-surface text-app-text-muted'}`}>
                  {tab.id === 'news' ? mockNews.length : mockAnnouncements.length}
                </span>
              </button>
            );
          })}
        </div>
        </AnimatedSection>

        {/* Search & Filters */}
        <AnimatedSection animation="fadeUp">
        <Card className="p-4 mb-8 bg-card-gradient border border-app-border">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
              <input
                type="text"
                placeholder="ابحث في العناوين أو المحتوى..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2.5 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-sm"
              />
            </div>
            <div className="md:w-64 relative">
              <FilterIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-app-text-soft" />
              <select
                value={selectedMunicipality}
                onChange={(e) => setSelectedMunicipality(e.target.value)}
                className="w-full pr-10 pl-4 py-2.5 bg-app-surface text-app-text border border-app-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand text-sm appearance-none"
              >
                {municipalities.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            {hasFilters && (
              <Button variant="outline" size="sm" onClick={clearFilters} className="flex items-center gap-2">
                <XIcon className="w-4 h-4" />
                مسح الفلاتر
              </Button>
            )}
          </div>
        </Card>
        </AnimatedSection>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-app-text-muted text-sm">
            <span className="font-bold text-app-text">{filteredData.length}</span> نتيجة
          </p>
        </div>

        {/* Content Grid */}
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((item, index) => (
              <AnimatedSection key={item.id} animation="scaleIn" delay={index * 100}>
                <NewsCard news={item} type={activeTab} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <AnimatedSection animation="scaleIn">
            <Card className="text-center py-16 bg-card-gradient border border-app-border">
              <SearchIcon className="w-16 h-16 text-app-text-soft mx-auto mb-4" />
              <h3 className="text-xl font-bold text-app-text mb-2">لا توجد نتائج</h3>
              <p className="text-app-text-muted mb-6">جرّب تغيير كلمات البحث أو الفلاتر</p>
              <Button variant="outline" onClick={clearFilters}>
                مسح الفلاتر
              </Button>
            </Card>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
};

export default News;
