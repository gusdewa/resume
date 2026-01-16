import type { Education as EducationType } from '../../types/resume';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Education</h2>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="education-item border-l-2 border-green-200 pl-4">
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3 className="text-base font-semibold text-gray-900">{edu.institution}</h3>
                <p className="text-sm text-gray-700">
                  {edu.degree}
                  {edu.field && ` - ${edu.field}`}
                </p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{edu.period}</span>
            </div>
            <p className="text-sm text-gray-600">{edu.location}</p>
            {edu.details && edu.details.length > 0 && (
              <ul className="list-disc list-outside ml-5 mt-2 space-y-1 text-sm text-gray-700">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
