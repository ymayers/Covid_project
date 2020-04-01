import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  console.log(props)
  return (
    <div>
      <Link to="/details/:idx" className="country-link">
        {" "}
        {props.country}
      </Link>
      
    </div>
  );
}

export default Home;
