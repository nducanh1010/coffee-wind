// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
 routeRules:{
  '/': { prerender: true },
 },
  // config directory
  app: {
    baseURL:'/coffee-wind/',
    buildAssetsDir:'assets',
    head: {
      link: [
        { rel: "icon", type: "image/png", href: "/coffee-icon.jpg" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200..800;1,200..800&display=swap"
        }
      ]
    }
  },
  pages: true,
  components: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    preset: "node-server"
  },
  build: {}
});
