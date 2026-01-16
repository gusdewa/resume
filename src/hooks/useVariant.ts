import { useEffect, useMemo } from 'react';
import type { ResumeVariant } from '../types/resume';
import { mergeVariant } from '../lib/variants';
import { defaultVariant } from '../content/variants/default';
import { getVariantConfig } from '../lib/variantMapping';

export function useVariant(): ResumeVariant {
  // Get the variant from URL query parameter
  const variantParam = useMemo(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('for');
  }, []);

  // Get the variant configuration
  const variant = useMemo(() => {
    if (!variantParam) {
      return defaultVariant;
    }

    const config = getVariantConfig(variantParam);
    if (!config) {
      return defaultVariant;
    }

    return mergeVariant(defaultVariant, config.override);
  }, [variantParam]);

  // Update document title based on variant
  useEffect(() => {
    document.title = variant.metadata.title;
  }, [variant]);

  return variant;
}
