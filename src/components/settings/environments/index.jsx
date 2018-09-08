import React from 'react';
import styles from './environments.scss';
import Navigation from '../../navigation';
import Input from '../../input';
import Button from '../../button';
import '../../table2';
import {IconDownload, IconQuestion, IconSetting} from '../../icons';
import Table2 from '../../table2';

// TODO: move this to separate file
const blue1 = '#51b2e9';
const grey4 = '#5c656e';

const navigationSections = [{
  title: 'OverOps',
  links: [{
    path: '/environments',
    label: 'Environments'
  }]
}, {
  title: 'User',
  links: [{
    path: '/personal-data',
    label: 'Personal Data'
  }, {
    path: '/api',
    label: 'API'
  }]
}];

const InstallAndSettings = () => (
  <div className={styles.install_settings__container}>
    <span className={styles.install}><IconDownload size={14} color={blue1} />Install</span>
    <span className={styles.delimeter}>|</span>
    <span className={styles.settings}><IconSetting size={14} color={blue1} />Settings</span>
  </div>
);

const Environments = () => (
  <div className={styles.environments}>
    <div className={styles.navigation}>
      <Navigation sections={navigationSections} />
    </div>
    <div className={styles.navigation_separator}></div>
    <main>
      <div className={styles.heading}>
        <h1 className={styles.title}>Environments</h1>
        <h4 className={styles.subtitle}>Manage all OverOps environments you can access from this machine. <a className={styles.link}>Learn more.</a></h4>
      </div>
      <Table2 config={{
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

      <div style={{marginTop: '50px'}}>
        <h1 className={styles.title}>Add an Environment</h1>
        <span className={styles.label}>Generate a new license key: <IconQuestion color={grey4} optionalColor="#fff" size={14} /></span>
        <Input className={styles.input} type="text" placeholder="Enter an environment name" />
        <Button className={styles.button}>Add</Button>
      </div>
    </main>
  </div>
);

export default Environments;
