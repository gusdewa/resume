import { useVariant } from '../../hooks/useVariant';
import { DownloadPDF } from '../DownloadPDF';
import { Header } from './Header';
import { Experience } from './Experience';
import { Education } from './Education';
import { Skills } from './Skills';
import { PdfResume } from './PdfResume';

export function Resume() {
  const variant = useVariant();

  // Generate filename from variant metadata
  const fileName = `${variant.metadata.variantName === 'default' ? 'resume' : variant.metadata.variantName}-resume.pdf`;

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 print:py-0 print:bg-white">
        <div id="resume-content" className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none px-8 py-10 print:px-6">
          <Header header={variant.header} />

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Summary</h2>
            <div className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">
              {variant.summary}
            </div>
          </section>

          <Experience experience={variant.experience} />
          <Education education={variant.education} />
          <Skills skills={variant.skills} certifications={variant.certifications} />
        </div>
      </div>

      <PdfResume variant={variant} />
      <DownloadPDF fileName={fileName} targetId="pdf-resume" />
    </>
  );
}
