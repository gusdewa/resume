import type { ResumeVariant } from '../../types/resume';

interface PdfResumeProps {
  variant: ResumeVariant;
}

export function PdfResume({ variant }: PdfResumeProps) {
  const { header, summary, experience, education, skills, certifications } = variant;

  const getTopHighlights = (exp: ResumeVariant['experience'][number]) => {
    const highlights = exp.highlights || [];
    if (exp.description) {
      return [exp.description, ...highlights].slice(0, 3);
    }
    return highlights.slice(0, 3);
  };

  const contactLines = [
    header.contact.email && {
      label: header.contact.email,
      href: `mailto:${header.contact.email}`,
    },
    header.contact.phone && {
      label: header.contact.phone,
      href: `tel:${header.contact.phone}`,
    },
    header.contact.location && {
      label: header.contact.location,
    },
    header.contact.linkedin && {
      label: header.contact.linkedin,
      href: header.contact.linkedin.startsWith('http')
        ? header.contact.linkedin
        : `https://${header.contact.linkedin}`,
    },
    header.contact.github && {
      label: header.contact.github,
      href: header.contact.github.startsWith('http')
        ? header.contact.github
        : `https://${header.contact.github}`,
    },
    header.contact.website && {
      label: header.contact.website,
      href: header.contact.website.startsWith('http')
        ? header.contact.website
        : `https://${header.contact.website}`,
    },
  ].filter((line): line is { label: string; href?: string } => Boolean(line));

  return (
    <div className="pdf-container" aria-hidden="true">
      <div id="pdf-resume" className="pdf-resume">
        <header className="pdf-header">
          <div>
            <h1 className="pdf-name">{header.name}</h1>
            <div className="pdf-title">{header.title}</div>
          </div>
          <div className="pdf-contact">
            {contactLines.map((item, index) => (
              <div key={`${item.label}-${index}`}>
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}
              </div>
            ))}
          </div>
        </header>

        <section className="pdf-section">
          <h2 className="pdf-section-title">Summary</h2>
          <p className="pdf-summary">{summary}</p>
        </section>

        <section className="pdf-section">
          <h2 className="pdf-section-title">Experience</h2>
          {experience.map((exp, index) => (
            <div key={`${exp.company}-${index}`} className="pdf-item">
              {(() => {
                const topHighlights = getTopHighlights(exp);
                return (
                  <>
              <div className="pdf-row">
                <div>
                  <div className="pdf-role">{exp.title}</div>
                  <div className="pdf-company">{exp.company}</div>
                </div>
                <div className="pdf-period">{exp.period}</div>
              </div>
              <div className="pdf-meta">{exp.location}</div>
              {topHighlights.length > 0 && (
                <ul className="pdf-bullets">
                  {topHighlights.map((highlight, idx) => (
                    <li key={`${exp.company}-highlight-${idx}`}>{highlight}</li>
                  ))}
                </ul>
              )}
              {exp.technologies && exp.technologies.length > 0 && (
                <div className="pdf-tech">
                  <span>Tech:</span> {exp.technologies.join(', ')}
                </div>
              )}
                  </>
                );
              })()}
            </div>
          ))}
        </section>

        <section className="pdf-section">
          <h2 className="pdf-section-title">Education</h2>
          {education.map((edu, index) => (
            <div key={`${edu.institution}-${index}`} className="pdf-item">
              <div className="pdf-row">
                <div>
                  <div className="pdf-role">{edu.institution}</div>
                  <div className="pdf-company">
                    {edu.degree}
                    {edu.field ? `, ${edu.field}` : ''}
                  </div>
                </div>
                <div className="pdf-period">{edu.period}</div>
              </div>
              <div className="pdf-meta">{edu.location}</div>
              {edu.details && edu.details.length > 0 && (
                <ul className="pdf-bullets">
                  {edu.details.map((detail, idx) => (
                    <li key={`${edu.institution}-detail-${idx}`}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="pdf-section">
          <h2 className="pdf-section-title">Skills</h2>
          <div className="pdf-grid">
            {skills.map((category, index) => (
              <div key={`${category.category}-${index}`} className="pdf-skill-category">
                <div className="pdf-skill-title">{category.category}</div>
                <div className="pdf-skill-list">{category.skills.join(', ')}</div>
              </div>
            ))}
          </div>
        </section>

        {certifications && certifications.length > 0 && (
          <section className="pdf-section">
            <h2 className="pdf-section-title">Certifications</h2>
            <ul className="pdf-bullets">
              {certifications.map((cert, index) => (
                <li key={`${cert.name}-${index}`}>
                  <span className="pdf-cert-name">{cert.name}</span>
                  {' - '}
                  <span className="pdf-cert-issuer">{cert.issuer}</span>
                  {cert.year ? ` (${cert.year})` : ''}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
