import React from "react";
import "./Label.css";

const Label = props => (
  <details style={props.style} className={props.type}>
    <summary className="summary">{props.label}</summary>
    <div className="arrow-info">{props.info}</div>
  </details>
);

export default Label;
