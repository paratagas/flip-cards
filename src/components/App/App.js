import React, { Component } from 'react';
import './App.scss';
import Card from '../Card/Card';
import { prepareCards } from '../../cards/util';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  /**
   * Import all cards
   *
   * @param {function} reqContext Require context
   *
   * @returns {object} List of all cards
   */
  static importAllCardImages(reqContext) {
    let images = {};

    reqContext.keys().forEach(item => {
      images[item.replace('./', '').replace('.png', '')] = reqContext(item);
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
    this.Cards = prepareCards(this.cardsAmount);
    this.cardImages = App.importAllCardImages(require.context('../../cards/images/', false, /.*\.png$/));

    this.state = {
      isFirstCard: true,
      previousCard: null,
      currentCard: null,
      finishedCardsSet: [],
    };

    // bindings:
    this.createCardsList = this.createCardsList.bind(this);
    this.processFlippingCard = this.processFlippingCard.bind(this);
  }

  /**
   * Create list of cards
   *
   * @returns {array} List of cards
   */
  createCardsList() {
    const { finishedCardsSet } = this.state;

    const cardsList = this.Cards.map((item, index) => {
      return (
        <Card
          key={`card-${ index }`}
          face={ item }
          cardImages={ this.cardImages }
          processFlipping={ this.processFlippingCard }
          finishedCardsSet={ finishedCardsSet }
        />
      );
    });

    return cardsList;
  }

  /**
   * Process flipping card
   *
   * @param {string} currentCard Current card
   */
  processFlippingCard(currentFlipped) {
    let {
      isFirstCard,
      previousCard,
      currentCard,
      finishedCardsSet,
    } = this.state;

    if (!previousCard) {
      previousCard = currentFlipped;
    } else {
      previousCard = currentCard;
    }

    if (!isFirstCard && (previousCard === currentFlipped)) {
      if (!finishedCardsSet.includes(currentFlipped)) {
        finishedCardsSet.push(currentFlipped);
      }
    }

    this.setState({
      isFirstCard: false,
      previousCard,
      currentCard: currentFlipped,
      finishedCardsSet,
    });
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
