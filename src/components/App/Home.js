import React, { Component } from "react";
import { Link } from "react-router-dom";

//maps through props to display country names onto homepage
//links to CountryDetails

class Home extends Component {
  render() {
    return (
      <div className="country-container">
      <div className="country">
        {this.props.countries.map((country, idx) => (
          <Link to={`/details/${country.Country}`} className="country-link">
            {country.Country}
          </Link>
        ))}
        </div>
        </div>
    );
  }
}

export default Home;
