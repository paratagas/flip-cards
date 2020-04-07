/*
 * Card
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import purple_back from '../../cards/purple_back.png';
import './Card.scss';

/* eslint-disable react/prefer-stateless-function */
class Card extends Component {
  static propTypes = {
    onClickHandler: PropTypes.func,
  };

  static defaultProps = {
    onClickHandler: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      clicked: '',
    };

    // bindings:
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard() {
    const { clicked } = this.state;
    this.setState({ clicked: clicked ? '' : 'clicked' });
  }

  render() {
    const { clicked } = this.state;
    const classList = `card-item ${ clicked }`;

    return (
      <div
        className={ classList }
        onClick={ this.flipCard }
      >
        <img src={ purple_back } className="card-item__img" alt="card-item__img" />
      </div>
    );
  }
}

export default Card;
