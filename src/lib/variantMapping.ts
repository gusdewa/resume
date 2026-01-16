import type { PartialResumeVariant } from '../types/resume';
import { alvarezMarsalVariant } from '../content/variants/alvarez-marsal';

export interface VariantConfig {
  id: string; // UUID for URL
  name: string; // Display name
  override: PartialResumeVariant;
  legacyIds?: string[]; // Legacy URL params for backwards compatibility
}

/**
 * Variant configurations with UUID-based routing
 * UUIDs make it less obvious which variant is being viewed
 */
export const VARIANT_CONFIGS: VariantConfig[] = [
  {
    id: 'a8f3c2d1-9e4b-4a7c-8d1f-2e5b6c7a8d9e', // UUID for Alvarez & Marsal
    name: 'Alvarez & Marsal',
    override: alvarezMarsalVariant,
    legacyIds: ['alvarez-marsal'], // Support old URLs
  },
  // Add more variants here with their own UUIDs
];

/**
 * Create a map of all valid variant IDs (UUID + legacy) to their configs
 */
export const VARIANT_MAP = VARIANT_CONFIGS.reduce((map, config) => {
  // Map UUID to config
  map[config.id] = config;

  // Map legacy IDs to config for backwards compatibility
  if (config.legacyIds) {
    config.legacyIds.forEach(legacyId => {
      map[legacyId] = config;
    });
  }

  return map;
}, {} as Record<string, VariantConfig>);

/**
 * Get variant config by ID (UUID or legacy)
 */
export function getVariantConfig(id: string): VariantConfig | undefined {
  return VARIANT_MAP[id];
}

/**
 * Get all variant UUIDs (for sharing)
 */
export function getAllVariantIds(): string[] {
  return VARIANT_CONFIGS.map(config => config.id);
}
