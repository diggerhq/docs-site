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
            '/overview/concepts',
            '/overview/digger-vs-other',
          ]
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            '/getting-started/installation',
            '/getting-started/node-express',
            '/getting-started/django'
          ]
        },
        {
          title: 'Reference',
          collapsable: false,
          children: [
            '/reference-cli',
            '/reference-yaml',
          ]
        },
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: [
            '/misc/tagging-and-rollbacks',
            '/misc/composing-terraform-templates',
            '/misc/cicd',
          ]
        }
      ]
    }
  }