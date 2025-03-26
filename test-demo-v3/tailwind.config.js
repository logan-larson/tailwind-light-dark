// import tailwindLightDark from 'tailwind-light-dark';

/** @type {import('tailwindcss').Config} */
// export default {
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        avocado: {
          50: 'oklch(0.99 0 0)',
          100: 'oklch(0.99 0 0)',
          200: 'oklch(0.98 0.04 113.22)',
          300: 'oklch(0.94 0.11 115.03)',
          400: 'oklch(0.92 0.19 114.08)',
          500: 'oklch(0.84 0.18 117.33)',
          600: 'oklch(0.53 0.12 118.34)',
          700: 'oklch(0.42 0.11 118.34)',
          800: 'oklch(0.32 0.09 118.34)',
          900: 'oklch(0.22 0.06 118.34)',
          950: 'oklch(0.12 0.03 118.34)',
        }
      }
    },
  },
  plugins: [
    require('tailwind-light-dark')({ version: 3 }),
  ],
}

