/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: [
    "./layouts/*.{html,js,css}"
  ],
  theme: {

    fontFamily: {
      'fontawesome': ['Font Awesome 5 Free'],
    },

    screens: {
      'sm': {'max': '767px'},
      // => @media (max-width: 639px) { ... }  Mobile

      'xside': {'max': '992px'},
      // => @media (max-width: 639px) { ... }  Mobile

      'xx': '1300px',
      // => @media (max-width: 639px) { ... }  Mobile

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1199px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        fontbody: ['Cairo'],
      },
      container: {
        center: true,
      }
    },
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/aspect-ratio'),
      require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
}
