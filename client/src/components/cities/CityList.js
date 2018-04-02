import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

import NewCityForm from "./NewCityForm";

class CityList extends Component {
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

  toggleShowForm = () => {
    this.setState({ createNewCity: !this.state.createNewCity });
  };

  toggleNewCityForm = () => {
    this.setState({ newCityFormOpen: !this.state.newCityFormOpen });
  };

  handleChange = event => {
    const newCity = { ...this.state.newCity };
    newCity[event.target.name] = event.target.value;
    this.setState({ newCity });
  };

  createNewCity = async event => {
    event.preventDefault();
    const response = await axios.post("/api/cities", this.state.newCity);
    // const cities = [...this.state.cities, response.data]
    this.getAllCities();
    this.setState({
      newCity: {
        name: "",
        description: "",
        photo_url: ""
      }
    });
    this.getAllCities();
    this.toggleNewCityForm();
  };

  render() {
    return (
      <PageWrapper>
        <ContentWrapper>
          {this.state.cities.map(city => {
            return (
              <div key={city.id}>
                <Link to={`/cities/${city.id}`}>
                  <img src={city.photo_url} alt={city.name}/>
                </Link>
                <h1>{city.name}</h1>
                {/* <p>{city.description}</p> */}
              </div>
            );
          })}
        </ContentWrapper>
        <button onClick={this.toggleNewCityForm}>Create a city</button>
        {this.state.newCityFormOpen ? (
          <NewCityForm
            newCity={this.state.newCity}
            handleChange={this.handleChange}
            createNewCity={this.createNewCity}
          />
        ) : null}
      </PageWrapper>
    );
  }
}

const PageWrapper = styled.div`
  /* min-height: 100vh; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://i.imgur.com/mZVpFqq.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  align-items: center;

  img {
    width: 70%;
    display: block;
    margin: 0 auto;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  h1 {
    font-family: "Diplomata SC", cursive;
    color: white;
    font-size: 28px;
    text-shadow: 1px 2px black;
    padding-bottom: 50px;
    text-align: center;
  }
`;

const ContentWrapper = styled.div`
  align-items: center;
`;

export default CityList;
