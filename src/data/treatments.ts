import { img } from './imageBase'

export type Treatment = {
  slug: string
  title: string
  subtitle: string
  image: string
  description: string
  features: string[]
}

export const TREATMENTS: Treatment[] = [
  {
    slug: 'implant',
    title: '임플란트',
    subtitle: 'Implant',
    image: img('main5img1_1.jpg'),
    description: '자연치아와 가장 유사한 기능과 심미성을 되찾는 치료입니다.',
    features: ['정밀 진단', '분과별 전문의 협진', '장기 관리 시스템'],
  },
  {
    slug: 'navigation-implant',
    title: '네비게이션 임플란트',
    subtitle: 'Navigation Implant',
    image: img('main5img1_2.jpg'),
    description: '3D CT 기반 컴퓨터 시뮬레이션으로 정밀한 식립 위치를 계획합니다.',
    features: ['3D CT 촬영', '컴퓨터 시뮬레이션', '가이드 수술'],
  },
  {
    slug: 'bone-graft',
    title: '뼈이식 임플란트',
    subtitle: 'Bone Graft',
    image: img('main5img1_3.jpg'),
    description: '잇몸뼈가 부족한 경우 뼈이식을 병행하여 임플란트를 식립합니다.',
    features: ['정밀 진단', '맞춤형 뼈이식', '안정적 식립'],
  },
  {
    slug: 'laminate',
    title: '라미네이트',
    subtitle: 'Laminate',
    image: img('main5img1_4.jpg'),
    description: '치아 표면을 최소한으로 삭제하여 색상과 형태를 개선합니다.',
    features: ['최소 삭제', '심미 개선', '자연스러운 색상'],
  },
  {
    slug: 'prosthetics',
    title: '심미보철',
    subtitle: 'Prosthetics',
    image: img('main5img1_5.jpg'),
    description: '올세라믹·지르코니아 등 자연치와 유사한 재료로 보철 치료를 진행합니다.',
    features: ['올세라믹', '지르코니아', '정밀 제작'],
  },
  {
    slug: 'clear-aligner',
    title: '투명교정',
    subtitle: 'Clear Aligner',
    image: img('main5img1_6.jpg'),
    description: '투명한 교정장치로 티나지 않게 치아를 가지런히 정렬합니다.',
    features: ['투명 장치', '탈착 가능', '편안한 착용'],
  },
  {
    slug: 'orthodontics',
    title: '치아교정',
    subtitle: 'Orthodontics',
    image: img('main5img1_7.jpg'),
    description: '메탈·세라믹 브라켓을 이용한 전통적이고 효과적인 교정 방법입니다.',
    features: ['성인·청소년 교정', '맞춤 플랜', '정밀 진단'],
  },
  {
    slug: 'periodontics',
    title: '치주치료',
    subtitle: 'Periodontics',
    image: img('main5img1_8.jpg'),
    description: '치주 질환의 단계별 맞춤 치료로 잇몸 건강을 회복합니다.',
    features: ['단계별 맞춤치료', '잇몸 재생', '정기 관리'],
  },
  {
    slug: 'endodontics',
    title: '신경치료',
    subtitle: 'Endodontics',
    image: img('main5img1_9.jpg'),
    description: '치아 내부 신경을 보존하며 감염을 제거하는 치료입니다.',
    features: ['정밀 진단', '마이크로스코프', '자연치 보존'],
  },
  {
    slug: 'wisdom-tooth',
    title: '사랑니 발치',
    subtitle: 'Wisdom Tooth',
    image: img('main5img1_10.jpg'),
    description: '다양한 케이스의 사랑니를 안전하고 빠르게 발치합니다.',
    features: ['정밀 CT 진단', '최소 절개', '빠른 회복'],
  },
  {
    slug: 'tmj',
    title: '턱관절 치료',
    subtitle: 'TMJ',
    image: img('main5img1_11.jpg'),
    description: '턱관절 장애 원인을 진단하고 맞춤 치료를 제공합니다.',
    features: ['정밀 진단', '맞춤 장치', '통증 관리'],
  },
  {
    slug: 'denture',
    title: '틀니',
    subtitle: 'Denture',
    image: img('main5img1_12.jpg'),
    description: '부분틀니·완전틀니를 정밀 제작하여 편안한 착용감을 제공합니다.',
    features: ['정밀 제작', '편안한 착용', '자연스러운 심미'],
  },
  {
    slug: 'pediatric',
    title: '소아치과',
    subtitle: 'Pediatric',
    image: img('main5img1_13.jpg'),
    description: '어린이 전용 진료실에서 아이 눈높이에 맞춘 치료를 제공합니다.',
    features: ['어린이 전용실', '행동조절 치료', '예방 관리'],
  },
  {
    slug: 'whitening',
    title: '미백',
    subtitle: 'Whitening',
    image: img('main5img1_14.jpg'),
    description: '전문가 미백 시스템으로 치아 본연의 밝기를 회복합니다.',
    features: ['전문가 미백', '맞춤 농도', '빠른 효과'],
  },
  {
    slug: 'scaling',
    title: '스케일링',
    subtitle: 'Scaling',
    image: img('main5img1_15.jpg'),
    description: '정기적인 스케일링으로 치주 질환을 예방하고 구강을 건강하게 관리합니다.',
    features: ['건강보험 적용', '정기 관리', '예방 치료'],
  },
]

export const findTreatment = (slug: string) =>
  TREATMENTS.find((t) => t.slug === slug)
