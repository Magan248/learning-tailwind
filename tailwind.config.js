/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: '#7f1d1d',
      },
      backgroundImage: {
        'testimonial-section': "url('/images/testimonial-bg.svg')",
      },
      
    },
  },
  plugins: [
      plugin(function({ addVariant }) {
          addVariant("open-menu", ".open-menu &");
      }),
      plugin(function({ addVariant }) {
          addVariant("active", ".active&");
      })
  ],
}
