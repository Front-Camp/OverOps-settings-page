import * as React from 'react';
import GeneralSettingsRoutes from './routes';

import styles from './general-settings.scss';
import Navigation from '../navigation';

const GeneralSettings = () => {
  return (
    <div className={styles['general-settings']}>
      <div className={styles.navigation}>
        <Navigation settings="general" />
      </div>
      <div className={styles.settings}>
        <GeneralSettingsRoutes />
      </div>
    </div>
  );
};

export default GeneralSettings;
