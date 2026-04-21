import SectionHead from '../components/ui/SectionHead'
import './Philosophy.css'

const VALUES = [
  { icon: '♡', title: '환자 중심', desc: '환자의 시간과 상황을 존중하고 필요 이상 치료하지 않습니다.' },
  { icon: '◎', title: '정확한 진단', desc: '디지털 장비로 진단하고 충분한 설명 후 치료를 시작합니다.' },
  { icon: '◈', title: '전문의 협진', desc: '분과별 전문의가 협력하여 최적의 계획을 수립합니다.' },
  { icon: '✓', title: '사후 관리', desc: '치료 후에도 정기 관리로 건강을 꾸준히 지킵니다.' },
]

export default function Philosophy() {
  return (
    <section className="philosophy section">
      <div className="container">
        <SectionHead
          eyebrow="OUR PHILOSOPHY"
          title="동행, 함께 걷는 치과"
          description="치료의 시작부터 이후의 관리까지 같은 곳을 바라보며 동행합니다."
        />
        <div className="philosophy__grid">
          {VALUES.map((v, i) => (
            <div key={i} className="philosophy__card">
              <div className="philosophy__icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
