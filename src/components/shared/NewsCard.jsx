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
    <Card hover className="overflow-hidden">
      <div className="aspect-video bg-gray-200 relative">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <span className="text-gray-500 text-4xl">📰</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-primary-600 font-medium">{municipality}</span>
          <span className="text-gray-300">•</span>
          <span className="text-xs text-gray-500">{formatDate(date)}</span>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {content}
        </p>
        
        <Link
          to={`/news/${id}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm"
        >
          قراءة المزيد ←
        </Link>
      </div>
    </Card>
  );
};

export default NewsCard;
