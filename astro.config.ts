import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import vue from '@astrojs/vue'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://zzhme.netlify.app',
  integrations: [
    UnoCSS(),
    vue(),
    mdx()
  ],
  output: 'static'
})
