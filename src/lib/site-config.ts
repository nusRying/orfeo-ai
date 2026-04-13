import type { Locale } from '@/i18n/config';

const defaultSiteName = 'ORFEO AI';
const defaultArabicSiteName = defaultSiteName;
const defaultSiteEmail = 'hello@orfeo-ai.com';
const defaultSitePhone = '+1 (800) 555-0199';
const defaultSiteAddress = [
  '100 Tech Nexus Blvd',
  'Suite 4400',
  'San Francisco, CA 94105',
] as const;
const defaultMetadataTitle = `${defaultSiteName} | Premium AI Agency`;
const defaultArabicMetadataTitle = defaultMetadataTitle;
const defaultMetadataDescription =
  "Modern AI solutions for forward-thinking businesses. Let's get AI everywhere else.";
const defaultArabicMetadataDescription = defaultMetadataDescription;
const defaultLogoPath = '/logo/logo-orange.svg';

type LocalizedValue<T> = Record<Locale, T>;

const normalizeBasePath = (value?: string) => {
  const trimmed = value?.trim();

  if (!trimmed || trimmed === '/') {
    return '';
  }

  return `/${trimmed.replace(/^\/+|\/+$/g, '')}`;
};

const normalizeAssetPath = (value?: string) => {
  const trimmed = value?.trim();
  const resolvedPath = trimmed || defaultLogoPath;

  return resolvedPath.startsWith('/') ? resolvedPath : `/${resolvedPath}`;
};

const parseAddressLines = (value: string | undefined, fallbackLines: readonly string[]) => {
  const lines =
    value
      ?.split('|')
      .map((line) => line.trim())
      .filter(Boolean) ?? [];

  return lines.length > 0 ? lines : [...fallbackLines];
};

const createLocalizedValue = (
  englishValue: string | undefined,
  arabicValue: string | undefined,
  englishFallback: string,
  arabicFallback = englishFallback
): LocalizedValue<string> => {
  const en = englishValue?.trim() || englishFallback;
  const ar = arabicValue?.trim() || en || arabicFallback;

  return { en, ar };
};

const configuredBasePath = normalizeBasePath(process.env.NEXT_PUBLIC_SITE_BASE_PATH);
const localizedSiteName = createLocalizedValue(
  process.env.NEXT_PUBLIC_SITE_NAME,
  process.env.NEXT_PUBLIC_SITE_NAME_AR,
  defaultSiteName,
  defaultArabicSiteName
);
const localizedMetadataTitle = createLocalizedValue(
  process.env.NEXT_PUBLIC_SITE_METADATA_TITLE,
  process.env.NEXT_PUBLIC_SITE_METADATA_TITLE_AR,
  defaultMetadataTitle.replace(defaultSiteName, localizedSiteName.en),
  defaultArabicMetadataTitle.replace(defaultSiteName, localizedSiteName.ar)
);
const localizedMetadataDescription = createLocalizedValue(
  process.env.NEXT_PUBLIC_SITE_METADATA_DESCRIPTION,
  process.env.NEXT_PUBLIC_SITE_METADATA_DESCRIPTION_AR,
  defaultMetadataDescription,
  defaultArabicMetadataDescription
);
const localizedLogoAlt = createLocalizedValue(
  process.env.NEXT_PUBLIC_SITE_LOGO_ALT,
  process.env.NEXT_PUBLIC_SITE_LOGO_ALT_AR,
  `${localizedSiteName.en} logo`,
  `${localizedSiteName.ar} logo`
);
const localizedAddressLines: LocalizedValue<string[]> = {
  en: parseAddressLines(process.env.NEXT_PUBLIC_SITE_ADDRESS, defaultSiteAddress),
  ar: parseAddressLines(
    process.env.NEXT_PUBLIC_SITE_ADDRESS_AR ?? process.env.NEXT_PUBLIC_SITE_ADDRESS,
    defaultSiteAddress
  ),
};

export const siteDefaults = {
  name: defaultSiteName,
  email: defaultSiteEmail,
  names: {
    en: defaultSiteName,
    ar: defaultArabicSiteName,
  },
} as const;

export const siteConfig = {
  name: localizedSiteName.en,
  names: localizedSiteName,
  metadataTitles: localizedMetadataTitle,
  metadataDescriptions: localizedMetadataDescription,
  logoPath: normalizeAssetPath(process.env.NEXT_PUBLIC_SITE_LOGO_PATH),
  logoAlts: localizedLogoAlt,
  logoAlt: localizedLogoAlt.en,
  email: process.env.NEXT_PUBLIC_SITE_EMAIL?.trim() || defaultSiteEmail,
  phone: process.env.NEXT_PUBLIC_SITE_PHONE?.trim() || defaultSitePhone,
  addressLines: localizedAddressLines,
  basePath: configuredBasePath || '',
} as const;

export const getSiteName = (locale: Locale) => siteConfig.names[locale] || siteConfig.name;
export const getSiteMetadataTitle = (locale: Locale) =>
  siteConfig.metadataTitles[locale] || siteConfig.metadataTitles.en;
export const getSiteMetadataDescription = (locale: Locale) =>
  siteConfig.metadataDescriptions[locale] || siteConfig.metadataDescriptions.en;
export const getSiteLogoAlt = (locale: Locale) =>
  siteConfig.logoAlts[locale] || siteConfig.logoAlts.en;
export const getSiteAddressLines = (locale: Locale) =>
  siteConfig.addressLines[locale] || siteConfig.addressLines.en;

export const getPublicAssetPath = (assetPath: string) => {
  const normalizedPath = normalizeAssetPath(assetPath);

  if (siteConfig.basePath && normalizedPath.startsWith(`${siteConfig.basePath}/`)) {
    return normalizedPath;
  }

  return siteConfig.basePath ? `${siteConfig.basePath}${normalizedPath}` : normalizedPath;
};

export const getPhoneHref = (phone = siteConfig.phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;
