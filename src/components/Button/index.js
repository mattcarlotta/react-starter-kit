import styled from "styled-components";
import Button from "./Button";

const StyledButton = styled(Button)`
  cursor: pointer;
  color: ${props => {
    if (props.primary) return "#03a9f3";
    if (props.danger) return "#f0506e";
    return "#666";
  }};
  background-color: transparent;
  border: 1px solid
    ${props => {
      if (props.primary) return "#03a9f3";
      if (props.danger) return "#f0506e";
      return "#dad9d9";
    }};
  font-size: 16px;
  font-family: "Muli Regular", "Helvetica-Light", Helvetica, Arial, sans-serif;
  line-height: 38px;
  padding: 10px;
  padding: 8px 16px;
  text-align: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  outline: none;

  &:hover {
    text-decoration: none;
    color: ${props => {
      if (props.primary) return "#0f7ae5";
      if (props.danger) return "#be391c";
      return "#333";
    }};
    border-color: ${props => {
      if (props.primary) return "#0f7ae5";
      if (props.danger) return "#be391c";
      return "#333";
    }};
  }
`;

export default StyledButton;
