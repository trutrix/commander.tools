// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  pages: true,

  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
  icon: {
    size: '30px',
    mode: 'css',
    cssLayer: 'base',
    clientBundle: {
      scan: true,
      sizeLimitKb: 256
    }
  }
})