import React from 'react';
import Card from '../ui/Card';
import { NewspaperIcon, MegaphoneIcon, CalendarIcon } from '../ui/Icons';
import Badge from '../ui/Badge';

const NewsCard = ({ news, type = 'news' }) => {
  const { title, content, municipality, date, image, priority } = news;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const priorityVariant = {
    high: 'danger',
    medium: 'warning',
    low: 'success',
  };

  const priorityLabels = {
    high: 'عاجل',
    medium: 'متوسط',
    low: 'عادي',
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-video bg-app-surface-soft relative overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-app-surface-soft to-app-surface">
            {type === 'announcements' ? (
              <MegaphoneIcon className="w-16 h-16 text-muted" />
            ) : (
              <NewspaperIcon className="w-16 h-16 text-muted" />
            )}
          </div>
        )}
        {type === 'announcements' && priority && (
          <div className="absolute top-3 right-3">
            <Badge variant={priorityVariant[priority] || 'success'}>
              {priorityLabels[priority] || 'عادي'}
            </Badge>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 text-xs text-app-text-muted">
          <span className="font-medium bg-app-surface-soft px-2 py-0.5 rounded border border-app-border">{municipality}</span>
          <span className="flex items-center gap-1">
            <CalendarIcon className="w-3 h-3" />
            {formatDate(date)}
          </span>
        </div>

        <h3 className="text-base font-bold text-app-text mb-2 leading-relaxed">
          {title}
        </h3>

        <p className="text-sm text-app-text-muted leading-relaxed flex-1">
          {content}
        </p>
      </div>
    </Card>
  );
};

export default NewsCard;
