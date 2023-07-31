// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      // basic
      Lato: [100, 300],
  
      // advanced
      Raleway: {
        // weights
        wght: [100, 400],
        // italic
        ital: [100]
      },
    }
  },
  css: [
    "@/layouts/global.css",
  ],
})
