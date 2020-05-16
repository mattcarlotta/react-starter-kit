import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa";
import {
  messageBody,
  messageContainer,
  messageIcon,
} from "./Toast.module.scss";

const style = {
  marginTop: 3,
};

export const displayIcon = type => {
  switch (type) {
    case "success":
      return <FaCheck style={style} />;
    case "info":
      return <FaInfo style={style} />;
    case "error":
      return <FaExclamationCircle style={style} />;
    case "warning":
      return <FaExclamationTriangle style={style} />;
    default:
      return <FaBug style={style} />;
  }
};

const ToastMessage = ({ type, message }) =>
  toast[type](
    <div data-testid="toast-alert" className={messageContainer} css="">
      <div className={messageIcon}>{displayIcon(type)}</div>
      <div data-testid="toast-message" className={messageBody}>
        {message}
      </div>
    </div>,
  );

ToastMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default ToastMessage;
