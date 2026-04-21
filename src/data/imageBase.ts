// 이레치과 이미지 헬퍼. Unsplash CDN 이미지를 일관된 파라미터로 요청합니다.
// 추후 로컬 public/images/ 전환 시 이 파일만 교체하면 전체 반영됩니다.

const UNSPLASH_BASE = 'https://images.unsplash.com'

type Variant = 'hero' | 'card' | 'portrait' | 'thumb' | 'pageHeader'

const VARIANT_PARAMS: Record<Variant, string> = {
  hero: 'w=1920&q=80&auto=format&fit=crop',
  card: 'w=1200&q=80&auto=format&fit=crop',
  portrait: 'w=900&h=1100&q=80&auto=format&fit=crop&crop=faces',
  thumb: 'w=800&q=80&auto=format&fit=crop',
  pageHeader: 'w=1920&h=900&q=80&auto=format&fit=crop',
}

export const u = (id: string, variant: Variant = 'card') =>
  `${UNSPLASH_BASE}/photo-${id}?${VARIANT_PARAMS[variant]}`

export const PLACEHOLDER_IMG =
  'https://placehold.co/800x600/1a3764/ffffff?text=Jireh+Dental'
