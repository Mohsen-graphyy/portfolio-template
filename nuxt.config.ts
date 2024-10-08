// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],

  typescript: {
    typeCheck: true,
  },

  colorMode: {
    preference: "light",
  },

  compatibilityDate: "2024-08-23",
});