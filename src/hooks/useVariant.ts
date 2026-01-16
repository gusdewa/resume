import { useEffect, useMemo } from 'react';
import type { ResumeVariant, PartialResumeVariant } from '../types/resume';
import { mergeVariant } from '../lib/variants';
import { defaultVariant } from '../content/variants/default';
import { alvarezMarsalVariant } from '../content/variants/alvarez-marsal';

interface VariantConfig {
  name: string;
  override: PartialResumeVariant;
}

const VARIANTS: Record<string, VariantConfig> = {
  'alvarez-marsal': {
    name: 'Alvarez & Marsal',
    override: alvarezMarsalVariant,
  },
};

export function useVariant(): ResumeVariant {
  // Get the variant from URL query parameter
  const variantParam = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('for');
  }, []);

  // Get the variant configuration
  const variant = useMemo(() => {
    if (!variantParam || !VARIANTS[variantParam]) {
      return defaultVariant;
    }

    const config = VARIANTS[variantParam];
    return mergeVariant(defaultVariant, config.override);
  }, [variantParam]);

  // Update document title based on variant
  useEffect(() => {
    document.title = variant.metadata.title;
  }, [variant]);

  return variant;
}
