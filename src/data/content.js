// ─────────────────────────────────────────────────────────────────────────────
// src/data/content.js
//
// Single source of truth for ALL visible text content on the site.
// Components import only the section they need and render it — no hardcoded
// strings live in any .js/.jsx component file.
//
// Types are documented in src/data/types.js (JSDoc @typedef).
// Route paths and URLs are imported from src/data/constants.js.
// ─────────────────────────────────────────────────────────────────────────────

import { ROUTES, EXTERNAL_LINKS, IMAGES } from './constants';

// ── Navigation ─────────────────────────────────────────────────────────────────

/** @type {import('./types').NavContent} */
export const NAV_CONTENT = {
  brandName: 'Majorlink',
  logoAlt: 'Majorlink logo',
  links: [
    { label: 'About',       to: ROUTES.about },
    { label: 'Rates',       to: ROUTES.rates },
    { label: 'FAQ',         to: ROUTES.faq },
    { label: 'Help Center', to: ROUTES.helpCenter },
  ],
};

// ── Hero Section ───────────────────────────────────────────────────────────────

/** @type {import('./types').HeroContent} */
export const HERO_CONTENT = {
  headline:   'Move Crypto & Cash Without Limits',
  body:       'Send, receive, swap crypto, trade gift cards, and pay bills — all in one app.',
  bgImageAlt: 'Sky background',
  cloudAlt:   'Cloud overlay',
  bgImage:    IMAGES.heroBg,
  cloudImage: IMAGES.heroCloud,

  appStore: {
    sublabel:  'Download on the',
    mainLabel: 'App Store',
    url:       EXTERNAL_LINKS.appStore,
    ariaLabel: 'Download Majorlink on the App Store',
  },

  playStore: {
    sublabel:  'Download on',
    mainLabel: 'Google Play',
    url:       EXTERNAL_LINKS.playStore,
    ariaLabel: 'Download Majorlink on Google Play',
  },
};

// ── Hero Stats Bar ─────────────────────────────────────────────────────────────

/** @type {import('./types').HeroStat[]} */
export const HERO_STATS = [
  { value: '$1M',   label: 'Daily Trade Volume' },
  { value: '10K+',  label: 'user base.' },
  { value: '100%',  label: 'Guaranteed uptime.' },
  { value: '24/7',  label: 'Support' },
];

// ── Rates Section ──────────────────────────────────────────────────────────────

