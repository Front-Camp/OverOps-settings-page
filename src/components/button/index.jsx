import React from 'react';
import styles from './styles.scss';

const Button = ({className = '', ...props}) => (
  <button className={`${className} ${styles.button}`.trim()} {...props}>{props.children}</button>
);

export default Button;
