import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card/Card';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__container">

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
