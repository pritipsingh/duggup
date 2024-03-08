/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-gray': '0px 4px 0px 0px #4D4D4D',
        "hoverShadow":  "0px 2px 0px 0px #003A91",
        "about-shadow": "0px 1px 2px 0px #DBE5F540"


      },
    }
  },
  plugins: []
};