export const RATES_SECTION_CONTENT = {
  heading:      'Best Rates.',
  subheading:   'Updated in Real Time.',
  viewAllLabel: 'View All Rates',

  cryptoTable: {
    columnAsset:    'Assets',
    columnBuyRate:  'Buy Rate',
    columnSellRate: 'Sell Rate',
    loadingText:    'Loading rates...',
    emptyText:      'No data available',
  },

  giftCardTable: {
    columnAsset:    'Gift Card',
    columnBuyRate:  'Buy Rate',
    columnSellRate: 'Sell Rate',
    loadingText:    'Loading rates...',
    emptyText:      'No data available',
  },

  // Coin display metadata — icon URLs (CoinMarketCap CDN) + ticker symbols
  coins: {
    Bitcoin:  { symbol: 'BTC',  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png' },
    USDT:     { symbol: 'USDT', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png' },
    USDC:     { symbol: 'USDC', icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png' },
    Tron:     { symbol: 'TRX',  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png' },
    Ethereum: { symbol: 'ETH',  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png' },
    Solana:   { symbol: 'SOL',  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png' },
    BNB:      { symbol: 'BNB',  icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png' },
  },
};

// ── Features / How It Works (placeholder — expand in next pass) ────────────────


/** @type {import('./types').FeatureCard[]} */
export const FEATURES_CONTENT = [
  {
    title:       'Fast Transactions',
    description: 'Quick crypto transfers and rapid payouts.',
  },
  {
    title:       'Secure Platform',
    description: 'Your transactions and assets are protected.',
  },
  {
    title:       'Competitive Rates',
    description: 'Get great value on crypto swaps and gift card trades.',
  },
  {
    title:       '24/7 Support',
    description: 'Help is available whenever you need it.',
  },
];

// ── Services Section ────────────────────────────────────────────────────────────

export const SERVICES_CONTENT = [
  {
    image:       '/images/send_receive.webp',
    imageAlt:    'Globe representing send and receive',
    title:       'Send & Receive',
    description: 'Move crypto and cash securely.',
  },
  {
    image:       '/images/swap_crypto.webp',
    imageAlt:    'Gold Bitcoin coins representing crypto swap',
    title:       'Swap Crypto',
    description: 'Convert crypto to Naira instantly.',
  },
  {
    image:       '/images/giftcard.webp',
    imageAlt:    'Various gift cards fanned out',
    title:       'Trade Gift Cards',
    description: 'Convert gift cards to Naira instantly.',
  },
];


// ── How It Works ───────────────────────────────────────────────────────────────

export const HOW_IT_WORKS_CONTENT = {
  heading:  'Simple. Fast. Reliable.',
  subheading: 'Complete transactions in just a few steps.',
  steps: [
    {
      title:       'Create Your Account',
      description: 'Sign up and set up your wallet in minutes.',
      image:       '/images/simple_fast_reliable1.webp',
      imageAlt:    'App screen showing KYC verification step',
    },
    {
      title:       'Send, Swap, or Trade',
      description: 'Transfer crypto, convert currencies, or trade gift cards easily.',
      image:       '/images/simple_fast_reliable2.webp',
      imageAlt:    'App screen showing send, receive, convert and bill payment options',
    },
    {
      title:       'Get Paid Instantly',
      description: 'Receive payouts directly to your wallet or bank account.',
      image:       '/images/simple_fast_reliable2.webp',
      imageAlt:    'App screen showing transaction history and wallet balance',
    },
  ],
};

// ── FAQ (placeholder — expand in next pass) ────────────────────────────────────

/** @type {import('./types').FaqItem[]} */
export const FAQ_CONTENT = [
  {
    question: 'Is Majorlink really free to use?',
    answer:   'Yes. Signing up and creating your account is completely free. We only charge a small service fee on trades.',
  },
  {
    question: 'How accurate are the rates?',
    answer:   'Our rates are updated in real time directly from the market, ensuring you always get the best and most competitive rates.',
  },
  {
    question: 'What if I need help with a transaction?',
    answer:   'Our support team is available 24/7 via live chat and WhatsApp to assist you with any transaction or account issue.',
  },
  {
    question: 'What happens after I place a trade?',
    answer:   'Once your trade is confirmed, payouts are processed instantly. Most transactions complete within minutes directly to your wallet or bank.',
  },
  {
    question: 'Do I have to complete a trade in one sitting?',
    answer:   'No. You can save your progress and return at any time. Your trade details will be safely stored until you are ready to complete.',
  },
  {
    question: 'Which cryptocurrencies are supported?',
    answer:   'We support Bitcoin (BTC), Ethereum (ETH), USDT, USDC, Tron (TRX), Solana (SOL), BNB, and more — with new coins added regularly.',
  },
  {
    question: 'What if I made a mistake on my trade?',
    answer:   'Contact our support team immediately via the app or WhatsApp. We will review the transaction and assist you as quickly as possible.',
  },
];

// ── Footer ─────────────────────────────────────────────────────────────────────

/** @type {import('./types').FooterContent} */
export const FOOTER_CONTENT = {
  brandName: 'Majorlink',
  tagline:   'Send money, swap crypto, trade gift cards, and pay bills with ease.',

  columns: [
    {
      title: 'Company',
      links: [
        { label: 'Home',     to: ROUTES.home },
        { label: 'Features', to: ROUTES.home },
        { label: 'Rates',    to: ROUTES.rates },
        { label: 'About Us', to: ROUTES.about },
        { label: 'Contact',  to: ROUTES.helpCenter },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy',    to: ROUTES.privacy },
        { label: 'Terms of Service',  to: ROUTES.terms },
        { label: 'AML Policy',        to: ROUTES.aml },
        // { label: 'KYC Verification',  to: ROUTES.home },
      ],
    },
    {
      title: 'Contact',
      items: [
        'support@majorlink.co',
        '+234 907 150 4491',
        '+234 000 000 0000',
      ],
    },
    {
      title: 'Social',
      links: [
        { label: 'Instagram', href: 'https://instagram.com/majorlink.co' },
        { label: 'X (Twitter)', href: 'https://twitter.com/majorlink' },
        { label: 'LinkedIn',  href: 'https://linkedin.com/company/majorlink' },
        { label: 'Telegram',  href: 'https://t.me/majorlink' },
      ],
    },
  ],

  copyright: `© ${new Date().getFullYear()} Majorlink Technologies, Ltd.`,
};

// ── Rates Page ─────────────────────────────────────────────────────────────────

export const RATES_PAGE_CONTENT = {
  heading:        'Live Crypto &',
  headingLine2:   'Gift Card Rates',
  tabs: {
    crypto:   'Cryptocurrency',
    giftCard: 'Gift cards',
  },
  card: {
    buyRateLabel:  'Buy rate',
    sellRateLabel: 'Sell rate',
  },
  panel: {
    buyLabel:            'Buy',
    sellLabel:           'Sell',
    inputPlaceholder:    '0.00',
    youWillReceiveLabel: 'You will receive',
    ctaButton:           'Continue to WhatsApp',
    loadingText:         'Loading rates...',
  },
};

// ── CTA Banner ────────────────────────────────────────────────────────────────

export const CTA_BANNER_CONTENT = {
  headingPart1: 'The Faster',
  headingPart2: 'Way to',
  headingLine2: 'Send, Swap & Trade',
  appStore: {
    sublabel:  'Download on the',
    mainLabel: 'App Store',
    url:       EXTERNAL_LINKS.appStore,
  },
  playStore: {
    sublabel:  'Download on',
    mainLabel: 'Google Play',
    url:       EXTERNAL_LINKS.playStore,
  },
};

// ── About Page ─────────────────────────────────────────────────────────────────

export const ABOUT_PAGE_CONTENT = {
  hero: {
    heading:     'Making Digital Transactions Faster and More Accessible',
    description: "We're creating a faster, easier way for people to move money, trade gift cards, and manage crypto without complexity.",
  },
};

