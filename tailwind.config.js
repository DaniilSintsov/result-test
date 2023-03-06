/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      screens: {
        minw880: {
          raw: '(min-width: 880px)'
        }
      }
    }
  },
  plugins: []
};
