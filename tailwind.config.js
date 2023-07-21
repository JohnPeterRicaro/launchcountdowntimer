/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        grayishBlue: 'hsl(237, 18%, 59%)',
        softRed: 'hsl(345, 95%, 68%)',

        darkDesaturatedBlue: 'hsl(236, 21%, 26%)',
        slightlyDarkerDesBlue: 'hsla(236, 21%, 21%, 1)',
        veryDarkBlue: 'hsl(235, 16%, 14%)',
        mostlyBlackBlue: 'hsl(234, 17%, 12%)',
      },
      fontFamily: {
        redHatText: 'Red Hat Text, sans-serif',
      },
    },
  },
  plugins: [],
}

