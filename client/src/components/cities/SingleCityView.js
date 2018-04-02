import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../static-components/Header";
import Footer from "../static-components/Footer";
import NewCommentForm from "../comments/NewCommentForm";
import CommentList from "../comments/CommentList";



const WeatherContainer = styled.div`
text-align: center;
margin: 0 auto;
padding-bottom: 10px;
font-family: 'Kameron', serif;
background-color: white;
max-width: 300px;
margin-bottom: 20px;
margin-top: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`


class SingleCityView extends Component {
  state = {
    city: {},
    comments: [],
    showEditCity: false,
    showCreateCommentForm: false,
    newComment: {
      title: "",
      content: ""
    },
    weather: {},
  };

  componentDidMount() {
    this.getSingleCity();
    this.getWeather();
  }
  getSingleCity = async () => {
    const cityId = this.props.match.params.id;
    const response = await axios.get(`/api/cities/${cityId}`);
    this.setState({
      city: response.data.city,
      comments: response.data.comments
    });
    console.log(this.state.comments);
  };
  deleteCity = async () => {
    await axios.delete(`/api/cities/${this.state.city.id}`);
  };

  getWeather = async () => {
    const zipcode = this.state.city
    const response = await axios.get(`/api/weather/${cityId}`)
    const formattedResponse = {
        humidity: response.data.main.humidity,
        temp: response.data.main.temp,
        description: response.data.weather[0].description,
        windSpeed: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        general: response.data.weather[0].main,
        sunset: response.data.sys.sunset
        
    }
    this.setState({weather: formattedResponse})
}

  toggleShowEdit = () => {
    this.setState({ showEditCity: !this.state.showEditCity });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const cityId = this.state.city.id;
    const cityUpdate = { ...this.state.city };
    await axios.patch(`/api/cities/${cityId}`, cityUpdate);
    this.toggleShowEdit();
    await this.getSingleCity();
  };

  render() {
    return (
      <StyleWrapper>
        <div>
          <h1>Welcome to {this.state.city.name}!</h1>
          <img src={this.state.city.photo_url} />
          <DescriptionWrapper>
            <p>{this.state.city.description}</p>
          </DescriptionWrapper>

          <WeatherContainer>
                        <h5>Current Weather</h5>
                    <p>{this.state.weather.temp}°F </p>
                    <p> {this.state.weather.general}</p>
                    <img alt="icon depiction of the the api's weather description" src={`http://openweathermap.org/img/w/${this.state.weather.icon}.png`} />
                    
                    <p>{this.state.weather.description} </p>
                    <p>humidity: {this.state.weather.humidity}%</p>
                    <p>wind speed: {this.state.weather.windSpeed}</p>
            
                </WeatherContainer>

          <ButtonWrapper>
            <button negative onClick={this.deleteCity}>
              Delete {this.state.city.name}
            </button>
            <CommentWrapper>
              <CommentList
                cityId={this.state.city.id}
                getSingleCity={this.getSingleCity}
                comments={this.state.comments}
              />
            </CommentWrapper>
          </ButtonWrapper>
        </div>
      </StyleWrapper>
    );
  }
}

export default SingleCityView;

const StyleWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url("https://i.imgur.com/OIqONr4.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  align-items: center;

  img {
    width: 90%;
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
    font-size: 32px;
    text-shadow: 1px 2px black;
    padding: 40px 0px;
    text-align: center;
  }
`;
const DescriptionWrapper = styled.div`
  color: white;
  border-radius: 15px;
  width: 60%;
  font-size: 20px;
  text-shadow: 2px 2px black;
  text-align: center;
  display: block;
  margin: 0 auto;
  padding: 15px;
  align-items: center;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  button {
    margin: 30px;
  }
`;

const CommentWrapper = styled.div`
  background-color: white;
  text-align: center;
  border-radius: 15px;
  width: 60%;
  margin: 20px;
  font-family: "Nanum Pen Script", cursive;
  font-size: 24px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-decoration: none;
`;
