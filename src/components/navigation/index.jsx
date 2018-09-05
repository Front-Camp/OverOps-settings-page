import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './navigation.scss';

export default class Navigation extends Component {
  render() {
    const navigationSections = [{
      title: 'General Settings',
      links: [{
        label: 'Environment',
        path: '/environment'
      }, {
        label: 'Team',
        path: '/team'
      },{
        label: 'Alerts',
        path: '/alerts'
      },{
        label: 'Dashboard',
        path: '/dashboard'
      }, {
        label: 'Filter Code',
        path: '/filter-code'
      }]
    }, {
      title: 'Installation',
      links: [{
        label: 'Storage',
        path: '/storage'
      }, {
        label: 'Email Server',
        path: '/email-server'
      }]
    }, {
      title: 'Security',
      links: [{
        label: 'Data redaction',
        path: '/data-redaction'
      }, {
        label: 'LDAP',
        path: '/ldap'
      },{
        label: 'SAML',
        path: '/saml'
      }]
    }, {
      title: 'Integrations',
      links: [{
        label: 'Public metrics',
        path: '/public-metrics'
      }, {
        label: 'Jira',
        path: '/jira'
      }, {
        label: 'Git',
        path: '/git'
      }]
    }];

    return (
      <div style={{marginLeft: '100px'}}>
        {navigationSections.map(section => (
          <div key={section.title} className={styles['navigation-section']}>
            <h1 className={styles['navigation-section-title']}>{section.title}</h1>
            <ul>
              {section.links.map(link => <li key={link.label} className={styles['navigation-item']}>{link.label}</li>)}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}
