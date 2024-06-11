// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  modules: [
    'nuxt-primevue',
    "@pinia/nuxt",
    '@nuxt/test-utils/module',
    // "@hebilicious/authjs-nuxt"
  ]
})