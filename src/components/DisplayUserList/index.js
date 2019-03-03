import isEmpty from "lodash/isEmpty";
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import Container from "../Container";
import Modal from "../Modal";
import NoData from "../NoData";
import UserForm from "../../containers/UserForm";
import { createUser, updateUser } from "../../actions/users";

const DisplayUserList = ({
  data,
  isEditingID,
  openModal,
  onHandleCloseModal,
  onHandleDeleteClick,
  onHandleEditClick,
  onHandleResetEditClick,
  onUpdateUserList
}) => (
  <Fragment>
    {openModal && (
      <Modal closeModal={onHandleCloseModal} title="Create New User">
        <UserForm submitAction={createUser} updateUserList={onUpdateUserList} />
      </Modal>
    )}
    {!isEmpty(data) && !isEmpty(data.users) ? (
      data.users.map(props => (
        <Container key={props._id}>
          {isEditingID !== props._id ? (
            <Card
              key={props._id}
              {...props}
              onEditClick={() => onHandleEditClick(props._id)}
              onDeleteClick={() => onHandleDeleteClick(props._id)}
            />
          ) : (
            <UserForm
              key={props._id}
              {...props}
              cancelUpdate={onHandleResetEditClick}
              submitAction={updateUser}
              updateUserList={onUpdateUserList}
              isEditing
            />
          )}
        </Container>
      ))
    ) : (
      <NoData />
    )}
  </Fragment>
);

DisplayUserList.propTypes = {
  _id: PropTypes.string,
  data: PropTypes.shape({
    users: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string,
        isEditing: PropTypes.bool,
        email: PropTypes.string,
        backgroundInfo: PropTypes.string,
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        onDeleteClick: PropTypes.func,
        onEditClick: PropTypes.func,
        userName: PropTypes.string,
        address: PropTypes.shape({
          street: PropTypes.string,
          suite: PropTypes.string,
          city: PropTypes.string,
          state: PropTypes.string,
          zipCode: PropTypes.string
        })
      })
    )
  }),
  isEditingID: PropTypes.string,
  openModal: PropTypes.bool,
  onHandleCloseModal: PropTypes.func.isRequired,
  onHandleDeleteClick: PropTypes.func.isRequired,
  onHandleEditClick: PropTypes.func.isRequired,
  onHandleResetEditClick: PropTypes.func.isRequired,
  onUpdateUserList: PropTypes.func.isRequired
};

export default DisplayUserList;
