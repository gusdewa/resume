import type { ResumeVariant, PartialResumeVariant } from '../types/resume';

function isObject(item: unknown): item is Record<string, unknown> {
  return item !== null && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects, with the override taking precedence
 */
function deepMerge(base: any, override: any): any {
  const result = { ...base };

  for (const key in override) {
    const overrideValue = override[key];
    const baseValue = result[key];

    if (Array.isArray(overrideValue)) {
      // For arrays, replace entirely (don't merge array items)
      result[key] = overrideValue;
    } else if (isObject(overrideValue) && isObject(baseValue)) {
      // For objects, recursively merge
      result[key] = deepMerge(baseValue, overrideValue);
    } else if (overrideValue !== undefined) {
      // For primitives, override
      result[key] = overrideValue;
    }
  }

  return result;
}

/**
 * Merge a variant override with the default variant
 */
export function mergeVariant(
  defaultVariant: ResumeVariant,
  override: PartialResumeVariant
): ResumeVariant {
  return deepMerge(defaultVariant, override) as ResumeVariant;
}
