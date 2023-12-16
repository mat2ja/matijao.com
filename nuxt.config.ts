import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/critters',
    '@nuxtjs/robots',
    '@nuxt/devtools',
    '@nuxt/image',
  ],

  vue: {
    defineModel: true,
    propsDestructure: true,
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

  routeRules: {
    '/**': { prerender: true },
  },

  css: [
    '~/assets/styles/style.css',
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
      meta: [
        {
          name: 'description',
          content: 'Matija Osrečki is a frontend software engineer from Croatia.',
        }
      ]
    },

  },
})
