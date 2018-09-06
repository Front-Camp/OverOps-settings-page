import React from 'react';
import Navigation from '../navigation';
import Header from '../header';
import Breadcrumbs from '../breadcrumbs';
import Settings from '../settings';

import styles from './content.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.body}>
        <Breadcrumbs/>
        <div className={styles['settings-body']}>
          <div className={styles.navigation}>
            <Navigation />
          </div>
          <div className={styles.settings}>
            <Settings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
