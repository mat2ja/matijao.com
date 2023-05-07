import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@vue-macros/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/image-edge',
    '@nuxtjs/color-mode',
    'nuxt-typed-router',
    '@nuxtjs/critters',
    '@nuxtjs/robots',
    '@nuxt/devtools',
  ],

  experimental: {
    inlineSSRStyles: true,
  },

  devtools: {
    enabled: false,
  },

  unocss: {
    preflight: true,
  },

  imports: {
    dirs: [
      'composables/**',
      'store/**',
    ],
    presets: [
      'pinia',
    ],
  },

  css: [
    '~/assets/styles/fonts.css',
  ],

  postcss: {
    plugins: {
      'postcss-nesting': {},
    },
  },

  colorMode: {
    classSuffix: '',
  },

  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/',
    },
  },

  app: {
    head: {
      title: 'Matija Osrečki',
    },
  },
})
