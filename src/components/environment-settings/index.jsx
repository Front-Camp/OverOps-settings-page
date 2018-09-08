import * as React from 'react';
import EnvironmentRoutes from './routes';
import Navigation from '../navigation';

import styles from './environment-settings.scss';

const EnvironmentSettings = () => {
  return (
    <div className={styles['environment-settings']}>
      <div className={styles.navigation}>
        <Navigation settings="environment" />
      </div>
      <div className={styles.settings}>
        <EnvironmentRoutes />
      </div>
    </div>
  );
};

export default EnvironmentSettings;
