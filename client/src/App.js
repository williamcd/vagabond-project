import React, { Component } from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sarina');
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PageWrapper>
          <h1>Atlanta</h1>
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
  background-image: url("https://i.imgur.com/WhBsOjy.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
`;

export default App;
