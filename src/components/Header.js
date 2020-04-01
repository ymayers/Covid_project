import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="header">World COVID-19 Information
      </div>
   <Link className="home_link"><nav className="nav">Home</nav></Link>
      
      </div>
  )
}

export default Header;
