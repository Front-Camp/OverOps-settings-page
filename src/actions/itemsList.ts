export const ADD = 'ADD';
export const REMOVE = 'REMOVE';

export const addItem = (item: any) => {
  return {
    type: ADD,
    payload: {
      item
    }
  };
};

export const removeItem = (id: number) => {
  return {
    type: REMOVE,
    payload: {
      id
    }
  };
};
