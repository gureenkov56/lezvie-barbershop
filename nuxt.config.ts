export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],
  build: {
    // @ts-ignore
    loaders: {
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
  googleFonts: {
    families: {
      // basic
      Lato: [100, 300],

      // advanced
      Raleway: {
        // weights
        wght: [100, 400],
        // italic
        ital: [100],
      },
    },
  },
  css: ["@/layouts/global.scss"],
});
