import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CloseButton from '../../components/CloseButton';
import ErrorIcon from '../../components/ErrorIcon';
import InfoIcon from '../../components/InfoIcon';
import { resetPopMessages, setPopMessage } from '../../actions/server';
import {
  popMessageContainer,
  popMessageInnerContainer,
  popMessageStyle,
} from './styles.scss';

export class PopMessage extends Component {
  componentDidMount = () => {
    this.props.setPopMessage('Welcome to the React Starter Kit!');
  };

  shouldComponentUpdate = nextProps =>
    this.props.serverError !== '' ||
    nextProps.serverError !== '' ||
    this.props.serverMessage !== '' ||
    nextProps.serverMessage !== '';

  componentDidUpdate = () => {
    if (this.props.serverError || this.props.serverMessage)
      this.setMessageTimer();
  };

  setMessageTimer = () => (this.timeout = setTimeout(this.handleClose, 3500));

  handleClose = () => {
    clearTimeout(this.timeout);
    this.props.resetPopMessages();
  };

  render = () =>
    this.props.serverMessage || this.props.serverError ? (
      <div className={popMessageContainer}>
        <div className={popMessageInnerContainer}>
          <p
            style={{ color: this.props.serverMessage ? '#007ec5' : '#f5222d' }}
            className={popMessageStyle}
          >
            {this.props.serverMessage ? <InfoIcon /> : <ErrorIcon />}
            {this.props.serverMessage || this.props.serverError}
          </p>
          <CloseButton
            onClick={this.handleClose}
            style={{
              color: '#999',
              display: 'inline-block',
              position: 'relative',
              left: 10,
              bottom: 12,
            }}
          />
        </div>
      </div>
    ) : null;
}

PopMessage.propTypes = {
  resetPopMessages: PropTypes.func.isRequired,
  serverError: PropTypes.string,
  serverMessage: PropTypes.string,
  setPopMessage: PropTypes.func.isRequired,
};

export default connect(
  ({ server }) => ({
    serverError: server.error,
    serverMessage: server.message,
  }),
  { resetPopMessages, setPopMessage },
)(PopMessage);
