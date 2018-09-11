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
  state = {
    ips: ['192.168.1.13'],
    emails: ['user1@mycompany.com', 'user2@mycompany.com'],
    email: '',
    ip: ''
  };

  addEmail = ({target: {value}, keyCode}) => {
    if (keyCode === 13 && value && !this.state.emails.includes(value)) {
      this.setState({emails: [...this.state.emails, value], email: ''});
    }
  };

  addIp = ({target: {value}, keyCode}) => {
    if (keyCode === 13 && value && !this.state.ips.includes(value)) {
      this.setState({ips: [...this.state.ips, value], ip: ''});
    }
  };

  getCellObject = (value, rowIndex) =>
    ({value, noBottomBorder: rowIndex === this.props.teamMembers.length - 1});

  removeIP = ipToDelete => () =>
    this.setState({ips: this.state.ips.filter(ip => ip !== ipToDelete)})

  removeEmail = emailToDelete => () =>
    this.setState({emails: this.state.emails.filter(email => email !== emailToDelete)})

  tableConfig = {
    body: this.props.teamMembers.map(({name, email, role, status}, i) => [
      this.getCellObject(name, i),
      this.getCellObject(email, i),
      {...this.getCellObject(role || status, i), style: !role ? {color: '#96a3b3'} : null},
      this.getCellObject(<EditAndDelete />, i)
    ])
  };

  updateState (field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

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

        <div className={styles['access-control-container']}>
          <Title>Access control</Title>
          <div className={styles['input-container']}>
            <span className={styles.label}>Allow access only to the following users:</span>
            <Input
              className={styles.input}
              placeholder="someone@company.com"
              value={this.state.email}
              onChange={this.updateState('email')}
              onKeyUp={this.addEmail}
            />
            <div className={styles['tags-container']}>
              {this.state.emails.map(email =>
                <Tag key={email} onClose={this.removeEmail(email)}>{email}</Tag>)}
            </div>
          </div>
          <div className={styles['input-container']}>
            <span className={styles.label}>Allow access only for the following IP{'\''}s:</span>
            <Input
              className={styles.input}
              placeholder="127.0.0.1"
              value={this.state.ip}
              onChange={this.updateState('ip')}
              onKeyUp={this.addIp}
            />
            <div className={styles['tags-container']}>
              {this.state.ips.map(ip =>
                <Tag key={ip} onClose={this.removeIP(ip)}>{ip}</Tag>)}
            </div>
          </div>
        </div>
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
