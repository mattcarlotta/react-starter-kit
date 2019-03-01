/* eslint-disable */
import isEmpty from "lodash/isEmpty";
import isNull from "lodash/isNull";
import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Link from "../../components/Link";
import Modal from "../../components/Modal";
import Placeholder from "../../components/Placeholder";
import UserForm from "../../containers/UserForm";
import {
  createUser,
  deleteUser,
  fetchUsers,
  seedDB,
  updateUser
} from "../../actions/users";
import { preventScroll, seedLinkStyle, usersContainer } from "./styles.scss";

export default class ShowUsers extends Component {
  constructor(props) {
    super(props);

    let data;
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
      isLoading: isEmpty(data) ? true : false,
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
        this.setState({ error: err.toString(), isLoading: false });
      });
  };

  handleSeedDatabase = () => {
    seedDB()
      .then(res => {
        this.setState({ data: res.data, isLoading: false, error: "" });
      })
      .catch(err => {
        this.setState({ error: err.toString(), isLoading: false });
      });
  };

  handleDeleteClick = id => {
    deleteUser(id)
      .then(() => this.updateUserList())
      .catch(err => this.setState({ error: err.toString() }));
  };

  handleEditClick = id => this.setState({ isEditingID: id });

  handleResetEditClick = id => this.setState({ isEditingID: "" });

  handleOpenModal = () => this.setState({ openModal: true });

  handleCloseModal = () => this.setState({ openModal: false });

  updateUserList = () => {
    this.setState({ isLoading: true, openModal: false, isEditingID: "" }, () =>
      this.fetchData()
    );
  };

  render = () => (
    <div
      className={`${usersContainer} ${
        this.state.openModal ? preventScroll : ""
      }`}
    >
      {console.log(this.state)}
      <Helmet title="Users" />
      <Link to="/">Go Back</Link>
      <p className={seedLinkStyle} onClick={this.handleSeedDatabase}>
        Seed Database
      </p>
      <Button type="button" onClick={this.handleOpenModal}>
        Create New User
      </Button>
      {this.state.isLoading ? (
        <Placeholder />
      ) : (
        <Fragment>
          {this.state.openModal && (
            <Modal closeModal={this.handleCloseModal} title="Create New User">
              <UserForm
                submitAction={createUser}
                updateUserList={this.updateUserList}
              />
            </Modal>
          )}
          {!isEmpty(this.state.data)
            ? this.state.data.users.map(props => (
                <Container key={props._id}>
                  {this.state.isEditingID !== props._id ? (
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
            : null}
        </Fragment>
      )}
    </div>
  );
}
/* eslint-enable */
