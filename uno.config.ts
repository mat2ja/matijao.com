import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: {
          name: 'Satoshi',
          provider: 'fontshare',
        },
        display: {
          name: 'Palmtick',
          provider: 'none',
        },
        mono: {
          // name: 'iA Writer Mono',
          name: 'DM Mono',
          provider: 'google',
        },
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: {
    'row': 'w-full max-w-5xl mx-auto px-5 sm:px-8',
    'text-dimmed': 'text-stone-7 dark:text-stone-4',
  },
})
