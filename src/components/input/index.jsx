import React from 'react';
import styles from './styles.scss';

const Input = ({className, ...props}) => (
  <input className={className ? `${styles.input} ${className}` : styles.input} {...props} />
);

export default Input;
