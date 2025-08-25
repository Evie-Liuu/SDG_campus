/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'huninn': ['jf-openhuninn', 'sans-serif'],
      },  
      // colors: {
      //   rrd: {
      //     100: "hsl(333,80%,67%)",
      //   }
      // }
    },
  },
  plugins: [],
}
