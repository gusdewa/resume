import { useState } from 'react';
import html2pdf from 'html2pdf.js';

interface DownloadPDFProps {
  fileName?: string;
  targetId?: string;
}

export function DownloadPDF({ fileName = 'resume.pdf', targetId = 'resume-content' }: DownloadPDFProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      const element = document.getElementById(targetId);

      if (!element) {
        console.error(`Element with id "${targetId}" not found`);
        alert('Unable to generate PDF. Please try again.');
        setIsGenerating(false);
        return;
      }

      // Clone the element to avoid modifying the original
      const clone = element.cloneNode(true) as HTMLElement;

      // Apply PDF-specific styling to the clone
      clone.style.padding = '20px';
      clone.style.backgroundColor = 'white';

      // Hide the download button in the PDF
      const downloadButton = clone.querySelector('.no-pdf');
      if (downloadButton) {
        (downloadButton as HTMLElement).style.display = 'none';
      }

      // Configure PDF options optimized for resume
      const opt = {
        margin: [10, 10, 10, 10] as [number, number, number, number], // top, right, bottom, left in mm
        filename: fileName,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          logging: false,
        },
        jsPDF: {
          unit: 'mm',
          format: 'letter', // 8.5 x 11 inches
          orientation: 'portrait' as const,
        },
        pagebreak: {
          mode: ['avoid-all', 'css', 'legacy'],
          before: '.page-break-before',
          after: '.page-break-after',
          avoid: ['h1', 'h2', 'h3', '.experience-item', '.education-item']
        },
      };

      // Generate PDF
      await html2pdf().set(opt).from(clone).save();
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('An error occurred while generating the PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className="no-pdf fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium px-6 py-3 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 print:hidden"
      title="Download as PDF"
    >
      {isGenerating ? (
        <>
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Generating...</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Download PDF</span>
        </>
      )}
    </button>
  );
}
