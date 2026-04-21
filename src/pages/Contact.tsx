import PageHeader from './PageHeader'
import SectionHead from '../components/ui/SectionHead'
import { CLINIC } from '../data/clinic'
import ContactCTA from '../sections/ContactCTA'
import './Contact.css'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="LOCATION"
        title="오시는 길"
        description="대중교통·자가용 모두 편리하게 방문하실 수 있는 위치에 자리하고 있습니다."
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="CONTACT"
            title={CLINIC.name}
            description={CLINIC.tagline}
          />

          <div className="contact__map" aria-label="이레치과 약도">
            <iframe
              title="이레치과 역곡역 위치"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(CLINIC.map.query)}&hl=ko&z=17&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="contact__map-links">
              <a href={CLINIC.map.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                지도에서 크게 보기 →
              </a>
            </div>
          </div>

          <div className="contact__transit">
            <div>
              <span className="contact__transit-label">지하철</span>
              <p>1호선 <b>역곡역</b> 1번 출구 도보 2분</p>
            </div>
            <div>
              <span className="contact__transit-label">버스</span>
              <p>역곡역 정류장 · 간선 7·11·57 / 마을 013·014</p>
            </div>
            <div>
              <span className="contact__transit-label">주차</span>
              <p>건물 지하 1~2층 주차장 (2시간 무료)</p>
            </div>
          </div>

          <div className="contact__info">
            <div className="contact__col">
              <span className="contact__label">주소</span>
              <p>{CLINIC.address}</p>
              {CLINIC.addressDetail && <p>{CLINIC.addressDetail}</p>}
            </div>
            <div className="contact__col">
              <span className="contact__label">연락처</span>
              <p>
                <a href={CLINIC.phoneTel}>{CLINIC.phone}</a>
              </p>
            </div>
            <div className="contact__col">
              <span className="contact__label">진료시간</span>
              <ul>
                {CLINIC.hours.map((h, i) => {
                  const note = 'note' in h ? h.note : undefined
                  return (
                    <li key={i}>
                      <strong>{h.days}</strong>
                      <span>{h.time}</span>
                      {note && <em>{note}</em>}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
