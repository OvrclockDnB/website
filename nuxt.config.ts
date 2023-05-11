// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', href: '/favicon-16x16.png'},
        {rel: 'manifest', href: '/site.webmanifest'},
        {rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#000000'},
      ],
      meta: [
        {name: 'msapplication-TileColor', content: '#ffffff'},
        {name: 'theme-color', content: '#ffffff'},
        {name: 'og:title', content: 'Ovrclock DnB'},
        {name: 'og:description', content: '🇩🇪 Drum and Bass Collective 🇧🇬'},
        {name: 'og:image', content: 'https://ovrclock.com/images/logo.png'},
        {name: 'og:image:width', content: '560'},
        {name: 'og:image:height', content: '544'},
      ]
    }
  },
  nitro: {
    preset: 'cloudflare_pages',
  },
})
