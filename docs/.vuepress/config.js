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
          title: 'Quick Start',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/get-started/deploy-a-lambda',
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
            '/misc/aws-keys',
            '/misc/tagging-and-rollbacks',
            '/misc/env-vars-build',
            '/misc/secrets',
          ]
        }
      ]
    }
  }