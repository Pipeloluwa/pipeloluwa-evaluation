/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ["Switzer", "sans-serif"]
      }
    },
  },
  plugins: [],
})




// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         custom: ['CustomFont', 'sans-serif'],
//         customBold: ['CustomFontBold', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// };