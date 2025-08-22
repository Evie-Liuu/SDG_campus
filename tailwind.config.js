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
      color:{
        "rrd":"#ff0000"
      }
    },
  },
  plugins: [],
}
