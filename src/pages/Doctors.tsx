import PageHeader from './PageHeader'
import SectionHead from '../components/ui/SectionHead'
import { DOCTORS } from '../data/doctors'
import './Doctors.css'

export default function DoctorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="DOCTORS"
        title="의료진 소개"
        description="분과별 전문성을 갖춘 의료진이 협진하여 최선의 치료를 제공합니다."
      />
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="MEDICAL TEAM"
            title="환자와 함께하는 의료진"
            description="풍부한 임상 경험과 꾸준한 학문적 탐구로, 신뢰할 수 있는 진료를 약속드립니다."
          />
          <ul className="doctors-page__grid">
            {DOCTORS.map((d) => (
              <li key={d.id} className="doctor-full">
                <div className="doctor-full__body">
                  <span className="doctor-full__role">{d.role}</span>
                  <h3 className="doctor-full__name">
                    {d.name} <span>{d.specialty}</span>
                  </h3>
                  <ul className="doctor-full__credentials">
                    {d.credentials.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
