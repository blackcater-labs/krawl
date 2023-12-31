import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

/** @type {import('@antfu/eslint-config').antfu} */
export default antfu(
  {
    react: true,
    formatters: {
      css: true,
      html: true,
    },
  },
  ...compat.config({
    extends: [
      'plugin:tailwindcss/recommended',
    ],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
  {
    files: ['packages/ui/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
      'node/prefer-global/process': 'off',
    },
  },
)
