module.exports = {
    themeConfig: {
      displayAllHeaders: true,
      logo: '/digger-logo-text.png',
      sidebar: [
        {
          title: 'Overview',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/',
            '/overview/concepts',
            '/overview/how-it-works',
            '/overview/digger-vs-other',
          ]
        },
        {
          title: 'CLI',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/cli/installation',
            '/cli/node-express',
            '/cli/django',
          ]
        },
        {
          title: 'Customize',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/customize/terraform',
            '/customize/cicd',
          ]
        },
        {
          title: 'Reference',
          collapsable: false,
          sidebarDepth: 0,
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
            '/misc/env-vars-build',
            '/misc/secrets',
          ]
        }
      ]
    }
  }