import React, { useState, useEffect } from 'react';
import { ALL_60_HASHTAGS } from '../data/weddingContent';
import { Hash, Shuffle, ExternalLink } from 'lucide-react';

export const TagCloud: React.FC = () => {
  const [displayedTags, setDisplayedTags] = useState<string[]>([]);

  // Function to sample 20 random tags from 60
  const pickRandom20Tags = () => {
    const shuffled = [...ALL_60_HASHTAGS].sort(() => 0.5 - Math.random());
    setDisplayedTags(shuffled.slice(0, 20));
  };

  useEffect(() => {
    pickRandom20Tags();
  }, []);

  // 50% probability random search between Naver and Google in a new window (_blank)
  const handleRandomSearch = (tag: string) => {
    const query = tag.replace(/^#/, '');
    const isNaver = Math.random() < 0.5;
    const url = isNaver
      ? `https://search.naver.com/search.naver?query=${encodeURIComponent(query)}`
      : `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    window.open(url, '_blank', 'noopener');
  };

  return (
    <section className="bg-[#111827] border border-slate-800 rounded-2xl p-5 shadow-lg my-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400">
            <Hash className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white">
              천안·아산 웨딩 인기 검색 태그
            </h3>
            <p className="text-xs text-slate-400">
              클릭 시 최신 검색 포털(네이버/구글 50% 랜덤) 연동 검색 결과로 연결됩니다.
            </p>
          </div>
        </div>

        <button
          onClick={pickRandom20Tags}
          className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
        >
          <Shuffle className="w-3.5 h-3.5 text-amber-400" />
          <span>태그 새로고침 (랜덤 20개)</span>
        </button>
      </div>

      {/* 20 Random Tag Badges */}
      <div className="flex flex-wrap gap-2">
        {displayedTags.map((tag, idx) => (
          <button
            key={idx}
            onClick={() => handleRandomSearch(tag)}
            className="group inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-amber-400 text-slate-300 hover:text-slate-950 border border-slate-800 hover:border-amber-400 text-xs font-medium transition-all duration-150 cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            title={`'${tag}' 검색하기`}
          >
            <span className="text-amber-400 group-hover:text-slate-950 font-bold">#</span>
            <span>{tag}</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity ml-0.5" />
          </button>
        ))}
      </div>
    </section>
  );
};
