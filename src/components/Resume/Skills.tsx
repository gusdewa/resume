import type { SkillCategory, Certification } from '../../types/resume';

interface SkillsProps {
  skills: SkillCategory[];
  certifications?: Certification[];
}

export function Skills({ skills, certifications }: SkillsProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Skills</h2>
      <div className="space-y-4">
        {skills.map((category, index) => (
          <div key={index}>
            <h3 className="text-sm font-semibold text-gray-700 mb-2">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full border border-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {certifications && certifications.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Certifications & Awards</h3>
          <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-gray-700">
            {certifications.map((cert, index) => (
              <li key={index}>
                <span className="font-medium">{cert.name}</span>
                {' - '}
                <span className="text-gray-600">{cert.issuer}</span>
                {cert.year && <span className="text-gray-500"> ({cert.year})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
