/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: '#f51434',
            dark: '#d90a29',
          },
          bg: '#0a0a12',
        },
      },
      screens: {
        xs: '320px',
      },
    },
  },
  plugins: [],
};
