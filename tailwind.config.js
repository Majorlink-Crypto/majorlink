/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'newsletter': "url('./Assets/newsletter.png')",
        'about': "url('./Assets/aboutbg.png')",
        'hero-bg': "url('/images/hero_bg.webp')",
        'hero-cloud': "url('/images/hero_cloud.webp')",
       }),
      screens: {
        'mm': {
          min: '410px'
        },
        'smm': {
          max: "1000px"
        },
        'mmm': {
          max: '850px'
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
        fadeUp: 'fadeUp 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.7s ease-out forwards',
      },
      fontFamily: {
        // ── New design system fonts ───────────────────────────────────────
        onest:   ['Onest', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
        switzer: ['Switzer', 'sans-serif'],
        sora:    ['Sora', 'sans-serif'],
        // ── Legacy fonts (kept for existing sections) ─────────────────────
        aeonikmedium:  ['AeonikMedium', 'sans-serif'],
        aeonikregular: ['AeonikRegular', 'sans-serif'],
        aeonikbold:    ['AeonikBold', 'sans-serif'],
        grifter:       ['Grifter', 'sans-serif'],
      },
      fontSize: {
        // Hero-specific sizes from Figma spec
        'hero':        ['68px', { lineHeight: '100%' }],
        'hero-body':   ['19px', { lineHeight: '140%' }],
        'nav-link':    ['16px', { lineHeight: 'auto' }],
        'brand-name':  ['20px', { lineHeight: '110%' }],
        'store-sub':   ['10.56px', { lineHeight: '20.16px' }],
        'store-main':  ['15.36px', { lineHeight: '20.16px' }],
        // Additional Figma sizes
        'stat-value':  ['30px', { lineHeight: '100%' }],
        'service-title': ['27px', { lineHeight: '100%' }],
        'section-title': ['34px', { lineHeight: '100%' }],
        'feature-title': ['19px', { lineHeight: '140%' }],
        'feature-desc':  ['17px', { lineHeight: '140%' }],
      },
      colors: {
        // ── New design tokens ─────────────────────────────────────────────
        'zinc': {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
        'brand': {
          blue:      '#3B3BF9',
          blueDark:  '#2C2CDB',
          blueLight: '#6B6BFC',
          indigo:    '#4B5DFF',
        },
        // ── Legacy colors (kept for existing sections) ────────────────────
        'primary':    '#2752E7',
        'secondary':  '#FFF8EE',
        'numbers':    '#D0DBFF',
        'headertext': '#2C3131',
        'right':      '#345D9D',
        'border':     '#E3E3E3',
        'herosection':'#fafafa',
        'bitcoin':    '#F7931A',
      },
    },
  },
  plugins: [],
}
