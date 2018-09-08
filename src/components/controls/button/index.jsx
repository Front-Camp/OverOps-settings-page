import React from 'react';
import styles from './button.scss';

const Button = ({className = '', ...props}) => (
  <button className={`${className} ${styles.button}`.trim()} {...props}>
    {props.children}
  </button>
);

export default Button;
