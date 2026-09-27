import React from 'react';
import { WeddingAd } from '../types/wedding';
import { Calendar, MapPin, Tag, Star, ChevronRight, Gift } from 'lucide-react';

interface ExpoCardProps {
  expo: WeddingAd;
  onSelect: (expo: WeddingAd) => void;
}

export const ExpoCard: React.FC<ExpoCardProps> = ({ expo, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(expo)}
      className="group relative bg-[#131b2e] hover:bg-[#18223a] border border-slate-800 hover:border-amber-400/80 rounded-xl p-3 sm:p-4 transition-all duration-200 shadow-md hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer flex flex-col gap-2.5 overflow-hidden"
    >
      {/* Top Banner Tag & Rating */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-sm animate-pulse">
            <Gift className="w-3 h-3" />
            무료초대권 신청가능
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {expo.district}
          </span>
        </div>

        <div className="flex items-center gap-1 text-amber-400 text-xs font-bold shrink-0">
          <Star className="w-3.5 h-3.5 fill-amber-400" />
          <span>{expo.rating}</span>
          <span className="text-slate-500 font-normal text-[10px]">({expo.reviewCount})</span>
        </div>
      </div>

      {/* Main Content Area (Mobile Compact Grid) */}
      <div className="flex items-center gap-3">
        {/* Direct Image Link */}
        <div className="relative shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden border border-slate-700 bg-slate-900">
          <a
            href={expo.final_url}
            target="_blank"
            rel="noopener"
            onClick={(e) => {
              // Allows direct link or triggers modal
              e.stopPropagation();
            }}
            className="block w-full h-full"
          >
            <img
              src={expo.ad_thumbnail || expo.ad_mainvisual}
              alt={`${expo.gather_name} 무료 초대권 신청`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              onError={(e) => {
                // Fallback image if remote host errors
                (e.target as HTMLImageElement).src = 'https://ad.cpaad.co.kr/data/ad/202404/2337ea9ac0ebeb271ae4fe609b8d7149_GgY2hWN5VCMe6S.jpg';
              }}
            />
          </a>
        </div>

        {/* Title, Date, Location Information */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
              💖 {expo.gather_name}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-1 mt-0.5">
              {expo.ad_info}
            </p>
          </div>

          <div className="mt-1.5 space-y-0.5">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300">
              <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{expo.ad_date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{expo.ad_location}</span>
            </div>
          </div>
        </div>

        {/* Action arrow button */}
        <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-800/90 group-hover:bg-amber-400 group-hover:text-slate-950 text-slate-300 transition-colors">
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
