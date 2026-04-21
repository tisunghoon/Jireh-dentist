export const CLINIC = {
  name: '지레 치과의원',
  nameEn: 'JIREH DENTAL CLINIC',
  tagline: '언제나, 함께하는 치과',
  slogan: '평생 주치의로 함께합니다',
  phone: '000-000-0000',
  phoneTel: 'tel:000-000-0000',
  address: '(주소를 입력해 주세요)',
  addressDetail: '',
  hours: [
    { days: '월 · 수 · 금', time: '09:30 – 18:30', note: '점심 12:30 – 14:00' },
    { days: '화 · 목', time: '09:30 – 20:00', note: '점심 12:30 – 14:00', badge: '야간진료' },
    { days: '토요일', time: '09:30 – 14:00', note: '점심시간 없음' },
    { days: '일요일 · 공휴일', time: '휴진' },
  ],
  social: {
    kakao: '#',
    naverBooking: '#',
    instagram: '#',
    blog: '#',
  },
  business: {
    ceo: '(대표자)',
    registrationNumber: '000-00-00000',
  },
} as const
