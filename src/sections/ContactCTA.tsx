import { CLINIC } from '../data/clinic'
import { img } from '../data/imageBase'
import './ContactCTA.css'

const CTAS = [
  {
    bg: img('fimg1.jpg'),
    eyebrow: 'TEL',
    title: '전화 상담',
    desc: '진료·예약 문의를 전화로 편하게 남겨주세요.',
    label: CLINIC.phone,
    href: CLINIC.phoneTel,
  },
  {
    bg: img('fimg2.jpg'),
    eyebrow: 'KAKAO',
    title: '카카오 상담',
    desc: '카카오톡으로 실시간 상담을 받아보실 수 있습니다.',
    label: '카카오톡 상담 바로가기',
    href: CLINIC.social.kakao,
  },
  {
    bg: img('fimg3.jpg'),
    eyebrow: 'NAVER',
    title: '네이버 예약',
    desc: '원하시는 시간에 비대면으로 간편하게 예약하세요.',
    label: '네이버 예약 바로가기',
    href: CLINIC.social.naverBooking,
  },
]

export default function ContactCTA() {
  return (
    <section className="cta">
      <ul className="cta__grid">
        {CTAS.map((c, i) => (
          <li key={i} className="cta-card" style={{ backgroundImage: `url(${c.bg})` }}>
            <div className="cta-card__veil" />
            <div className="cta-card__body">
              <span className="cta-card__eyebrow">{c.eyebrow}</span>
              <h3 className="cta-card__title">{c.title}</h3>
              <p className="cta-card__desc">{c.desc}</p>
              <a
                href={c.href}
                className="cta-card__btn"
                target={c.href.startsWith('tel:') ? undefined : '_blank'}
                rel="noreferrer"
              >
                {c.label}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
