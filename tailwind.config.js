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
            white: '#FFF7F8',
            primary: '#FF5C33',
            secundary: '#719150',
            yellow: '#FFFF47',
            black: '#121619',
        }
      },
    },
  },
  plugins: [],
}
