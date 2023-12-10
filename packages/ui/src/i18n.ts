import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import languageDetector from 'i18next-browser-languagedetector'

import { resources } from './i18n/resources'

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: import.meta.env.DEV,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export { i18n }
