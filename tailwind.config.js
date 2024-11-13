// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors:{
//         primary:"#f97316",
//       },
//       container:{
//         // center:true,
//         padding:{
//           DEFAULT:'1rem',
//           sm:'2rem',
//           lg:'4rem',
//           xl:'5rem',
//           "2xl":"6rem",
//         },
//       },
//       animation:{
//         "spin-slow":"soin 20s linear infinite",},
//         keyframes:{
//           spin:{
//             from:{
//               transform:"rotate(0deg)",
//             },
//             to:{
//               transform:"rotate(360deg)"
//             },

//           },
//         },
//       },
//     },
  
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#f97316",
      },
      container:{
        padding:{
          DEFAULT:'1rem',
          sm:'2rem',
          lg:'4rem',
          xl:'5rem',
          "2xl":"6rem",
        },
      },
      animation:{
        "spin-slow":"spin-slow 20s linear infinite", // Corrected animation name
      },
      keyframes:{
        "spin-slow":{  // Corrected keyframe name to match the animation
          from:{
            transform:"rotate(0deg)",
          },
          to:{
            transform:"rotate(360deg)"
          },
        },
      },
    },
  },
  plugins: [],
}
