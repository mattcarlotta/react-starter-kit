import * as types from "../types";

export const resetPopMessages = () => ({ type: types.RESET_SERVER_MESSAGES });

export const setPopMessage = message => ({
  type: types.SERVER_MESSAGE,
  payload: message
});

export const setPopErrorMessage = err => ({
  type: types.SERVER_ERROR,
  payload: err
});
