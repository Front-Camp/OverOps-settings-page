import * as React from 'react';
import {Link, withRouter} from 'react-router-dom';
import config from './configs';

import styles from './navigation.scss';

export class Navigation extends React.Component {
  render() {
    const {settings} = this.props;

    return (
      <div className={styles.navigation}>
        {
          config[settings].map(section => (
            <div key={section.title} className={styles['navigation-section']}>
              <h1 className={styles['navigation-section-title']}>{section.title}</h1>
              <ul>
                {
                  section.links.map(link =>
                    <li key={link.label} className={styles['navigation-item']}>
                      <Link to={`${this.props.match.url}${link.path}`}>{link.label}</Link>
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

export default withRouter(Navigation);
