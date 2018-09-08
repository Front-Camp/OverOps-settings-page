import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import config from './config';

import styles from './navigation.scss';

export default class Navigation extends Component {
  state = {
    activeSection: null,
    activeLink: null
  };

  checkIfLinkIsActive(section, link) {
    return this.state.activeSection === section && this.state.activeLink === link;
  }

  getNavigationItemClasses (section, link) {
    return this.checkIfLinkIsActive(section, link)
      ? `${styles['navigation-item']} ${styles.active}`
      : styles['navigation-item'];
  }

  render() {
    // TODO: make refactoring!

    return (
      <nav className={styles.navigation}>
        {
          config[this.props.settings].map(section => (
            <div key={section.title} className={styles['navigation-section']}>
              <h1 className={styles['navigation-section-title']}>{section.title}</h1>
              <ul>
                {section.links.map(link =>
                  <li
                    key={link.label}
                    onClick={() =>
                      this.setState({activeLink: link.label, activeSection: section.title})}>
                    <Link to={`${link.path}`}
                          className={this.getNavigationItemClasses(section.title, link.label)}>
                      <span className={styles['active-link-indicator']} />
                      <span>{link.label}</span>
                    </Link>
                  </li>)}
              </ul>
            </div>
          ))
        }
      </nav>
    );
  }
}

Navigation.propTypes = {
  settings: PropTypes.string
};
