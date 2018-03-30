import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderStyles>
        <div>
          <h1>Wanderlust in the City</h1>
        </div>
      </HeaderStyles>
    );
  }
}

export default Header;

const HeaderStyles = styled.div`
  width: 100%;
  padding: 8px;
  background: black;
  color: #f2b90c;
  text-align: center;
  text-shadow: 1px 2px lightgrey;

  h1 {
    font-family: "Sarina", cursive;
    font-size: 52px;
    text-shadow: 1px 2px white;
    text-decoration: underline;
  }
`;
