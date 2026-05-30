import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/wiki/',
  title: 'Twitch Wiki',
  description: 'Player wiki for the Twitch-integrated game',
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Spells', link: '/guide/spells' },
      { text: 'Projectiles', link: '/guide/projectiles' },
      { text: 'Outfits', link: '/guide/outfits' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Commands', link: '/' },
          { text: 'Spells', link: '/guide/spells' },
          { text: 'Projectiles', link: '/guide/projectiles' },
          { text: 'Outfits & Colors', link: '/guide/outfits' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChatGamex/wiki' },
    ],
  },
})
