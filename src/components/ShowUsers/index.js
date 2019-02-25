import React from "react";
import axios from "axios";

class ShowUsers extends Component {
  constructor() {
    super();

    let users;
    if (__isBrowser__) {
      users = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      users = this.props.staticContext.data;
    }
  }

  componentDidMount = () => {
    if (!this.state.repos) {
      this.fetchUsers();
    }
  };

  fetchUsers = () => {};

  render = () => null;
}
