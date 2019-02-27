/* eslint-disable */
import isEmpty from "lodash/isEmpty";
import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "../Link";
import { fetchUsers } from "../../actions/users";

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

    this.state = { data, isLoading: isEmpty(data) ? true : false };
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

  render = () => (
    <div>
      <Helmet title="Users" />
      {this.state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Link to="/">Go Back</Link>
          <pre style={{ width: 800, background: "#eee" }}>
            <code>{JSON.stringify(this.state.data, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
/* eslint-enable */
