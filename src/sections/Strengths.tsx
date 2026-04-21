import { useState } from 'react'
import { STRENGTHS } from '../data/strengths'
import SectionHead from '../components/ui/SectionHead'
import './Strengths.css'

export default function Strengths() {
  const [active, setActive] = useState(0)
  const current = STRENGTHS[active]

  return (
    <section className="strengths section">
      <div className="container">
        <SectionHead
          eyebrow="WHY US"
          title="치과를 선택하는 5가지 이유"
          description="차별화된 진료 시스템으로 신뢰받는 치과를 만들어 갑니다."
        />

        <div className="strengths__layout">
          <div className="strengths__visual">
            <img src={current.image} alt={current.title} loading="lazy" key={current.num} />
            <div className="strengths__visual-num">{current.num}</div>
          </div>

          <ul className="strengths__list">
            {STRENGTHS.map((s, i) => (
              <li
                key={s.num}
                className={`strength-item ${i === active ? 'is-active' : ''}`}
              >
                <button className="strength-item__head" onClick={() => setActive(i)}>
                  <span className="strength-item__num">{s.num}</span>
                  <span className="strength-item__title">{s.title}</span>
                  <span className="strength-item__sub">{s.subtitle}</span>
                  <span className="strength-item__toggle" aria-hidden="true">
                    {i === active ? '−' : '+'}
                  </span>
                </button>
                {i === active && (
                  <p className="strength-item__body">{s.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
