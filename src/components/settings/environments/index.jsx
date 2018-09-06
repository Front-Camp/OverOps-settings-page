import * as React from 'react';
import Table from '../../table';

import styles from './environments.scss';

const Environments = () => (
  <div className={styles.environments}>
    <h1>Environments</h1>
    <h4>Manage all OverOps environments you can access from this machine. <a>Learn more</a></h4>
    <Table />
  </div>
);

export default Environments;
