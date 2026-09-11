export const showEnglish = false;

export const i18n = {
  defaultLocale: showEnglish ? 'en' : 'ar',
  locales: showEnglish ? (['en', 'ar'] as const) : (['ar'] as const),
} as const;

export type Locale = (typeof i18n)['locales'][number];
