import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../static-components/Header";
import Footer from "../static-components/Footer";
import NewCommentForm from '../comments/NewCommentForm';
import CommentList from '../comments/CommentList';

class SingleCityView extends Component {
  state = {
    city: {},
    comments: [],
    showEditCity: false,
    showCreateCommentForm: false,
    newComment: {
      title: "",
      content: ""
    }
  };

    componentDidMount() {
        this.getSingleCity()
    }
    getSingleCity = async () => {
        const cityId = this.props.match.params.id
        const response = await axios.get(`/api/cities/${cityId}`)
        this.setState({
            city: response.data.city,
            comments: response.data.comments
        })
    }
    deleteCity = async () => {
        await axios.delete(`/api/cities/${this.state.city.id}`);
    };

  toggleShowEdit = () => {
    this.setState({ showEditCity: !this.state.showEditCity });
  };

  toggleCommentForm = () => {
    this.setState({ showCreateCommentForm: !this.state.showCreateCommentForm });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const cityId = this.state.city.id;
    const cityUpdate = { ...this.state.city };
    await axios.patch(`/api/cities/${cityId}`, cityUpdate);
    this.toggleShowEdit();
    await this.getSingleCity();
  };

  handleChange = event => {
    const city = event.target.name;
    const newCity = { ...this.state.city };
    newCity[city] = event.target.value;
    this.setState({ city: newCity });
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
          <ButtonWrapper>
            <button negative onClick={this.toggleCommentForm}>
              New Comment
            </button>
            {this.state.showCreateCommentForm ? <NewCommentForm /> : null}
            <button negative onClick={this.toggleShowEdit}>
              Edit {this.state.city.name}
            </button>
            <button negative onClick={this.deleteCity}>
              Delete {this.state.city.name}
            </button>
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
  justify-content: space-evenly;
  button {
    margin: 30px;
  }
`;
