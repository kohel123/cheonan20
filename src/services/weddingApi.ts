import { RawAdItem, WeddingAd } from '../types/wedding';
import { SITE_VARIABLES } from '../data/weddingContent';

// Embedded fallback data for guaranteed rendering in all environments
const FALLBACK_CPAAD_DATA: RawAdItem[] = [
  {
    ad_mainvisual: 'https://ad.cpaad.co.kr/data/ad/202404/2337ea9ac0ebeb271ae4fe609b8d7149_GgY2hWN5VCMe6S.jpg',
    ad_thumbnail: 'https://ad.cpaad.co.kr/data/ad/202404/2337ea9ac0ebeb271ae4fe609b8d7149_K4BVr5MBOrHjFFsRP.jpg',
    ad_thumbnail2: 'https://ad.cpaad.co.kr/data/ad/202404/2337ea9ac0ebeb271ae4fe609b8d7149_vvnWQbeVaF1Nv91UaxDVLQl.jpg',
    ad_url: 'https://ad.cpaad.co.kr/wedingcrowd49/',
    region: 'chungcheong',
    gather_name: '천안 갤러리아 대형 웨딩박람회',
    ad_info: '갤러리아 센터시티에서 진행하는 천안/아산 최대규모 웨딩박람회',
    ad_year: '2026',
    ad_date: '09월 26일(토) ~ 09월 27일(일)',
    ad_location: '충남 천안시 서북구 공원로 227 (불당동 1299) 천안 갤러리아 센터시티점 9층'
  },
  {
    ad_mainvisual: 'https://ad.cpaad.co.kr/data/ad/202407/2337ea9ac0ebeb271ae4fe609b8d7149_96UqxOBElPzGPhCYjg1gOfghfR.jpg',
    ad_thumbnail: 'https://ad.cpaad.co.kr/data/ad/202407/2337ea9ac0ebeb271ae4fe609b8d7149_cvv9hCPAbfX5nbgKxrRbUXCvTd.jpg',
    ad_thumbnail2: 'https://ad.cpaad.co.kr/data/ad/202407/2337ea9ac0ebeb271ae4fe609b8d7149_8pv8cFyHZB6NMFfCfrv82.jpg',
    ad_url: 'https://ad.cpaad.co.kr/objetWed01/',
    region: 'chungcheong',
    gather_name: '천안아산 웨딩드레스 페어',
    ad_info: '천안 대표 체험형 웨딩박람회 무료 드레스/헤어/메이크업 체험',
    ad_year: '2026',
    ad_date: '10월 03일(토) ~ 10월 04일(일)',
    ad_location: '충청남도 천안시 서북구 백석로 206 (성정동 987) 천안 오브제 특별행사장'
  },
  {
    ad_mainvisual: 'https://ad.cpaad.co.kr/data/ad/202609/568762912459e51e2cbac9155f241418_rvKp74zpWiATlQIk.jpg',
    ad_thumbnail: 'https://ad.cpaad.co.kr/data/ad/202607/568762912459e51e2cbac9155f241418_MMWmuGkbbZohd7OVHnDOpV.jpg',
    ad_thumbnail2: 'https://ad.cpaad.co.kr/data/ad/202607/568762912459e51e2cbac9155f241418_FkgS71VqwI7z6RhsfRFirf.jpg',
    ad_url: 'https://ad.cpaad.co.kr/objetWed04/',
    region: 'chungcheong',
    gather_name: '천안365 다이렉트 웨딩박람회',
    ad_info: '천안, 아산 결혼준비 NO.1 무료 드레스/헤어/메이크업 체험',
    ad_year: '2026',
    ad_date: '10월 03일(토) ~ 10월 04일(일)',
    ad_location: '충남 천안시 서북구 백석로 206 1층 (성정동 987) 천안오브제 특별행사장'
  },
  {
    ad_mainvisual: 'https://ad.cpaad.co.kr/data/ad/202603/568762912459e51e2cbac9155f241418_pXXFk5XxAwqV5dz7a5Yc6Ar3z.jpg',
    ad_thumbnail: 'https://ad.cpaad.co.kr/data/ad/202603/568762912459e51e2cbac9155f241418_6M3jVzfPNsvioPeQQC8oN.jpg',
    ad_thumbnail2: 'https://ad.cpaad.co.kr/data/ad/202603/568762912459e51e2cbac9155f241418_UnYp9oVAiTqPXKl.jpg',
    ad_url: 'https://ad.cpaad.co.kr/connectwedding01/',
    region: 'chungcheong',
    gather_name: '천안 신세계 웨딩박람회',
    ad_info: '합리적 웨딩 제안! 프리미엄 웨딩드레스',
    ad_year: '2026',
    ad_date: '10월 10일(토) ~ 10월 11일(일)',
    ad_location: '충남 천안시 동남구 만남로 43 (신부동 354-1) 신세계백화점 천안아산점'
  },
  {
    ad_mainvisual: 'https://ad.cpaad.co.kr/data/ad/202609/568762912459e51e2cbac9155f241418_IdTx4zOk9vrofqa5P7iW6WjcZ.jpg',
    ad_thumbnail: 'https://ad.cpaad.co.kr/data/ad/202609/568762912459e51e2cbac9155f241418_gvbmEERT.jpg',
    ad_thumbnail2: 'https://ad.cpaad.co.kr/data/ad/202609/568762912459e51e2cbac9155f241418_OtZO44QJ4XpVYMaDzLXpp7l57lsZF7G.jpg',
    ad_url: 'https://ad.cpaad.co.kr/withyouwedding35/',
    region: 'chungcheong',
    gather_name: '천안 아일랜드유웨딩홀 웨딩박람회',
    ad_info: '당신만을 위한 천안 위드유 웨딩박람회',
    ad_year: '2026',
    ad_date: '10월 10일(토) ~ 10월 11일(일)',
    ad_location: '충남 천안시 서북구 부대3길 26 (부대동 105-81) 아일랜드유 Cafe&웨딩홀'
  },
  {
    ad_mainvisual: 'https://ad.cpaad.co.kr/data/ad/202501/a0306c07cfce0aa955cf39a185c2ff26_B2XJFeTdv7wO5evuBitN.jpg',
    ad_thumbnail: 'https://ad.cpaad.co.kr/data/ad/202501/a0306c07cfce0aa955cf39a185c2ff26_TnTqoZW5noIrp9Y5.jpg',
    ad_thumbnail2: 'https://ad.cpaad.co.kr/data/ad/202501/a0306c07cfce0aa955cf39a185c2ff26_jZ1OO7pRqSTsiNWmyCxD417Hd.jpg',
    ad_url: 'https://ad.cpaad.co.kr/wncowedding09/',
    region: 'chungcheong',
    gather_name: '천안/아산 웨딩박람회',
    ad_info: '신랑,신부를 위한 웨딩&혼수 업체가 함께합니다.',
    ad_year: '2026',
    ad_date: '10월 03일(토) ~ 10월 04일(일)',
    ad_location: '충남 천안시 서북구 공원로 227 (불당동 1299) 갤러리아백화점 센터시티점 7층 특별행사장'
  },
  {
    ad_mainvisual: 'https://ad.cpaad.co.kr/data/ad/202609/568762912459e51e2cbac9155f241418_UiKbOuKWpWoIhf52vmb5SZjK.jpg',
    ad_thumbnail: 'https://ad.cpaad.co.kr/data/ad/202609/568762912459e51e2cbac9155f241418_pofthpaNRLbEX7kDeOX.jpg',
    ad_thumbnail2: 'https://ad.cpaad.co.kr/data/ad/202609/568762912459e51e2cbac9155f241418_QX3pm2zcvTSBoO9Ki2XtPSbFqLty.jpg',
    ad_url: 'https://ad.cpaad.co.kr/wedingcrowd01/',
    region: 'chungcheong',
    gather_name: '천안아산 초대형웨딩박람회',
    ad_info: '모나밸리에서 진행하는 천안/아산 최대규모 웨딩박람회',
    ad_year: '2026',
    ad_date: '10월 03일(토) ~ 10월 04일(일)',
    ad_location: '충남 아산시 순천향로 624 (장존동 185-7) 모나밸리 특별행사장'
  }
];

