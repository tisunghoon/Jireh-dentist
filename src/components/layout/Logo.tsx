import { Link } from 'react-router-dom'
import { CLINIC } from '../../data/clinic'

export default function Logo({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const primary = variant === 'light' ? '#ffffff' : '#1a3764'
  const accent = variant === 'light' ? 'rgba(255,255,255,.8)' : '#c9a961'
  return (
    <Link to="/" className="logo" aria-label={CLINIC.name}>
      <svg width="42" height="42" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="22" fill="none" stroke={primary} strokeWidth="2" />
        <path
          d="M16 19c0-2.5 2-4.5 4.5-4.5h7c2.5 0 4.5 2 4.5 4.5v3c0 1.1-.9 2-2 2h-.5c0 4-2 7-5.5 7s-5.5-3-5.5-7H18c-1.1 0-2-.9-2-2v-3z"
          fill={primary}
        />
        <path d="M20 33c1 1 2 2 4 2s3-1 4-2" stroke={primary} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <circle cx="36" cy="14" r="2" fill={accent} />
      </svg>
      <span className="logo__text">
        <strong style={{ color: primary }}>{CLINIC.name}</strong>
        <em style={{ color: variant === 'light' ? 'rgba(255,255,255,.5)' : '#999' }}>{CLINIC.nameEn}</em>
      </span>
    </Link>
  )
}
