import React, { Component } from 'react';
import styled from "styled-components";

class CityList extends Component {
    render() {
        return (
            <PageWrapper>
                <img src={this.props.cityPhoto} alt={this.props.cityName} />
                <h1>{this.props.cityName}</h1>
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
    margin: 15px;
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  h1 {
    font-family: 'Diplomata SC', cursive;
    color: white;
    font-size: 28px; 
    text-shadow: 1px 2px black;
    padding-bottom: 50px;
  }
`;

export default CityList;