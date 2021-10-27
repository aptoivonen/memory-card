import sample from "lodash/sample";

export const getLevelCards =
  (cards) =>
  (level, currentLevelCards = cards.slice()) => {
    const numberOfLevelCards = [4, 6, 8, 10];

    const getCards = (numberOfLevelCards, levelCards) => {
      const selectedCards = [];
      let levelCardsToChooseFrom = levelCards.slice();
      for (let i = 0; i < numberOfLevelCards; i++) {
        const newCard = sample(levelCardsToChooseFrom);
        selectedCards.push(newCard);
        levelCardsToChooseFrom = levelCardsToChooseFrom.filter(
          (card) => card.id !== newCard.id
        );
      }
      return selectedCards;
    };

    return getCards(numberOfLevelCards[level - 1], currentLevelCards);
  };
