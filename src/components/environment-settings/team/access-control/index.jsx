import * as React from 'react';
import Tag from '../../../controls/tag';
import Input from '../../../controls/input';
import Title from '../../../controls/title';
import styles from './access-control.scss';

class AccessControl extends React.Component {
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

  removeIP = ipToDelete => () =>
    this.setState({ips: this.state.ips.filter(ip => ip !== ipToDelete)})

  removeEmail = emailToDelete => () =>
    this.setState({emails: this.state.emails.filter(email => email !== emailToDelete)})

  updateState (field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
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
    );
  }
}

export default AccessControl;
