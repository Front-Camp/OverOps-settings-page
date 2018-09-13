import * as React from 'react';
import {IconQuestionCircle} from '../../icons';
import Input from '../../controls/input';
import Button from '../../controls/button';

import styles from './add-environment.scss';
import Title from '../../controls/title';
import connect from 'react-redux/es/connect/connect';
import {fetchCreateService} from '../../../actions/create-service';

class AddEnvironment extends React.Component {
  constructor (...props) {
    super(...props);

    this.state = {
      input: ''
    };

    this.createService = this.createService.bind(this);
  }

  updateInput () {
    return e => {
      this.setState({input: e.target.value});
    };
  }

  createService () {
    return () => {
      this.props.fetchCreateService(this.state.input)
        .then(() => {
          this.setState({input: ''});
        });
    };
  }

  render () {
    return (
      <section className={styles['add-environment']}>
        <Title>Add an Environment</Title>

        <span className={styles.label}>
          Generate a new license key: &nbsp;
          <IconQuestionCircle colors={['grey4', 'white1']} size={14} />
        </span>

        <div className={styles['input-wrapper']}>
          <Input
            type="text"
            placeholder="Enter an environment name"
            value={this.state.input}
            onChange={this.updateInput()}/>
        </div>

        <div className={styles['btn-wrapper']}>
          <Button onClick={this.createService()}>Add</Button>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCreateService: data => dispatch(fetchCreateService(data)),
});

export default connect(null, mapDispatchToProps)(AddEnvironment);
