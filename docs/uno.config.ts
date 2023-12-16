import { defineConfig, presetAttributify, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
  safelist: [
    'dark:invert',
    'i-mdi:language-typescript',
  ],
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
  ],
  transformers: [
    transformerDirectives(),
  ],
})
