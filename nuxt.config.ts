// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // config directory
  pages: true,
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
    {
      path: '~/components/layout',
      pathPrefix: false,
    },
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
