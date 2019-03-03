import { RESET_SERVER_MESSAGES, SERVER_ERROR, SERVER_MESSAGE } from "../types";

const serverInitialState = {
  error: "",
  message: ""
};

const ServerReducer = (state = serverInitialState, { payload, type }) => {
  switch (type) {
    case RESET_SERVER_MESSAGES:
      return { ...state, error: "", message: "" };
    case SERVER_ERROR:
      return { ...state, error: payload };
    case SERVER_MESSAGE:
      return { ...state, message: payload };
    default:
      return state;
  }
};

export default ServerReducer;
