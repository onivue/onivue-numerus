// const colors = require('tailwindcss/colors')

// module.exports = {
//     mode: 'jit',
//     purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//     darkMode: 'class', // or 'media' or 'class'
//     theme: {
//         extend: {
//             colors: {
//                 darkTheme: '#171a23',
//                 lightTheme: '#ffffff',
//                 gray: {
//                     700: '#8E8E8E',
//                     900: '#363B49',
//                 },
//                 blue: {
//                     700: '#7899FB',
//                     900: '#3C6CFF',
//                 },

//                 pink: '#EEE8F6',
//                 cyan: colors.cyan,
//                 lime: colors.lime,
//             },
//         },
//     },
//     variants: {
//         extend: {},
//     },
//     plugins: [],
// }

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stores/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.amber,
        },

        dark: { 100: '#404040', 200: '#000000' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
