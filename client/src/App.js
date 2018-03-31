import React, { Component } from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import axios from "axios";


import Header from "./components/static-components/Header";
import Footer from "./components/static-components/Footer";
import NewCityForm from "./components/cities/NewCityForm";
import CityList from "./components/cities/CityList";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sarina');
@import url('https://fonts.googleapis.com/css?family=Diplomata+SC');
`;

class App extends Component {
  state = {
    cities: [],
    newCityFormOpen: false,
    newCity: {
      name: "",
      description: "",
      photo_url: ""
    },
    error: ""
  };

  componentDidMount() {
    this.getAllCities();
  }

  getAllCities = async () => {
    try {
      const res = await axios.get("/api/cities");
      this.setState({ cities: res.data.cities });
      console.log(this.state);
    } catch (err) {
      this.setState({ err: err.message });
    }
  };

  toggleNewCityForm = () => {
    this.setState({ newCityFormOpen: !this.state.newCityFormOpen });
  };

  handleChange = event => {
    const newCity = { ...this.state.newCity };
    const att = event.target.name;
    newCity[att] = event.target.value;
  };

  createNewCity = async event => {
    event.preventDefault();
    const response = await axios.post("/api/cities", this.state.newCity);
    const cities = [...this.state.cities, response.data];
    this.setState({
      newCity: {
        name: "",
        description: "",
        photo_url: ""
      }
    });
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.cities.map((city, i) => {
          return (
            <CityList key={i} cityName={city.name} cityPhoto={city.photo_url} />
          );
        })}
        <button onClick={this.toggleNewCityForm}>New City</button>
        {this.state.newCityFormOpen ? <NewCityForm /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
