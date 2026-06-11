import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { ArrowRightIcon, BuildingIcon, LeafIcon, MapPinIcon, PercentIcon } from '../ui/Icons';
import { formatCurrency, seasonLabel, statusLabel } from '../../lib/formatters';

const OpportunityCard = ({ opportunity }) => {
  const {
    id,
    title,
    municipality,
    location,
    season,
    area,
    areaUnit,
    expectedReturn,
    investmentRequired,
    currency,
    status,
    images,
  } = opportunity;

  const statusVariant = status === 'active' ? 'success' : 'warning';

  return (
    <Card hover className="group overflow-hidden border-[#eddcc9]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#ead7c1]">
        {images?.length ? (
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#efdcca] via-[#d8b18f] to-[#9a603b]">
            <LeafIcon className="h-16 w-16 text-[#fffaf3]" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#3c2113]/80 via-[#5e331d]/20 to-transparent" />
        <div className="absolute right-4 top-4">
          <Badge variant={statusVariant}>{statusLabel(status)}</Badge>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <div className="rounded-2xl border border-white/30 bg-white/15 px-3 py-2 text-xs text-[#fffaf3] backdrop-blur-md">
            {seasonLabel(season)}
          </div>
          <div className="rounded-2xl border border-white/30 bg-white/15 px-3 py-2 text-xs text-[#fffaf3] backdrop-blur-md">
            {location}
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div className="space-y-2">
          <h3 className="line-clamp-2 text-xl font-bold leading-8 text-app-text">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-app-text-soft">
            <BuildingIcon className="h-4 w-4 text-brand" />
            {municipality}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-[#ead9c7] bg-white/50 p-3">
            <div className="text-xs text-app-text-soft">المساحة</div>
            <div className="mt-1 font-semibold text-app-text">
              {area} {areaUnit}
            </div>
          </div>
          <div className="rounded-2xl border border-[#ead9c7] bg-white/50 p-3">
            <div className="text-xs text-app-text-soft">الموسم</div>
            <div className="mt-1 font-semibold text-app-text">{seasonLabel(season)}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-success/20 bg-[#eef3e7] p-3">
            <div className="flex items-center gap-2 text-xs text-app-text-soft">
              <PercentIcon className="h-4 w-4 text-success" />
              العائد المتوقع
            </div>
            <div className="mt-2 text-2xl font-black text-success">{expectedReturn}%</div>
          </div>
          <div className="rounded-2xl border border-brand/20 bg-[#f6ebdf] p-3">
            <div className="flex items-center gap-2 text-xs text-app-text-soft">
              <MapPinIcon className="h-4 w-4 text-brand" />
              قيمة الدخول
            </div>
            <div className="mt-2 text-sm font-bold leading-7 text-app-text">
              {formatCurrency(investmentRequired, currency)}
            </div>
          </div>
        </div>

        <Link
          to={`/opportunities/${id}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#dfc4ac] bg-gradient-to-r from-[#8f4f2d] via-[#aa653c] to-[#c38256] px-4 py-3 text-sm font-semibold text-[#fff8f0] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b26d42] hover:shadow-lg hover:shadow-brand/20"
        >
          عرض التفاصيل
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
};

export default OpportunityCard;
