import * as React from 'react';
import PropTypes from 'prop-types';

import styles from './spinner.scss';

const Spinner = ({ active }) => {
  return (
    <div className={ active ? styles.spinner : styles.hidden } />
  );
};

Spinner.propTypes = {
  active: PropTypes.bool
};

Spinner.defaultProps = {
  active: false
};

export default Spinner;
