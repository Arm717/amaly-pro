/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // если используешь App Router
    './pages/**/*.{js,ts,jsx,tsx}',    // если Pages Router
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        firaGo: ['"Fira GO"', 'sans-serif'],
        neucha: ['Neucha', 'cursive'],
      },
    },
  },
  plugins: [],
};
