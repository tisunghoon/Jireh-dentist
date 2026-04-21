import SectionHead from '../components/ui/SectionHead'
import { img } from '../data/imageBase'
import './BlogPreview.css'

const POSTS = [
  {
    category: '임플란트',
    title: '임플란트 식립 전 알아두면 좋은 체크리스트',
    date: '2025.11.18',
    thumb: img('main5img1_1.jpg'),
  },
  {
    category: '교정',
    title: '투명교정, 나에게 맞는 선택일까?',
    date: '2025.10.27',
    thumb: img('main5img1_6.jpg'),
  },
  {
    category: '심미치료',
    title: '라미네이트로 앞니 모양을 개선하는 방법',
    date: '2025.10.04',
    thumb: img('main5img1_4.jpg'),
  },
]

export default function BlogPreview() {
  return (
    <section className="blog section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="BLOG"
          title="치과 이야기"
          description="지레 치과의 진료 노하우와 건강한 치아 관리 팁을 전해드립니다."
        />

        <ul className="blog__grid">
          {POSTS.map((p, i) => (
            <li key={i} className="blog-card">
              <a href="#" className="blog-card__thumb">
                <img src={p.thumb} alt={p.title} loading="lazy" />
              </a>
              <div className="blog-card__body">
                <span className="blog-card__cat">{p.category}</span>
                <h3 className="blog-card__title">
                  <a href="#">{p.title}</a>
                </h3>
                <span className="blog-card__date">{p.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
