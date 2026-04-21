import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { BEFORE_AFTER } from '../data/beforeAfter'
import SectionHead from '../components/ui/SectionHead'
import './BeforeAfterSlider.css'

export default function BeforeAfterSlider() {
  return (
    <section className="ba-slider section">
      <div className="container">
        <SectionHead
          eyebrow="CASE STUDY"
          title="치료 전 · 후"
          description="실제 케이스 사진은 안내를 위해 구조적으로 제공되며, 치료 결과는 개인 상태에 따라 달라질 수 있습니다."
        />

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }}
          className="ba-slider__swiper"
        >
          {BEFORE_AFTER.map((c, i) => (
            <SwiperSlide key={i}>
              <div className="ba-card">
                <div className="ba-card__row">
                  <div className="ba-card__item">
                    <span className="ba-card__tag">BEFORE</span>
                    <img src={c.before} alt={`${c.title} before`} loading="lazy" />
                  </div>
                  <div className="ba-card__item ba-card__item--after">
                    <span className="ba-card__tag ba-card__tag--after">AFTER</span>
                    <img src={c.after} alt={`${c.title} after`} loading="lazy" />
                  </div>
                </div>
                <div className="ba-card__caption">
                  <h3>{c.title}</h3>
                  <span>{c.date}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
