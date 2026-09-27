export interface RawAdItem {
  ad_mainvisual?: string;
  ad_thumbnail?: string;
  ad_thumbnail2?: string;
  ad_url?: string;
  region?: string;
  gather_name?: string;
  ad_info?: string;
  ad_year?: string;
  ad_date?: string;
  ad_location?: string;
  [key: string]: any;
}

export interface WeddingAd {
  id: string;
  ad_mainvisual: string;
  ad_thumbnail: string;
  ad_thumbnail2: string;
  ad_url: string;
  final_url: string;
  region: string;
  gather_name: string;
  ad_info: string;
  ad_year: string;
  ad_date: string;
  ad_location: string;
  isCpaad: boolean;
  district: string;
  venueName: string;
  startDateIso: string;
  endDateIso: string;
  sortTimestamp: number;
  rating: number;
  reviewCount: number;
}

export type DistrictFilter = 'ALL' | 'SEOBUL' | 'DONGNAM' | 'ASAN';
