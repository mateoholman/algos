// Setup alert message area or Component

import React, { Component } from 'react';
import TopNavbar from './TopNavbar';

class MainContainer extends Component {
  render() {
    return (
      <div id="main-container">
        <TopNavbar />
        {this.props.children}
      </div>
  );
}
}

export default MainContainer;
