import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import salehaPhoto from '../assets/saleha2.png'

// Rotating circular text badge
function RotatingBadge() {
  const text = 'Frontend Developer · React · JavaScript · '
  const radius = 48
  const circumference = 2 * Math.PI * radius
  const chars = text.split('')
  const total = chars.length

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      {/* Center monogram */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <span
          className="font-serif text-gold text-xl font-semibold"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          SQ
        </span>
      </div>
      {/* Rotating text ring */}
      <svg
        viewBox="0 0 128 128"
        width="128"
        height="128"
        className="rotate-text-svg absolute inset-0"
        aria-hidden="true"
      >
        <defs>
          <path
            id="circle-path"
            d="M 64,64 m -48,0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
          />
        </defs>
        <circle cx="64" cy="64" r="50" fill="none" stroke="rgba(201,163,107,0.2)" strokeWidth="1" />
        <circle cx="64" cy="64" r="44" fill="none" stroke="rgba(201,163,107,0.1)" strokeWidth="0.5" />
        <text className="hero-badge-text" style={{ fontSize: '7.5px', fill: '#C9A36B', fontFamily: 'Jost, sans-serif', letterSpacing: '0.12em' }}>
          <textPath href="#circle-path" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const taglineRef = useRef(null)
  const btnsRef = useRef(null)
  const photoRef = useRef(null)
  const badgeRef = useRef(null)
  const decorRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(labelRef.current, { opacity: 0, y: 20, duration: 0.6 })
        .from(headingRef.current, { opacity: 0, y: 50, duration: 0.9 }, '-=0.3')
        .from(taglineRef.current, { opacity: 0, y: 25, duration: 0.6 }, '-=0.4')
        .from(btnsRef.current, { opacity: 0, y: 20, duration: 0.6 }, '-=0.3')
        .from(photoRef.current, { opacity: 0, x: 50, duration: 0.9, ease: 'power2.out' }, '-=0.7')
        .from(badgeRef.current, { opacity: 0, scale: 0.6, rotation: -90, duration: 0.8, ease: 'back.out(1.4)' }, '-=0.5')
        .from(decorRef.current, { opacity: 0, duration: 0.5 }, '-=0.3')
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      className="hero-section flex items-center"
      ref={containerRef}
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        ref={decorRef}
      >
        {/* Large subtle serif "01" */}
        <span
          className="absolute top-20 right-8 font-serif text-9xl font-light select-none"
          style={{ color: 'rgba(201,163,107,0.06)', fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(6rem, 14vw, 14rem)' }}
        >
          01
        </span>
        {/* Top horizontal thin line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        {/* Dot grid subtle */}
        <div
          className="absolute bottom-16 left-8 w-24 h-24 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #C9A36B 1px, transparent 1px)',
            backgroundSize: '10px 10px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full pt-36 pb-16 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen lg:min-h-0 lg:py-28">

          {/* LEFT — Text content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Greeting + Name + Role — one cohesive intro block */}
            <h1
              id="hero-heading"
              ref={headingRef}
              className="font-serif text-charcoal leading-tight"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
            >
              {/* Greeting line */}
              <span
                ref={labelRef}
                className="block font-sans font-light text-charcoal/60"
                style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.4rem' }}
              >
                Hi, I&apos;m
              </span>
              {/* Name — slightly smaller than before */}
              <span
                className="block leading-none"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
              >
                Saleha <em className="not-italic text-gold">Qayyum</em>
              </span>
              {/* Role — big, prominent */}
              <span
                className="block text-charcoal/80 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.6rem)', fontWeight: 400, marginTop: '0.3rem' }}
              >
                Frontend Developer
              </span>
            </h1>

            {/* Divider */}
            <div className="w-16 h-px bg-gold" aria-hidden="true" />

            {/* Tagline */}
            <p
              ref={taglineRef}
              className="text-charcoal/70 text-base md:text-lg leading-relaxed max-w-md font-sans font-light"
            >
              I build <strong className="font-medium text-charcoal">responsive, polished</strong> web interfaces
              with React, JavaScript, and Tailwind CSS.
            </p>

            {/* CTA Buttons */}
            <div ref={btnsRef} className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/Saleha-Qayyum"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Visit Saleha Qayyum's GitHub profile (opens in new tab)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/saleha-qayyum1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                aria-label="Visit Saleha Qayyum's LinkedIn profile (opens in new tab)"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Scroll hint */}
            <div className="flex items-center gap-2 pt-4 opacity-50" aria-hidden="true">
              <div className="w-px h-8 bg-gold" />
              <span className="section-label" style={{ fontSize: '0.6rem' }}>Scroll to explore</span>
            </div>
          </div>

          {/* RIGHT — Photo */}
          <div className="flex justify-center lg:justify-end items-center order-1 lg:order-2 relative">
            {/* Rotating badge */}
            <div
              ref={badgeRef}
              className="absolute top-0 right-0 lg:-top-8 lg:-right-4 z-20"
              aria-hidden="true"
            >
              <RotatingBadge />
            </div>

            {/* Gold shape accent */}
            <div
              className="absolute -bottom-4 -left-4 w-48 h-48 rounded-full opacity-10 z-0"
              style={{ background: 'radial-gradient(circle, #C9A36B, transparent 70%)' }}
              aria-hidden="true"
            />

            <div
              ref={photoRef}
              className="photo-frame relative z-10"
              style={{ width: 'clamp(260px, 35vw, 420px)', height: 'clamp(320px, 45vw, 520px)' }}
            >
              <img
                src={salehaPhoto}
                alt="Saleha Qayyum — Frontend Developer"
                className="photo-img"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
