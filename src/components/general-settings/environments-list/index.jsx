import React from 'react';
import styles from './environments-list.scss';
import Table from '../../table';
import AddEnvironment from '../add-environment';
import {IconDownload, IconSetting} from '../../icons';
import connect from 'react-redux/es/connect/connect';
import {Link} from 'react-router-dom';
import Title from '../../controls/title';
import SubTitle from '../../controls/subtitle';

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

const EnvironmentsList = ({services}) => {
  const mockedServices = services.map(item => {
    return [item.name, item.full_key, 'Owner'];
  });
  const config = getConfig(mockedServices);

  return (
    <section className={styles['environments-list']}>
      <div className={styles.heading}>
        <Title>Environments</Title>
        <SubTitle>
          Manage all OverOps environments you can access from this machine. &nbsp;
          <a className={styles.link}>Learn more.</a>
        </SubTitle>
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

export default connect(mapStateToProps, null)(EnvironmentsList);
