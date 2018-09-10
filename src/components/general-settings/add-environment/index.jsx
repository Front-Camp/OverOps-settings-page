import * as React from 'react';
import {IconQuestionCircle} from '../../icons';
import Input from '../../controls/input';
import Button from '../../controls/button';

import styles from './add-environment.scss';
import Title from '../../controls/title';

const AddEnvironment = () => {
  return (
    <section className={styles['add-environment']}>
      <Title>Add an Environment</Title>

      <span className={styles.label}>
        Generate a new license key: &nbsp;
        <IconQuestionCircle colors={['#5c656e', '#fff']} size={14} />
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
