/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        themecolor: {
          100: '#C0FFF4',
          200: '#93FFE5',
        },
        fontFamily: {
          poppins: ['Poppins'],
        },
      },
    },
    plugins: [],
  },
};
