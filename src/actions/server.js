import * as types from 'types';

/**
 * @function resetPopMessages - resets all server messages.
 * @returns {object}
 */
export const resetPopMessages = () => ({ type: types.RESET_SERVER_MESSAGES });

/**
 * @function setPopMessage - adds a new server message.
 * @returns {object}
 */
export const setPopMessage = message => ({
  type: types.SERVER_MESSAGE,
  payload: message,
});

/**
 * @function setPopErrorMessage - adds a new server error message.
 * @returns {object}
 */
export const setPopErrorMessage = err => ({
  type: types.SERVER_ERROR,
  payload: err,
});
