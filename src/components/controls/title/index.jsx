import * as React from 'react';

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './title.scss';

const stylesContext = classNames.bind(styles);

const Title = ({className, children}) => {
  const classes = stylesContext(className, 'title');

  return (
    <h4 className={classes}>
      {children}
    </h4>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Title;
