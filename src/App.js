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
import Footer from "./components/Footer";

const getShuffledCards = getLevelCards(cards);

function App() {
  const [state, setState] = useState(() => ({
    bestScore: 0,
    currentScore: 0,
    currentLevel: 1,
    selectedCards: [],
    currentLevelCards: getShuffledCards(1),
  }));

  const score = {
    bestScore: state.bestScore,
    currentScore: state.currentScore,
  };

  const selectCard = (id) => {
    console.log("selected card:", id);
    // Player clicked already picked card on this level
    const cardAlreadySelected = state.selectedCards
      .map((card) => card.id)
      .includes(id);
    if (cardAlreadySelected) {
      console.log("card already selected!");
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
      const [newCurrentLevel, newCurrentLevelCards] = areAllCardsPicked
        ? [currentLevel + 1, getShuffledCards(currentLevel + 1)]
        : [currentLevel, getShuffledCards(currentLevel, currentLevelCards)];

      console.log(
        "comparison",
        sortBy(newSelectedCards, ["id"]),
        sortBy(currentLevelCards, ["id"]),
        areAllCardsPicked
      );

      console.log({
        ...state,
        currentScore: newScore,
        bestScore: newBestScore,
        currentLevel: newCurrentLevel,
        selectedCards: newSelectedCards,
        currentLevelCards: newCurrentLevelCards,
      });

      return {
        ...state,
        currentScore: newScore,
        bestScore: newBestScore,
        currentLevel: newCurrentLevel,
        selectedCards: newSelectedCards,
        currentLevelCards: newCurrentLevelCards,
      };
    });
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <MainTitle>Bite Memory</MainTitle>
        <Level currentLevel={state.currentLevel} />
        <Score score={score} />
      </Header>
      <Main>
        <CardList>
          {state.currentLevelCards.map((card) => (
            <Card
              key={card.id}
              card={{ ...card, url: getImage(card.url) }}
              selectCard={selectCard}
            />
          ))}
        </CardList>
      </Main>
      <Footer />
    </Wrapper>
  );
}

export default App;
