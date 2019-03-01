import React from "react";
import PropTypes from "prop-types";
import { deleteButtonStyle, deleteIconStyle } from "./styles.scss";

const DeleteButton = ({ onClick, style }) => (
  <button
    type="button"
    style={style}
    className={deleteButtonStyle}
    onClick={onClick}
  >
    <svg height="20" width="20" className={deleteIconStyle} viewBox="0 0 20 20">
      <path
        fill="none"
        d="M18.693,3.338h-1.35l0.323-1.834c0.046-0.262-0.027-0.536-0.198-0.739c-0.173-0.206-0.428-0.325-0.695-0.325
        H3.434c-0.262,0-0.513,0.114-0.685,0.312c-0.173,0.197-0.25,0.46-0.215,0.721L2.79,3.338H1.307c-0.502,0-0.908,0.406-0.908,0.908
        c0,0.502,0.406,0.908,0.908,0.908h1.683l1.721,13.613c0.057,0.454,0.444,0.795,0.901,0.795h8.722c0.458,0,0.845-0.34,0.902-0.795
        l1.72-13.613h1.737c0.502,0,0.908-0.406,0.908-0.908C19.601,3.744,19.195,3.338,18.693,3.338z M15.69,2.255L15.5,3.334H4.623
        L4.476,2.255H15.69z M13.535,17.745H6.413L4.826,5.193H15.12L13.535,17.745z"
      />
    </svg>
  </button>
);

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

export default DeleteButton;
