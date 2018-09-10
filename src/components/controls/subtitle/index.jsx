import * as React from 'react';

import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './subtitle.scss';

const stylesContext = classNames.bind(styles);

const SubTitle = ({className, children}) => {
  const classes = stylesContext(className, 'subtitle');

  return (
    <h4 className={classes}>
      {children}
    </h4>
  );
};

SubTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default SubTitle;
