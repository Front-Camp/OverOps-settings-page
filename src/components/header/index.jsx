import * as React from 'react';

import {IconQuestionCircleOutline, IconLogo} from '../icons';
import styles from './header.scss';

const onClick = () => {
  window.location.reload();
};

const Header = () => {
  return (
    <div className={styles.header}>
      <div
        onClick={onClick}
        className={styles['left-cell']}
      >
        <div className={styles.logo}>
          <IconLogo />
        </div>
      </div>
      <div className={styles['right-cell']}>
        <div className={styles.info}>
          <IconQuestionCircleOutline color="white1" size={19} />
        </div>
      </div>
    </div>
  );
};

export default Header;
