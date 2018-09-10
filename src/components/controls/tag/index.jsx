import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './tag.scss';

const Tag = ({onClose, children}) => (
  <div className={styles.container}>
    {children}
    <span className={styles.delimeter}></span>
    <span onClick={onClose}>x</span>
  </div>
);

Tag.propTypes = {
  onClose: PropTypes.func
};

export default Tag;
