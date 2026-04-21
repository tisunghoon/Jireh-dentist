import { Link } from 'react-router-dom'
import { img } from '../data/imageBase'
import './AboutIntro.css'

export default function AboutIntro() {
  return (
    <section className="about-intro section">
      <div className="container">
        <div className="about-intro__grid">
          <div className="about-intro__image">
            <img src={img('inte03.jpg')} alt="진료 공간" loading="lazy" />
            <div className="about-intro__image-badge">
              <strong>同行</strong>
              <span>동행</span>
            </div>
          </div>

          <div className="about-intro__text">
            <span className="sect-head__eyebrow">ABOUT OUR CLINIC</span>
            <h2 className="about-intro__title">
              진료의 처음부터 끝까지,<br />
              <b>같은 곳을 바라보며 동행합니다</b>
            </h2>
            <p className="about-intro__lead">
              건강한 치아와 구강은 매일의 삶을 풍요롭게 만듭니다.<br />
              정확한 진단과 분과별 전문의 협진으로<br />
              예후까지 세심하게 관리하는 진료를 제공합니다.
            </p>

            <ul className="about-intro__points">
              <li>
                <span>01</span>
                <div>
                  <b>정확한 진단</b>
                  <p>3D CT · 디지털 구강 스캐너로 정밀하게 확인합니다.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <b>맞춤형 치료 계획</b>
                  <p>환자의 상태와 일상에 맞춘 치료를 제안합니다.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <b>꾸준한 유지 관리</b>
                  <p>치료 이후에도 정기 관리로 건강을 지켜갑니다.</p>
                </div>
              </li>
            </ul>

            <div className="about-intro__actions">
              <Link to="/about/philosophy" className="btn btn--primary">진료철학 자세히 보기</Link>
              <Link to="/about/doctors" className="btn btn--outline">의료진 소개</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
