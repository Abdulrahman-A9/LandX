import React from 'react';
import Card from '../ui/Card';
import { NewspaperIcon, MegaphoneIcon, CalendarIcon } from '../ui/Icons';

const NewsCard = ({ news, type = 'news' }) => {
  const { title, content, municipality, date, image, priority } = news;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const priorityStyles = {
    high: 'bg-red-500/10 text-red-700 border-red-500/30',
    medium: 'bg-amber-500/10 text-amber-700 border-amber-500/30',
    low: 'bg-green-500/10 text-green-700 border-green-500/30',
  };

  const priorityLabels = {
    high: 'عاجل',
    medium: 'متوسط',
    low: 'عادي',
  };

  return (
    <Card className="overflow-hidden bg-card-gradient border border-brown-300 hover:border-brown-400 transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <div className="aspect-video bg-pearl-200 relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pearl-200 to-pearl-300">
            {type === 'announcements' ? (
              <MegaphoneIcon className="w-16 h-16 text-brown-400" />
            ) : (
              <NewspaperIcon className="w-16 h-16 text-brown-400" />
            )}
          </div>
        )}
        {type === 'announcements' && priority && (
          <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded border ${priorityStyles[priority] || priorityStyles.low}`}>
            {priorityLabels[priority] || 'عادي'}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 text-xs text-brown-600">
          <span className="font-medium bg-brown-200/40 px-2 py-0.5 rounded">{municipality}</span>
          <span className="flex items-center gap-1">
            <CalendarIcon className="w-3 h-3" />
            {formatDate(date)}
          </span>
        </div>

        <h3 className="text-base font-bold text-brown-900 mb-2 leading-relaxed">
          {title}
        </h3>

        <p className="text-sm text-brown-700 leading-relaxed flex-1">
          {content}
        </p>
      </div>
    </Card>
  );
};

export default NewsCard;
