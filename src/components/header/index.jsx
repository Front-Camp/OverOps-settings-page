import React from 'react';
import styles from './header.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles['left-cell']}>
        <div className={styles.logo}>logo</div>
      </div>
      <div className={styles['right-cell']}>
        <div className={styles.info}>?</div>
      </div>
    </div>
  );
};

export default Header;
