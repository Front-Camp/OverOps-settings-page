import * as React from 'react';
import PropTypes from 'prop-types';

const Spinner = ({ active }) => {
  return (
    <div className={ active ? 'spinner' : 'hidden' } />
  );
};

Spinner.propTypes = {
  active: PropTypes.bool
};

Spinner.defaultProps = {
  active: false
};

export default Spinner;
