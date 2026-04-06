const defaultSiteName = 'ORFEO AI';
const defaultSiteEmail = 'hello@orfeo-ai.com';
const defaultSitePhone = '+1 (800) 555-0199';
const defaultSiteAddress = [
  '100 Tech Nexus Blvd',
  'Suite 4400',
  'San Francisco, CA 94105',
] as const;
const defaultMetadataTitle = `${defaultSiteName} | Premium AI Agency`;
const defaultMetadataDescription =
  "Modern AI solutions for forward-thinking businesses. Let's get AI everywhere else.";
const defaultLogoPath = '/logo/logo-orange.svg';

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

const parseAddressLines = (value?: string) => {
  const lines =
    value
      ?.split('|')
      .map((line) => line.trim())
      .filter(Boolean) ?? [];

  return lines.length > 0 ? lines : [...defaultSiteAddress];
};

const configuredBasePath = normalizeBasePath(process.env.NEXT_PUBLIC_SITE_BASE_PATH);
const siteName = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || defaultSiteName;

export const siteDefaults = {
  name: defaultSiteName,
  email: defaultSiteEmail,
} as const;

export const siteConfig = {
  name: siteName,
  metadataTitle:
    process.env.NEXT_PUBLIC_SITE_METADATA_TITLE?.trim() ||
    defaultMetadataTitle.replace(defaultSiteName, siteName),
  metadataDescription:
    process.env.NEXT_PUBLIC_SITE_METADATA_DESCRIPTION?.trim() || defaultMetadataDescription,
  logoPath: normalizeAssetPath(process.env.NEXT_PUBLIC_SITE_LOGO_PATH),
  logoAlt: process.env.NEXT_PUBLIC_SITE_LOGO_ALT?.trim() || `${siteName} logo`,
  email: process.env.NEXT_PUBLIC_SITE_EMAIL?.trim() || defaultSiteEmail,
  phone: process.env.NEXT_PUBLIC_SITE_PHONE?.trim() || defaultSitePhone,
  addressLines: parseAddressLines(process.env.NEXT_PUBLIC_SITE_ADDRESS),
  basePath: configuredBasePath || (process.env.NODE_ENV === 'production' ? '/orfeo-ai' : ''),
} as const;

export const getPublicAssetPath = (assetPath: string) => {
  const normalizedPath = normalizeAssetPath(assetPath);

  if (siteConfig.basePath && normalizedPath.startsWith(`${siteConfig.basePath}/`)) {
    return normalizedPath;
  }

  return siteConfig.basePath ? `${siteConfig.basePath}${normalizedPath}` : normalizedPath;
};

export const getPhoneHref = (phone = siteConfig.phone) => `tel:${phone.replace(/[^\d+]/g, '')}`;
