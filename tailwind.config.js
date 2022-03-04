// const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './index.html',
    // './**/*.{html,js}',
  ],
  theme: {
    // ...defaultTheme,
    extend: {
      colors: {
        'very-drk-blue': 'hsl(233, 47%, 7%)',
        'drk-blue-two': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'white': 'hsl(0, 0%, 100%)',
        'white-transp': 'hsla(0, 0%, 100%, 0.75)',
        'white-transp-two': 'hsla(0, 0%, 100%, 0.6)',
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
