import React, {Component} from 'react';
// TODO: add PropTypes
// import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {navigationSections} from './navigation-sections';

import styles from './navigation.scss';

export default class Navigation extends Component {
  render() {
    return (
      <div className={styles.navigation}>
        {
          navigationSections.map(section => (
            <div key={section.title} className={styles['navigation-section']}>
              <h1 className={styles['navigation-section-title']}>{section.title}</h1>
              <ul>
                {
                  section.links.map(link =>
                    <li key={link.label} className={styles['navigation-item']}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>)
                }
              </ul>
            </div>
          ))
        }
      </div>
    );
  }
}
