import React from 'react';
import { Link } from "react-router-dom";


//displays header and link to home 
//would like to use storybook button for home

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">World COVID-19 Information
      </div>
  <Link to="/" className="home_link"><nav className="nav">Home</nav></Link>
      
      </div>
  )
}

export default Header;
