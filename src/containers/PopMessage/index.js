import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CloseButton from "../../components/CloseButton";
import ErrorIcon from "../../components/ErrorIcon";
import InfoIcon from "../../components/InfoIcon";
import { resetPopMessages } from "../../actions/server";
import {
  popMessageContainer,
  popMessageInnerContainer,
  popMessageStyle
} from "./styles.scss";

class PopMessage extends Component {
  componentDidMount = () => {
    if (this.props.serverMessage || this.props.serverError)
      this.setMessageTimer();
  };

  componentDidUpdate = () => {
    const { serverError, serverMessage } = this.props;
    if (serverError || serverMessage) this.setMessageTimer();
  };

  shouldComponentUpdate = nextProps =>
    this.props.serverError !== "" ||
    nextProps.serverError !== "" ||
    this.props.serverMessage !== "" ||
    nextProps.serverMessage !== "";

  setMessageTimer = () => (this.timeout = setTimeout(this.handleClose, 3500));

  handleClose = () => {
    clearTimeout(this.timeout);
    this.props.resetPopMessages();
  };

  render = () => {
    const { serverError, serverMessage } = this.props;
    const message = serverMessage || serverError;
    const color = serverMessage ? "#007ec5" : "#f5222d";

    return message ? (
      <div className={popMessageContainer}>
        <div className={popMessageInnerContainer}>
          <p style={{ color }} className={popMessageStyle}>
            {serverMessage ? <InfoIcon /> : <ErrorIcon />}
            {message}
          </p>
          <CloseButton
            onClick={this.handleClose}
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
  };
}

PopMessage.propTypes = {
  resetPopMessages: PropTypes.func.isRequired,
  serverError: PropTypes.string,
  serverMessage: PropTypes.string
};

export default connect(
  ({ server }) => ({
    serverError: server.error,
    serverMessage: server.message
  }),
  { resetPopMessages }
)(PopMessage);
