const general = [
  {
    title: 'OverOps',
    links: [
      {
        label: 'Environments',
        path: 'environments'
      }
    ]
  },
  {
    title: 'User',
    links: [
      {
        label: 'Personal Data',
        path: 'personal-data'
      },
      {
        label: 'API',
        path: 'api'
      }
    ]
  },
];

const environment = [
  {
    title: 'General Settings',
    links: [
      // TODO: need do discuss
      // {
      //   label: 'Environment',
      //   path: '/environment'
      // },
      {
        label: 'Team',
        path: 'team'
      },
      {
        label: 'Alerts',
        path: 'alerts'
      },
      {
        label: 'Dashboard',
        path: 'dashboard'
      },
      {
        label: 'Filter Code',
        path: 'filter-code'
      }
    ]
  },
  {
    title: 'Installation',
    links: [
      {
        label: 'Storage',
        path: 'storage'
      },
      {
        label: 'Email Server',
        path: 'email-server'
      }
    ]
  },
  {
    title: 'Security',
    links: [
      {
        label: 'Data redaction',
        path: 'data-redaction'
      },
      {
        label: 'LDAP',
        path: 'ldap'
      },
      {
        label: 'SAML',
        path: 'saml'
      }
    ]
  },
  {
    title: 'Integrations',
    links: [
      {
        label: 'Public metrics',
        path: 'public-metrics'
      },
      {
        label: 'Jira',
        path: 'jira'
      },
      {
        label: 'Git',
        path: 'git'
      }
    ]
  }
];

const config = {
  environment,
  general
};

export default config;
