import * as React from 'react';
import {IconQuestion} from '../../icons/icon-question';
import Input from '../../controls/input';
import Button from '../../controls/button';

import styles from './add-environment.scss';

const AddEnvironment = () => {
  return (
    <section className={styles['add-environment']}>
      <h1 className={styles.title}>Add an Environment</h1>

      <span className={styles.label}>
        Generate a new license key: &nbsp;
        <IconQuestion colors={['#fff', '#5c656e']} size={14} />
      </span>

      <div className={styles['input-wrapper']}>
        <Input type="text" placeholder="Enter an environment name" />
      </div>

      <div className={styles['btn-wrapper']}>
        <Button>Add</Button>
      </div>
    </section>
  );
};

export default AddEnvironment;
