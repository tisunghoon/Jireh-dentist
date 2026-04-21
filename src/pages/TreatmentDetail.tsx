import { Link, useParams } from 'react-router-dom'
import PageHeader from './PageHeader'
import SectionHead from '../components/ui/SectionHead'
import ContactCTA from '../sections/ContactCTA'
import { TREATMENTS, findTreatment } from '../data/treatments'
import './TreatmentDetail.css'

export default function TreatmentDetail() {
  const { slug } = useParams<{ slug: string }>()
  const treatment = slug ? findTreatment(slug) : undefined

  if (!treatment) {
    return (
      <section className="section">
        <div className="container td-empty">
          <h1>진료과목을 찾을 수 없습니다</h1>
          <Link to="/" className="btn btn--primary">
            홈으로 돌아가기
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHeader
        eyebrow={treatment.subtitle.toUpperCase()}
        title={treatment.title}
        description={treatment.description}
        bg={treatment.image}
      />

      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="TREATMENT"
            title={`${treatment.title} 안내`}
            description="정밀 진단과 분과별 전문의 협진으로 안전하고 만족스러운 치료를 제공합니다."
          />

          <div className="td-overview">
            <div className="td-overview__image">
              <img src={treatment.image} alt={treatment.title} loading="lazy" />
            </div>
            <div className="td-overview__body">
              <span className="td-overview__sub">{treatment.subtitle}</span>
              <h3>{treatment.title}</h3>
              <p>{treatment.description}</p>
              <ul>
                {treatment.features.map((f, i) => (
                  <li key={i}>
                    <span aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHead
            eyebrow="OTHER"
            title="다른 진료과목"
            description="지레 치과의 다양한 진료 분야를 둘러보세요."
          />
          <ul className="td-related">
            {TREATMENTS.filter((t) => t.slug !== treatment.slug)
              .slice(0, 5)
              .map((t) => (
                <li key={t.slug}>
                  <Link to={`/treatments/${t.slug}`}>
                    <div className="td-related__thumb">
                      <img src={t.image} alt={t.title} loading="lazy" />
                    </div>
                    <span>{t.title}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
