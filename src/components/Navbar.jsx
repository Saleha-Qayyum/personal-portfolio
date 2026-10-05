import { useState, useEffect } from 'react'

const navLinks = [
  { id: 'home',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills' },
  { id: 'contact',  label: 'Contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (id) => {
    scrollTo(id)
    setMenuOpen(false)
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Go to top"
          >
            <div className="w-9 h-9 border border-gold flex items-center justify-center transition-all duration-300 group-hover:bg-gold">
              <span
                className="font-serif font-semibold text-base text-charcoal transition-colors duration-300 group-hover:text-charcoal"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                SQ
              </span>
            </div>
            <span
              className="hidden sm:block font-serif text-lg font-semibold text-charcoal tracking-wide"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Saleha Qayyum
            </span>
          </button>

          {/* Desktop Nav */}
          <nav role="navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`nav-link focus:outline-none ${activeSection === id ? 'active' : ''}`}
                aria-current={activeSection === id ? 'page' : undefined}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className={`hamburger md:hidden focus:outline-none ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Nav Panel */}
      <nav
        id="mobile-nav"
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col h-full pt-24 pb-12 px-8">
          {/* Close btn */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 focus:outline-none"
            aria-label="Close menu"
          >
            <span className="text-charcoal text-2xl leading-none" aria-hidden="true">&times;</span>
          </button>

          <div className="section-label mb-8">Navigation</div>
          <div className="divider mb-8" />

          <div className="flex flex-col gap-6">
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`text-left font-serif text-3xl font-medium transition-colors duration-300 focus:outline-none ${
                  activeSection === id ? 'text-gold' : 'text-charcoal hover:text-gold'
                }`}
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-auto pt-8 border-t border-gold/20">
            <p className="section-label">Frontend Developer</p>
          </div>
        </div>
      </nav>
    </>
  )
}
