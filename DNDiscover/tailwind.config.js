// eslint-disable-next-line no-undef
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#42b883',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  allowJs: true,

  //didnt work?
};