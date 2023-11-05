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
    '@nuxtjs/critters',
    '@nuxtjs/robots',
    '@nuxt/devtools',
    "@nuxt/image"
  ],

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },

  experimental: {
    typedPages: true,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
      },
    },
  },

  devtools: {
    enabled: true,
  },

  unocss: {
    preflight: true,
  },

  imports: {
    dirs: [
      'composables/**',
      'store/**',
      'constants/**',
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
      Allow: '/',
    },
  },

  app: {
    head: {
      title: 'Matija Osrečki',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      ],
    },
  },
})
