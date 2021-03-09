module.exports = {
    themeConfig: {
      displayAllHeaders: true,
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
            '/quickstart-server',
            '/quickstart-static'
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