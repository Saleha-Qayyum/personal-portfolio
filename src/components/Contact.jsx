import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────────────────────
// EMAILJS CONFIGURATION
// Replace these placeholders with your actual EmailJS credentials
// Sign up free at https://www.emailjs.com/
// ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID = 'service_a98xuxo'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_bl9yn1n'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = 'E6f42NEWg-FLCK3XG'   // e.g. 'user_AbCdEfGh'
// ─────────────────────────────────────────────────────────────

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.message.trim()) {
    errors.message = 'Message is required.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

function EnvelopeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Contact() {
  const sectionRef = useRef(null)
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.contact-fade').forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.75,
          delay: i * 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    // Clear error on change
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate(values)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')

    try {
      // Dynamic import to avoid hard dependency if EmailJS keys aren't set
      const emailjs = await import('@emailjs/browser')
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
          to_name: 'Saleha',
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="contact-section py-24 md:py-32"
      ref={sectionRef}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="contact-fade flex items-center gap-3 mb-4">
          <span className="section-label" style={{ color: 'rgba(201,163,107,0.5)' }}>05</span>
          <div className="w-8 h-px bg-gold/30" aria-hidden="true" />
          <span className="section-label">Contact</span>
        </div>

        <div className="contact-fade mb-16">
          <h2
            id="contact-heading"
            className="font-serif text-cream mb-4"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif' }}
          >
            Let's Work Together
          </h2>
          <p className="font-sans text-cream/50 text-base font-light max-w-lg">
            Have a project in mind or want to connect? Feel free to reach out — I'm always open to new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-2 contact-fade">

            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <EnvelopeIcon />
              </div>
              <div>
                <div className="form-label mb-1">Email</div>
                <a
                  href="mailto:salehaqayyyum@gmail.com"
                  className="font-sans text-cream/80 text-sm hover:text-gold transition-colors duration-300"
                  aria-label="Send email to salehaqayyyum@gmail.com"
                >
                  salehaqayyyum@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon" aria-hidden="true">
                <LinkedInIcon />
              </div>
              <div>
                <div className="form-label mb-1">LinkedIn</div>
                <a
                  href="https://www.linkedin.com/in/saleha-qayyum1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-cream/80 text-sm hover:text-gold transition-colors duration-300"
                  aria-label="Visit Saleha Qayyum's LinkedIn profile (opens in new tab)"
                >
                  linkedin.com/in/saleha-qayyum1
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-6 p-4 border border-gold/15 bg-gold/5">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="section-label" style={{ color: '#C9A36B', fontSize: '0.6rem' }}>Available for work</span>
              </div>
              <p className="font-sans text-cream/40 text-xs font-light leading-relaxed">
                Currently open to freelance projects and full-time frontend/MERN roles.
              </p>
            </div>

          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3 contact-fade">
            {status === 'success' ? (
              <div className="success-msg" role="alert" aria-live="polite">
                <span aria-hidden="true">✦</span> Thank you! Your message has been sent successfully.
                <br />
                <span className="text-cream/40 text-xs mt-1 block">I'll get back to you within 24–48 hours.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <div className="flex flex-col gap-5">

                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">Your Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange}
                      placeholder="Saleha Qayyum"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <span id="name-error" className="form-error" role="alert">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">Email Address</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error" role="alert">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <span id="message-error" className="form-error" role="alert">{errors.message}</span>
                    )}
                  </div>

                  {status === 'error' && (
                    <p className="form-error" role="alert">
                      Something went wrong. Please email me directly at{' '}
                      <a href="mailto:salehaqayyyum@gmail.com" className="text-gold underline">
                        salehaqayyyum@gmail.com
                      </a>
                    </p>
                  )}

                  <button
                    id="contact-submit"
                    type="submit"
                    className="btn-submit"
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                  >
                    <span>
                      {status === 'loading' ? 'Sending…' : 'Send Message'}
                    </span>
                  </button>

                  <p className="font-sans text-cream/25 text-xs text-center font-light">
                    {/* EMAILJS NOTE: Add your EmailJS credentials at the top of this file */}
                    Powered by EmailJS · Your message goes directly to my inbox
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
