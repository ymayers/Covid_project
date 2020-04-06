import React from "react";
import { Link } from "react-router-dom";


//displays header and link to home
//would like to use storybook button for home

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/" className="home_link">
        <div className="header">»W⊗rld CØVïÐ-19 Information«</div>
      </Link>

    </div>
  );
};

export default Header;
