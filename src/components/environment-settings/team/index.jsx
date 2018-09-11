import * as React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Input from '../../controls/input';
import Button from '../../controls/button';
import Table from '../../table';
import {IconEdit, IconBin} from '../../icons';
import Title from '../../controls/title';
import SubTitle from '../../controls/subtitle';
import AccessControl from './access-control';
import styles from './team.scss';

const EditAndDelete = () => (
  <div className={styles['edit-delete-container']}>
    <span className={styles.edit}>
      <IconEdit size={14} color="blue1" />
    </span>
    <span className={styles.delimeter}>|</span>
    <span className={styles.delete}>
      <IconBin size={14} color="blue1" />
    </span>
  </div>
);

class Team extends React.Component {

  getCellObject = (value, rowIndex) =>
    ({value, noBottomBorder: rowIndex === this.props.teamMembers.length - 1});

  tableConfig = {
    body: this.props.teamMembers.map(({name, email, role, status}, i) => [
      this.getCellObject(name, i),
      this.getCellObject(email, i),
      {...this.getCellObject(role || status, i), style: !role ? {color: '#96a3b3'} : null},
      this.getCellObject(<EditAndDelete />, i)
    ])
  };

  render () {
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
        <Table config={this.tableConfig} />
        <AccessControl />
      </section>
    );
  }
}

Team.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.oneOf(['Owner', 'Member', 'Admin']),
    status: PropTypes.string
  }))
};

export default connect(state => ({teamMembers: state.teamMembers}))(Team);
