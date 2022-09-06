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
          sidebarDepth: 2,
          children: [
            '/get-started/deploy-node-app',
          ]
        },        
        {
          title: 'Next Steps',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '/next-steps/deploy-a-lambda',
            '/next-steps/deploy-react-app',
          ]
        },
        {
          title: 'Customize',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/customize/terraform',
            '/customize/cicd',
            '/customize/project',
          ]
        },
        {
          title: 'Reference',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/reference-yaml',
            '/reference-digger-supported-tech',
            '/reference-digger-key-features',
            '/reference-cli',
            '/cli/installation',
          ]
        },
        {
          title: 'Miscellaneous',
          collapsable: false,
          children: [
            '/misc/aws-keys',
            '/misc/adding-domains-with-vercel',
            '/misc/tagging-and-rollbacks',
            '/misc/env-vars-build',
            '/misc/secrets',
          ]
        }
      ]
    }
  }