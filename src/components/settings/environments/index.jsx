import React from 'react';
import styles from './environments.scss';
import Table from '../../table';

const Environments = () => (
  <div className={styles.environments}>
    <h1>Environments</h1>
    <h4>Manage all OverOps environments you can access from this machine. <a>Learn more</a></h4>
    <Table />
  </div>
);

export default Environments;
