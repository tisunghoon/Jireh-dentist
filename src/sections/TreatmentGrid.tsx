import { Link } from 'react-router-dom'
import { TREATMENTS } from '../data/treatments'
import SectionHead from '../components/ui/SectionHead'
import './TreatmentGrid.css'

export default function TreatmentGrid() {
  return (
    <section className="treatment-grid section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="TREATMENT"
          title="진료과목"
          description="15개 분야에서 분과별 전문의의 맞춤 진료를 제공합니다."
        />
        <div className="treatment-grid__list">
          {TREATMENTS.map((t) => (
            <Link key={t.slug} to={`/treatments/${t.slug}`} className="treatment-card">
              <div className="treatment-card__body">
                <h3>{t.title}</h3>
                <span>{t.subtitle}</span>
              </div>
              <span className="treatment-card__arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
