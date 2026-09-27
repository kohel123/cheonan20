/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { WeddingAd } from './types/wedding';
import { getCheonanWeddingAds } from './services/weddingApi';
import { Header } from './components/Header';
import { LeftColumn } from './components/LeftColumn';
import { CenterColumn } from './components/CenterColumn';
import { RightColumn } from './components/RightColumn';
import { GuidanceModal } from './components/GuidanceModal';
import { TagCloud } from './components/TagCloud';
import { JsonLd } from './components/JsonLd';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('App error caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0e17] text-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md bg-slate-900 border border-amber-500/50 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-bold text-amber-400 mb-2">천안웨딩박람회 일정 안내</h2>
            <p className="text-sm text-slate-300 mb-4">페이지를 로드하는 중 문제가 발생했습니다. 새로고침을 진행해 주세요.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-sm hover:bg-amber-300 cursor-pointer"
            >
              새로고침
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  const [ads, setAds] = useState<WeddingAd[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedExpo, setSelectedExpo] = useState<WeddingAd | null>(null);

  const fetchAds = async () => {
    setLoading(true);
    try {
      const data = await getCheonanWeddingAds();
      setAds(data);
    } catch (err) {
      console.error('Failed to load wedding ads:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  // When user clicks confirm in GuidanceModal, open the target URL in a new window with referrer tracking enabled
  const handleConfirmExpo = (expo: WeddingAd) => {
    if (expo && expo.final_url) {
      window.open(expo.final_url, '_blank', 'noopener');
    }
    setSelectedExpo(null);
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0a0e17] text-slate-100 flex flex-col selection:bg-amber-400 selection:text-black">
        {/* Schema.org JSON-LD Structured Data */}
        <JsonLd ads={ads} />

        {/* Top Header & Navigation */}
        <Header totalCount={ads.length} />

        {/* Main 3-Column Responsive Layout */}
        <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
            {/* Left Column (좌 - 주의사항, 기본정보, D-300 일정표, 추가금 방어팁, 참가업체) */}
            <aside className="col-span-12 lg:col-span-3 xl:col-span-3 space-y-6 order-2 lg:order-1">
              <LeftColumn />
            </aside>

            {/* Center Column (중 - 실시간 일정, 총 건수 배지, 행정구역 탭, 주요 행사장 안내) */}
            <section className="col-span-12 lg:col-span-6 xl:col-span-6 space-y-6 order-1 lg:order-2">
              <CenterColumn
                ads={ads}
                loading={loading}
                onSelectExpo={(expo) => setSelectedExpo(expo)}
                onRefresh={fetchAds}
              />
            </section>

            {/* Right Column (우 - 초대권 신청방법, 박람회 활용 팁, 방문 후 주의사항, 허니문/드레스, FAQ) */}
            <aside className="col-span-12 lg:col-span-3 xl:col-span-3 space-y-6 order-3 lg:order-3">
              <RightColumn />
            </aside>
          </div>

          {/* 20 Random Search Tags Cloud (Bottom Area) */}
          <TagCloud />
        </main>

        {/* Footer */}
        <Footer />

        {/* Guidance / Confirmation Modal on Expo Click */}
        <GuidanceModal
          expo={selectedExpo}
          onClose={() => setSelectedExpo(null)}
          onConfirm={handleConfirmExpo}
        />

        {/* Floating Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </ErrorBoundary>
  );
}
