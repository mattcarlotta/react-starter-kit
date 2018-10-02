import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { persistRedux } from '../actions';

const Button = ({ persist, persistReduxState }) => (
  <div>
    <button type="button" onClick={persistReduxState}>
      Test Redux
    </button>
    <p>{persist}</p>
  </div>
);

export default connect(
  state => ({ persist: state.testing }),
  { persistReduxState: persistRedux },
)(Button);

Button.propTypes = {
  persistReduxState: PropTypes.func,
  persist: PropTypes.string,
};
