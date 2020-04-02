// import React, { Component } from 'react'

// class CountryDetails extends Component {
//   constructor(props) {
//     super(props)
// const cases = props.match.params.TotalConfirmed

//   }

//   render() {
//     return (
//       <p>{cases}</p>
//     )
//   }
// }

// export default CountryDetails

import React, { Component } from "react";

class CountryDetails extends Component {
  // constructor(props) {
  //   super();

  //   console.log(this.props);
  // }

  render() {
    const nation = this.props.match.params.idx;
    console.log(nation);
    const countryInfo = this.props.cases.find(item =>  nation === item.Country)
    console.log(this.props.cases);
console.log(countryInfo)
    return (
     
      //   <div className="cases">
      // <div className="country-name">
      //   {props.country}
      <div>
    <div className="details-name"><p>{countryInfo.Country}</p></div>
          <div className="details-confirmed"><p>{countryInfo.TotalConfirmed}</p></div>
          </div>
    );
  }
}
export default CountryDetails;
