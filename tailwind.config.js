/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',],
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
          "10%, 30%, 50%, 70%, 90%": {
            transform: "translate(-5px, 0) rotate(-5deg)",
          },
          "20%, 40%, 60%, 80%": {
            transform: "translate(5px, 0) rotate(5deg)",
          },
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "max-3xl": { raw: "(max-width: 1919px)" }, 
    },
  },
  plugins: [],
}

