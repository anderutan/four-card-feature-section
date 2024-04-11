/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(234, 12%, 34%)',
        'grayish-blue': 'hsl(229, 6%, 66%)',
        'light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
