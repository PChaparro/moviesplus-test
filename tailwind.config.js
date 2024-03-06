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
            default: '#f51434',
            hover: '#d90a29',
          },
          bg: '#0a0a12',
        },
      },
    },
  },
  plugins: [],
};
