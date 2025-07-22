/** @type {import('tailwindcss').Config} */
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
  plugins: [],
}