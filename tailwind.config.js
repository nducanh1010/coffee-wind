/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px"
    },
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        coffee: {
          50: "#E8D6D0",
          200: "#C89F94",
          400: "#a25f4b",
          600: "#744838"
        }
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        },
        slideUp: {
          "0%": {},

          "100%": { transform: "translateY(0)", opacity: 1 }
        },
        fadeIn: {
          from: { opacity: 0, bottom: "0px" },
          to: { opacity: 1, bottom: "1rem" }
        },
        fadeOut: {
          from: { opacity: 1, bottom: "1rem" },
          to: { opacity: 0, bottom: "0px" }
        }
      },
      animation: {
        slideUp: "slideUp .4s ",
        slideDown: "slideDown .4s ease-in-out",
        fadeIn: "fadeIn .3s ease-in-out",
        fadeOut: "fadeOut .3s ease-in-out"
      },
      backgroundImage: {
        "slider-bg": 'url("/coffee-slider.jpg")'
      }
    }
  },
  plugins: []
};
