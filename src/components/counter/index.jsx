import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increment, decrement} from '../../actions/counter';

import styles from './counter.scss';

const Counter = ({counter, actions}) => {
  const {increment, decrement} = actions;

  return (
    <div className={styles.counter}>
      <div>
        {counter}
      </div>
      <div>
        <button className={styles.btn} onClick={() => increment()}>+1</button>
        <button className={styles.btn} onClick={() => decrement()}>-1</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapActionsToProps = dispatch => {
  return {
    actions: bindActionCreators({increment, decrement}, dispatch)
  };
};

// Without "bindActionCreators"
// const mapActionsToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   }
// };

export default connect(mapStateToProps, mapActionsToProps)(Counter);
