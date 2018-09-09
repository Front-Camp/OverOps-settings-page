import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Input from '../../controls/input';
import Button from '../../controls/button';
import Table from '../../table';
import styles from './team.scss';
import {IconEdit, IconBin} from '../../icons';

const blue1 = '#51b2e9';
const grey2 = '#96a3b3';

const EditAndDelete = () => (
  <div className={styles.edit_delete__container}>
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
        <h1 className={styles.title}>Team Management</h1>
        <h4 className={styles.subtitle}>
          Invite teammates to access your OverOps environment and root cause analysis.&nbsp;
          <a className={styles.link}>Learn more.</a>
        </h4>
      </div>
      <div className={styles.invite_to_team_container}>
        <span className={styles.label}>Invite to team:</span>
        <Input className={styles.input} placeholder="someone@company.com" />
        <Button>Add</Button>
      </div>
      <Table config={tableConfig} />
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
