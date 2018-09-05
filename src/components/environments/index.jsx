import React from 'react';
import styles from './environments.scss';
import Table from '../table';
import Navigation from '../navigation';
import Input from '../input';
import Button from '../button';

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
  }
]


const Environments = () => (
  <div className={styles['page-wrapper']}>
    <div style={{display: 'flex'}}>
      <Navigation sections={navigationSections} />
      <main>
        <h1>Environments</h1>
        <h4>Manage all OverOps environments you can access from this machine. <a>Learn more</a></h4>
        <Table />

        <h1>Add environment</h1>
        <span>Generate a new license key: </span>
        <Input type="text" placeholder="Enter an environment name" />
        <Button>Add</Button>
      </main>
    </div>
  </div>
);

export default Environments;
