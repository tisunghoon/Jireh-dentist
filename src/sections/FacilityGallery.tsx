import { useState } from 'react'
import { FACILITY } from '../data/facility'
import SectionHead from '../components/ui/SectionHead'
import './FacilityGallery.css'

export default function FacilityGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section className="facility section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="FACILITY"
          title="진료 공간"
          description="환자를 배려한 쾌적한 공간에서 편안한 진료를 받으실 수 있습니다."
        />

        <div className="facility__grid">
          {FACILITY.map((f, i) => (
            <button
              key={i}
              className="facility__item"
              data-caption={f.caption}
              onClick={() => setLightbox(i)}
              aria-label={`${f.caption} 확대 보기`}
            >
              <img
                src={f.src}
                alt={f.caption}
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
              />
              <span className="facility__caption">{f.caption}</span>
              <span className="facility__zoom" aria-hidden="true">⤢</span>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="facility__lightbox" onClick={() => setLightbox(null)}>
          <button
            className="facility__lb-close"
            onClick={() => setLightbox(null)}
            aria-label="닫기"
          >
            ×
          </button>
          <button
            className="facility__lb-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + FACILITY.length) % FACILITY.length) }}
            aria-label="이전"
          >
            ‹
          </button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={FACILITY[lightbox].src} alt={FACILITY[lightbox].caption} />
            <figcaption>{FACILITY[lightbox].caption}</figcaption>
          </figure>
          <button
            className="facility__lb-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % FACILITY.length) }}
            aria-label="다음"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
