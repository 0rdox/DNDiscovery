// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     './src/**/*.html',
//     './src/**/*.js',
//     './src/**/*.vue',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }



module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }