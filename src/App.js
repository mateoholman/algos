import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainContainer from './components/MainContainer';
import Home from './components/Home';
import BinarySearch from './components/BinarySearch';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={(props) => (<MainContainer children={props.children}/>)}>
          <IndexRoute component={Home} />
          <Route path='/binary' component={BinarySearch} />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
