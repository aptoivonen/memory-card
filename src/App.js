import { useState } from "react";
import cards from "./cards";
import getImage from "./getImage";
import isEqual from "lodash/isEqual";
import sortBy from "lodash/sortBy";
import { getLevelCards } from "./cardUtil";
import GlobalStyle from "./components/GlobalStyle";
import { Wrapper, Header, MainTitle, Main } from "./App.styles";
import Score from "./components/Score";
import CardList from "./components/CardList";
import Card from "./components/Card";
import Level from "./components/Level";
import GameWon from "./components/GameWon";
import Footer from "./components/Footer";

const getShuffledCards = getLevelCards(cards);

function App() {
  const getInitialState = () => ({
    bestScore: 0,
    currentScore: 0,
    currentLevel: 1,
    selectedCards: [],
    currentLevelCards: getShuffledCards(1),
    isGameWon: false,
  });

  const [state, setState] = useState(getInitialState);

  const selectCard = (id) => {
    // Player clicked already picked card on this level
    const cardAlreadySelected = state.selectedCards
      .map((card) => card.id)
      .includes(id);
    if (cardAlreadySelected) {
      setState((state) => ({
        ...state,
        currentScore: 0,
        currentLevel: 1,
        selectedCards: [],
        currentLevelCards: getShuffledCards(1),
      }));
      return;
    }
    // Player picked new card => add point, add card to selected cards,
    // and if all level cards were picked, advance to new level
    setState((state) => {
      const {
        bestScore,
        currentScore,
        currentLevel,
        selectedCards,
        currentLevelCards,
      } = state;
      const newScore = currentScore + 1;
      const newBestScore = bestScore < newScore ? newScore : bestScore;
      const newSelectedCard = cards.find((card) => card.id === id);
      const newSelectedCards = [...selectedCards, newSelectedCard];
      const areAllCardsPicked = isEqual(
        sortBy(newSelectedCards, ["id"]),
        sortBy(currentLevelCards, ["id"])
      );
      const newFinalSelectedCards = areAllCardsPicked ? [] : newSelectedCards;
      const [newCurrentLevel, newCurrentLevelCards, newIsGameWon] =
        areAllCardsPicked
          ? currentLevel < 4
            ? [currentLevel + 1, getShuffledCards(currentLevel + 1), false]
            : [currentLevel, [], true]
          : [
              currentLevel,
              getShuffledCards(currentLevel, currentLevelCards),
              false,
            ];

      return {
        ...state,
        currentScore: newScore,
        bestScore: newBestScore,
        currentLevel: newCurrentLevel,
        selectedCards: newFinalSelectedCards,
        currentLevelCards: newCurrentLevelCards,
        isGameWon: newIsGameWon,
      };
    });
  };

  const restart = () => {
    setState(getInitialState);
  };

  const score = {
    bestScore: state.bestScore,
    currentScore: state.currentScore,
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <MainTitle>Food Memory</MainTitle>
        <Level currentLevel={state.currentLevel} />
        <Score score={score} />
      </Header>
      <Main>
        {state.isGameWon ? (
          <GameWon onClick={restart} />
        ) : (
          <CardList>
            {state.currentLevelCards.map((card) => (
              <Card
                key={card.id}
                card={{ ...card, url: getImage(card.url) }}
                selectCard={selectCard}
              />
            ))}
          </CardList>
        )}
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
