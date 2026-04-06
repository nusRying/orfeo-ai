import type { Locale } from './config';
import { siteConfig, siteDefaults } from '@/lib/site-config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  ar: () => import('./dictionaries/ar.json').then((module) => module.default),
};

const dictionaryReplacements = [
  [siteDefaults.name, siteConfig.name],
  [siteDefaults.email, siteConfig.email],
] as const;

function replaceDictionaryValues<T>(value: T): T {
  if (typeof value === 'string') {
    let updatedValue: string = value;

    for (const [from, to] of dictionaryReplacements) {
      updatedValue = updatedValue.replaceAll(from, to);
    }

    return updatedValue as T;
  }

  if (Array.isArray(value)) {
    return value.map((item) => replaceDictionaryValues(item)) as T;
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, replaceDictionaryValues(nestedValue)])
    ) as T;
  }

  return value;
}

export const getDictionary = async (locale: Locale) =>
  replaceDictionaryValues(await dictionaries[locale]());
