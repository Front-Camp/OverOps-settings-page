import React from 'react';
import Header from '../header';
import Breadcrumbs from '../breadcrumbs';

import styles from './content.scss';
import ContentRoutes from './routes';

const Content = () => {
  return (
    <main className={styles.content}>
      <Header />
      <div className={styles.body}>
        <Breadcrumbs />
        <ContentRoutes/>
      </div>
    </main>
  );
};

export default Content;
