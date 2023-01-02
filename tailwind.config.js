/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        locamar: {
            white: '#F6F8FF',
            primary: '#FF6F4B',
            secundary: '#719150',
            yellow: '#FFFF47',
            black: '#121619',
        }
      },
    },
  },
  plugins: [],
}
