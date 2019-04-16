module.exports = {
  themeConfig: {
    nav: [
        { text: 'Accueil', link: '/' },
        { text: 'Article', link: '/article/'}
    ],
    sidebar: [
        '/',
        '/page2'
      ],
      updatePopup: true, // Boolean | Object, default to undefined.
      lastUpdated: 'Last Updated', // string | boolean
      repo: 'SamLefebvre/SamLefebvre.github.io',
      repoLabel: 'Fork me on GitHub!',

      // Optional options for generating "Edit this page" link
      docsRepo: 'SamLefebvre/SamLefebvre.github.io',
      docsDir: 'docs',
      docsBranch: 'production',
      editLinks: true,
      editLinkText: 'Edit this page!'
  }
}