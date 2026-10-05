import htmlLogo     from '../assets/HTML5_logo_and_wordmark.svg.webp'
import cssLogo      from '../assets/kisspng-cascading-style-sheets-css3-web-development-html-w-css3-5b352a7f6d4c82.5951114515302109434477.jpg'
import jsLogo       from '../assets/javascript-logo-javascript-icon-transparent-free-png.webp'
import reactLogo    from '../assets/React-icon.svg.webp'
import gitLogo      from '../assets/Git-Icon-1788C.png'
import githubLogo   from '../assets/png-transparent-github-logo-thumbnail.png'
import tailwindLogo from '../assets/tailwind-css-logo-rounded-free-png.webp'

const skills = [
  { name: 'HTML5',       img: htmlLogo,     color: '#E34F26' },
  { name: 'CSS3',        img: cssLogo,      color: '#1572B6' },
  { name: 'JavaScript',  img: jsLogo,       color: '#F7DF1E' },
  { name: 'React',       img: reactLogo,    color: '#61DAFB' },
  { name: 'Tailwind CSS',img: tailwindLogo, color: '#06B6D4' },
  { name: 'Git',         img: gitLogo,      color: '#F05032' },
  { name: 'GitHub',      img: githubLogo,   color: '#e0e0e0' },
  { name: 'JavaScript',  img: jsLogo,       color: '#F7DF1E' },
  { name: 'GSAP',        img: null,         color: '#88CE02', isGsap: true },
  { name: 'Bootstrap',   img: null,         color: '#7952B3', isBoot: true },
]

// Deduplicate by name
const uniqueSkills = skills.filter((s, i, arr) => arr.findIndex(x => x.name === s.name) === i)

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32"
      style={{ background: '#111111', color: '#F3EDE4' }}
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-label" style={{ color: 'rgba(201,163,107,0.5)' }}>04</span>
              <div className="w-8 h-px" style={{ background: 'rgba(201,163,107,0.3)' }} />
              <span className="section-label">Skills</span>
            </div>
            <h2
              id="skills-heading"
              className="font-serif"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif', color: '#F3EDE4' }}
            >
              Tools &amp; Technologies
            </h2>
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', background: 'rgba(201,163,107,0.15)', marginBottom: '3rem' }} />

        {/* Skill cards grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          role="list"
        >
          {uniqueSkills.map((skill) => (
            <div
              key={skill.name}
              className="skill-card group"
              role="listitem"
            >
              <div className="skill-icon">
                {skill.isGsap ? (
                  <div style={{
                    width: '2.5rem', height: '2.5rem',
                    background: 'linear-gradient(135deg, #0ae448, #88CE02)',
                    borderRadius: '6px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ color: '#000', fontWeight: 700, fontSize: '0.72rem', fontFamily: 'Jost,sans-serif' }}>GSAP</span>
                  </div>
                ) : skill.isBoot ? (
                  <div style={{
                    width: '2.5rem', height: '2.5rem',
                    background: 'linear-gradient(135deg, #7952B3, #a379e0)',
                    borderRadius: '6px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.65rem', fontFamily: 'Jost,sans-serif' }}>BS</span>
                  </div>
                ) : (
                  <img
                    src={skill.img}
                    alt={skill.name}
                    style={{ width: '2.5rem', height: '2.5rem', objectFit: 'contain' }}
                  />
                )}
              </div>
              <span className="skill-name">{skill.name}</span>
              <div
                className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: skill.color }}
              />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-14 pt-8 flex items-center gap-3" style={{ borderTop: '1px solid rgba(201,163,107,0.1)' }}>
          <span className="gold-dot" />
          <p className="font-sans font-light tracking-wide" style={{ fontSize: '0.72rem', color: 'rgba(243,237,228,0.3)' }}>
            Continuously learning — currently diving deep into Node.js &amp; MongoDB
          </p>
        </div>

      </div>
    </section>
  )
}
