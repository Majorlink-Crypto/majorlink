// ─────────────────────────────────────────────────────────────────────────────
// src/data/constants.js
//
// Single source of truth for all design tokens and app-wide constants.
// Import from here instead of hardcoding values in components.
// ─────────────────────────────────────────────────────────────────────────────

// ── Color Palette ─────────────────────────────────────────────────────────────
export const COLORS = {
  // Zinc scale (Tailwind zinc)
  zinc50:  '#FAFAFA',
  zinc100: '#F4F4F5',
  zinc200: '#E4E4E7',
  zinc300: '#D4D4D8',
  zinc400: '#A1A1AA',
  zinc500: '#71717A',
  zinc600: '#52525B',
  zinc700: '#3F3F46',
  zinc800: '#27272A',
  zinc900: '#18181B',
  zinc950: '#09090B',

  // Brand
  brandBlue:       '#3B3BF9',
  brandBlueDark:   '#2C2CDB',
  brandBlueLight:  '#6B6BFC',
  brandIndigo:     '#4B5DFF',

  // Utility
  white: '#FFFFFF',
  black: '#000000',

  // Button
  btnPrimary:     '#3B3BF9',
  btnPrimaryText: '#FAFAFA',

  // Background
  heroBg:    'transparent',    // uses hero_bg.png image
  navBg:     '#FFFFFF',
  pageBg:    '#FFFFFF',
};

// ── Typography ─────────────────────────────────────────────────────────────────
export const FONTS = {
  onest:     'Onest, sans-serif',
  archivo:   'Archivo, sans-serif',
  switzer:   'Switzer, sans-serif',
  sora:      'Sora, sans-serif',
  // Legacy fonts (kept for non-hero sections)
  aeonikMedium:  'AeonikMedium, sans-serif',
  aeonikRegular: 'AeonikRegular, sans-serif',
  aeonikBold:    'AeonikBold, sans-serif',
  grifter:       'Grifter, sans-serif',
};

export const FONT_WEIGHTS = {
  regular:    400,
  medium:     500,
  semibold:   600,
  bold:       700,
  extraBold:  800,
};

// ── Design-system text presets (Figma spec) ──────────────────────────────
// Maps use-case names → { font, weight, size, lineHeight, color }
// Components import from here instead of hardcoding inline styles.

