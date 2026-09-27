import React, { useState } from 'react';
import { WeddingAd, DistrictFilter } from '../types/wedding';
import { ExpoCard } from './ExpoCard';
import { VenueSection } from './VenueSection';
import { 
  Calendar, 
  Sparkles, 
  MapPin, 
  CheckCircle, 
  RefreshCw,
  Gift,
  ArrowRight
} from 'lucide-react';

interface CenterColumnProps {
  ads: WeddingAd[];
  loading: boolean;
  onSelectExpo: (expo: WeddingAd) => void;
  onRefresh: () => void;
}

export const CenterColumn: React.FC<CenterColumnProps> = ({
  ads,
  loading,
  onSelectExpo,
  onRefresh,
}) => {
  const [districtFilter, setDistrictFilter] = useState<DistrictFilter>('ALL');

  // Count by district
  const totalCount = ads.length;
  const seobukCount = ads.filter(a => a.district === '천안 서북구').length;
  const dongnamCount = ads.filter(a => a.district === '천안 동남구').length;
  const asanCount = ads.filter(a => a.district === '아산시').length;

  // Filtered list
  const filteredAds = ads.filter(ad => {
    if (districtFilter === 'ALL') return true;
    if (districtFilter === 'SEOBUL') return ad.district === '천안 서북구';
    if (districtFilter === 'DONGNAM') return ad.district === '천안 동남구';
    if (districtFilter === 'ASAN') return ad.district === '아산시';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Real-time Schedule Section Header & Total Count Badge */}
      <section id="expo-schedule" className="bg-[#111827] border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-xl relative overflow-hidden gold-glow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold shadow-md shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-lg sm:text-xl font-extrabold text-white">
                  실시간 천안·아산 웨딩박람회 일정
                </h2>
                {/* Total Count Badge */}
                <span className="inline-flex items-center gap-1 text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-sm animate-pulse">
                  총 {totalCount}건
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                개최일 빠른 순 정렬 • 무료초대권 신청 시 동반 1인 무료입장
              </p>
            </div>
          </div>

          <button
            onClick={onRefresh}
            disabled={loading}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
            title="실시간 일정 새로고침"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-amber-400' : ''}`} />
            <span>새로고침</span>
          </button>
        </div>

        {/* Administrative District Tabs (행정구역별 탭) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800/80 mb-4">
          <button
            onClick={() => setDistrictFilter('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              districtFilter === 'ALL'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            전체보기 ({totalCount})
          </button>
          <button
            onClick={() => setDistrictFilter('SEOBUL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              districtFilter === 'SEOBUL'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            천안 서북구 ({seobukCount})
          </button>
          <button
            onClick={() => setDistrictFilter('DONGNAM')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              districtFilter === 'DONGNAM'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            천안 동남구 ({dongnamCount})
          </button>
          <button
            onClick={() => setDistrictFilter('ASAN')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
              districtFilter === 'ASAN'
                ? 'bg-amber-400 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
            }`}
          >
            아산시 ({asanCount})
          </button>
        </div>

        {/* Compact Schedule Cards List */}
        {loading ? (
          <div className="py-12 text-center text-slate-400 space-y-3">
            <RefreshCw className="w-8 h-8 mx-auto animate-spin text-amber-400" />
            <p className="text-sm font-semibold">최신 천안·아산 웨딩박람회 일정을 실시간 연동 중입니다...</p>
          </div>
        ) : filteredAds.length === 0 ? (
          <div className="py-10 text-center text-slate-400 bg-slate-900/50 rounded-xl p-6 border border-slate-800">
            <p className="text-sm">선택하신 지역에 예정된 박람회 일정이 없습니다.</p>
            <button
              onClick={() => setDistrictFilter('ALL')}
              className="mt-3 px-4 py-1.5 rounded-lg bg-amber-400 text-slate-950 text-xs font-bold"
            >
              전체 일정 보기
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredAds.map((expo) => (
              <ExpoCard
                key={expo.id}
                expo={expo}
                onSelect={onSelectExpo}
              />
            ))}
          </div>
        )}

        {/* Bottom Banner Notice */}
        <div className="mt-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-center justify-between gap-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>원하는 박람회 카드를 클릭하시면 초대권 상세 안내 및 신청창이 열립니다.</span>
          </div>
          <span className="text-amber-400 font-bold shrink-0 hidden sm:inline">무료입장 보장</span>
        </div>
      </section>

      {/* 2. 천안·아산 주요 웨딩홀 & 행사장 안내 (API 연동 데이터만 사용) */}
      <VenueSection ads={ads} onSelectExpo={onSelectExpo} />

      {/* 3. 웨딩홀 & 스드메 현장 계약 혜택 핵심 하이라이트 */}
      <section className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-yellow-500/20 text-amber-400">
            <Gift className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              천안·아산 웨딩박람회 현장 특별 프로모션
            </h3>
            <p className="text-xs text-slate-400">사전예약 신청자에게만 주어지는 혜택</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <h4 className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              웨딩홀 대관료 & 식대 특별 할인
            </h4>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              천안/아산 주요 웨딩홀 대관료 최대 무료 지원 및 하객 식대 3,000~5,000원 추가 할인 혜택
            </p>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <h4 className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              신상 웨딩드레스 무료 업그레이드
            </h4>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              추가금(50~150만원 상당) 발생하는 명품 블랙라벨 드레스 무상 피팅 및 본식 업그레이드 지원
            </p>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <h4 className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              허니문 조기예약 캐시백
            </h4>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              발리/하와이/몰디브/유럽 등 인기 휴양지 얼리버드 예약 시 커플당 최대 50만원 할인 + 여행용 캐리어
            </p>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <h4 className="font-bold text-amber-300 flex items-center gap-1.5 mb-1">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              백화점 혼수 가전 추가 제휴할인
            </h4>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              갤러리아/신세계 입점 삼성스토어·LG베스트샵 웨딩클럽 결합 시 품목별 추가 모바일 상품권 증정
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
