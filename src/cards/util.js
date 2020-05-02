export function selectCardsSubset (cardCollection, amountToShow) {
  // TODO: set random cards order
  return cardCollection.slice(0, amountToShow);
}

export function getDeck36(deck52) {
  return deck52.slice(16);
}

export function createCardsPairs(cardsSet) {
  return [...cardsSet, ...cardsSet];
}
