/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
    "*"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      grisTemplatesColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
