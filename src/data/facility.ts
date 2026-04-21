import { u } from './imageBase'

export type FacilityItem = { src: string; caption: string }

// Unsplash 핫링크 placeholder. 실제 이레치과 사진 준비되면
// public/images/facility/ 로 교체하세요.
export const FACILITY: FacilityItem[] = [
  { src: u('1629909613654-28e377c37b09', 'card'), caption: '진료실' },
  { src: u('1629909615184-74f495363b67', 'card'), caption: '임플란트 수술실' },
  { src: u('1657470179445-90f5f7cba29d', 'card'), caption: '상담실' },
  { src: u('1677137227865-8096c34b4ee1', 'card'), caption: '3D CT 촬영실' },
]
