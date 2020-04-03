import React from 'react';
import { Link } from "react-router-dom";
import Button from "../Button/Button";


//displays header and link to home 
//would like to use storybook button for home

const Header = () => {
  return (
    <div className="header-container">
      
      <div className="header">»W⊗rld CØVïÐ-19 Information«
      </div>
      
      <div className="home-container">
      <Link to="/" className="home_link"><nav className="nav"><Button type="home" label="Home"/></nav></Link>
      </div>
      </div>
  )
}

export default Header;
