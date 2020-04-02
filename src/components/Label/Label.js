import React from "react";
import "./Label.css";


const Label = props => (
  <>
   <div>
   <select className={props.type}>
     <option>Label</option>
   </select> 
 </div>
</>
);

export default Label;