export const TEXT_STYLES = {
  // ── Navbar ─────────────────────────────────────────────────────────────
  navBrand: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '20px',
    lineHeight: '110%', color: COLORS.zinc800,
  },
  navLink: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.semibold, size: '16px',
    lineHeight: 'normal', color: COLORS.zinc800,
  },

  // ── Hero ───────────────────────────────────────────────────────────────
  heroHeading: {
    font: FONTS.onest, weight: FONT_WEIGHTS.extraBold, size: '68px',
    lineHeight: '100%', color: COLORS.zinc900,
  },
  heroBody: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '19px',
    lineHeight: '140%', color: COLORS.zinc900,
  },

  // ── Store buttons (hero — dark bg) ─────────────────────────────────────
  storeSubDark: {
    font: FONTS.switzer, weight: FONT_WEIGHTS.regular, size: '10.56px',
    lineHeight: '20.16px', color: COLORS.zinc50,
  },
  storeMainDark: {
    font: FONTS.switzer, weight: FONT_WEIGHTS.semibold, size: '15.36px',
    lineHeight: '20.16px', color: COLORS.zinc50,
  },

  // ── Store buttons (light bg) ───────────────────────────────────────────
  storeSubLight: {
    font: FONTS.switzer, weight: FONT_WEIGHTS.regular, size: '10.56px',
    lineHeight: '20.16px', color: COLORS.zinc800,
  },
  storeMainLight: {
    font: FONTS.switzer, weight: FONT_WEIGHTS.semibold, size: '15.36px',
    lineHeight: '20.16px', color: COLORS.zinc800,
  },

  // ── Stats bar ──────────────────────────────────────────────────────────
  statValue: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '30px',
    lineHeight: '100%', color: COLORS.zinc900,
  },
  statLabel: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '19px',
    lineHeight: '140%', color: COLORS.zinc600,
  },

  // ── Services cards ─────────────────────────────────────────────────────
  serviceTitle: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '27px',
    lineHeight: '100%', color: COLORS.zinc900,
  },
  serviceDesc: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '19px',
    lineHeight: '140%', color: COLORS.zinc900,
  },

  // ── Section headings & subheadings ─────────────────────────────────────
  sectionHeading: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '34px',
    lineHeight: '100%', color: COLORS.zinc900,
  },
  sectionSub: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '19px',
    lineHeight: '140%', color: COLORS.zinc500,
  },

  // ── Features cards ─────────────────────────────────────────────────────
  featureTitle: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.semibold, size: '19px',
    lineHeight: '140%', color: COLORS.zinc900,
  },
  featureDesc: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '17px',
    lineHeight: '140%', color: COLORS.zinc500,
  },

  // ── Rates section ──────────────────────────────────────────────────────
  ratesHeading: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '34px',
    lineHeight: '100%', color: COLORS.zinc900,
  },
  ratesLink: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.semibold, size: '17px',
    lineHeight: '140%', color: COLORS.brandIndigo,
  },
  ratesTableHeader: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '17px',
    lineHeight: '140%', color: COLORS.zinc400,
  },
  ratesTableValue: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '17px',
    lineHeight: '140%', color: COLORS.zinc800,
  },

  // ── FAQ ────────────────────────────────────────────────────────────────
  faqHeading: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '34px',
    lineHeight: '110%', color: '#0D1B2A',
  },
  faqQuestion: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '18px',
    lineHeight: '16px', color: COLORS.zinc800,
  },
  faqAnswer: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '18px',
    lineHeight: '140%', color: COLORS.zinc500,
  },

  // ── Rates page ─────────────────────────────────────────────────────────
  ratesPageHeading: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '49px',
    lineHeight: '100%', color: '#000000',
  },
  ratesTabActive: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.semibold, size: '21px',
    lineHeight: '180%', color: COLORS.brandIndigo,
  },
  ratesTabInactive: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '21px',
    lineHeight: '180%', color: COLORS.zinc800,
  },
  ratesCardTitle: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.semibold, size: '17px',
    lineHeight: '160%', color: COLORS.zinc600,
  },
  ratesCardLabel: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '12px',
    lineHeight: '160%', color: COLORS.zinc400,
  },
  ratesCardValue: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '17px',
    lineHeight: '140%', color: COLORS.zinc800,
  },

  // ── About page ─────────────────────────────────────────────────────────
  aboutHeading: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '49px',
    lineHeight: '100%', color: '#000000',
  },
  aboutBody: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '19px',
    lineHeight: '140%', color: '#000000',
  },
  aboutBodyLarge: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.regular, size: '21px',
    lineHeight: '180%', color: '#000000',
  },

  // ── CTA Banner ─────────────────────────────────────────────────────────
  ctaHeading: {
    font: FONTS.onest, weight: FONT_WEIGHTS.semibold, size: '68px',
    lineHeight: '100%', color: COLORS.zinc50,
  },

  // ── Testimonials ───────────────────────────────────────────────────────
  testimonialQuote: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '27px',
    lineHeight: '180%', color: COLORS.zinc50,
  },
  testimonialName: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.semibold, size: '19px',
    lineHeight: '140%', color: COLORS.zinc50,
  },

  // ── Footer ─────────────────────────────────────────────────────────────
  footerBrand: {
    font: FONTS.onest, weight: FONT_WEIGHTS.bold, size: '20px',
    lineHeight: '110%', color: COLORS.zinc800,
  },
  footerLink: {
    font: FONTS.archivo, weight: FONT_WEIGHTS.medium, size: '16px',
    lineHeight: '140%', color: COLORS.zinc800,
  },
};

// ── Helper: convert a TEXT_STYLES entry to an inline style object ────────
// Usage:  <span style={textStyle(TEXT_STYLES.navLink)}>...</span>
export const textStyle = (t) => ({
  fontFamily: t.font,
  fontWeight: t.weight,
  fontSize:   t.size,
  lineHeight: t.lineHeight,
  color:      t.color,
});

// ── Internal Routes ────────────────────────────────────────────────────────────
export const ROUTES = {
  home:       '/',
  about:      '/about',
  rates:      '/gallery',       // Rates page (currently the gallery/rates page)
  faq:        '/#faq',
  helpCenter: '/contact',
  checkout:   '/checkout',
  gallery:    '/gallery',
  terms:      '/terms',
  privacy:    '/privacy',
  aml:        '/aml',
};

// ── External Links ─────────────────────────────────────────────────────────────
export const EXTERNAL_LINKS = {
  appStore:  'https://apps.apple.com/app/majorlink/id6463786218',
  playStore: 'https://play.google.com/store/apps/details?id=com.olamide81.MajorlinkApp',
  whatsapp:  'https://wa.me/+2349071504491?text=Hi,%20I%20would%20like%20to%20trade%20with%20you.%20What%20are%20your%20current%20rates%20and%20how%20do%20we%20proceed%20with%20the%20trade%3F',
  tradeWeb:  'http://app.majorlink.co/',
};

// ── Image Paths ─────────────────────────────────────────────────────────────────
// Using absolute public paths so components don't need to manage relative paths
export const IMAGES = {
  heroBg:    '/images/hero_bg.webp',
  heroCloud: '/images/hero_cloud.webp',
  logo:      '/logo192.webp',          // fallback; Navbar uses src/Assets/icon.png
};

// ── Z-Index Scale ───────────────────────────────────────────────────────────────
export const Z_INDEX = {
  base:    0,
  content: 1,
  overlay: 5,
  nav:     10,
  modal:   100,
};
