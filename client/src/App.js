import React, { Component } from 'react';
import styled from 'styled-components'
import { injectGlobal } from "styled-components";

import Header from './Header'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Sarina');
`

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
