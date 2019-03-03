import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import CreateIcon from "../CreateIcon";
import HomeIcon from "../HomeIcon";
import Link from "../Link";
import SeedIcon from "../SeedIcon";
import { buttonContainer } from "./styles.scss";

const UserListNavigation = ({ onHandleOpenModal, onHandleSeedDatabase }) => (
  <Fragment>
    <Link to="/">
      <HomeIcon />
      <span>Go Back</span>
    </Link>
    <div className={buttonContainer}>
      <Button
        style={{ float: "left" }}
        type="button"
        onClick={onHandleSeedDatabase}
      >
        <SeedIcon />
        <span>Seed Database</span>
      </Button>
      <Button
        primary
        style={{ float: "right" }}
        type="button"
        onClick={onHandleOpenModal}
      >
        <CreateIcon />
        <span>Create New User</span>
      </Button>
    </div>
  </Fragment>
);

UserListNavigation.propTypes = {
  onHandleOpenModal: PropTypes.func.isRequired,
  onHandleSeedDatabase: PropTypes.func.isRequired
};

export default UserListNavigation;
