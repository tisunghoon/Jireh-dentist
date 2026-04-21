import { Link } from 'react-router-dom'
import { CLINIC } from '../data/clinic'
import './ContactCTA.css'

const CTAS = [
  {
    eyebrow: 'TEL',
    title: '전화 상담',
    desc: '진료·예약 문의를 전화로 편하게 남겨주세요.',
    label: CLINIC.phone,
    href: CLINIC.phoneTel,
    external: false,
  },
  {
    eyebrow: 'HOURS',
    title: '진료시간 안내',
    desc: '화·목 야간진료 20:30까지 · 토요일 14:00까지 · 일요일 및 공휴일은 휴진합니다.',
    label: '자세한 진료시간 보기',
    href: '/contact',
    external: false,
    internal: true,
  },
  {
    eyebrow: 'VISIT',
    title: '오시는 길',
    desc: '역곡역 1번 출구 도보 2분 · 지하 주차장 2시간 무료 이용 가능.',
    label: '찾아오시는 길 보기',
    href: '/contact',
    external: false,
    internal: true,
  },
]

export default function ContactCTA() {
  return (
    <section className="cta">
      <ul className="cta__grid">
        {CTAS.map((c, i) => (
          <li key={i} className="cta-card">
            <div className="cta-card__body">
              <span className="cta-card__eyebrow">{c.eyebrow}</span>
              <h3 className="cta-card__title">{c.title}</h3>
              <p className="cta-card__desc">{c.desc}</p>
              {c.internal ? (
                <Link to={c.href} className="cta-card__btn">
                  {c.label}
                  <span aria-hidden="true">→</span>
                </Link>
              ) : (
                <a
                  href={c.href}
                  className="cta-card__btn"
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                >
                  {c.label}
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
