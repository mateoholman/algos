import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import TopNavbar from './components/TopNavbar';
import Home from './components/Home';
import BinarySearch from './components/BinarySearch';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNavbar />
          <Route exact path='/' component={Home} />
          <Route path='/binary' component={BinarySearch} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
