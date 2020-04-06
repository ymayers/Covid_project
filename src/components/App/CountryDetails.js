import React, { Component } from "react";
import Label from "../Label/Label";
import Section from "../Section/Section";

//displays number of covid-19 cases on separate page

//need to build this out
//would like to use several storybook components here
//when I refresh the page - code breaks - how can I prevent this? Redirect?

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = { page: 1 };
  }

  onDocumentLoadSuccess = ({ page }) => {
    this.setState({ page });
  };

  render() {
    //variable nation - idx is the country name in the url
    //it is being matched to the prop with same country name using the .find method
    //to find countryCode - giving access to json file objects
    //to get image by countryCode

    const nation = this.props.match.params.idx;
    const countryInfo = this.props.cases.find(item => nation === item.Country);
    const countryCode = this.props.image.find(name => nation === name.name);
    const images = require.context(`../../data/flags-large`);
    const img = images(`./${countryCode.alpha2}.png`);
    const cdcUrl = `https://www.cdc.gov/coronavirus/2019-ncov/index.html`;
    const whoUrl = `https://www.who.int/emergencies/diseases/novel-coronavirus-2019/events-as-they-happen`;
    const nihUrl = `https://www.nih.gov/health-information/coronavirus`;


    return (
      <div className="details-container">
        <div className="section-container">
          <Section
            type="section1"
            label={countryInfo.Country}
            img={img}
            alt="flag" fluid
          />
        </div>

        <div className="details-confirmed">
          <Label
            type="arrow"
            label="Number of Confirmed Cases"
            info={
              <Section type="section3" label={countryInfo.TotalConfirmed} />
            }
          />
          <Label
            type="arrow"
            label="Total Recovered"
            info={
              <Section type="section3" label={countryInfo.TotalRecovered} />
            }
          />
          <Label
            type="arrow"
            label="Total Deaths"
            info={<Section type="section3" label={countryInfo.TotalDeaths} />}
          />
        </div>
        <div className="divider">|</div>
        <div className="sources">
          <h2 className="resource">Other Resources</h2>
          <div className="resource_links">
          <a className="cdc" href={cdcUrl}>
            {<Section type="section2" label="CDC" />}
          </a>
          <a className="cdc" href={whoUrl}>
            {<Section type="section2" label="WHO" />}
          </a>
          <a className="cdc" href={nihUrl}>
            {<Section type="section2" label="NIH" />}
            </a>
            </div>
        </div>
      </div>
    );
  }
}
export default CountryDetails;
