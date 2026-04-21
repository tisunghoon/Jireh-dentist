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
            title="지레 치과의원"
            description={CLINIC.tagline}
          />

          <div className="contact__map" aria-label="지도">
            <div className="contact__map-placeholder">
              <span>지도 영역 (Naver 지도 iframe 삽입 예정)</span>
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
