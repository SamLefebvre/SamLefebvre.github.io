const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,"../assets")
      }
    }
  },
  head: [
    ['script defer',{ src: 'https://use.fontawesome.com/releases/v5.8.1/js/all.js' }],
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  locales: {
    '/': {
      lang: 'fr-CA',
      title: 'Samuël Lefebvre',
      description: 'Curriculum vitæ, projets et autre !'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Samuël Lefebvre',
      description: 'Curriculum vitæ, projets and more !'
    }
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'Français',
        selectText: 'Langues',
        nav: [
          { text: 'Accueil', link: '/' },
          { text: 'Article', link: '/article/'}
        ],
        sidebarDepth: 3,
        sidebar: {
          '/article/': [
            '',
            'radarChart',
            'markdownDemo'
          ],
          // Default
          '/': [
            ['', 'Accueil'],
            'portfolio',
            'interest'
          ]
        }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Article', link: '/en/article/'}
        ],
        sidebarDepth: 3,
        sidebar: {
          '/en/article/': [
            '',
            'secure-access-with-ssh-keys'
          ],
          // Default
          '/en/': [
            ['', 'Home'],
            'portfolio',
            'interest'
          ]
        }
      }
    },

    updatePopup: false, // Boolean | Object, default to undefined.
    lastUpdated: '⏳️', // string | boolean

    docsRepo: 'SamLefebvre/SamLefebvre.github.io',
    docsDir: 'docs',
    docsBranch: 'production',
    editLinks: false,
    editLinkText: 'Edit this page!'
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: false
      // updatePopup: {
      //   '/': {
      //     message: "Nouveau contenu disponible.",
      //     buttonText: "Recharger"
      //   },
      //   '/en/': {
      //     message: "New content is available.",
      //     buttonText: "Refresh"
      //   }
      // }
    },
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        const moment = require('moment-timezone')
        moment.locale(lang)
        return moment(timestamp).tz("America/Montreal").format('LLL')
      }
    },
    '@vuepress/medium-zoom': {
      // selector: 'img.zoom-custom-imgs',
      // medium-zoom options here
      // See: https://github.com/francoischalifour/medium-zoom#options
      options: {
        margin: 16,
        background: "rgba(33,33,43,0.88)"
      }
    },
    'img-lazy':{}
  },
  markdown: {
    extendMarkdown(md) {
      md.set({ breaks: true }) // break on newline
    }
  },
  chainWebpack (config, isServer) {
    if (isServer === false) {  // to make geopattern work
      config.node.set('Buffer', false)
    }
  }
}