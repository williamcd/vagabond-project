import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

class Footer extends Component {
    render() {
        return (
            <div>
                <FooterStyles>
                    <h4>©2018 by VagGroup General Assembly</h4>
                </FooterStyles>              
            </div>
        );
    }
}

const FooterStyles = styled.div`
  width: 100%;
  padding: 10px;
  background: black;
  color: #f2b90c;
  text-align: center;

  h4 {
    font-family: "Sarina", cursive;
    font-size: 18px;
    text-shadow: 1px 2px lightgrey;
  }
`;

export default Footer;