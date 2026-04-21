import { CLINIC } from '../../data/clinic'
import './FloatingContact.css'

export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a href={CLINIC.social.naverBooking} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn--naver" aria-label="네이버 예약">
        <span>네이버<br />예약</span>
      </a>
      <a href={CLINIC.social.kakao} target="_blank" rel="noopener noreferrer" className="fc-btn fc-btn--kakao" aria-label="카카오 상담">
        <span>카톡<br />상담</span>
      </a>
      <a href={CLINIC.phoneTel} className="fc-btn fc-btn--call" aria-label="전화 상담">
        <span>전화<br />상담</span>
      </a>
      <button
        className="fc-btn fc-btn--top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="맨 위로"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  )
}
