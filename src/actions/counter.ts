export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

type IncrementAction = {
  type: typeof INCREMENT
};
type DecrementAction = {
  type: typeof DECREMENT
};

export const increment = (): IncrementAction => {
  return {
    type: INCREMENT
  };
};

export const decrement = (): DecrementAction => {
  return {
    type: DECREMENT
  };
};

export type CounterAction = IncrementAction | DecrementAction;
