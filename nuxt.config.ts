export default defineNuxtConfig({
  server: {
    host: "0.0.0.0",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@nuxt/image", "@pinia/nuxt"],

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

      'Sofia Sans Condensed' : {
        wght: [300]
      }

    },
  },

  css: ["@/layouts/global.scss"],
  compatibilityDate: "2024-08-12",
});
