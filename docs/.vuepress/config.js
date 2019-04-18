module.exports = {
  head: [
    ['script defer',{ src: 'https://use.fontawesome.com/releases/v5.8.1/js/all.js' }]
  ],
  title:'Samuël Lefebvre',
  themeConfig: {
    nav: [
        { text: 'Accueil', link: '/' },
        { text: 'Article', link: '/article/'}
    ],
    sidebar: {
      '/article/': [
        '',
        'markdownDemo'
      ],

      // fallback
      '/': [
        ['', 'Accueil'],
        'portfolio',
        'interest'
      ]
    },

    updatePopup: true, // Boolean | Object, default to undefined.
    lastUpdated: '⏳️', // string | boolean
    // repo: 'SamLefebvre/SamLefebvre.github.io',
    // repoLabel: 'Fork me on GitHub!',

    docsRepo: 'SamLefebvre/SamLefebvre.github.io',
    docsDir: 'docs',
    docsBranch: 'production',
    editLinks: false,
    editLinkText: 'Edit this page!'
  },
  chainWebpack (config, isServer) {
    if (isServer === false) {  // to make geopattern work
      config.node.set('Buffer', false)
    }
  }
}