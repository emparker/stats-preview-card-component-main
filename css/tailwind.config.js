module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  content: [
    './**/*.{html,js}'
  ],
  purge: [],
  theme: {
    colors: {
      veryDrkBlue: 'hsl(277, 64%, 61%)',
      drkBlueTwo: 'hsl(244, 38%, 16%)',
      softViolet: 'hsla(0, 0%, 100%, 0.6)',
      white: 'hsl(0, 0%, 100%)',
      whiteTransp: 'hsla(0, 0%, 100%, 0.75)',
      whiteTranspTwo: 'hsla(0, 0%, 100%, 0.6)',
    },
    fontFamily: {

    },
    extend: {},
   
  },
  variants: {},
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
