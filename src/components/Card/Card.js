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
    onClickHandler: PropTypes.func,
    face: PropTypes.string,
    fullName: PropTypes.string,
    cardImages: PropTypes.object,
  };

  static defaultProps = {
    onClickHandler: () => {},
    face: '',
    fullName: '',
    cardImages: {},
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
  flipCard() {
    const { clicked } = this.state;
    this.setState({ clicked: clicked ? '' : 'clicked' });
  }

  /**
   * Class render method
   *
   * @returns {node} Element node
   */
  render() {
    const { face, fullName, cardImages } = this.props;
    const { clicked } = this.state;
    const classList = `card-item ${ clicked }`;
    const imgSrc = clicked ? cardImages[fullName] : defaultCardBack;

    return (
      <div
        className={ classList }
        onClick={ this.flipCard }
      >
        <img src={ imgSrc } className="card-item__img" alt={ face } />
      </div>
    );
  }
}

export default Card;
