// ─────────────────────────────────────────────────────────────────────────────
// src/data/types.js
//
// JSDoc type definitions for content data shapes.
// These enforce the "contract" between content.js and the components that
// consume it. No runtime code here — purely for documentation and IDE support.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * A single navigation link item.
 * @typedef {Object} NavLink
 * @property {string} label     - Display text (e.g. "About")
 * @property {string} to        - Internal route path (e.g. "/about")
 * @property {boolean} [external] - If true, open in a new tab
 */

/**
 * Content for the top navigation bar.
 * @typedef {Object} NavContent
 * @property {string}    brandName - Displayed brand name (e.g. "Majorlink")
 * @property {string}    logoAlt   - Alt text for the logo image
 * @property {NavLink[]} links     - Array of navigation links
 */

/**
 * A download / CTA button (App Store or Google Play).
 * @typedef {Object} StoreButton
 * @property {string} sublabel  - Small label above the main text (e.g. "Download on the")
 * @property {string} mainLabel - Primary button text (e.g. "App Store")
 * @property {string} url       - URL the button opens
 * @property {string} ariaLabel - Accessible label for screen readers
 */

/**
 * Content for the Hero section.
 * @typedef {Object} HeroContent
 * @property {string}      headline    - Main H1 heading text
 * @property {string}      body        - Paragraph body text below the heading
 * @property {StoreButton} appStore    - App Store button data
 * @property {StoreButton} playStore   - Google Play button data
 * @property {string}      bgImageAlt  - Alt text for the hero background image
 * @property {string}      cloudAlt    - Alt text for the cloud overlay image
 */

/**
 * A single statistic displayed below the hero.
 * @typedef {Object} HeroStat
 * @property {string} value - The statistic value (e.g. "$1M")
 * @property {string} label - Description of the stat
 */

/**
 * A single feature / "how it works" step card.
 * @typedef {Object} FeatureCard
 * @property {string} icon        - Icon name or image path
 * @property {string} title       - Card title
 * @property {string} description - Card description
 */

/**
 * A pricing plan card.
 * @typedef {Object} PricingPlan
 * @property {string}   name        - Plan name
 * @property {string}   price       - Price string (e.g. "Free", "$9/mo")
 * @property {string[]} features    - List of features
 * @property {boolean}  highlighted - If true, this plan is visually emphasized
 * @property {string}   ctaLabel    - CTA button text
 * @property {string}   ctaUrl      - CTA button link
 */

/**
 * A single FAQ item.
 * @typedef {Object} FaqItem
 * @property {string} question - The question text
 * @property {string} answer   - The answer text
 */

/**
 * Footer link group.
 * @typedef {Object} FooterLinkGroup
 * @property {string}    groupTitle - Section heading (e.g. "Company")
 * @property {NavLink[]} links      - Links in this group
 */

/**
 * Content for the page footer.
 * @typedef {Object} FooterContent
 * @property {string}           brandName  - Brand name
 * @property {string}           tagline    - Short tagline under the logo
 * @property {FooterLinkGroup[]} linkGroups - Grouped footer links
 * @property {string}           copyright  - Copyright notice string
 */

// This file has no runtime exports — it's documentation only.
export {};
