import React from 'react';
import PropTypes from 'prop-types';
import { closeButton } from './styles.scss';

const Close = ({ onClick, style }) => (
  <button type="button" style={style} onClick={onClick} className={closeButton}>
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        fill="none"
        stroke="currentcolor"
        strokeWidth="2"
        x1="1"
        y1="1"
        x2="13"
        y2="13"
      />
      <line
        fill="none"
        stroke="currentcolor"
        strokeWidth="2"
        x1="13"
        y1="1"
        x2="1"
        y2="13"
      />
    </svg>
  </button>
);

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};

export default Close;
