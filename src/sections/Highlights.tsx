import { HIGHLIGHTS } from '../data/highlights'
import './Highlights.css'

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights__grid">
          {HIGHLIGHTS.map((h) => (
            <div key={h.num} className="highlights__item">
              <span className="highlights__num">{h.num}</span>
              <h3 className="highlights__title">{h.title}</h3>
              <p className="highlights__desc">{h.description}</p>
              <span className="highlights__arrow" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
