import { Link } from 'react-router-dom'
import { DOCTORS } from '../data/doctors'
import SectionHead from '../components/ui/SectionHead'
import './DoctorsRow.css'

export default function DoctorsRow() {
  return (
    <section className="doctors-row section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="MEDICAL TEAM"
          title="분과별 전문의 협진 시스템"
          description="각 분야의 전문의가 협진을 통해 최적의 치료를 제공합니다."
        />

        <div className="doctors-row__grid">
          {DOCTORS.map((d) => (
            <div key={d.id} className="doctor-card">
              <div className="doctor-card__body">
                <span className="doctor-card__role">{d.role}</span>
                <h3 className="doctor-card__name">{d.name}</h3>
                <p className="doctor-card__specialty">{d.specialty}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="doctors-row__footer">
          <Link to="/about/doctors" className="btn btn--outline">의료진 전체 소개 보기</Link>
        </div>
      </div>
    </section>
  )
}
