import * as React from 'react';
import PropTypes from 'prop-types';
import Close from '@material-ui/icons/Close';
import styles from './tag.scss';

const Tag = ({onClose, children}) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.text}>{children}sdfjsdfjl</div>
      <div className={styles.delimeter}></div>
      <div className={styles.close} onClick={onClose}><Close /></div>
    </div>
  </div>
);

Tag.propTypes = {
  onClose: PropTypes.func
};

export default Tag;
