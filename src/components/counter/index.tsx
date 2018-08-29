import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {increment, decrement, CounterAction} from '../../actions/counter';

interface Props {
  counter: number;
  actions: {
    increment: () => CounterAction;
    decrement: () => CounterAction;
  }
}
const Counter: React.SFC<Props> = ({counter, actions}) => {
  const {increment, decrement} = actions;

  return (
    <div style={{fontSize: '24px', textAlign: 'center'}}>
      <div>
        {counter}
      </div>
      <div>
        <button className="btn" onClick={() => increment()}>+1</button>
        <button className="btn" onClick={() => decrement()}>-1</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    counter: state.counter,
  }
};

const mapActionsToProps = (dispatch: any) => {
  return {
    actions: bindActionCreators({increment, decrement}, dispatch)
  }
};

// Without "bindActionCreators"
// const mapActionsToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(increment()),
//     decrement: () => dispatch(decrement())
//   }
// };

export default connect(mapStateToProps, mapActionsToProps)(Counter);
