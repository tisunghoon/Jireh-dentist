import { CLINIC } from '../../data/clinic'
import './FloatingContact.css'

export default function FloatingContact() {
  return (
    <div className="floating-contact">
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
