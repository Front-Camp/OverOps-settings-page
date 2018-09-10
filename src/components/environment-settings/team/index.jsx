import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Input from '../../controls/input';
import Button from '../../controls/button';
import Tag from '../../controls/tag';
import Table from '../../table';
import {IconEdit, IconBin} from '../../icons';
import Title from '../../controls/title';
import SubTitle from '../../controls/subtitle';
import styles from './team.scss';

const blue1 = '#51b2e9';
const grey2 = '#96a3b3';

const EditAndDelete = () => (
  <div className={styles['edit-delete-container']}>
    <span className={styles.edit}>
      <IconEdit size={14} color={blue1} />
    </span>
    <span className={styles.delimeter}>|</span>
    <span className={styles.delete}>
      <IconBin size={14} color={blue1} />
    </span>
  </div>
);

const Team = ({teamMembers}) => {
  const getCellObject = (value, rowIndex) =>
    ({value, noBottomBorder: rowIndex === teamMembers.length - 1});

  const tableConfig = {
    body: teamMembers.map(({name, email, role, status}, i) => [
      getCellObject(name, i),
      getCellObject(email, i),
      {...getCellObject(role || status, i), style: !role ? {color: grey2} : null},
      getCellObject(<EditAndDelete />, i)
    ])
  };
  return (
    <section className={styles.team}>
      <div className={styles.heading}>
        <Title>Team Management</Title>
        <SubTitle>
          Invite teammates to access your OverOps environment and root cause analysis.&nbsp;
          <a className={styles.link}>Learn more.</a>
        </SubTitle>
      </div>
      <div className={styles['invite-to-team-container']}>
        <span className={styles.label}>Invite to team:</span>
        <Input className={styles.input} placeholder="someone@company.com" />
        <Button>Add</Button>
      </div>
      <Table config={tableConfig} />

      <div className={styles.access_control_container}>
        <h1 className={styles.title}>Access control</h1>
        <div className={styles.input_container}>
          <span className={styles.label}>Allow access only to the following users:</span>
          <Input className={styles.input} placeholder="someone@company.com" />
          <Tag>user1@mycompany.com</Tag>
          <Tag>user2@mycompany.com</Tag>
        </div>
        <div className={styles.input_container}>
          <span className={styles.label}>Allow access only for the following IP{'\''}s:</span>
          <Input className={styles.input} placeholder="127.0.0.1" />
          <Tag>192.168.1.13</Tag>
        </div>
      </div>

    </section>
  );
};

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.oneOf(['Owner', 'Member', 'Admin']),
    status: PropTypes.string
  }))
};

export default connect(state => ({teamMembers: state.teamMembers}))(Team);
