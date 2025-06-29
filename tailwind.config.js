/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './app/**/*.{js,ts,jsx,tsx}',
  './pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',
  './src/**/*.{js,ts,jsx,tsx}',  // Добавь, если у тебя src
],
  safelist: ['font-neucha'],
  theme: {
    extend: {
      fontFamily: {
        firaGo: ['"Fira GO"', 'sans-serif'],
        neucha: ['Neucha', 'cursive'],
      },
      animation: {
        shake: "shake 0.8s linear infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate(0, 0) rotate(0deg)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate(-5px, 0) rotate(-5deg)" },
          "20%, 40%, 60%, 80%": { transform: "translate(5px, 0) rotate(5deg)" },
        },
      },
    },
  },
  plugins: [],
};
