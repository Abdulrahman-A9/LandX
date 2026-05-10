import React from 'react';
import NewsCard from '../../components/shared/NewsCard';
import { mockNews } from '../../data/mock/opportunities';

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white">
      <div className="bg-gradient-to-r from-dark-900/90 to-dark-800/90 border-b border-primary-500/20 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            الأخبار والإعلانات
          </h1>
          <p className="text-xl text-dark-400 max-w-3xl">
            تابع آخر الأخبار والتحديثات من البلديات الشريكة والمنصة
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
