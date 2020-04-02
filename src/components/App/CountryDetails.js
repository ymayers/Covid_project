import React, { Component } from "react";


//displays number of covid-19 cases on separate page
//in variable nation - idx is the country name in the url
//it is being matched to the prop with same country name using the .find method

//need to build this out
//would like to use several storybook components here
//trying to access json data to obtain country code to display flag
//I may have to map through name to get the country code

class CountryDetails extends Component {
  constructor() {
    super();
  // this.state= {image:""}
  }
//to get image by countryCode
  // loadImage = countryCode => {
  //   import(`../../data/flags-large/${countryCode}.png`).then(image => {
  //     this.setState({
  //       image
  //     });
  //   });
  // };

//to map for countryCode - gives access to name json file objects - hopefully
// this.name.map(countryName => nation === countryName.name)



  render() {
    const nation = this.props.match.params.idx;
    const countryInfo = this.props.cases.find(item => nation === item.Country);
    const countryCode = this.props.image.find(name => nation === name.name)
    console.log(countryCode.alpha2)

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
