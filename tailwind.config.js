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
    extend: {
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
      colors: {
        coffee: { 50: "#E8D6D0", 200: "#C89F94", 400: "#a25f4b" , 600: "#744838" }
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" }
        }
      },
      animation: {
        slideDown: "slideDown .4s ease-in-out"
      },
      backgroundImage: {
        "slider-bg": 'url("/coffee-slider.jpg")'
      }
    }
  },
  plugins: []
};
