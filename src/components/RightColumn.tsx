import React, { useState } from 'react';
import { WEDDING_GUIDES, FAQ_ITEMS } from '../data/weddingContent';
import { 
  Ticket, 
  Lightbulb, 
  ShieldCheck, 
  HelpCircle, 
  Plane, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Gift,
  Flame
} from 'lucide-react';

export const RightColumn: React.FC = () => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {/* 1. 웨딩박람회 무료초대권 신청방법 */}
      <section id="ticket-guide" className="bg-[#111827] border border-amber-500/40 rounded-2xl p-5 shadow-lg relative overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <Ticket className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              웨딩박람회 초대권 신청방법
            </h2>
            <p className="text-xs text-amber-300/80">30초 간편 사전예약 절차</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {WEDDING_GUIDES.reservationGuide.steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
              <span className="shrink-0 w-6 h-6 rounded-full bg-amber-400 text-slate-950 font-extrabold text-xs flex items-center justify-center shadow-sm">
                {step.step}
              </span>
              <div>
                <strong className="text-xs sm:text-sm font-bold text-white block">
                  {step.title}
                </strong>
                <p className="text-slate-300 text-xs mt-0.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 웨딩박람회 활용 팁 & 부스 동선 */}
      <section className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              웨딩박람회 200% 활용 순서 & 꿀팁
            </h2>
            <p className="text-xs text-slate-400">실패 없는 현장 상담 동선 가이드</p>
          </div>
        </div>

        <div className="space-y-2 text-xs">
          {WEDDING_GUIDES.expoStrategy.order.map((item, idx) => (
            <div key={idx} className="bg-slate-900/70 p-2.5 rounded-lg border border-slate-800/80">
              <span className="text-[11px] font-bold text-amber-400 block mb-0.5">
                {item.step}: {item.title}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 꿀팁 뱃지 */}
        <div className="mt-3 pt-3 border-t border-slate-800 space-y-1.5 text-xs text-slate-300">
          <p className="font-bold text-amber-300 text-xs mb-1">💡 베테랑 플래너가 알려주는 꿀팁</p>
          {WEDDING_GUIDES.proTips.map((tip, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-[11px]">
              <span className="text-amber-400 font-bold shrink-0">•</span>
              <span><strong className="text-white">{tip.title}:</strong> {tip.tip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 웨딩박람회 방문 후 주의사항 & 계약 안전장치 */}
      <section className="bg-[#111827] border border-blue-500/30 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              방문 후 주의사항 & 계약 안전장치
            </h2>
            <p className="text-xs text-blue-300/80">14일 이내 100% 환불 규정 및 특약</p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs">
          {WEDDING_GUIDES.contractSafety.rules.map((rule, idx) => (
            <div key={idx} className="bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
              <span className="inline-block px-2 py-0.5 rounded bg-blue-950 text-blue-300 font-bold text-[10px] mb-1 border border-blue-500/30">
                {rule.tag}
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {rule.text}
              </p>
            </div>
          ))}
        </div>

        {/* 박람회 다녀온 후 할 일 */}
        <div className="mt-3 pt-3 border-t border-slate-800 text-xs space-y-1 text-slate-300">
          <p className="font-bold text-amber-300 text-xs mb-1">📋 귀가 후 체크 사항</p>
          {WEDDING_GUIDES.expoStrategy.postSteps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. 신혼여행(허니문) & 웨딩드레스 특전 요약 */}
      <section className="bg-gradient-to-br from-[#111827] to-[#182033] border border-amber-500/30 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <Plane className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              허니문 & 드레스 특별 프로모션
            </h2>
            <p className="text-xs text-amber-300/80">단독 제휴 특가 상품 확인</p>
          </div>
        </div>

        <div className="space-y-2.5 text-xs">
          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-300 text-xs flex items-center gap-1.5 mb-1">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              신혼여행 조기 예약 할인
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {WEDDING_GUIDES.specialBenefits.honeymoon}
            </p>
          </div>

          <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800">
            <span className="font-bold text-amber-300 text-xs flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              웨딩드레스 무료 피팅 & 업그레이드
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              {WEDDING_GUIDES.specialBenefits.dress}
            </p>
          </div>
        </div>
      </section>

      {/* 5. 자주 묻는 질문 (FAQ Accordion - 6문 6답) */}
      <section id="faq" className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold text-white">
              자주 묻는 질문 (FAQ)
            </h2>
            <p className="text-xs text-slate-400">궁금증을 시원하게 해결해 드립니다</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div key={idx} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
                <button
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-3 text-left flex items-center justify-between hover:bg-slate-800/50 transition-colors cursor-pointer"
                >
                  <span className="text-xs sm:text-sm font-semibold text-white pr-2 flex items-start gap-1.5">
                    <span className="text-amber-400 font-bold">Q.</span>
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 pt-1.5 border-t border-slate-800/80 bg-slate-950/50 text-xs text-slate-300 leading-relaxed">
                    <span className="text-emerald-400 font-bold mr-1.5">A.</span>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
