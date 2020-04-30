import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card/Card';

const cardsAmount = 12;
const CARDS = Array.from(Array(cardsAmount).keys());

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  /**
   * Create list of cards
   *
   * @returns {array} List of cards
   */
  static createCardsList() {
    const cardsList = CARDS.map((item, index) => {
      return (
        <Card
          key={`card-${ index }`}
        />
      );
    });

    return cardsList;
  }

  /* eslint-disable class-methods-use-this */
  /**
   * Class render method
   *
   * @returns {node} Element node
   */
  render() {
    return (
      <div className="App">
        <div className="App__container">
          { App.createCardsList() }
        </div>
      </div>
    );
  }
}

export default App;
