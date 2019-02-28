import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Button from "../../components/Button";
import { createUser } from "../../actions/users";
import fields from "./fields";
import {
  errors,
  formContainer,
  inputContainer,
  inputStyle,
  labelStyle
} from "./styles.scss";

export default class AddUserForm extends Component {
  state = {
    error: "",
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    backgroundInfo: "",
    street: "",
    state: "",
    suite: "",
    city: "",
    zipCode: "",
    submitted: false
  };

  static propTypes = {
    updateUserList: PropTypes.func.isRequired
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      email,
      firstName,
      lastName,
      userName,
      backgroundInfo,
      street,
      state,
      suite,
      city,
      zipCode
    } = this.state;

    if (
      (!email,
      !firstName,
      !lastName,
      !userName,
      !backgroundInfo,
      !street,
      !state,
      !suite,
      !city,
      !zipCode)
    ) {
      console.log("triggered");
      this.setState({ submitted: true });
      return;
    }

    createUser()
      .then(() => {
        this.props.updateUserList();
      })
      .catch(err => {
        this.setState({ error: err.toString() });
      });
  };

  render = () => (
    <Fragment>
      <form className={formContainer} onSubmit={this.handleSubmit}>
        {fields.map(({ fieldName, label }) => (
          <div key={fieldName} className={inputContainer}>
            <label className={labelStyle} htmlFor={fieldName}>
              {label}
            </label>
            <input
              id={fieldName}
              className={inputStyle}
              name={fieldName}
              value={this.state[fieldName]}
              onChange={this.handleChange}
            />
            {this.state.submitted && !this.state[fieldName] ? (
              <p className={errors}>Required!</p>
            ) : null}
          </div>
        ))}
      </form>
      <Button type="submit">Submit</Button>
    </Fragment>
  );
}
