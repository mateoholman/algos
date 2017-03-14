import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
import BinarySearch from './components/BinarySearch';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/binary' component={BinarySearch} />
        </div>
      </Router>
    );
  }
}

export default App;
