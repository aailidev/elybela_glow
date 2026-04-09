/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
      },
      colors: {
        cream:        '#FAF6F0',
        sand:         '#F0E8DC',
        'dark-brown': '#2C1A0E',
        gold:         '#C9A84C',
        'gold-dark':  '#A07830',
        ebony:        '#0D0D0D',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body:    ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
