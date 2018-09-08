import React from 'react';
import styles from './environments.scss';
import Table from '../../table';
import AddEnvironment from '../add-environment';
import {IconDownload, IconSetting} from '../../icons';

// TODO: move this to separate file
const blue1 = '#51b2e9';

const InstallAndSettings = () => (
  <div className={styles.install_settings__container}>
    <span className={styles.install}><IconDownload size={14} color={blue1} />Install</span>
    <span className={styles.delimeter}>|</span>
    <span className={styles.settings}><IconSetting size={14} color={blue1} />Settings</span>
  </div>
);

const Environments = () => (
  <section className={styles.environments}>
    <div>
      <div className={styles.heading}>
        <h1 className={styles.title}>Environments</h1>
        <h4 className={styles.subtitle}>
          Manage all OverOps environments you can access from this machine.
          <a className={styles.link}>Learn more.</a>
        </h4>
      </div>

      <Table config={{
        headings: ['Key Name', 'Key ID', 'Role', {value: '', hasBorderBottom: false}],
        body: [
          ['Pre Prod', '513216546489789465sdjkfasldkfjaskldf', 'Owner'],
          ['Staging', '513216546489789465sdjkfasldkfjaskldf', 'Admin'],
          ['John\'s key', '513216546489789465sdjkfasldkfjaskldf', 'Admin'],
          ['QA checks', '513216546489789465sdjkfasldkfjaskldf', 'Member'],
          ['Shir\'s key', '513216546489789465sdjkfasldkfjaskldf', 'Member'],
          ['Jenny\'s', '513216546489789465sdjkfasldkfjaskldf', 'Member']
        ].map(row => [...row, {value: <InstallAndSettings />, hasBorderBottom: false}])
      }}/>

      <AddEnvironment />
    </div>
  </section>
);

export default Environments;
