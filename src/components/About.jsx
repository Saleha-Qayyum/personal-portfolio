import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade up all elements with class gsap-fade-up
      gsap.utils.toArray('.about-fade').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 45,
          duration: 0.8,
          delay: i * 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      className="about-section py-24 md:py-32"
      ref={sectionRef}
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className="flex items-center gap-6 mb-16 about-fade">
          <div>
            <span className="section-label" style={{ color: 'rgba(201,163,107,0.7)' }}>02</span>
            <div className="divider-dark mt-2" />
          </div>
          <div>
            <span className="section-label">About Me</span>
          </div>
          <div className="flex-1 divider-dark" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Bio */}
          <div className="flex flex-col gap-8">
            <h2
              id="about-heading"
              className="about-fade font-serif text-cream leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'Cormorant Garamond, serif' }}
            >
              Aspiring
              <br />
              <em className="italic text-gold">Software Engineer</em>
            </h2>

            <div className="w-12 h-px bg-gold about-fade" aria-hidden="true" />

            <p className="about-fade text-cream/70 text-base leading-loose font-light font-sans">
              I'm a frontend developer who builds responsive, polished web interfaces with
              <strong className="text-cream font-medium"> React, JavaScript, and Tailwind CSS</strong>.
              My work includes animated websites and functional apps with a focus on clean structure and a smooth user experience.
            </p>

            <p className="about-fade text-cream/70 text-base leading-loose font-light font-sans">
              I'm currently expanding into full-stack development with the{' '}
              <strong className="text-gold font-medium">MERN stack</strong>, always driven by
              a passion for beautiful, purposeful interfaces.
            </p>

            {/* Stats row */}
            <div className="about-fade grid grid-cols-3 gap-4 pt-4 border-t border-gold/15">
              {[
                { num: '10+', label: 'Projects' },
                { num: 'MERN', label: 'Stack Focus' },
                { num: '3.45/4', label: 'CGPA' },
              ].map(({ num, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span
                    className="font-serif text-gold"
                    style={{ fontSize: '2rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
                  >
                    {num}
                  </span>
                  <span className="section-label" style={{ color: 'rgba(243,237,228,0.45)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Education */}
          <div className="flex flex-col justify-center gap-8">

            {/* Education card */}
            <div className="about-fade">
              <div className="section-label mb-4" style={{ color: 'rgba(201,163,107,0.6)' }}>
                Education
              </div>
              <div className="edu-card">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3
                      className="font-serif text-cream text-xl mb-1"
                      style={{ fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      Bachelor of Science in Computer Science
                    </h3>
                    {/* PLACEHOLDER: Replace with your university name */}
                    <p className="font-sans text-cream/50 text-sm font-light">
                      Government College University,Faisalabad. &nbsp;·&nbsp; {/* PLACEHOLDER: Add year e.g. 2021–2025 */}[2021 - 2025]
                    </p>
                  </div>
                  <div className="section-label text-gold/70 whitespace-nowrap">CGPA</div>
                </div>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-serif text-gold"
                    style={{ fontSize: '2.5rem', fontFamily: 'Cormorant Garamond, serif', fontWeight: 600, lineHeight: 1 }}
                  >
                    3.45
                  </span>
                  <span className="font-sans text-cream/40 text-sm">/ 4.00</span>
                </div>
              </div>
            </div>

            {/* Approach / what I value */}
            <div className="about-fade">
              <div className="section-label mb-4" style={{ color: 'rgba(201,163,107,0.6)' }}>
                My Approach
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { num: '01', title: 'Clean Structure', desc: 'Semantic, maintainable code that scales gracefully.' },
                  { num: '02', title: 'Smooth UX', desc: 'Purposeful animations that feel natural, not flashy.' },
                  { num: '03', title: 'Responsive Design', desc: 'Pixel-perfect layouts from mobile to widescreen.' },
                ].map(({ num, title, desc }) => (
                  <div key={num} className="flex gap-4 items-start group">
                    <span
                      className="font-serif text-gold/40 text-2xl font-light leading-none mt-1 group-hover:text-gold transition-colors duration-300"
                      style={{ fontFamily: 'Cormorant Garamond, serif', minWidth: '2rem' }}
                    >
                      {num}
                    </span>
                    <div>
                      <h4 className="font-sans text-cream text-sm font-medium mb-1 uppercase tracking-wider">{title}</h4>
                      <p className="font-sans text-cream/50 text-sm font-light leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
