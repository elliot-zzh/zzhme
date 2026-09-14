import { defineConfig, presetIcons, presetWind3 } from 'unocss'

export default defineConfig({
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
})
