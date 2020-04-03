import React from "react";
import "./Section.css";


const Section = props => (

  <div className="section-container">
    <div style={props.style} className={props.type}>{props.label}
    <img src={props.img} className="img" alt={props.alt}/>
    </div> 
    </div>

);

export default Section;

//I need div tag for nested img{flag} and h1 tags{countryname} each one will be 
//given a prop so I can pass dynamic info from my Country Details component or 
//anywhere else in my app 