/* eslint-disable */
import isEmpty from "lodash/isEmpty";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../../actions/users";

export default class ShowUsers extends Component {
  constructor(props) {
    super(props);

    let users;
    if (__CLIENT__) {
      console.log("initalData: ", window.__INITIAL_DATA__);
      users = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      users = this.props.staticContext;
    }

    this.state = { users };
  }

  componentDidMount = () => {
    if (isEmpty(this.state.users)) {
      this.fetchUsers();
    }
  };

  fetchUsers = () => {
    fetchUsers()
      .then(users => {
        this.setState({ users });
      })
      .catch(err => {
        this.setState({ err: err.toString() });
      });
  };

  render = () =>
    isEmpty(this.state.users) ? (
      <p>Loading...</p>
    ) : (
      <div>
        <NavLink to="/">Go Back</NavLink>
        <pre style={{ width: 800, background: "#eee" }}>
          <code>{JSON.stringify(this.state.users, null, 2)}</code>
        </pre>
      </div>
    );
}
/* eslint-enable */
