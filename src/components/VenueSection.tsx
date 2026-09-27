import React from 'react';
import { WeddingAd } from '../types/wedding';
import { MapPin, Building, Calendar, ExternalLink, Sparkles } from 'lucide-react';

interface VenueSectionProps {
  ads: WeddingAd[];
  onSelectExpo: (expo: WeddingAd) => void;
}

interface VenueInfo {
  name: string;
  location: string;
  district: string;
  expoList: WeddingAd[];
  thumbnail: string;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ ads, onSelectExpo }) => {
  // Extract ONLY venues present in the API items
  const venuesMap = new Map<string, VenueInfo>();

  ads.forEach((ad) => {
    const venueName = ad.venueName || '천안 웨딩 행사장';
    if (!venuesMap.has(venueName)) {
      venuesMap.set(venueName, {
        name: venueName,
        location: ad.ad_location,
        district: ad.district,
        expoList: [ad],
        thumbnail: ad.ad_thumbnail || ad.ad_mainvisual
      });
    } else {
      venuesMap.get(venueName)!.expoList.push(ad);
    }
  });

  const uniqueVenues = Array.from(venuesMap.values());

  if (uniqueVenues.length === 0) return null;

  return (
    <section id="venue-guide" className="bg-[#111827] border border-amber-500/30 rounded-2xl p-5 shadow-lg">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <Building className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              천안·아산 주요 웨딩박람회 행사장 안내
            </h2>
            <p className="text-xs text-amber-300/80">실시간 연동 공식 행사장 리스트 (총 {uniqueVenues.length}개소)</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {uniqueVenues.map((venue, idx) => (
          <div
            key={idx}
            className="bg-slate-900/90 border border-slate-800 hover:border-amber-400/60 rounded-xl p-3.5 flex flex-col justify-between transition-all group shadow-sm hover:shadow-md"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
                  {venue.district}
                </span>
                <span className="text-[10px] text-slate-400">
                  진행 행사 {venue.expoList.length}건
                </span>
              </div>

              <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {venue.name}
              </h3>

              <p className="text-xs text-slate-400 flex items-start gap-1.5 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{venue.location}</span>
              </p>
            </div>

            {/* Associated upcoming expos at this venue */}
            <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-1.5">
              <span className="text-[11px] text-slate-400 font-medium block">
                개최 박람회 일정:
              </span>
              {venue.expoList.slice(0, 2).map((expo, eIdx) => (
                <button
                  key={eIdx}
                  onClick={() => onSelectExpo(expo)}
                  className="w-full text-left p-1.5 rounded-lg bg-slate-800/60 hover:bg-amber-400 hover:text-slate-950 text-slate-300 transition-all flex items-center justify-between text-xs cursor-pointer group/btn"
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <Calendar className="w-3 h-3 text-amber-400 group-hover/btn:text-slate-950 shrink-0" />
                    <span className="font-semibold truncate">{expo.gather_name}</span>
                  </div>
                  <span className="text-[10px] text-amber-300 group-hover/btn:text-slate-900 shrink-0 ml-2">
                    {expo.ad_date.split('~')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
