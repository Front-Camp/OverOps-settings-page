import React from 'react';

import styles from './input.scss';
import classNames from 'classnames/bind';

const stylesContext = classNames.bind(styles);

const Input = ({className, ...props}) => {
  const classes = stylesContext(className, 'input');

  return <input className={classes} {...props} />;
};

export default Input;
