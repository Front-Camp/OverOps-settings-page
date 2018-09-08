import React from 'react';

import styles from './input.scss';

const Input = ({className, ...props}) => (
  <input className={className ? `${styles.input} ${className}` : styles.input} {...props} />
);

export default Input;
