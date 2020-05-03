/**
 * Shuffles card deck
 *
 * @param {array} cardsDeck List of cards

 * @returns {array} Shuffled list of cards
 */
function shuffleDeck(cardsDeck) {
  let shuffled = [ ...cardsDeck ];
  let counter = shuffled.length;
  let temp;
  let index;
  
  while (counter > 0) {
    index = Math.floor(Math.random() * counter);
    counter--;
    temp = shuffled[counter];
    shuffled[counter] = shuffled[index];
    shuffled[index] = temp;
  }
  
  return shuffled;
}

/**
 * Select cards subset
 *
 * @param {array} cardCollection Card deck
 * @param {number} amountToShow Amount of cards to show

 * @returns {array} Cards subset
 */
export const selectCardsSubset = (cardCollection, amountToShow) => shuffleDeck(cardCollection).slice(0, amountToShow);

/**
 * Select 36th deck of cards from 52th deck of cards
 *
 * @param {array} deck52 52th card deck
 *
 * @returns {array} Sliced card deck
 */
export const getDeck36 = deck52 => deck52.slice(16);

/**
 * Duplicates pairs for selected cards set
 *
 * @param {array} cardsSet Subset of cards
 *
 * @returns {array} Duplicated and shuffled subset of cards
 */
export const createCardsPairs = cardsSet => shuffleDeck([ ...cardsSet, ...cardsSet ]);
