import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Divider from "./Divider";
import {
  backgroundDetails,
  container,
  emailDetails,
  gridColumn,
  listDetails,
  user,
  userTitle
} from "./styles.scss";

const Card = ({
  address: { street, suite, city, zipCode },
  backgroundInfo,
  email,
  firstName,
  lastName,
  userName
}) => (
  <article className={container}>
    <header className={gridColumn}>
      <h1 className={userTitle}>{userName}</h1>
      <p className={user}>
        {firstName} {lastName}
        <span className={emailDetails}>({email})</span>
      </p>
      <ul className={listDetails}>
        <li>{street}</li>
        <Divider />
        {suite && (
          <Fragment>
            <li>{suite}</li>
            <Divider />
          </Fragment>
        )}
        <li>{city}</li>
        <Divider />
        <li>{zipCode}</li>
      </ul>
      <div className={backgroundDetails}>
        <p>{backgroundInfo}</p>
      </div>
    </header>
  </article>
);

Card.propTypes = {
  email: PropTypes.string,
  backgroundInfo: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  userName: PropTypes.string,
  address: PropTypes.shape({
    street: PropTypes.string,
    suite: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zipCode: PropTypes.string
  })
};

export default Card;
