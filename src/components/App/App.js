import React, { Component } from 'react';
import './App.scss';
import Card from '../Card/Card';
import { deck52, CARD_EXTENSION } from '../../cards/cards';
import { selectCardsSubset, getDeck36, createCardsPairs } from '../../cards/util';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  /**
   * Import all cards
   *
   * @param {function} reqContext Require context

   * @returns {object} List of all cards
   */
  static importAllCardImages(reqContext) {
    let images = {};

    reqContext.keys().forEach(item => {
      images[item.replace('./', '')] = reqContext(item);
    });
      
    return images;
  }

  /**
   * Class constructor
   *
   * @param {array} props List of properties
   */
  constructor(props) {
    super(props);

    this.cardsAmount = 6;
    this.Cards = createCardsPairs(selectCardsSubset(getDeck36(deck52), this.cardsAmount));
    this.cardImages = App.importAllCardImages(require.context('../../cards/images/', false, /.*\.png$/));

    // bindings:
    this.createCardsList = this.createCardsList.bind(this);
  }

  /**
   * Create list of cards
   *
   * @returns {array} List of cards
   */
  createCardsList() {
    const cardsList = this.Cards.map((item, index) => {
      return (
        <Card
          key={`card-${ index }`}
          face={ item }
          fullName={`${ item }${ CARD_EXTENSION }`}
          cardImages={ this.cardImages }
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
          { this.createCardsList() }
        </div>
      </div>
    );
  }
}

export default App;