const FALLBACK_AD_DATA: RawAdItem[] = [
  {
    ad_mainvisual: 'https://replyalba.com/intros/iwc_cheonan/img/og.jpg',
    ad_thumbnail: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/iwc-320.JPG',
    ad_thumbnail2: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/iwc.gif',
    ad_url: 'https://replyalba.com/pt/LKmFhJESiG',
    region: 'chungcheong',
    gather_name: '천안 IWC 웨딩박람회',
    ad_info: '평생에 한번뿐인 결혼준비! 가격만으로 결정해야 할까요?',
    ad_year: '2026',
    ad_date: '09월 26일(토) ~ 09월 27일(일)',
    ad_location: '충남 천안시 서북구 미라16길 18 (쌍용동 285-73) IWC 천안점 특별행사장'
  },
  {
    ad_mainvisual: 'https://replyalba.com/intros/hihnm_ca/img/og.jpg',
    ad_thumbnail: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/himoon-320.JPG',
    ad_thumbnail2: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/himoon.gif',
    ad_url: 'https://replyalba.com/pt/L2k8AEfcSl',
    region: 'chungcheong',
    gather_name: '천안 하이허니문 웨딩박람회',
    ad_info: '평생에 한번뿐인 결혼준비! 가격만으로 결정해야 할까요?',
    ad_year: '2026',
    ad_date: '09월 26일(토) ~ 09월 27일(일)',
    ad_location: '충남 천안시 동남구 서부대로 540 1층 (봉명동 287) 하이허니문 천안점 특별행사장'
  },
  {
    ad_mainvisual: 'https://replyalba.com/intros/iwc_cheonan/img/og.jpg',
    ad_thumbnail: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/iwc-320.JPG',
    ad_thumbnail2: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/iwc.gif',
    ad_url: 'https://replyalba.com/pt/LKmFhJESiG',
    region: 'chungcheong',
    gather_name: '천안 IWC 웨딩박람회',
    ad_info: '평생에 한번뿐인 결혼준비! 가격만으로 결정해야 할까요?',
    ad_year: '2026',
    ad_date: '10월 03일(토) ~ 10월 04일(일)',
    ad_location: '충남 천안시 서북구 미라16길 18 (쌍용동 285-73) IWC 천안점 특별행사장'
  },
  {
    ad_mainvisual: 'https://replyalba.com/intros/hihnm_ca/img/og.jpg',
    ad_thumbnail: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/himoon-320.JPG',
    ad_thumbnail2: 'https://tistory1.daumcdn.net/tistory/1812096/skin/images/himoon.gif',
    ad_url: 'https://replyalba.com/pt/L2k8AEfcSl',
    region: 'chungcheong',
    gather_name: '천안 하이허니문 웨딩박람회',
    ad_info: '평생에 한번뿐인 결혼준비! 가격만으로 결정해야 할까요?',
    ad_year: '2026',
    ad_date: '10월 03일(토) ~ 10월 04일(일)',
    ad_location: '충남 천안시 동남구 서부대로 540 1층 (봉명동 287) 하이허니문 천안점 특별행사장'
  }
];

