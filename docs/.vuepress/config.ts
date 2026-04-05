import { path } from '@vuepress/utils'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

import { navbar, sidebar } from './configs'

export default defineUserConfig({
  bundler: viteBundler(),

  clientAppSetupFiles: path.resolve(__dirname, 'clientAppSetup.ts'),

  onPrepared: async (app) => {
    const myData = app.pages.map((page) => page)
    await app.writeTemp('my-data.js', `export default ${JSON.stringify(myData)}`)
  },

  clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js'),

  alias: {
    '@assets': path.resolve(__dirname, './assets'),
    '@alias': path.resolve(__dirname, '../assets'),
    // Flat “English” / “Français” navbar links instead of the default language dropdown
    '@theme/useNavbarSelectLanguage': path.resolve(
      __dirname,
      './client/useNavbarSelectLanguage.ts',
    ),
  },

  head: [
    [
      'script',
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js' },
    ],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
  ],

  locales: {
    '/': {
      lang: 'fr-CA',
      title: 'Samuël Lefebvre',
      description: 'Curriculum vitæ, projets et autre !',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Samuël Lefebvre',
      description: 'Curriculum vitæ, projets and more !',
    },
  },

  theme: defaultTheme({
    themePlugins: {
      // Use the site-wide `mediumZoomPlugin` below so zoom options stay customizable.
      mediumZoom: false,
    },
    lastUpdatedText: '⏳️',
    editLink: false,
    contributors: false,
    colorMode: 'dark',

    locales: {
      '/': {
        selectLanguageName: 'Français',
        selectLanguageText: 'Langue',
        sidebar: sidebar.fr,
        navbar: navbar.fr,
        lang: 'fr-CA',
        title: 'Samuël Lefebvre',
        description: 'Curriculum vitæ, projets et autre !',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        sidebar: sidebar.en,
        navbar: navbar.en,
        lang: 'en-US',
        title: 'Samuël Lefebvre',
        description: 'Curriculum vitæ, projets and more !',
      },
    },
  }),

  plugins: [
    mediumZoomPlugin({
      zoomOptions: {
        margin: 16,
        background: 'rgba(33,33,43,0.88)',
      },
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
})
