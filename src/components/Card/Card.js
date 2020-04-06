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

  render() {
    const { onClickHandler } = this.props;

    return (
      <div
        className="card-item"
        onClick={ () => onClickHandler() }
      >
        <img src={ purple_back } className="card-item__img" alt="card-item__img" />
      </div>
    );
  }
}

export default Card;
