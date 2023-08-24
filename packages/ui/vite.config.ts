import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import { alias } from '../../alias'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  root: __dirname,
  base: command === 'build' ? '/__krawl/' : '/',
  resolve: {
    alias: {
      ...alias,
      '~/': `${resolve(__dirname, 'client')}`,
    },
  },
  plugins: [
    Unocss('uno.config.ts'),
    Vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    Components({
      dirs: ['client/components'],
      dts: 'client/components.d.ts',
    }),
    Pages({
      dirs: ['client/pages'],
    }),
    AutoImport({
      dirs: ['client/composables'],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: 'client/auto-imports.d.ts',
      injectAtEnd: true,
    }),
  ],
  build: {
    outDir: 'dist/client',
  },
}))
