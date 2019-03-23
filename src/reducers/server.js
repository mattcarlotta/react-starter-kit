import * as types from 'types';

const serverInitialState = {
  error: '',
  message: '',
};

/**
 * @function serverReducer
 * @param {object} state - an object containing error or server messages.
 * @param {object} action - type and payload to be reduced.
 * @returns {object} - new server state.
 */
const serverReducer = (state = serverInitialState, { payload, type }) => {
  switch (type) {
    case types.RESET_SERVER_MESSAGES:
      return { ...state, error: '', message: '' };
    case types.SERVER_ERROR:
      return { ...state, error: payload };
    case types.SERVER_MESSAGE:
      return { ...state, message: payload };
    default:
      return state;
  }
};

export default serverReducer;
