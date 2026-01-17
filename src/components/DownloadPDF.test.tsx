import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import html2pdf from 'html2pdf.js';
import { Resume } from './Resume/Resume';

const saveMock = vi.fn().mockResolvedValue(undefined);
const fromMock = vi.fn().mockReturnThis();
const setMock = vi.fn().mockReturnThis();

vi.mock('html2pdf.js', () => ({
  default: vi.fn(() => ({
    set: setMock,
    from: fromMock,
    save: saveMock
  }))
}));

describe('DownloadPDF', () => {
  beforeEach(() => {
    saveMock.mockClear();
    fromMock.mockClear();
    setMock.mockClear();
    vi.mocked(html2pdf).mockClear();
  });

  it('triggers PDF generation after resume content loads', async () => {
    const user = userEvent.setup();

    render(<Resume />);

    const button = screen.getByRole('button', { name: /download pdf/i });
    await user.click(button);

    await waitFor(() => {
      expect(vi.mocked(html2pdf)).toHaveBeenCalledTimes(1);
      expect(setMock).toHaveBeenCalled();
      expect(fromMock).toHaveBeenCalled();
      expect(saveMock).toHaveBeenCalled();
    });
  });
});
