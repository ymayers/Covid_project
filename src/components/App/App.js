import React from "react";
import "./App.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CountryDetails from "./CountryDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: []
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(`https://api.covid19api.com/summary`);

    this.setState({ countries: response.data.Countries });
  };

  //renders <Home/> countries onto homepage - needs to be refactored?
  //second block is supposed to render the number of cases by country on a different page but is currently showing on the home page...
  //should I be using componentDidUpdate - if so, where? I know I need it so that the number of cases doesn't show until click.

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          {/* not absolutely sure how to pass router props to CountryDetails component in this form when I need to map through and get the data or have Home component pass the props */}
          {/* <Route path="/details/:idx" render={(props) => < CountryDetails {...props} />}/> */}
          
          <div className="countries">
            {this.state.countries.map((countries, idx) => (
              <Home
                className="country"
                key={idx}
                country={countries.Country}
                cases={countries.TotalConfirmed}
              />
            ))}
          </div>
          <Route path="/details/:idx" component={CountryDetails} />

          {/* /*countrydetails component - renders cases and country names - needs to render on separate page - need componentDidUpdate?*/ }
          <div className="cases">
            {this.state.countries.map((countries, idx) => (
              <CountryDetails
                key={idx}
                className="cases"
                country={countries.Country}
                cases={countries.TotalConfirmed}
              />
            ))}
          </div>
    

          {/* <CountryDetails
              className="cases"
              country={this.props.country}
              cases={this.props.cases}
            /> */}

          {/* {this.state.countries.map((countries, idx) => (
              <CountryDetails key={idx} cases={countries.TotalConfirmed} />

            ))} */}

          {/* <Route path="/details/:idx" render={routerProps => (<CountryDetails country={this.state.countries}cases={this.state.countries.TotalConfirmed}{...routerProps} />)}/> */}
          {/* <Route path="/details/:idx" render={routerProps => (<CountryDetails cases={this.cases} {...routerProps} />)}
          /> */}
        </main>
      </div>
    );
  }
}
export default App;

// <Route render={routerProps => <ParkList parks={this.state.parks} {...routerProps} />} path="/" exact />
// <Route render={routerProps => <ParkDetail parks={this.state.parks} {...routerProps} />} path="/park/:id" />

/* <Route path="/details" render={routerProps => (<CountryDetails key={this.state.countries.idx} cases={this.state.cases}{...routerProps} />)} /> */

// Old Route for cases

// <Route
// path="/details/:idx"
// render={() => {
//   this.state.countries.map((countries, idx) => (
//     <CountryDetails
//       className="cases"
//       key={idx}
//       country={countries.Country}
//       cases={countries.TotalConfirmed}
//     />
//   ))
// }}
// />
