import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
//pass link inside of map

class Home extends Component {
  constructor(props) {
    super()
  }
  render() {
  return (
    <div>
      {this.props.countries.map((country, idx) => 
        <Link to={`/details/${country.Country}`} className="country-link">
          {country.Country}
        </Link>)}
      
    </div>
  )
  }
};

export default Home;

// class Home extends Component {
//   render() {
//     let list = listOfCurrencies.map(item => {
//       return (
//         <div className="currency" key={item.currency}>
//           <p>
//             <Link to={"/price/" + item.currency}>{item.currency}</Link>:{" "}
//             {item.country}
//           </p>
//         </div>
//       );
//     });
//     return <div>{list}</div>;
//   }
// }
//passed down this.state.countries - mapping through array of objects -country is just variable 
