import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import { crx as CRX } from '@crxjs/vite-plugin'

import manifest from './manifest.json'

export default defineConfig({
  plugins: [
    React(),
    CRX({ manifest }),
  ],
})
