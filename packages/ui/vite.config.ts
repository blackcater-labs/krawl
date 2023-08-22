import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  base: './',
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'client')}`,
    },
  },
  define: {
    __BASE_PATH__: '"/__krawl__/"',
  },
  plugins: [
    Vue({
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    }),
    Unocss({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
      shortcuts: {
        'bg-base': 'bg-white dark:bg-[#111]',
        'bg-overlay': 'bg-[#eee]:50 dark:bg-[#222]:50',
        'bg-header': 'bg-gray-500:5',
        'bg-active': 'bg-gray-500:8',
        'bg-hover': 'bg-gray-500:20',
        'border-base': 'border-gray-500:10',

        'tab-button': 'font-light op50 hover:op80 h-full px-4',
        'tab-button-active': 'op100 bg-gray-500:10',
      },
    }),
    Components({
      dirs: ['client/components'],
      dts: resolve(__dirname, './client/components.d.ts'),
    }),
    Pages({
      dirs: ['client/pages'],
    }),
    AutoImport({
      dts: resolve(__dirname, './client/auto-imports.d.ts'),
      dirs: [
        './client/composables',
      ],
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      injectAtEnd: true,
    }),
  ],
  build: {
    outDir: './dist/client',
  },
})
