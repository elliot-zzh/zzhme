import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import { presetIcons, presetWind3 } from 'unocss'
import vue from '@astrojs/vue'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify/functions'

export default defineConfig({
  site: 'https://zzhme.netlify.app',
  integrations: [
    UnoCSS({
      presets: [
        presetIcons({
          scale: 1.4,
          cdn: 'https://esm.sh',
          extraProperties: {
            display: 'inline-block'
          }
        }),
        presetWind3,
      ],
      theme: {
        colors: {
          nearBlack: 'var(--near-black)',
          deepGray: 'var(--deep-gray)',
          midGray: 'var(--mid-gray)',
          lightGray: 'var(--light-gray)',
          lightMidGray: 'var(--light-mid-gray)',
          hLightMidGray: 'var(--h-light-mid-gray)'
        }
      }
    }),
    vue(),
    mdx()
  ],
  output: 'static',
  adapter: netlify({
    devFeatures: {
      edgeFunctions: false,
      environmentVariables: true,
      images: true,
    },
  })
})
