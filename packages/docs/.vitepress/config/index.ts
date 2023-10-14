import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { sharedConfig } from './shared'

export default defineConfig({
  ...sharedConfig,

  locales: {
    root: { label: 'Українська', lang: 'uk-UA', link: '/', ...enConfig },
  },
})
