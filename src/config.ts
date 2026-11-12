// Single source of truth for business facts and site settings.
// Only verified facts live here. Change one value and the whole site updates.

// Planned domain. Not purchased yet. Kevin buys it later through GoDaddy.
export const SITE_URL = 'https://scsjets.com';

// Contact email. May change once the new domain and mailbox exist.
export const CONTACT_EMAIL = 'attila@scsaviation.com';

export const BUSINESS = {
  name: 'SCS Aviation',
  focus: 'Maintenance for legacy Cessna Citation jets',
  phoneE164: '+13867859997',
  phoneDisplay: '(386) 785-9997',
  email: CONTACT_EMAIL,
  street: '921 Biscayne Blvd, Hangar 14',
  city: 'DeLand',
  region: 'FL',
  postalCode: '32724',
  country: 'US',
  airport: 'DeLand Municipal Airport',
  airportCode: 'KDED',
};

export const FULL_ADDRESS = `${BUSINESS.street}, ${BUSINESS.city}, ${BUSINESS.region} ${BUSINESS.postalCode}`;

// Web3Forms. The access key is tied to the inbox that receives leads.
// Create the key for CONTACT_EMAIL at launch. Placeholder for now.
export const WEB3FORMS_ACCESS_KEY = 'PLACEHOLDER';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

// Prototype mode: the form shows success without sending anything.
export const PROTOTYPE_MODE = true;

// Prefix a root-relative path with the Astro base (the GitHub Pages project path).
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (!path.startsWith('/')) return path;
  return `${base}${path.slice(1)}`;
}

// Customer aircraft list for the quote form. This is the customer's aircraft,
// not a claim about which models SCS supports (see Citation Models page).
export const AIRCRAFT_OPTIONS = [
  'Citation I (500)',
  'Citation I/SP (501)',
  'Citation II (550)',
  'Citation II/SP (551)',
  'Citation S/II (S550)',
  'Citation V (560)',
  'Citation Ultra (560)',
  'Citation Encore (560)',
  'Citation Bravo (550)',
  'Citation Excel (560XL)',
  'Citation III / VI / VII (650)',
  'CitationJet (525)',
  'Other',
];

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/citation-models/', label: 'Citation Models' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];
