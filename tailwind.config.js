/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    fontFamily: {
      spaceMono: ['Space Mono', 'monospace'],
    },
    extend: {
      colors: {
        white: '#ffffff',
        lighterGreen: '#F3F9FA',
        lightGreen: '#C5E4E7',
        strongCyan: '#26C2AE',
        darkGreen: '#00474B',
        lightGray: '#7F9D9F',
        darkGrayishCyan: 'hsl(186, 14%, 43%)',
        veryLightGreen: '#9FE8DF',
      },
    },
  },
  plugins: [],
};