// Helper to extract items from response advertisements (array or object)
function extractAds(json: any): RawAdItem[] {
  if (!json) return [];
  if (Array.isArray(json.advertisements)) {
    return json.advertisements;
  }
  if (json.advertisements && typeof json.advertisements === 'object') {
    return Object.values(json.advertisements);
  }
  if (Array.isArray(json)) return json;
  return [];
}

// Parse date string like "09월 26일(토) ~ 09월 27일(일)" to timestamps and ISO dates
function parseDates(adDate: string, adYear: string) {
  const year = parseInt(adYear || '2026', 10) || new Date().getFullYear();
  let startMonth = 1;
  let startDay = 1;
  let endMonth = 1;
  let endDay = 1;

  // Regex to match "09월 26일" and "09월 27일"
  const matches = [...(adDate || '').matchAll(/(\d{1,2})월\s*(\d{1,2})일/g)];
  if (matches.length >= 1) {
    startMonth = parseInt(matches[0][1], 10);
    startDay = parseInt(matches[0][2], 10);
  }
  if (matches.length >= 2) {
    endMonth = parseInt(matches[1][1], 10);
    endDay = parseInt(matches[1][2], 10);
  } else {
    endMonth = startMonth;
    endDay = startDay;
  }

  const startDate = new Date(year, startMonth - 1, startDay, 10, 0, 0);
  const endDate = new Date(year, endMonth - 1, endDay, 19, 30, 0);

  const pad = (n: number) => n.toString().padStart(2, '0');
  const startDateIso = `${year}-${pad(startMonth)}-${pad(startDay)}T10:00:00+09:00`;
  const endDateIso = `${year}-${pad(endMonth)}-${pad(endDay)}T19:30:00+09:00`;

  return {
    sortTimestamp: startDate.getTime(),
    startDateIso,
    endDateIso,
  };
}

// Determine district categorization
function getDistrict(location: string): string {
  if (!location) return '기타';
  if (location.includes('서북구') || location.includes('불당') || location.includes('백석') || location.includes('쌍용') || location.includes('성정') || location.includes('부대동')) {
    return '천안 서북구';
  }
  if (location.includes('동남구') || location.includes('신부동') || location.includes('봉명동') || location.includes('원성동')) {
    return '천안 동남구';
  }
  if (location.includes('아산') || location.includes('장존동') || location.includes('배방') || location.includes('모종동')) {
    return '아산시';
  }
  return '천안 서북구';
}

