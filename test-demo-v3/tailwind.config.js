import tailwindLightDark from 'tailwind-light-dark';
// import tailwindLightDark from '../src/index';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    tailwindLightDark,
  ],
}

