import React, { Component } from 'react';
import './App.css';
import purple_back from './cards/purple_back.png';
import Card from './components/Card/Card';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">

      	  <Card />
      	  <Card />
          <Card />
      	  <Card />
      	  <Card />
      	  <Card />
          <Card />
      	  <Card />
      	  <Card />
      	  <Card />
          <Card />
      	  <Card />

        </div>
      </div>
    );
  }
}

export default App;
