/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440'
    },
    extend: {
      colors:{
        color: 'hsl(228, 45%, 44%)',
        Violet: 'hsl(257, 40%, 49%)',
      SoftMagenta: 'hsl(300, 69%, 71%)',
      brighrRed: 'hsl(12, 88%, 59%)',
      }
    },
  },
  plugins: [],
}
