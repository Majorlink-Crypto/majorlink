/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'newsletter': "url('./Assets/newsletter.png')",
        'about': "url('./Assets/aboutbg.png')",
       }),
      screens: {
        'smm': {
          max: "1000px"
        },
        'mmm': {
          max: '850px'
        }
      },
      fontFamily: {
        aeonikmedium: ['AeonikMedium', 'sans-serif'],
        aeonikregular: ['AeonikRegular', 'sans-serif'],
        aeonikbold: ['AeonikBold', 'sans-serif'],
        grifter: ['Grifter', 'sans-serif'],
      },
      colors: {
        'primary': '#2752E7',
        'secondary': '#FFF8EE',
        'numbers': '#D0DBFF',
        'headertext': '#2C3131',
        'right': '#345D9D',
        'border': '#E3E3E3',
         'herosection': '#fafafa',
         'bitcoin': '#F7931A',
      },
    },
  },
  plugins: [],
}
