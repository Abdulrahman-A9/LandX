import React from 'react';
import Card from '../ui/Card';
import { CalendarIcon, MegaphoneIcon, NewspaperIcon } from '../ui/Icons';
import Badge from '../ui/Badge';
import { formatArabicDate } from '../../lib/formatters';

const NewsCard = ({ news, type = 'news' }) => {
  const { title, content, municipality, date, image, priority } = news;

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
    <Card hover className="flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/10] overflow-hidden bg-app-surface-soft">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-app-surface-soft to-app-surface">
            {type === 'announcements' ? (
              <MegaphoneIcon className="h-14 w-14 text-app-text-soft" />
            ) : (
              <NewspaperIcon className="h-14 w-14 text-app-text-soft" />
            )}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#140c09]/70 via-transparent to-transparent" />
        {type === 'announcements' && priority ? (
          <div className="absolute right-4 top-4">
            <Badge variant={priorityVariant[priority] || 'default'}>
              {priorityLabels[priority] || 'عادي'}
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-app-text-soft">
          <span className="rounded-full border border-app-border bg-app-surface-soft px-3 py-1">
            {municipality}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-app-border bg-app-surface-soft px-3 py-1">
            <CalendarIcon className="h-3.5 w-3.5" />
            {formatArabicDate(date)}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-8 text-app-text">{title}</h3>
        <p className="flex-1 text-sm leading-8 text-app-text-muted">{content}</p>
      </div>
    </Card>
  );
};

export default NewsCard;
