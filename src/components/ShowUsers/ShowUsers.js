/* eslint-disable */
import isEmpty from "lodash/isEmpty";
import React, { Component, Fragment } from "react";
import Helmet from "react-helmet";
import Link from "../Link";
import Card from "../Card";
import Modal from "../Modal";
import Button from "../Button";
import AddUserForm from "../../containers/AddUserForm";
import { fetchUsers } from "../../actions/users";
import { prevetScroll, usersContainer } from "./styles.scss";

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
        this.setState({ data: res.data, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: err.toString(), isLoading: false });
      });
  };

  handleOpenModal = () => this.setState({ openModal: true });

  handleCloseModal = () => this.setState({ openModal: false });

  updateUserList = () => {
    this.setState({ isLoading: true, openModal: false }, () => this.fetchData);
  };

  render = () => (
    <div
      className={`${usersContainer} ${
        this.state.openModal ? prevetScroll : ""
      }`}
    >
      <Helmet title="Users" />
      {this.state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <Fragment>
          <Link to="/">Go Back</Link>
          <Button type="button" onClick={this.handleOpenModal}>
            Create New User
          </Button>
          {this.state.openModal && (
            <Modal closeModal={this.handleCloseModal} title="Create New User">
              <AddUserForm updateUserList={this.updateUserList} />
            </Modal>
          )}
          {this.state.data.users.map(props => (
            <Card key={props._id} {...props} />
          ))}
        </Fragment>
      )}
    </div>
  );
}
/* eslint-enable */
