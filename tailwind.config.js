/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'newsletter': "url('./Assets/newsletter.png')",
        'about': "url('./Assets/aboutbg.png')",
       }),
      fontFamily: {
        yukita: ['YUKITA', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        argentum: ['Argentum', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
        gilroysemibold: ['Gilroy-semiBold', 'sans-serif'],
      },
      colors: {
        'primary': '#2752E7',
        'secondary': '#FFF8EE',
        'numbers': '#D0DBFF',
        'headertext': '#2C3131',
        'right': '#345D9D',
        'border': '#E3E3E3',
         'herosection': '#fafafa'
      },
    },
  },
  plugins: [],
}
