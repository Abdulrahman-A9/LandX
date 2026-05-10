import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';

const NewsCard = ({ news }) => {
  const { id, title, content, municipality, date, image } = news;
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };
  
  return (
    <Card hover className="overflow-hidden bg-card-gradient border border-primary-500/30 hover:border-primary-500/50 transition-all duration-300 hover:scale-105">
      <div className="aspect-video bg-dark-800 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-dark-800 to-dark-900">
            <span className="text-dark-500 text-4xl">📰</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-primary-400 font-medium">{municipality}</span>
          <span className="text-dark-600">•</span>
          <span className="text-xs text-dark-500">{formatDate(date)}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-dark-400 line-clamp-3 mb-4">
          {content}
        </p>
        
        <Link
          to={`/news/${id}`}
          className="text-primary-400 hover:text-primary-300 font-medium text-sm transition-colors"
        >
          قراءة المزيد ←
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;
