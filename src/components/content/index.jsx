import React from 'react';
import Header from '../header';
// TODO: uncomment when it will be done
// import Breadcrumbs from '../breadcrumbs';
import ContentRoutes from './routes';

import styles from './content.scss';

const Content = () => {
  return (
    <main className={styles.content}>
      <Header />
      <div className={styles.body}>
        {/*<Breadcrumbs />*/}
        <ContentRoutes/>
      </div>
    </main>
  );
};

export default Content;
