/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        heroStimage: "url('/images/hero-bg.png')",
        heroBg: "url('/images/body-bg.png')",
        heroClidernimg: "url('/images/hero.png')",
    },
    },
  },
  plugins: [],
}
