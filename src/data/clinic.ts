// 이레치과 (부천 역곡) 기본 정보. 실제 상호/연락처/사업자번호/면허번호 수령 후
// 이 파일만 교체하면 전 페이지에 반영됩니다.

export const CLINIC = {
  name: '이레치과',
  nameEn: 'JIREH DENTIST',
  tagline: '역곡에서 평생 함께하는 가족 주치의',
  slogan: '한 분 한 분의 치아를 내 가족처럼',

  phone: '032-345-9075',
  phoneTel: 'tel:032-345-9075',

  address: '경기도 부천시 소사구 경인로 825, 3층',
  addressDetail: '역곡역 1번 출구 도보 2분 · 건물 3층 (엘리베이터 이용)',
  region: '부천 역곡',

  map: {
    query: '경기도 부천시 소사구 경인로 825 이레치과',
    googleMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('경기도 부천시 소사구 경인로 825 이레치과'),
  },

  hours: [
    { days: '월 · 수 · 금', time: '09:30 – 18:30', note: '점심 13:00 – 14:00' },
    {
      days: '화 · 목',
      time: '09:30 – 20:30',
      note: '점심 13:00 – 14:00',
      badge: '야간진료',
    },
    { days: '토요일', time: '09:30 – 14:00', note: '점심시간 없음' },
    { days: '일요일 · 공휴일', time: '휴진' },
  ],

  business: {
    ceo: '김민재',
    registrationNumber: '130-92-01875',
    licenseNumber: '제 2018-부천소사-0042호',
    medicalAd: '의료광고 사전심의필 제 2024-O-O호 (표기 예정)',
  },

  seo: {
    siteUrl: 'https://www.irechika.com',
    title: '이레치과 | 부천 역곡역 치과',
    titleTemplate: '%s | 이레치과 (부천 역곡)',
    description:
      '부천 역곡역 1번 출구 도보 2분. 임플란트·교정·소아·보철 분과별 전문 진료. 이레치과가 역곡 가족의 평생 주치의로 함께합니다.',
    keywords: [
      '이레치과',
      '역곡치과',
      '부천치과',
      '역곡역치과',
      '부천임플란트',
      '역곡임플란트',
      '부천교정',
      '역곡소아치과',
    ],
    ogImage: '/og-cover.jpg',
  },
} as const
