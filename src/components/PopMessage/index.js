import React from "react";
import PropTypes from "prop-types";
import CloseButton from "../CloseButton";
import {
  popMessageContainer,
  popMessageInnerContainer,
  popMessageStyle
} from "./styles.scss";

const PopMessage = ({ message, onHandleClose }) =>
  message ? (
    <div className={popMessageContainer}>
      <div className={popMessageInnerContainer}>
        <p className={popMessageStyle}>{message}</p>
        <CloseButton
          onClick={onHandleClose}
          style={{
            color: "#999",
            display: "inline-block",
            position: "relative",
            left: 10,
            bottom: 12
          }}
        />
      </div>
    </div>
  ) : null;

PopMessage.propTypes = {
  message: PropTypes.string,
  onHandleClose: PropTypes.func.isRequired
};

export default PopMessage;
