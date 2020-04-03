import React from "react";
import "./Label.css";


const Label = props => (
  <>
  
    <details className={props.type}><summary>{props.label}</summary>
       
       </details> 
</>
);

export default Label;
