/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'keppel': '#3bba9c',
        'gunmetal': '#2e3047',
        'outer-space': '#43455c',
        'arsenic': '#3c3f58',
        'rhythm': '#7o7793'
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          from: {
            "bottom-border-color": "transparent"
          },
          to: {
            "bottom-border-color": "#3bba9c"
          }  
        }
      },
      animation: {
        typing1: "typing 1s alternate, blink .7s infinite",
        typing2: "typing 1s alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}

