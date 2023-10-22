import { black, colors } from './src/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {...colors, black},
    extend: {},
  },
  plugins: [],
}