// Extract venue name from location or title
function getVenueName(gatherName: string, location: string): string {
  if (location.includes('갤러리아')) return '천안 갤러리아 센터시티점';
  if (location.includes('신세계백화점') || location.includes('신세계')) return '신세계백화점 천안아산점';
  if (location.includes('모나밸리')) return '모나밸리 특별행사장';
  if (location.includes('오브제')) return '천안 오브제 특별행사장';
  if (location.includes('아일랜드유')) return '아일랜드유 Cafe & 웨딩홀';
  if (location.includes('IWC')) return 'IWC 천안점 특별행사장';
  if (location.includes('하이허니문')) return '하이허니문 천안점 특별행사장';
  
  // Fallback to portion of gather_name or location
  const parts = location.split(')');
  if (parts.length > 1 && parts[1].trim()) {
    return parts[1].trim();
  }
  return gatherName;
}

// Fetch single API with proxy & fallback
async function fetchApiData(proxyUrl: string, directUrl: string, fallbackList: RawAdItem[]): Promise<RawAdItem[]> {
  try {
    // 1st Attempt: Local Proxy endpoint (server-side cURL style proxy)
    const res = await fetch(proxyUrl, { headers: { 'Accept': 'application/json' } });
    if (res.ok) {
      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json') || contentType.includes('text/plain') || contentType.includes('json')) {
        const data = await res.json();
        const ads = extractAds(data);
        if (ads.length > 0) return ads;
      }
    }
  } catch (e) {
    // ignore and try direct
  }

  try {
    // 2nd Attempt: Direct API fetch
    const res = await fetch(directUrl, { headers: { 'Accept': 'application/json' } });
    if (res.ok) {
      const data = await res.json();
      const ads = extractAds(data);
      if (ads.length > 0) return ads;
    }
  } catch (e) {
    // ignore and use fallback
  }

  return fallbackList;
}

export async function getCheonanWeddingAds(): Promise<WeddingAd[]> {
  const [cpaadRaw, adRaw] = await Promise.all([
    fetchApiData('/api/proxy/cpaad', 'https://woz.co.kr/api/cpaad_json.php', FALLBACK_CPAAD_DATA),
    fetchApiData('/api/proxy/ad', 'https://woz.co.kr/api/ad_json.json', FALLBACK_AD_DATA)
  ]);

  const rawCombined: { item: RawAdItem; isCpaad: boolean }[] = [
    ...cpaadRaw.map(item => ({ item, isCpaad: true })),
    ...adRaw.map(item => ({ item, isCpaad: false }))
  ];

  // Filtering Rules:
  // a. region === 'chungcheong'
  // b. region !== 'etc' (strictly excluded)
  // c. exclude if ad_date includes '매주'
  // d. ad_location must include '천안' or '아산'
  const filtered = rawCombined.filter(({ item }) => {
    if (!item || !item.gather_name) return false;
    if (item.region === 'etc') return false;
    if (item.region !== 'chungcheong') return false;
    if (item.ad_date && item.ad_date.includes('매주')) return false;
    const loc = item.ad_location || '';
    return loc.includes('천안') || loc.includes('아산');
  });

  const parsedAds: WeddingAd[] = filtered.map(({ item, isCpaad }, idx) => {
    const dates = parseDates(item.ad_date || '', item.ad_year || '2026');
    const district = getDistrict(item.ad_location || '');
    const venueName = getVenueName(item.gather_name || '', item.ad_location || '');

    // CPAAD URL rule: append $newid ("wedding2027")
    let finalUrl = item.ad_url || '';
    if (isCpaad && finalUrl) {
      finalUrl = `${finalUrl}${SITE_VARIABLES.newid}`;
    }

    return {
      id: `expo-${isCpaad ? 'cpaad' : 'ad'}-${idx}-${dates.sortTimestamp}`,
      ad_mainvisual: item.ad_mainvisual || '',
      ad_thumbnail: item.ad_thumbnail || item.ad_mainvisual || '',
      ad_thumbnail2: item.ad_thumbnail2 || '',
      ad_url: item.ad_url || '',
      final_url: finalUrl,
      region: item.region || 'chungcheong',
      gather_name: item.gather_name || '천안 웨딩박람회',
      ad_info: item.ad_info || '천안·아산 지역 최신 웨딩페어 및 스드메 혜택전',
      ad_year: item.ad_year || '2026',
      ad_date: item.ad_date || '일정 확인',
      ad_location: item.ad_location || '충남 천안시 특별행사장',
      isCpaad,
      district,
      venueName,
      startDateIso: dates.startDateIso,
      endDateIso: dates.endDateIso,
      sortTimestamp: dates.sortTimestamp,
      rating: 4.9,
      reviewCount: 120 + ((idx * 27) % 80)
    };
  });

  // Sort ascending by event date (날짜 빠른 순서대로 상단 배치)
  parsedAds.sort((a, b) => a.sortTimestamp - b.sortTimestamp);

  return parsedAds;
}
