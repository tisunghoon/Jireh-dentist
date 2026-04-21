import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { REVIEWS } from '../data/reviews'
import SectionHead from '../components/ui/SectionHead'
import './Reviews.css'

const platformLabel = {
  naver: { label: 'NAVER', className: 'rv-tag--naver' },
  kakao: { label: 'KAKAO', className: 'rv-tag--kakao' },
  google: { label: 'GOOGLE', className: 'rv-tag--google' },
}

export default function Reviews() {
  return (
    <section className="reviews section">
      <div className="container">
        <SectionHead
          eyebrow="REVIEWS"
          title="고객 후기"
          description="환자분들이 직접 남겨 주신 소중한 후기입니다."
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="reviews__swiper"
        >
          {REVIEWS.map((r, i) => {
            const p = platformLabel[r.platform]
            return (
              <SwiperSlide key={i}>
                <article className="rv-card">
                  <div className="rv-card__top">
                    <span className={`rv-tag ${p.className}`}>{p.label}</span>
                    <span className="rv-card__date">{r.date}</span>
                  </div>
                  <div className="rv-card__stars">
                    {'★★★★★'}
                  </div>
                  <h3 className="rv-card__title">{r.title}</h3>
                  <p className="rv-card__preview">{r.preview}</p>
                  <span className="rv-card__tag">#{r.tag}</span>
                </article>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}
