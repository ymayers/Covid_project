import React from "react";
import "./Label.css";


const Label = props => (

  
    <details style={props.style} className={props.type}><summary className="summary">{props.label}</summary>
      <p className="arrow-info">{props.info}</p>
       </details> 

);

export default Label;
