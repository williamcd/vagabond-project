import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { injectGlobal } from "styled-components";

import CityList from './components/cities/CityList'
import SingleCityView from './components/cities/SingleCityView'
import SingleCommentView from './components/comments/SingleCommentView'
import Header from "./components/static-components/Header";
import Footer from "./components/static-components/Footer";

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sarina');
@import url('https://fonts.googleapis.com/css?family=Diplomata+SC');
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script');

button {
  padding: 10px;
    margin: 10px;
    border-radius: 5px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
    align-items: center;
}

button:hover {
    background-color: Black;
    color: white;
}
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={CityList} />
            <Route exact path="/cities/:id" component={SingleCityView} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
