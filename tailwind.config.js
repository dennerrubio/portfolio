/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'scooter': {
          '50': '#eefafd',
          '100': '#d4f2f9',
          '200': '#aee4f3',
          '300': '#76cfea',
          '400': '#35b0d8',
          '500': '#1c95be',
          '600': '#1a77a0',
          '700': '#1c6082',
          '800': '#1f506b',
          '900': '#1e435b',
          '950': '#0e2b3e',
      },
      },
      fontFamily: {
        notosans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
