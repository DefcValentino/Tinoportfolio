/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkbg: 'rgb(0,33,50)',  // dark navy blue
        darkbgtwo: 'rgb(0,40,67)', // lighter navy blue
        lightbg: 'rgba(0,15,137,2)', // light blue
        orangebg: 'rgb(245,20,145)', // purple
        orangebglight: 'rgb(255,204,143)',//lighter shade of orange
      },

      backgroundImage: {
        'orange-gradient' : 'linear-gradient(90deg, rgb(255,204,143) 0%, rgb(245,20,145) 100% )',
      }
    },
  },
  plugins: [],
}

