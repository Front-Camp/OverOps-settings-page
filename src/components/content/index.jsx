import React from 'react';
import Header from '../header';
import Breadcrumbs from '../breadcrumbs';

import styles from './content.scss';
import Navigation from '../navigation';
import Settings from '../settings';

const Content = () => {
  return (
    <div className={styles.content}>
      <Header />
      <div className={styles.body}>
        <Breadcrumbs />

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
