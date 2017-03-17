// Setup alert message area or Component

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';

class MainContainer extends Component {
  render() {
    return (
      <div id="main-container">
        <TopNavbar />
      </div>
  );
}
}

export default MainContainer;
