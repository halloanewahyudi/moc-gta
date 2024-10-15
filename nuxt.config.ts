// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@vueuse/motion/nuxt', 'nuxt-swiper'],
  css: [
    '~/assets/style.css'
  ],
  tailwindcss: {
    configPath: 'tailwind.config.js'
  }
})