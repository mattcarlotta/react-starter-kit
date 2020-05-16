import * as constants from "~constants";

/**
 * @function  messageReducer
 * @param {object} state - an object containing error or   messages.
 * @param {object} action - type and payload to be reduced.
 * @returns {object} - messages state.
 */
const messageReducer = (state = "", { payload, type }) => {
  switch (type) {
    case constants.MESSAGE_RESET: {
      return "";
    }
    case constants.MESSAGE_SET: {
      return payload;
    }
    default: {
      return state;
    }
  }
};

export default messageReducer;
