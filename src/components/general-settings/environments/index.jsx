import React from 'react';
import styles from './environments.scss';
import Table from '../../table';
import AddEnvironment from '../add-environment';
import {IconDownload, IconSetting} from '../../icons';
import connect from 'react-redux/es/connect/connect';
import {Link} from 'react-router-dom';

// TODO: move this to separate file
const blue1 = '#51b2e9';

const InstallAndSettings = ({keyName}) => (
  <div className={styles.install_settings__container}>
    <span className={styles.install}>
      <IconDownload size={14} color={blue1} />Install
    </span>
    <span className={styles.delimeter}>|</span>
    <span className={styles.settings}>
      <IconSetting size={14} color={blue1} />
      <Link to={`/settings/environment/${keyName}`}>Settings</Link>
    </span>
  </div>
);

const getConfig = arr => {
  return {
    headings: ['Key Name', 'Key ID', 'Role', {value: '', noBottomBorder: true}],
    body: arr.map(row => {
      const [keyName] = row;
      return [...row, {value: <InstallAndSettings keyName={keyName} />, noBottomBorder: true}];
    })
  };
};

const Environments = ({services}) => {
  const mockedServices = services.map(item => {
    return [item.name, item.full_key, 'Owner'];
  });
  const config = getConfig(mockedServices);

  return (
    <section className={styles.environments}>
      <div className={styles.heading}>
        <h1 className={styles.title}>Environments</h1>
        <h4 className={styles.subtitle}>
          Manage all OverOps environments you can access from this machine. &nbsp;
          <a className={styles.link}>Learn more.</a>
        </h4>
      </div>
      <Table config={config} />
      <AddEnvironment />
    </section>
  );
};

const mapStateToProps = state => {
  return {
    services: state.services
  };
};

export default connect(mapStateToProps, null)(Environments);
