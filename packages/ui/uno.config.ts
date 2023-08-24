import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
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
})
