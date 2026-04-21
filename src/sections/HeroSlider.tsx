import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { img } from '../data/imageBase'
import { CLINIC } from '../data/clinic'
import './HeroSlider.css'

type Slide = {
  image: string
  eyebrow: string
  titleA: string
  titleB: string
  description: string
  cta: { label: string; to: string }
}

const slides: Slide[] = [
  {
    image: img('inte02.jpg'),
    eyebrow: 'JIREH DENTAL CLINIC',
    titleA: '언제나,',
    titleB: '함께하는 치과',
    description: '진료의 처음부터 끝까지, 평생 주치의로 동행하겠습니다.',
    cta: { label: '진료철학 보기', to: '/about/philosophy' },
  },
  {
    image: img('inte05.jpg'),
    eyebrow: 'DIGITAL IMPLANT',
    titleA: '정밀하고 안전한',
    titleB: '디지털 임플란트',
    description: '3D CT와 네비게이션 시스템으로 정확한 식립을 계획합니다.',
    cta: { label: '임플란트 알아보기', to: '/treatments/implant' },
  },
  {
    image: img('inte07.jpg'),
    eyebrow: 'SPECIALIST CARE',
    titleA: '분과별 전문의가',
    titleB: '함께 치료합니다',
    description: '한 곳에서 모든 치과 진료를 협진으로 완성합니다.',
    cta: { label: '의료진 소개', to: '/about/doctors' },
  },
]

export default function HeroSlider() {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        speed={1000}
        className="hero__swiper"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i} className="hero__slide">
            <div className="hero__image" style={{ backgroundImage: `url("${s.image}")` }} />
            <div className="hero__overlay" />
            <div className="hero__content container">
              <span className="hero__eyebrow">{s.eyebrow}</span>
              <h1 className="hero__title">
                <span>{s.titleA}</span>
                <span>{s.titleB}</span>
              </h1>
              <p className="hero__desc">{s.description}</p>
              <div className="hero__actions">
                <Link to={s.cta.to} className="btn btn--accent">
                  {s.cta.label}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <a href={CLINIC.phoneTel} className="btn btn--ghost">
                  {CLINIC.phone}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero__scroll-indicator" aria-hidden="true">
        <span>SCROLL</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  )
}
