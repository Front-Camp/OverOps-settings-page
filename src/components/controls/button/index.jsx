import React from 'react';
import classNames from 'classnames/bind';

import styles from './button.scss';

const stylesContext = classNames.bind(styles);

const Button = ({className, ...props}) => {
  const classes = stylesContext(className, 'button');

  return <button className={classes} {...props} >{props.children}</button>;
};

export default Button;
