import * as React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Loader = ({ loader }) => {
  console.error('loader', loader);
  return (
    <div className={ loader ? 'loader-wrapper' : 'hidden'}>
      <div className={ 'loader' } />
    </div>
  );
};

Loader.propTypes = {
  active: PropTypes.bool
};

Loader.defaultProps = {
  active: false
};

const mapStateToProps = ({ loader }) => ({ loader });

export default connect(mapStateToProps, null)(Loader);
