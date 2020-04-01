import React from "react";
import "./App.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import CountryDetails from "./CountryDetails"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  }
  componentDidMount = async () => {
    const response = await axios.get(`https://api.covid19api.com/summary`);

    this.setState({ countries: response.data.Countries });
    console.log(this.state.countries[90].TotalConfirmed)
    console.log(this.props)
    
  };
  

  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="countries">
            {this.state.countries.map((countries, idx) => (
              <Home className="country" key={idx} country={countries.Country} cases={countries.TotalConfirmed} />
            ))}
          </div>
          <div className="cases">
            
            <Route path="/details" component={CountryDetails} />
        
          </div>
          
          
          
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