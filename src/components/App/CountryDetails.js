import React, { Component } from "react";
import name from "../../data/world.json";

//displays number of covid-19 cases on separate page
//in variable nation - idx is the country name in the url
//it is being matched to the prop with same country name using the .find method

//need to build this out
//would like to use several storybook components here
//trying to access json data to obtain country code to display flag

class CountryDetails extends Component {
  render() {
    const nation = this.props.match.params.idx;
    const countryInfo = this.props.cases.find(item => nation === item.Country);

    return (
      <div className="details-container">
        <div className="details-name">
          <h1>Country Name</h1>
          <p>{countryInfo.Country}</p>
        </div>
        <div className="details-confirmed">
          <h1>Number of Confirmed COVID-19 Cases</h1>
          <p>{countryInfo.TotalConfirmed}</p>
        </div>
      </div>
    );
  }
}
export default CountryDetails;
