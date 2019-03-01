import React from "react";
import Container from "../Container";
import { placeholderContainer } from "./styles.scss";

const Placeholder = () => (
  <div className={placeholderContainer}>
    <Container animated />
    <Container animated />
    <Container animated />
  </div>
);

export default Placeholder;
