import React, { Component } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";

//displays number of covid-19 cases on separate page

//need to build this out
//would like to use several storybook components here
//when I refresh the page - code breaks - how can I prevent this? Redirect?

class CountryDetails extends Component {
  render() {
    //variable nation - idx is the country name in the url
    //it is being matched to the prop with same country name using the .find method
    //to find countryCode - giving access to json file objects
    //to get image by countryCode

    const nation = this.props.match.params.idx;
    const countryInfo = this.props.cases.find(item => nation === item.Country);
    const countryCode = this.props.image.find(name => nation === name.name);
    const images = require.context(`../../data/flags-large`);
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
          <Button label="More Info" />
          <Label type="arrow"/>
        </div>
      </div>
    );
  }
}
export default CountryDetails;
