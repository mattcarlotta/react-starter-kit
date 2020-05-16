import * as constants from "~constants";

/**
 * ~function resetMessage - resets all server messages.
 * ~returns {object}
 */
export const resetMessage = () => ({ type: constants.MESSAGE_RESET });

/**
 * ~function setMessage - adds a new server message.
 * ~returns {object}
 */
export const setMessage = message => ({
  type: constants.MESSAGE_SET,
  payload: message,
});
