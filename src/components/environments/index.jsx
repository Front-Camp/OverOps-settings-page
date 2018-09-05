import React from 'react';
import styles from './environments.scss';
import Table from '../table';
import Navigation from '../navigation';

const Environments = () => (
  <div className={styles['page-wrapper']}>
    <h1>Environments</h1>
    <h4>Manage all OverOps environments you can access from this machine. <a>Learn more</a></h4>
    <Navigation />
    <Table />
  </div>
);

export default Environments;
