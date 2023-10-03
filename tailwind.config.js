/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Define gradient directions in the theme
      gradientDirections: {
        't': 'to top',
        'r': 'to right',
        'b': 'to bottom',
        'l': 'to left',
      },
      // Add gradient background classes
      backgroundImage: (theme) => ({
        'gradient-t': `linear-gradient(${theme('gradientDirections.t')}, ${theme('gradientColorStops.primary')}, ${theme('gradientColorStops.secondary')})`,
        'gradient-r': `linear-gradient(${theme('gradientDirections.r')}, ${theme('gradientColorStops.primary')}, ${theme('gradientColorStops.secondary')})`,
        'gradient-b': `linear-gradient(${theme('gradientDirections.b')}, ${theme('gradientColorStops.primary')}, ${theme('gradientColorStops.secondary')})`,
        'gradient-l': `linear-gradient(${theme('gradientDirections.l')}, ${theme('gradientColorStops.primary')}, ${theme('gradientColorStops.secondary')})`,
      }),
    },
  },
  plugins: [],
}

