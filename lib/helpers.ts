import { OptionType } from '@/lib/types';

export function enumToOptions<T extends Record<string, string | number>>(
  enumObj: T
): OptionType[] {
  return Object.entries(enumObj)
    .filter(([key]) => isNaN(Number(key)))
    .map(([key, value]) => ({ value: String(value), label: String(value) }));
}