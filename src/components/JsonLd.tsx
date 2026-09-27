import React, { useEffect } from 'react';
import { WeddingAd } from '../types/wedding';
import { SITE_VARIABLES, FAQ_ITEMS } from '../data/weddingContent';

interface JsonLdProps {
  ads: WeddingAd[];
}

export const JsonLd: React.FC<JsonLdProps> = ({ ads }) => {
  useEffect(() => {
    // Current date ISO 8601
    const now = new Date();
    const pad = (n: number) => n.toString().padStart(2, '0');
    const todayIso = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T00:00:00+09:00`;

    // Dynamic origin and current base URL calculation based on accessed domain
    const origin = (typeof window !== 'undefined' && window.location.origin) 
      ? window.location.origin 
      : 'https://kohel123.github.io';
    
    let path = (typeof window !== 'undefined' && window.location.pathname) 
      ? window.location.pathname.replace(/\/index\.html$/i, '') 
      : '/cheonan20/';
    if (!path.endsWith('/')) {
      path += '/';
    }
    const currentUrl = `${origin}${path}`;

    // Dynamically update Canonical & OG URL tags to matching custom domain
    if (typeof document !== 'undefined') {
      const canonicalElem = document.getElementById('canonical-url') || document.querySelector('link[rel="canonical"]');
      if (canonicalElem) {
        canonicalElem.setAttribute('href', currentUrl);
      }
      const ogUrlElem = document.getElementById('og-url') || document.querySelector('meta[property="og:url"]');
      if (ogUrlElem) {
        ogUrlElem.setAttribute('content', currentUrl);
      }
    }

    // 1. WebSite & SearchAction
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": SITE_VARIABLES.site_name,
      "alternateName": SITE_VARIABLES.page_title,
      "url": currentUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${origin}/?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    // 2. WebPage
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `${SITE_VARIABLES.page_title} 및 무료초대권 신청`,
      "description": "천안·아산 지역 실시간 웨딩박람회 일정 안내 및 무료초대권 사전예약, 웨딩홀 및 스드메 파격 혜택!",
      "url": currentUrl,
      "inLanguage": "ko-KR",
      "isPartOf": {
        "@type": "WebSite",
        "name": SITE_VARIABLES.site_name,
        "url": currentUrl
      }
    };

    // 3. BreadcrumbList
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "홈",
          "item": currentUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "충청권 웨딩박람회",
          "item": `${currentUrl}#expo-schedule`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": SITE_VARIABLES.site_name,
          "item": currentUrl
        }
      ]
    };

    // 4. EventSeries / subevent
    const subevents = (ads || []).map((ad) => ({
      "@type": "Event",
      "name": ad?.gather_name || "천안 웨딩박람회",
      "description": `${ad?.gather_name || '천안 웨딩박람회'} - ${ad?.ad_info || ''}. 천안·아산 웨딩홀 및 스드메 무료초대권 신청.`,
      "startDate": todayIso, // 항상 현재날짜 (ISO 8601)
      "endDate": ad?.endDateIso || todayIso, // 연동된 박람회 일정의 두번째 날짜 ISO 8601
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "location": {
        "@type": "Place",
        "name": ad?.venueName || ad?.gather_name || "천안 특별행사장",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": ad?.ad_location || "충청남도 천안시",
          "addressLocality": ad?.district || "천안시",
          "addressRegion": "충청남도",
          "addressCountry": "KR"
        }
      },
      "image": [ad?.ad_thumbnail || ad?.ad_mainvisual || 'https://ad.cpaad.co.kr/data/ad/202404/2337ea9ac0ebeb271ae4fe609b8d7149_GgY2hWN5VCMe6S.jpg'],
      "offers": {
        "@type": "Offer",
        "url": ad?.final_url || currentUrl,
        "price": "0",
        "priceCurrency": "KRW",
        "availability": "https://schema.org/InStock",
        "validFrom": todayIso
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": (ad?.rating ?? 4.9).toString(),
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": (ad?.reviewCount ?? 120).toString()
      },
      "organizer": {
        "@type": "Organization",
        "name": ad?.gather_name || "천안웨딩박람회",
        "url": ad?.final_url || currentUrl
      }
    }));

    const eventSeriesSchema = {
      "@context": "https://schema.org",
      "@type": "EventSeries",
      "name": "천안·아산 웨딩박람회 시즌 페스티벌",
      "description": "천안 및 아산 전 지역 최신 웨딩박람회 실시간 모음 및 무료초대권 신청",
      "startDate": todayIso,
      "endDate": ads[0]?.endDateIso || todayIso,
      "location": {
        "@type": "Place",
        "name": "천안·아산 특별행사장 일원",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "천안시",
          "addressRegion": "충청남도",
          "addressCountry": "KR"
        }
      },
      "subEvent": subevents
    };

    // 5. FAQPage
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const combinedSchemas = {
      "@context": "https://schema.org",
      "@graph": [
        websiteSchema,
        webPageSchema,
        breadcrumbSchema,
        eventSeriesSchema,
        faqSchema
      ]
    };

    // Inject into document head
    let scriptTag = document.getElementById('jsonld-structured-data') as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'jsonld-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(combinedSchemas, null, 2);

    return () => {
      // cleanup if needed
    };
  }, [ads]);

  return null;
};
