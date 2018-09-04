import {INCREMENT, DECREMENT} from '../actions/counter';

export default {
  [INCREMENT]: state => state + 1,
  [DECREMENT]: state => state - 1
};
