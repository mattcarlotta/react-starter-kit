import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import FormError from "../../components/FormError";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { createUser } from "../../actions/users";
import fields from "./fields";
import { formContainer, submitContainer } from "./styles.scss";

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

  handleCloseError = () => this.setState({ error: "" });

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
      !email ||
      !firstName ||
      !lastName ||
      !userName ||
      !backgroundInfo ||
      !street ||
      !state ||
      !city ||
      !zipCode
    ) {
      if (!this.state.submitted) {
        this.setState({ submitted: true });
      }
      return null;
    }

    const formProps = {
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
    };

    createUser(formProps)
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
        {fields.map(({ fieldName, ...props }) => (
          <Input
            {...props}
            key={fieldName}
            hasError={this.state.submitted && !this.state[fieldName]}
            name={fieldName}
            onHandleChange={this.handleChange}
            value={this.state[fieldName]}
            submitted={this.state.submitted}
          />
        ))}
        <TextArea
          name="backgroundInfo"
          hasError={this.state.submitted && !this.state.backgroundInfo}
          label="Background"
          onHandleChange={this.handleChange}
          value={this.state.backgroundInfo}
          submitted={this.state.submitted}
          isRequired
        />
        <div className={submitContainer}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
      <FormError
        hasError={this.state.error}
        onHandleClose={this.handleCloseError}
      />
    </Fragment>
  );
}
