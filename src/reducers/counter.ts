import {INCREMENT, DECREMENT} from '../actions/counter';

export default {
  [INCREMENT]: (state: number) => state + 1,
  [DECREMENT]: (state: number) => state - 1
};
