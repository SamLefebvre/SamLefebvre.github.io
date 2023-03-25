const { path } = require('@vuepress/utils')
// import { defineAsyncComponent } from 'vue'
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { defaultTheme } = require('@vuepress/theme-default')

import { navbar, sidebar } from './configs'

module.exports = {
  clientAppSetupFiles: path.resolve(__dirname, 'clientAppSetup.ts'),
  onPrepared: async (app) => {
    const myData = app.pages.map((page) => {
      // ...
      return page; 
    })
    await app.writeTemp('my-data.js', `export default ${JSON.stringify(myData)}`)
  },


  clientAppEnhanceFiles: path.resolve(__dirname, 'clientAppEnhance.js'),
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': path.resolve(__dirname,"./assets")
      }
    }
  },
  alias: {
    '@alias': path.resolve(__dirname, '../assets'),
  },
 
  head: [
    ['script',{ src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/js/all.min.js' }],
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
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
        selectLanguageName: 'Français',
        selectLanguageText: 'Langue'
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language'
      },
    }
    ,


        // sidebar array
    
        // all pages will use the same sidebar
    // navbar: navbar.fr,

    // sidebar
    // sidebar: sidebar.fr,

    
    // 
    // lastUpdated: true,
    // lastUpdatedText: 'aa', // string | boolean

    // docsRepo: 'SamLefebvre/SamLefebvre.github.io',
    // docsDir: 'docs',
    // docsBranch: 'production',

  }
  ,

  theme: defaultTheme({

    lastUpdatedText: '⏳️', // string | boolean
    editLink: false,
    contributors: false,
    darkMode: true,
    prefersTheme: 'dark',
    updatePopup: false, // Boolean | Object, default to undefined.
    
    locales: {
      '/': {
        selectLanguageName: 'Français',
        selectLanguageText: 'Langue',
        sidebar: sidebar.fr,
        navbar: navbar.fr,
        lang: 'fr-CA',
        title: 'Samuël Lefebvre',
        description: 'Curriculum vitæ, projets et autre !'

      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        sidebar: sidebar.en,
        navbar: navbar.en,
        lang: 'en-US',
        title: 'Samuël Lefebvre',
        description: 'Curriculum vitæ, projets and more !'
      },
    }
  }),

  plugins: [
    [
      // '@vuepress/last-updated',
      // {
      //   transformer: (timestamp, lang) => {
      //     // Don't forget to install moment yourself
      //     const moment = require('moment')
      //     moment.locale(lang)
      //     return moment(timestamp).fromNow()
      //   }
      // },
      // https://v2.vuepress.vuejs.org/reference/plugin/register-components.html
      registerComponentsPlugin({
        componentsDir: path.resolve(__dirname, './components'),
      }),
    ]
  ]

  
  
  // plugins: {
  //   '@vuepress/last-updated': {
  //     transformer: (timestamp, lang) => {
  //       const moment = require('moment-timezone')
  //       moment.locale(lang)
  //       return moment(timestamp).tz("America/Montreal").format('LLL')
  //     }
  //   }
  // }


  //,
  // plugins: {
  //   '@vuepress/pwa': {
  //     serviceWorker: true,
  //     updatePopup: false
  //     // updatePopup: {
  //     //   '/': {
  //     //     message: "Nouveau contenu disponible.",
  //     //     buttonText: "Recharger"
  //     //   },
  //     //   '/en/': {
  //     //     message: "New content is available.",
  //     //     buttonText: "Refresh"
  //     //   }
  //     // }
  //   },
  //   '@vuepress/last-updated': {
  //     transformer: (timestamp, lang) => {
  //       const moment = require('moment-timezone')
  //       moment.locale(lang)
  //       return moment(timestamp).tz("America/Montreal").format('LLL')
  //     }
  //   },
  //   '@vuepress/medium-zoom': {
  //     // selector: 'img.zoom-custom-imgs',
  //     // medium-zoom options here
  //     // See: https://github.com/francoischalifour/medium-zoom#options
  //     options: {
  //       margin: 16,
  //       background: "rgba(33,33,43,0.88)"
  //     }
  //   }
  // },
  // markdown: {
  //   extendMarkdown(md) {
  //     md.set({ breaks: true }) // break on newline
  //   }
  // },
  // chainWebpack (config, isServer) {
  //   if (isServer === false) {  // to make geopattern work
  //     config.node.set('Buffer', false)
  //   }
  //   const inlineLimit = 10000
  //   config.module.rule('images')
  //     .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/) //webp is not supported by default
  //     .use('url-loader')
  //       .loader('url-loader')
  //       .options({
  //         limit: inlineLimit,
  //         name: `assets/img/[name].[hash:8].[ext]`
  //       })
  // }



}