import React from "react";
import "./Button.css";

const Button = props => <button style={props.style}>{props.label}</button>;


export default Button;