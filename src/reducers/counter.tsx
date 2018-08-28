import {INCREMENT, DECREMENT} from '../actions/counter';

export default {
  [INCREMENT]: (state: any) => state + 1,
  [DECREMENT]: (state: any) => state - 1
};
