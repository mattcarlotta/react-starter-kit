import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { persistRedux } from '../actions';

const ButtonWrapper = ({ persist, persistReduxState }) => (
  <div>
    <button type="button" onClick={persistReduxState}>
      Test Redux
    </button>
    <p>{persist}</p>
  </div>
);

export const Button = connect(
  state => ({ persist: state.testing }),
  { persistReduxState: persistRedux },
)(ButtonWrapper);

// export default connect(
//   state => ({ persist: state.testing }),
//   { persistReduxState: persistRedux },
// )(Button);

ButtonWrapper.propTypes = {
  persistReduxState: PropTypes.func,
  persist: PropTypes.string,
};
