import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Resume } from './Resume/Resume';

describe('DownloadPDF', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('opens the print dialog after resume content loads', async () => {
    const user = userEvent.setup();
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => undefined);

    render(<Resume />);

    const button = screen.getByRole('button', { name: /download pdf/i });
    await user.click(button);

    await waitFor(() => {
      expect(printSpy).toHaveBeenCalledTimes(1);
    });
  });
});
