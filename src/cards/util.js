function shuffleDeck(cardsDeck) {
  let shuffled = [...cardsDeck];
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

export const selectCardsSubset = (cardCollection, amountToShow) => shuffleDeck(cardCollection).slice(0, amountToShow);

export const getDeck36 = deck52 => deck52.slice(16);

export const createCardsPairs = cardsSet => shuffleDeck([...cardsSet, ...cardsSet]);
