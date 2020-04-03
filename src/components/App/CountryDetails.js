import React, { Component } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import Section from "../Section/Section";

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
        <div className="section-container">
       <Section type="section1" label={countryInfo.Country} img={img} alt="flag"/>
       </div>
        <div className="details-confirmed">
        <Label type="arrow" label="Number of Confirmed Cases" info={countryInfo.TotalConfirmed} />
        <Label type="arrow" label="Total Recovered" info={countryInfo.TotalRecovered} />
        <Label type="arrow" label="Total Deaths" info={countryInfo.TotalDeaths} />
          <Button label="More Info" />
        </div>
      </div>
    );
  }
}
export default CountryDetails;
