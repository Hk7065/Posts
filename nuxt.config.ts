export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '@/assets/styles/tailwind.css',
  ],

  modules: [
    '@nuxtjs/tailwindcss',  
    '@pinia/nuxt',  
  ],

  compatibilityDate: '2025-02-26',
});