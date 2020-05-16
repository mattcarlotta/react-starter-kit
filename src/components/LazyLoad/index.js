/* istanbul ignore file */
/* eslint-disable no-console */
import React, { Component } from "react";
import PropTypes from "prop-types";

class LazyLoad extends Component {
  state = {
    Component: null,
    err: "",
  };

  componentDidMount = () => this.importFile();

  componentWillUnmount = () => (this.cancelImport = true);

  cancelImport = false;

  importFile = async () => {
    try {
      const { default: file } = await import(
        /* webpackChunkName: "[request]" */
        /* webpackMode: "lazy" */
        `pages/${this.props.file}/index.js`
      );

      if (!this.cancelImport) this.setState({ Component: file });
    } catch (err) {
      if (!this.cancelImport) this.setState({ err: err.toString() });
      console.error(err.toString());
    }
  };

  render = () => {
    const { Component, err } = this.state;

    return Component ? (
      <Component {...this.props} />
    ) : err ? (
      <p style={{ color: "red" }}>{err}</p>
    ) : null;
  };
}

LazyLoad.propTypes = {
  file: PropTypes.string.isRequired,
};

export default file => props => <LazyLoad {...props} file={file} />;

/* eslint-enable no-console */
