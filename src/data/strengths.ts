import { img } from './imageBase'

export type Strength = {
  num: string
  title: string
  subtitle: string
  description: string
  image: string
}

export const STRENGTHS: Strength[] = [
  {
    num: '01',
    title: '분과별 전문의 협진',
    subtitle: 'Specialist Collaboration',
    description:
      '각 분야의 전문의가 한자리에서 협력하여 최적의 치료 계획을 수립합니다.',
    image: img('whyimg1.jpg'),
  },
  {
    num: '02',
    title: '디지털 임플란트 시스템',
    subtitle: 'Digital Implant',
    description:
      '3D CT와 컴퓨터 시뮬레이션을 활용해 정밀하고 안전하게 시술합니다.',
    image: img('whyimg2.jpg'),
  },
  {
    num: '03',
    title: '철저한 멸균 · 감염 관리',
    subtitle: 'Sterilization',
    description:
      '1인 1핸드피스 원칙과 체계적인 멸균 시스템으로 안전을 지킵니다.',
    image: img('whyimg3.jpg'),
  },
  {
    num: '04',
    title: '투명한 비급여 공개',
    subtitle: 'Transparent Pricing',
    description:
      '모든 비급여 진료비를 공개하고, 치료 전 충분한 상담을 진행합니다.',
    image: img('whyimg4.jpg'),
  },
  {
    num: '05',
    title: '평생 구강 건강 관리',
    subtitle: 'Lifetime Care',
    description:
      '치료 이후에도 정기 점검과 관리로 오래도록 함께합니다.',
    image: img('whyimg5.jpg'),
  },
]
