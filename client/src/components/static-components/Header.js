import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <HeaderStyles>
          <h1>Wanderlust in the City</h1>
          <Link style={{ textDecoration: "none" }} to="/">
            <h3>All Cities</h3>
          </Link>
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
  text-shadow: 1px 1px lightgrey;
  font-family: "Nanum Pen Script", cursive;
  font-size: 28px;

  h3 {
    color:white;
  }

  h3:visited {
    color: white;
  }

  h1 {
    font-family: "Sarina", cursive;
    font-size: 52px;
    text-shadow: 1px 2px white;
    text-decoration: underline;
  }
`;
