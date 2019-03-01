import isEmpty from "lodash/isEmpty";
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Link from "../../components/Link";
import Modal from "../../components/Modal";
import NoData from "../../components/NoData";
import Placeholder from "../../components/Placeholder";
import PopMessage from "../../components/PopMessage";
import UserForm from "../../containers/UserForm";
import {
  createUser,
  deleteUser,
  fetchUsers,
  seedDB,
  updateUser
} from "../../actions/users";
import { preventScroll, seedLinkStyle, usersContainer } from "./styles.scss";

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
      error: "",
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
      .then(res => {
        this.setState({ data: res.data, isLoading: false, error: "" });
      })
      .catch(err => {
        this.setState({
          error: err
            ? err.toString()
            : "Unable to retrieve data from database!",
          isLoading: false
        });
      });
  };

  handleSeedDatabase = () => {
    seedDB()
      .then(res => {
        this.setState({ data: res.data, isLoading: false, error: "" });
      })
      .catch(err => {
        this.setState({
          error: err ? err.toString() : "Unable to seed database!",
          isLoading: false
        });
      });
  };

  handleDeleteClick = id => {
    deleteUser(id)
      .then(res => this.updateUserList(res.data.message))
      .catch(err =>
        this.setState({
          error: err ? err.toString() : "Unable to delete item!"
        })
      );
  };

  handleEditClick = id => this.setState({ isEditingID: id });

  handleResetEditClick = () => this.setState({ isEditingID: "" });

  handleOpenModal = () => this.setState({ openModal: true });

  handleCloseModal = () => this.setState({ openModal: false });

  handleResetMessage = () => this.setState({ message: "", error: "" });

  handleSetMessage = message => this.setState({ message });

  updateUserList = message => {
    this.setState(
      {
        isLoading: true,
        openModal: false,
        isEditingID: "",
        message: message || ""
      },
      () => this.fetchData()
    );
  };

  render = () => {
    const {
      data,
      error,
      isEditingID,
      isLoading,
      message,
      openModal
    } = this.state;

    return (
      <div className={`${usersContainer} ${openModal ? preventScroll : ""}`}>
        <Helmet title="Users" />
        <PopMessage
          message={message || error || ""}
          onHandleClose={this.handleResetMessage}
        />
        <Link to="/">Go Back</Link>
        <p
          className={seedLinkStyle}
          onKeyUp={this.handleSeedDatabase}
          onClick={this.handleSeedDatabase}
          role="presentation"
        >
          Seed Database
        </p>
        <Button type="button" onClick={this.handleOpenModal}>
          Create New User
        </Button>
        {isLoading ? (
          <Placeholder />
        ) : (
          <Fragment>
            {openModal && (
              <Modal closeModal={this.handleCloseModal} title="Create New User">
                <UserForm
                  submitAction={createUser}
                  updateUserList={this.updateUserList}
                />
              </Modal>
            )}
            {!isEmpty(data) && !isEmpty(data.users) ? (
              data.users.map(props => (
                <Container key={props._id}>
                  {isEditingID !== props._id ? (
                    <Card
                      key={props._id}
                      {...props}
                      onEditClick={() => this.handleEditClick(props._id)}
                      onDeleteClick={() => this.handleDeleteClick(props._id)}
                    />
                  ) : (
                    <UserForm
                      key={props._id}
                      {...props}
                      cancelUpdate={this.handleResetEditClick}
                      submitAction={updateUser}
                      updateUserList={this.updateUserList}
                      isEditing
                    />
                  )}
                </Container>
              ))
            ) : (
              <NoData />
            )}
          </Fragment>
        )}
      </div>
    );
  };
}

ShowUsers.propTypes = {
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

export default ShowUsers;
