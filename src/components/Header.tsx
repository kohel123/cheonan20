import React from 'react';
import { SITE_VARIABLES } from '../data/weddingContent';
import { Sparkles, Calendar, Heart, ShieldCheck, Gift, Award } from 'lucide-react';

interface HeaderProps {
  totalCount: number;
}

export const Header: React.FC<HeaderProps> = ({ totalCount }) => {
  return (
    <header className="relative bg-[#0d121f] border-b border-slate-800">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 py-1.5 px-4 text-center text-slate-950 text-xs sm:text-sm font-bold tracking-tight shadow-sm flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 fill-slate-950 animate-bounce" />
        <span>천안·아산 웨딩박람회 사전예약 시 드레스 무료 피팅 & 백화점 상품권 100% 증정!</span>
        <Sparkles className="w-4 h-4 fill-slate-950 animate-bounce hidden sm:inline" />
      </div>

      {/* Main Brand & Hero Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-400 border border-amber-500/40">
                <Heart className="w-3 h-3 fill-amber-400" />
                충청권 공식 제휴 포털
              </span>
              <span className="text-xs text-slate-400">
                실시간 업데이트 • 천안·아산 전 지역
              </span>
            </div>

            {/* Site Name and Page Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight flex items-center gap-2 flex-wrap">
              <span className="gold-gradient-text">{SITE_VARIABLES.page_title}</span>
              <span className="text-slate-200 text-lg sm:text-2xl font-semibold">
                및 무료초대권 신청
              </span>
            </h1>

            {/* Description */}
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              천안 갤러리아 센터시티, 신세계백화점 천안아산점, 오브제, 모나밸리 등 
              검증된 천안·아산 대형 웨딩박람회 실시간 일정을 한눈에 비교하고 
              무료초대권 사전신청 혜택을 놓치지 마세요.
            </p>
          </div>

          {/* Quick Highlight Stats */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 bg-slate-900/90 border border-slate-800 p-3 sm:p-4 rounded-2xl">
            <div className="text-center px-2">
              <div className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-0.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>진행 일정</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-amber-400">
                총 {totalCount}건
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-center px-2">
              <div className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-0.5">
                <Gift className="w-3.5 h-3.5 text-emerald-400" />
                <span>입장료</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-emerald-400">
                무료 (0원)
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-center px-2">
              <div className="text-xs text-slate-400 flex items-center justify-center gap-1 mb-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>가계약 환불</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold text-blue-400">
                100% 보장
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Quick Tabs */}
        <nav className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 overflow-x-auto pb-1 text-xs sm:text-sm scrollbar-none">
          <a
            href="#expo-schedule"
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors shadow-sm flex items-center gap-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            실시간 박람회 일정 ({totalCount})
          </a>
          <a
            href="#precautions"
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            방문 전 주의사항
          </a>
          <a
            href="#venue-guide"
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            천안·아산 행사장 안내
          </a>
          <a
            href="#ticket-guide"
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            무료초대권 신청방법
          </a>
          <a
            href="#sdm-tips"
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            스드메 추가금 방어팁
          </a>
          <a
            href="#timeline"
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            결혼준비 일정표 (D-300)
          </a>
          <a
            href="#faq"
            className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors"
          >
            자주 묻는 질문 (FAQ)
          </a>
        </nav>
      </div>
    </header>
  );
};
