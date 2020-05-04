/*
 * Card
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import defaultCardBack from '../../cards/images/purple_back.png';
import './Card.scss';

/* eslint-disable react/prefer-stateless-function */
class Card extends Component {
  static propTypes = {
    processFlipping: PropTypes.func,
    face: PropTypes.string,
    cardImages: PropTypes.object,
    finishedCardsSet: PropTypes.array,
  };

  static defaultProps = {
    processFlipping: () => {},
    face: '',
    cardImages: {},
    finishedCardsSet: [],
  };

  /**
   * Class constructor
   *
   * @param {array} props List of properties
   */
  constructor(props) {
    super(props);

    this.state = {
      clicked: '',
    };

    // bindings:
    this.flipCard = this.flipCard.bind(this);
  }

  /**
   * Flip card method
   */
  flipCard(face, frozen) {
    if (frozen) return;

    const { processFlipping } = this.props;
    const { clicked } = this.state;
    processFlipping(face);
    this.setState({ clicked: clicked ? '' : 'clicked' });
  }

  /**
   * Class render method
   *
   * @returns {node} Element node
   */
  render() {
    const { face, cardImages, finishedCardsSet } = this.props;
    const { clicked } = this.state;
    const frozen = finishedCardsSet.includes(face) ? 'frozen' : '';
    const classList = `card-item ${ clicked } ${ frozen }`;
    const imgSrc = (clicked || frozen) ? cardImages[face] : defaultCardBack;

    return (
      <div
        className={ classList }
        onClick={() => this.flipCard(face, frozen) }
      >
        <img src={ imgSrc } className="card-item__img" alt={ face } />
      </div>
    );
  }
}

export default Card;
