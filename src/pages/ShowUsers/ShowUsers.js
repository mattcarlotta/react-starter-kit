import isEmpty from "lodash/isEmpty";
import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { connect } from "react-redux";
import Placeholder from "../../components/Placeholder";
import DisplayUserList from "../../components/DisplayUserList";
import UserListNavigation from "../../components/UserListNavigation";
import { deleteUser, fetchUsers, seedDB } from "../../actions/users";
import { setPopMessage, setPopErrorMessage } from "../../actions/server";
import { preventScroll, usersContainer } from "./styles.scss";

class ShowUsers extends Component {
  constructor(props) {
    super(props);

    let data;
    // eslint-disable-next-line no-undef
    if (__CLIENT__) {
      data = window.__INITIAL_STATE__;
      delete window.__INITIAL_STATE__;
    } else {
      data = this.props.staticContext;
    }

    this.state = {
      data,
      isEditingID: "",
      isLoading: !!isEmpty(data),
      openModal: false
    };
  }

  componentDidMount = () => {
    if (this.state.isLoading) {
      this.fetchData();
    }
  };

  fetchData = () => {
    fetchUsers()
      .then(res => this.setState({ data: res.data, isLoading: false }))
      .catch(err => {
        this.setState(
          {
            isLoading: false
          },
          () =>
            this.props.setPopErrorMessage(
              err ? err.toString() : "Unable to retrieve data from database!"
            )
        );
      });
  };

  handleSeedDatabase = () => {
    seedDB()
      .then(res => this.setState({ data: res.data, isLoading: false }))
      .catch(err => {
        this.setState(
          {
            isLoading: false
          },
          () =>
            this.props.setPopErrorMessage(
              err
                ? err.toString()
                : "Unable to seed database! Make sure the API is running."
            )
        );
      });
  };

  handleDeleteClick = id => {
    deleteUser(id)
      .then(res => this.updateUserList(res.data.message))
      .catch(err =>
        this.props.setPopErrorMessage(
          err ? err.toString() : "Unable to delete item!"
        )
      );
  };

  handleEditClick = id => this.setState({ isEditingID: id });

  handleResetEditClick = () => this.setState({ isEditingID: "" });

  handleOpenModal = () => this.setState({ openModal: true, isEditingID: "" });

  handleCloseModal = () => this.setState({ openModal: false });

  updateUserList = message => {
    if (message) this.props.setPopMessage(message);
    this.setState(
      {
        isLoading: true,
        openModal: false,
        isEditingID: ""
      },
      () => this.fetchData()
    );
  };

  render = () => {
    const { data, isEditingID, isLoading, openModal } = this.state;

    return (
      <div className={`${usersContainer} ${openModal ? preventScroll : ""}`}>
        <Helmet title="Users" />
        <UserListNavigation
          onHandleOpenModal={this.handleOpenModal}
          onHandleSeedDatabase={this.handleSeedDatabase}
        />
        {isLoading ? (
          <Placeholder />
        ) : (
          <DisplayUserList
            data={data}
            isEditingID={isEditingID}
            openModal={openModal}
            onHandleCloseModal={this.handleCloseModal}
            onHandleDeleteClick={this.handleDeleteClick}
            onHandleEditClick={this.handleEditClick}
            onHandleResetEditClick={this.handleResetEditClick}
            onUpdateUserList={this.updateUserList}
          />
        )}
      </div>
    );
  };
}

ShowUsers.propTypes = {
  setPopMessage: PropTypes.func.isRequired,
  setPopErrorMessage: PropTypes.func.isRequired,
  staticContext: PropTypes.shape({
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
  })
};

export default connect(
  null,
  { setPopMessage, setPopErrorMessage }
)(ShowUsers);
