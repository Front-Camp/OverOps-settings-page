import React from 'react';
import {Link} from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import {toggleShowKeyId} from '../../../actions/services';
import styles from './environments-list.scss';
import Table from '../../table';
import AddEnvironment from '../add-environment';
import {IconDownload, IconSetting} from '../../icons';
import Title from '../../controls/title';
import SubTitle from '../../controls/subtitle';
import {KeyIdCell} from './key-id-cell';

const InstallAndSettings = ({keyName}) => (
  <div className={styles['install-settings-container']}>
    <span className={styles.install}>
      <IconDownload size={14} color="blue1" />Install
    </span>
    <span className={styles.delimeter}>|</span>
    <span className={styles.settings}>
      <IconSetting size={14} color="blue1" />
      <Link to={`/settings/environment/${keyName}`}>Settings</Link>
    </span>
  </div>
);

const getConfig = arr => {
  return {
    columnsWidth: ['15%', '50%', '15%', '20%'],
    headings: ['Key Name', 'Key ID', 'Role', {value: '', noBottomBorder: true}],
    body: arr.map(row => {
      const [keyName] = row;
      return [...row, {value: <InstallAndSettings keyName={keyName} />, noBottomBorder: true}];
    })
  };
};

const EnvironmentsList = ({services, toggleShowKeyId}) => {
  const mockedServices = services.map(item => {
    const toggle = () => toggleShowKeyId(item.name);
    const keyID = {
      value: <KeyIdCell item={item} toggle={toggle}/>,
    };
    return [item.name, keyID, 'Owner'];
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

const mapDispatchToProps = dispatch => ({
  toggleShowKeyId: keyId => dispatch(toggleShowKeyId(keyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnvironmentsList);
