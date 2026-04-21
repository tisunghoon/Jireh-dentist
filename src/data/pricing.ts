export type PricingItem = { name: string; price: string }
export type PricingCategory = { category: string; items: PricingItem[] }

export const PRICING: PricingCategory[] = [
  {
    category: '충치·보존치료',
    items: [
      { name: '레진 (소)', price: '₩ 00,000' },
      { name: '레진 (중)', price: '₩ 00,000' },
      { name: '레진 (대)', price: '₩ 00,000' },
      { name: '세라믹 인레이', price: '₩ 000,000' },
      { name: '골드 인레이', price: '₩ 000,000' },
    ],
  },
  {
    category: '보철·크라운',
    items: [
      { name: '올세라믹 크라운', price: '₩ 000,000' },
      { name: '지르코니아 크라운', price: '₩ 000,000' },
      { name: 'PFM 크라운', price: '₩ 000,000' },
      { name: '골드 크라운', price: '₩ 000,000' },
      { name: '라미네이트 (1개)', price: '₩ 000,000' },
    ],
  },
  {
    category: '임플란트',
    items: [
      { name: '국산 임플란트', price: '₩ 0,000,000' },
      { name: '수입 임플란트', price: '₩ 0,000,000' },
      { name: '뼈이식 (소량)', price: '₩ 000,000' },
      { name: '뼈이식 (대량)', price: '₩ 000,000' },
      { name: '상악동 거상술', price: '₩ 000,000' },
    ],
  },
  {
    category: '교정·틀니',
    items: [
      { name: '메탈 교정', price: '₩ 0,000,000' },
      { name: '세라믹 교정', price: '₩ 0,000,000' },
      { name: '투명교정 (인비절라인)', price: '₩ 0,000,000' },
      { name: '부분틀니', price: '₩ 0,000,000' },
      { name: '완전틀니', price: '₩ 0,000,000' },
    ],
  },
  {
    category: '미백·기타',
    items: [
      { name: '전문가 미백', price: '₩ 000,000' },
      { name: '불소도포', price: '₩ 00,000' },
      { name: '실란트', price: '₩ 00,000' },
      { name: '사랑니 발치 (단순)', price: '₩ 00,000' },
      { name: '사랑니 발치 (복잡/매복)', price: '₩ 000,000' },
    ],
  },
]
