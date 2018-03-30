import React, { Component } from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sarina');
@import url('https://fonts.googleapis.com/css?family=Diplomata+SC');
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageWrapper>
          <h1>Atlanta</h1>
          <img src="https://i.imgur.com/42zYDsw.jpg" />
          <h1>London</h1>
          <img src="https://i.imgur.com/6X26EdW.jpg" />
          <h1>San Francisco</h1>
          <img src="https://i.imgur.com/6YH983R.jpg" />
        </PageWrapper>
        <Footer />
      </div>
    );
  }
}

const PageWrapper = styled.div`
  min-height: 100vh;
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
    width: 60%;
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
    margin: 28px 0px;
  }
`;

export default App;
