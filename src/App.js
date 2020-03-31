import React from "react";
import "./App.css";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

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
  };

  render() {
    return (
      <div>
        <main>
          <Header />
          <div className="countries">
            {this.state.countries.map((countries, idx) => (
              <Home className="country" key={idx} country={countries.Country} />
            ))}
          </div>
        </main>
      </div>
    );
  }
}
export default App;
