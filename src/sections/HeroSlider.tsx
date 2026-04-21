import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import { u } from '../data/imageBase'
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
    image: u('1629909613654-28e377c37b09', 'hero'),
    eyebrow: 'JIREH DENTIST · 역곡역 1번 출구 도보 2분',
    titleA: '역곡 가족의',
    titleB: '평생 주치의, 이레치과',
    description:
      '임플란트·교정·소아·보철까지, 한 건물 안에서 분과별 전문 진료를 받으실 수 있습니다.',
    cta: { label: '진료철학 보기', to: '/about/philosophy' },
  },
  {
    image: u('1629909615184-74f495363b67', 'hero'),
    eyebrow: 'DIGITAL IMPLANT',
    titleA: '3D CT 네비게이션',
    titleB: '디지털 임플란트',
    description:
      '정밀 진단 · 가이드 수술 · 장기 관리까지 안심할 수 있는 시스템으로 식립합니다.',
    cta: { label: '임플란트 알아보기', to: '/treatments/implant' },
  },
  {
    image: u('1596461404969-9ae70f2830c1', 'hero'),
    eyebrow: 'FAMILY CARE',
    titleA: '아이부터 어르신까지',
    titleB: '온 가족이 함께하는 치과',
    description:
      '소아 전용 진료실, 보호자 상담실, 무장애 동선 — 역곡 이레치과가 준비했습니다.',
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
