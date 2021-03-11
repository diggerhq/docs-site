module.exports = {
    themeConfig: {
      displayAllHeaders: true,
      logo: '/digger-logo-text.png',
      sidebar: [
        {
          title: 'Overview',
          collapsable: false,
          children: [
            '/',
            '/concepts',
            '/digger-vs-other',
          ]
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/installation',
            '/quickstart/node-express'
          ]
        },
        {
          title: 'Reference',
          collapsable: false,
          children: [
            '/reference-cli',
            '/reference-yaml',
          ]
        }
      ]
    }
  }