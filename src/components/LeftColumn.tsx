import React, { useState } from 'react';
import { WEDDING_GUIDES } from '../data/weddingContent';
import { 
  AlertTriangle, 
  Info, 
  CalendarClock, 
  ShieldAlert, 
  Store, 
  Briefcase, 
  Clock, 
  Car, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  Sparkles
} from 'lucide-react';

export const LeftColumn: React.FC = () => {
  const [openTimelineIdx, setOpenTimelineIdx] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {/* 1. 방문 전 주의사항 */}
      <section id="precautions" className="bg-[#111827] border border-amber-500/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              웨딩박람회 방문 전 주의사항
            </h2>
            <p className="text-xs text-amber-300/80">예비부부 필수 체크포인트</p>
          </div>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
          <li className="flex items-start gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">사전예약 없이 현장 방문 금지:</strong>
              <p className="text-slate-400 text-xs mt-0.5">현장 입장료(1만원) 발생 및 무료 피팅권/사은품 지급 대상에서 제외될 수 있습니다.</p>
            </div>
          </li>
          <li className="flex items-start gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">예식 예상 시기 및 하객수 사전 협의:</strong>
              <p className="text-slate-400 text-xs mt-0.5">웨딩홀 대관료 및 식대 할인은 보증인원(예: 150명, 250명)에 따라 견적이 크게 달라집니다.</p>
            </div>
          </li>
          <li className="flex items-start gap-2 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">충동 계약 지양, 가계약 환불 확인:</strong>
              <p className="text-slate-400 text-xs mt-0.5">당일 한정 혜택에 현혹되지 마시고 '14일 이내 100% 전액 환불' 특약을 서면으로 확보하세요.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* 2. 웨딩박람회 기본정보 */}
      <section className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              웨딩박람회 기본정보 안내
            </h2>
            <p className="text-xs text-slate-400">행사시간, 입장료, 위치, 주차</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 text-xs sm:text-sm">
          <div className="flex items-center justify-between p-2.5 bg-slate-900/70 rounded-lg border border-slate-800/80">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> 운영 시간
            </span>
            <span className="font-semibold text-white">{WEDDING_GUIDES.basicInfo.hours}</span>
          </div>

          <div className="flex items-center justify-between p-2.5 bg-slate-900/70 rounded-lg border border-slate-800/80">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> 입장료
            </span>
            <span className="font-semibold text-emerald-400">{WEDDING_GUIDES.basicInfo.admission}</span>
          </div>

          <div className="flex items-center justify-between p-2.5 bg-slate-900/70 rounded-lg border border-slate-800/80">
            <span className="text-slate-400 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-amber-400" /> 주차 지원
            </span>
            <span className="font-semibold text-slate-200">{WEDDING_GUIDES.basicInfo.parking}</span>
          </div>
        </div>

        {/* 혜택 요약 */}
        <div className="mt-4 pt-3 border-t border-slate-800">
          <p className="text-xs font-bold text-amber-300 mb-2">🎁 방문자 제공 혜택 요약</p>
          <div className="space-y-1.5 text-xs text-slate-300">
            {WEDDING_GUIDES.basicInfo.benefits.map((b, idx) => (
              <div key={idx} className="flex items-start gap-1.5">
                <span className="text-amber-400 font-bold">•</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 결혼준비과정 & 순서 일정표 (D-300 ~ D-Day) */}
      <section id="timeline" className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
            <CalendarClock className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              결혼준비 순서 및 일정표 (D-300)
            </h2>
            <p className="text-xs text-slate-400">체계적인 결혼준비 체크리스트</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {WEDDING_GUIDES.timeline.map((item, idx) => {
            const isOpen = openTimelineIdx === idx;
            return (
              <div key={idx} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
                <button
                  onClick={() => setOpenTimelineIdx(isOpen ? null : idx)}
                  className="w-full p-3 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 block">
                      {item.period}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white">
                      {item.title}
                    </span>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-3 pb-3 pt-1 border-t border-slate-800/80 bg-slate-950/40 text-xs text-slate-300 space-y-1.5">
                    {item.items.map((subItem, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{subItem}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. 스드메 세부 항목별 추가금 방어 팁 */}
      <section id="sdm-tips" className="bg-[#111827] border border-amber-500/30 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              스드메 세부 항목별 추가금 방어 팁
            </h2>
            <p className="text-xs text-amber-300/80">계약 전 반드시 짚고 넘어가야 할 비용</p>
          </div>
        </div>

        <div className="space-y-3">
          {WEDDING_GUIDES.sdmDefenseTips.map((tip, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-xs">
              <h3 className="font-bold text-amber-400 text-xs sm:text-sm mb-1">
                {tip.category}
              </h3>
              <p className="text-slate-300 mb-1.5">
                <span className="text-slate-400 font-medium">체크 포인트:</span> {tip.points}
              </p>
              <div className="p-2 rounded bg-amber-950/30 border border-amber-500/20 text-amber-200/90 text-[11px]">
                <strong className="text-amber-300 font-semibold">🚨 추가금 방어: </strong>
                {tip.extraDefense}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. 참가 업체 목록 & 스드메 상담 가이드 */}
      <section className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              스드메 상담 가능 업체 및 분야
            </h2>
            <p className="text-xs text-slate-400">천안·아산 제휴 브랜드 리스트</p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {WEDDING_GUIDES.vendorsGuide.categories.map((cat, idx) => (
            <div key={idx} className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="font-bold text-white text-xs block mb-0.5 text-amber-300">
                {cat.name}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. 방문 시 필수 준비물 */}
      <section className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              방문 시 필수 준비물 (Checklist)
            </h2>
            <p className="text-xs text-slate-400">효율적인 상담을 위한 필수 지참물</p>
          </div>
        </div>

        <div className="space-y-1.5 text-xs text-slate-300">
          <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>원하는 웨딩드레스 & 스튜디오 화보 캡처 사진 5~10장</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>결혼 총 예산 상한선 메모 (스드메 200만~250만원 선)</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>당일 특전 선점을 위한 가계약용 신용카드 (소액 결제용)</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>장시간 상담 및 워킹 투어에 편안한 복장과 운동화 착용</span>
          </div>
        </div>
      </section>
    </div>
  );
};
