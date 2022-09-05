/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require("tailwind-scrollbar"), 
    require('@tailwindcss/forms'),
  ],
  //fix some tailwindcss className missing in JIT reload change
  // its make slow down in building entries
  // safelist: [
  //   {
  //     pattern: /^(.*?)/,
  //   },
  // ],
}
