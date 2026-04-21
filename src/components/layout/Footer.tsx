import { Link } from 'react-router-dom'
import Logo from './Logo'
import { CLINIC } from '../../data/clinic'
import { NAV } from '../../data/navigation'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main container">
        <div className="site-footer__brand">
          <Logo variant="light" />
          <p className="site-footer__tagline">{CLINIC.tagline}</p>
          <p className="site-footer__desc">
            분과별 전문의의 협진과 체계적인 진료 시스템으로<br />
            평생 구강 건강을 함께 관리해 드리겠습니다.
          </p>
        </div>

        <div className="site-footer__nav">
          {NAV.map((item) => (
            <div key={item.label} className="site-footer__col">
              <h4>{item.label}</h4>
              {item.children ? (
                <ul>
                  {item.children.slice(0, 6).map((c) => (
                    <li key={c.to}><Link to={c.to}>{c.label}</Link></li>
                  ))}
                </ul>
              ) : (
                <ul>
                  <li><Link to={item.to}>{item.label}</Link></li>
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="site-footer__contact">
          <h4>연락처</h4>
          <a href={CLINIC.phoneTel} className="site-footer__phone">
            {CLINIC.phone}
          </a>
          <p>{CLINIC.address}</p>
          <ul className="site-footer__hours">
            {CLINIC.hours.map((h) => (
              <li key={h.days}>
                <strong>{h.days}</strong>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container site-footer__bottom-inner">
          <p>
            상호 <b>{CLINIC.name}</b> &nbsp;|&nbsp; 대표원장 {CLINIC.business.ceo}
            &nbsp;|&nbsp; 사업자등록번호 {CLINIC.business.registrationNumber}
            &nbsp;|&nbsp; 의료기관 개설신고번호 {CLINIC.business.licenseNumber}
          </p>
          <p>
            {CLINIC.address} · {CLINIC.phone}
          </p>
          <p className="site-footer__copy">
            © {new Date().getFullYear()} {CLINIC.nameEn}. All rights reserved.
            &nbsp;|&nbsp; {CLINIC.business.medicalAd}
          </p>
        </div>
      </div>
    </footer>
  )
}
