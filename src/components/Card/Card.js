/*
 * Card
 */

import React, { Component } from 'react';
import purple_back from '../../cards/purple_back.png';
// import './Card.scss';

/* eslint-disable react/prefer-stateless-function */
class Card extends Component {
  render() {
    return (
      <div className="card-item">
        <img src={ purple_back } className="card-img" alt="card-img" />
      </div>
    );
  }
}

export default Card;
