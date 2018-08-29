import {ADD, REMOVE} from '../actions/itemsList';

export default {
  [ADD]: (state: Array<Object>, data: any) => {
    const {item} = data.payload;

    return [...state, {id: Date.now(), value: item}];
  },
  [REMOVE]: (state: Array<Object>, data: any) => {
    const {id} = data.payload;

    return state.filter((item: any) => item.id !== id);
  }
};
