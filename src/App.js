import React, { Component } from 'react';
import './App.scss';
import Card from './components/Card/Card';

const cardsAmount = 12;
const CARDS = Array.from(Array(cardsAmount).keys());

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  constructor(props) {
    super(props);

    // bindings:
    this.createCardsList = this.createCardsList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  createCardsList() {
    const cardsList = CARDS.map((item, index) => {
      return (
        <Card
          key={`card-${ index }`}
          onClickHandler={ this.handleClick }
        />
      );
    });

    return cardsList;
  }

  handleClick() {
    console.log('Click');
  }

  render() {
    return (
      <div className="App">
        <div className="App__container">
          { this.createCardsList() }
        </div>
      </div>
    );
  }
}

export default App;
