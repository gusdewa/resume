import type { Experience as ExperienceType } from '../../types/resume';

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="experience-item border-l-2 border-blue-200 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <p className="text-base font-medium text-gray-700">{exp.company}</p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{exp.period}</span>
            </div>
            <p className="text-sm text-gray-600 mb-2">{exp.location}</p>
            {(() => {
              const bullets = [
                ...(exp.description ? [exp.description] : []),
                ...(exp.highlights ?? [])
              ];

              return bullets.length > 0 ? (
                <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-700">
                  {bullets.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              ) : null;
            })()}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
