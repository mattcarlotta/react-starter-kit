import React from "react";
import PropTypes from "prop-types";
import CloseButton from "../CloseButton";
import {
  modalBody,
  modalClose,
  modalContainer,
  modalOverlay,
  modalTitle,
  modalTitleContainer
} from "./styles.scss";

const Modal = ({ closeModal, children, title }) => (
  <div className={modalOverlay}>
    <div className={modalContainer}>
      <div className={modalTitleContainer}>
        <div className={modalTitle}>{title}</div>
        <div className={modalClose}>
          <CloseButton onClick={closeModal} style={{ color: "#999" }} />
        </div>
      </div>
      <div className={modalBody}>{children}</div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default Modal;
