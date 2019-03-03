import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../../components/Button";
import FormError from "../../components/FormError";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import fields from "./fields";
import {
  cancelContainer,
  formButtons,
  formErrorStyle,
  formContainer,
  submitContainer
} from "./styles.scss";

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      email: props.email || "",
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      userName: props.userName || "",
      backgroundInfo: props.backgroundInfo || "",
      street: props.address ? props.address.street : "",
      state: props.address ? props.address.state : "",
      suite: props.address ? props.address.suite : "",
      city: props.address ? props.address.city : "",
      zipCode: props.address ? props.address.zipCode : "",
      submitted: false
    };
  }

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

    const { _id: id } = this.props;

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
      address: {
        street,
        state,
        suite,
        city,
        zipCode
      }
    };

    this.props
      .submitAction({ formProps, id })
      .then(res => {
        this.props.updateUserList(res.data.message);
      })
      .catch(err => {
        this.setState({
          error: err ? err.toString() : "Unable to create a new user!"
        });
      });
  };

  render = () => (
    <Fragment>
      <form
        className={formContainer}
        style={{ padding: this.props.isEditing ? 10 : 0 }}
        onSubmit={this.handleSubmit}
      >
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
        <div className={formButtons}>
          {this.props.isEditing && (
            <div className={cancelContainer}>
              <Button danger type="button" onClick={this.props.cancelUpdate}>
                Cancel
              </Button>
            </div>
          )}
          <div className={submitContainer}>
            <Button primary type="submit">
              Submit
            </Button>
          </div>
        </div>
      </form>
      <div className={formErrorStyle}>
        <FormError
          hasError={this.state.error}
          onHandleClose={this.handleCloseError}
        />
      </div>
    </Fragment>
  );
}

UserForm.propTypes = {
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
  }),
  cancelUpdate: PropTypes.func,
  submitAction: PropTypes.func.isRequired,
  updateUserList: PropTypes.func.isRequired
};

export default UserForm;
