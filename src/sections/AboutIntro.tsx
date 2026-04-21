import { Link } from 'react-router-dom'
import { u } from '../data/imageBase'
import './AboutIntro.css'

export default function AboutIntro() {
  return (
    <section className="about-intro section">
      <div className="container">
        <div className="about-intro__grid">
          <div className="about-intro__image">
            <img src={u('1606811971618-4486d14f3f99', 'card')} alt="진료 공간" loading="lazy" />
            <div className="about-intro__image-badge">
              <strong>同行</strong>
              <span>동행</span>
            </div>
          </div>

          <div className="about-intro__text">
            <span className="sect-head__eyebrow">ABOUT IRE DENTAL · 부천 역곡</span>
            <h2 className="about-intro__title">
              역곡 한 건물 안에서,<br />
              <b>온 가족 치과 진료를 완성합니다</b>
            </h2>
            <p className="about-intro__lead">
              이레치과는 역곡역 도보 2분 거리에서<br />
              임플란트·교정·소아·보철까지 분과별 전문의 협진으로<br />
              예후까지 꾸준히 책임지는 진료를 제공합니다.
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
