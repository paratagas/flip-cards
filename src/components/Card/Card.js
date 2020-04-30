/*
 * Card
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import purpleBack from '../../cards/purple_back.png';
import './Card.scss';

/* eslint-disable react/prefer-stateless-function */
class Card extends Component {
  static propTypes = {
    onClickHandler: PropTypes.func,
    face: PropTypes.string,
  };

  static defaultProps = {
    onClickHandler: () => {},
    face: '',
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

  /* eslint-disable class-methods-use-this */
  /**
   * Class render method
   *
   * @returns {node} Element node
   */
  render() {
    const { face } = this.props;
    console.log(`this.props.face: ${ face }`);
    const { clicked } = this.state;
    const classList = `card-item ${ clicked }`;

    return (
      <div
        className={ classList }
        onClick={ this.flipCard }
      >
        <img src={ purpleBack } className="card-item__img" alt={ face } />
      </div>
    );
  }
}

export default Card;
