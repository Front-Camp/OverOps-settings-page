export const TOGGLE_SHOW_KEY_ID = 'TOGGLE_SHOW_KEY_ID';

export const toggleShowKeyId = keyname => {
  return {
    type: TOGGLE_SHOW_KEY_ID,
    payload: {keyname}
  };
};

