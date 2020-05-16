import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import { resetMessage } from "~actions/messages";
import toast from "~components/Toast";

export class MessageContainer extends Component {
  componentDidMount = () => {
    toast({ type: "info", message: "Welcome to the React Starter Kit!" });
  };

  shouldComponentUpdate = nextProps => nextProps.message !== this.props.message;

  componentDidUpdate = prevProps => {
    const { message } = this.props;
    if (prevProps.message !== message && message !== "") {
      clearTimeout(this.timeout);
      this.setTimer();
    }
  };

  componentWillUnmount = () => this.clearTimer();

  clearTimer = () => {
    clearTimeout(this.timeout);
    this.props.resetMessage();
  };

  setTimer = () => (this.timeout = setTimeout(this.clearTimer, 2000));

  render = () => (
    <ToastContainer
      position="top-right"
      autoClose={8000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable={false}
      pauseOnVisibilityChange
      closeOnClick
      pauseOnHover
    />
  );
}

MessageContainer.propTypes = {
  resetMessage: PropTypes.func.isRequired,
  message: PropTypes.string,
};

const mapStateToProps = ({ message }) => ({
  message,
});

const mapDispatchToProps = {
  resetMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);
