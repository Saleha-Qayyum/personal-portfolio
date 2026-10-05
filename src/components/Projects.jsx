import { projects } from '../data/projects'

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ProjectCard({ project }) {
  return (
    <article
      className="project-card group"
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Screenshot */}
      {project.screenshot && (
        <div style={{ position: 'relative', width: '100%', height: '170px', overflow: 'hidden', marginBottom: '1.25rem' }}>
          <img
            src={project.screenshot}
            alt={`${project.title} screenshot`}
            className="screenshot-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            loading="lazy"
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 55%, rgba(17,17,17,0.95) 100%)',
            pointerEvents: 'none',
          }} />
          <span style={{
            position: 'absolute', top: '0.5rem', right: '1rem',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.5rem', fontWeight: 300, lineHeight: 1,
            color: 'rgba(255,255,255,0.25)',
            userSelect: 'none',
          }}>
            {String(project.id).padStart(2, '0')}
          </span>
        </div>
      )}

      {/* No screenshot fallback number */}
      {!project.screenshot && (
        <span className="project-number" aria-hidden="true">
          {String(project.id).padStart(2, '0')}
        </span>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
        {/* Title */}
        <h3
          id={`project-${project.id}-title`}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontWeight: 600, fontSize: '1.15rem',
            color: '#F3EDE4', lineHeight: 1.3,
            paddingRight: '1.5rem',
            transition: 'color 0.3s ease',
          }}
        >
          {project.title}
        </h3>

        <div style={{ width: '2rem', height: '1px', background: 'rgba(201,163,107,0.4)' }} />

        {/* Description */}
        <p style={{
          fontFamily: 'Jost, sans-serif',
          fontSize: '0.82rem', fontWeight: 300,
          color: 'rgba(243,237,228,0.45)',
          lineHeight: 1.7, flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.25rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>

        {/* Links */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '1rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(243,237,228,0.07)',
        }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              fontFamily: 'Jost, sans-serif', fontSize: '0.67rem', fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'rgba(243,237,228,0.45)',
              transition: 'color 0.25s ease',
            }}
            onMouseOver={e => e.currentTarget.style.color = '#C9A36B'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(243,237,228,0.45)'}
          >
            <GithubIcon />
            <span>GitHub</span>
          </a>

          {project.liveUrl && (
            <>
              <div style={{ width: '1px', height: '12px', background: 'rgba(243,237,228,0.15)' }} />
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  fontFamily: 'Jost, sans-serif', fontSize: '0.67rem', fontWeight: 500,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'rgba(243,237,228,0.45)',
                  transition: 'color 0.25s ease',
                }}
                onMouseOver={e => e.currentTarget.style.color = '#C9A36B'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(243,237,228,0.45)'}
              >
                <ArrowIcon />
                <span>Live Demo</span>
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32"
      style={{ background: '#F3EDE4' }}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="section-label" style={{ color: 'rgba(201,163,107,0.6)' }}>03</span>
              <div className="w-8 h-px bg-gold/40" />
              <span className="section-label">Selected Works</span>
            </div>
            <h2
              id="projects-heading"
              className="font-serif text-charcoal"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)', fontFamily: 'Cormorant Garamond, serif' }}
            >
              Projects
            </h2>
          </div>

          <a
            href="https://github.com/Saleha-Qayyum"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-link"
          >
            <span>View all on GitHub</span>
            <span className="arrow">→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  )
}
