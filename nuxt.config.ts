// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // config directory
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/coffee-icon.jpg" }]
    }
  },
  pages: true,
  components: [
    {
      path: "~/components",
      pathPrefix: false
    },
    {
      path: "~/components/layout",
      pathPrefix: false
    }
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
