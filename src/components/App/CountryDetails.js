import React, { Component } from "react";

//displays number of covid-19 cases on separate page


//need to build this out
//would like to use several storybook components here

class CountryDetails extends Component {
  constructor() {
    super();
  }

  render() {
    //variable nation - idx is the country name in the url
    //it is being matched to the prop with same country name using the .find method
    const nation = this.props.match.params.idx;
    const countryInfo = this.props.cases.find(item => nation === item.Country);
    //to find countryCode - giving access to json file objects
    const countryCode = this.props.image.find(name => nation === name.name);
    //to get image by countryCode
    const images = require.context(`../../data/flags-large`, true);
    let img = images(`./${countryCode.alpha2}.png`);

    return (
      <div className="details-container">
        <div className="details-name">
          <img src={img} alt="flag" />
          <h1>{countryInfo.Country}</h1>
        </div>
        <div className="details-confirmed">
          <h2>Number of Confirmed COVID-19 Cases</h2>
          <p>{countryInfo.TotalConfirmed}</p>
          <h2>Total Recovered</h2>
          <p>{countryInfo.TotalRecovered}</p>
          <h2>Total Deaths</h2>
          <p>{countryInfo.TotalDeaths}</p>
        </div>
      </div>
    );
  }
}
export default CountryDetails;
