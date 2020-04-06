import React from "react";
import "./App.css";
import axios from "axios";
import { Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import CountryDetails from "./CountryDetails";
import name from "../../data/world.json";
import 'bootstrap/dist/css/bootstrap.min.css';


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

  render() {
    return (
      <div className="body">
        <Header />
        <main>
          <Route
            exact
            path="/"
            render={props => (
              <Home countries={this.state.countries} {...props} />
            )}
          />
          <Route
            path="/:idx"
            render={props => (
              <CountryDetails cases={this.state.countries} image={name} {...props} />
            )}
          />
           <Footer/>
        </main>
    
      </div>
    );
  }
}
export default App;


