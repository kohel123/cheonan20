import React from 'react';
import { SITE_VARIABLES } from '../data/weddingContent';
import { Heart, ShieldCheck, HelpCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080c14] border-t border-slate-800/90 text-slate-400 text-xs py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1440px] mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-amber-400 flex items-center justify-center text-slate-950 font-black text-xs">
                W
              </span>
              <span className="text-base font-bold text-white tracking-tight">
                {SITE_VARIABLES.site_name}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-xl leading-relaxed">
              {SITE_VARIABLES.contact_note} — 결혼을 앞둔 예비 신랑, 신부님들의 알뜰하고 행복한 웨딩 플랜을 응원합니다.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              공식 제휴 인증
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-4 h-4 text-amber-400 fill-amber-400" />
              무료초대권 공식 지원
            </span>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800/60 text-[11px] text-slate-400 space-y-2 leading-relaxed">
          <p>
            [안내사항] 본 웹사이트는 천안·아산 지역에서 개최되는 공식 웨딩박람회 일정을 실시간으로 수집·안내하고 무료초대권 신청 페이지를 연동하는 정보 제공 포털입니다.
          </p>
          <p>
            각 박람회 주최사의 사정에 따라 행사 일시, 장소, 사은품 및 프로모션 세부 혜택은 변동될 수 있으므로 방문 전 모바일 초대권 및 공식 접수처의 안내를 확인해 주시기 바랍니다.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-2 text-slate-400">
            <span>© {SITE_VARIABLES.site_name}. All rights reserved.</span>
            <span>$site_name = "{SITE_VARIABLES.site_name}" | $page_title = "{SITE_VARIABLES.page_title}"</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
