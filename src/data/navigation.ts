export type NavChild = { label: string; to: string }
export type NavItem = { label: string; to: string; children?: NavChild[] }

export const NAV: NavItem[] = [
  {
    label: '병원소개',
    to: '/about/philosophy',
    children: [
      { label: '진료철학', to: '/about/philosophy' },
      { label: '의료진소개', to: '/about/doctors' },
      { label: '치과강점', to: '/about/strengths' },
      { label: '시설안내', to: '/about/facility' },
    ],
  },
  {
    label: '진료과목',
    to: '/treatments/implant',
    children: [
      { label: '임플란트', to: '/treatments/implant' },
      { label: '네비게이션 임플란트', to: '/treatments/navigation-implant' },
      { label: '뼈이식 임플란트', to: '/treatments/bone-graft' },
      { label: '라미네이트', to: '/treatments/laminate' },
      { label: '심미보철', to: '/treatments/prosthetics' },
      { label: '투명교정', to: '/treatments/clear-aligner' },
      { label: '치아교정', to: '/treatments/orthodontics' },
      { label: '치주치료', to: '/treatments/periodontics' },
      { label: '신경치료', to: '/treatments/endodontics' },
      { label: '사랑니 발치', to: '/treatments/wisdom-tooth' },
      { label: '턱관절 치료', to: '/treatments/tmj' },
      { label: '틀니', to: '/treatments/denture' },
      { label: '소아치과', to: '/treatments/pediatric' },
      { label: '미백', to: '/treatments/whitening' },
      { label: '스케일링', to: '/treatments/scaling' },
    ],
  },
  { label: '고객후기', to: '/reviews' },
  { label: '오시는길', to: '/contact' },
]
