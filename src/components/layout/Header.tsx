import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import { NAV } from '../../data/navigation'
import { CLINIC } from '../../data/clinic'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__top container">
        <Logo />

        <nav className="site-header__nav" aria-label="주 메뉴">
          {NAV.map((item) => (
            <div key={item.label} className="nav-item">
              <NavLink
                to={item.to}
                className={({ isActive }) => `nav-item__link ${isActive ? 'is-active' : ''}`}
              >
                {item.label}
              </NavLink>
              {item.children && (
                <div className="nav-item__dropdown">
                  <div className="nav-item__dropdown-inner">
                    {item.children.map((c) => (
                      <Link key={c.to} to={c.to} className="nav-item__child">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={CLINIC.phoneTel} className="site-header__phone">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            <span>{CLINIC.phone}</span>
          </a>
          <a href={CLINIC.social.naverBooking} className="btn btn--primary site-header__cta" target="_blank" rel="noopener noreferrer">
            예약 문의
          </a>
          <button
            className={`site-header__toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <div className="mobile-nav__inner">
          {NAV.map((item) => (
            <div key={item.label} className="mobile-nav__group">
              <Link to={item.to} className="mobile-nav__item">
                {item.label}
              </Link>
              {item.children && (
                <div className="mobile-nav__children">
                  {item.children.map((c) => (
                    <Link key={c.to} to={c.to} className="mobile-nav__child">
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-nav__footer">
            <a href={CLINIC.phoneTel} className="btn btn--primary" style={{ width: '100%' }}>
              전화 상담 {CLINIC.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
