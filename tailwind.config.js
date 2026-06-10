/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBg: '#f5f7fa',
        brandLight: '#d6e9fe',
        brandDark: '#162129',
        blue: {
          50: '#f1f7fe',
          100: '#d6e9fe',
          200: '#a3d2fd',
          300: '#7cbdfe',
          400: '#51ACFC',
          500: '#014DFC',
          600: '#014DFC',
          700: '#013ba0',
          800: '#21303c',
          900: '#162129',
          950: '#0d1419',
        }
      }
    },
  },
  plugins: [],
};
