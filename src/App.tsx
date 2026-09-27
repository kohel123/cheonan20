/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
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
  );
}
