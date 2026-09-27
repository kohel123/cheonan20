import React from 'react';
import { WeddingAd } from '../types/wedding';
import { Sparkles, Calendar, MapPin, ExternalLink, X, Heart, ShieldCheck } from 'lucide-react';

interface GuidanceModalProps {
  expo: WeddingAd | null;
  onClose: () => void;
  onConfirm: (expo: WeddingAd) => void;
}

export const GuidanceModal: React.FC<GuidanceModalProps> = ({ expo, onClose, onConfirm }) => {
  if (!expo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#111827] border-2 border-amber-500/60 rounded-2xl shadow-2xl p-6 text-slate-100 gold-glow overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors cursor-pointer"
          aria-label="닫기"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with wedding icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-slate-950 font-bold shadow-md">
            <Heart className="w-6 h-6 fill-slate-950" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-950/70 px-2.5 py-0.5 rounded-full border border-amber-500/30">
              천안·아산 웨딩박람회 무료초대권 안내
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              {expo.gather_name}
            </h3>
          </div>
        </div>

        {/* Wedding Congratulation message box */}
        <div className="bg-gradient-to-r from-amber-950/40 via-yellow-950/20 to-amber-950/40 border border-amber-500/30 rounded-xl p-4 mb-5 text-sm text-amber-100/90 leading-relaxed shadow-inner">
          <p className="flex items-center gap-2 font-bold text-amber-300 text-base mb-1.5">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            결혼을 진심으로 축하드립니다!
          </p>
          <p className="text-slate-300 text-xs sm:text-sm">
            소중한 두 분의 새 출발을 응원하며, 천안·아산 공식 제휴 웨딩박람회 무료초대권 신청 페이지로 안전하게 연결해 드립니다. 사전예약 시 드레스 무료 피팅 및 추가 혜택을 꼭 챙기세요.
          </p>
        </div>

        {/* Expo Details */}
        <div className="space-y-2.5 bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-xs sm:text-sm mb-6">
          <div className="flex items-start gap-2.5">
            <Calendar className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium mr-2">행사일시:</span>
              <span className="text-white font-semibold">{expo.ad_date}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium mr-2">행사장소:</span>
              <span className="text-slate-200">{expo.ad_location}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-400 font-medium mr-2">입장혜택:</span>
              <span className="text-emerald-300 font-medium">사전예약자 전원 무료입장 (동반 1인 포함) & 웰컴선물 증정</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl border border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all cursor-pointer"
          >
            닫기
          </button>
          <button
            onClick={() => onConfirm(expo)}
            className="flex-[2] py-3 px-5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>확인 (무료초대권 신청)</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
