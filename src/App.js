import { useState } from "react";
import cards from "./cards";
import getImage from "./getImage";
import GlobalStyle from "./components/GlobalStyle";
import { Wrapper, Header, MainTitle, Main, Footer } from "./App.styles";
import Score from "./components/Score";
import CardList from "./components/CardList";
import Card from "./components/Card";

function App() {
  const [state, setState] = useState({
    bestScore: 0,
    currentScore: 0,
    currentLevel: 1,
    selectedCards: [],
    currentLevelCards: cards,
  });

  const score = {
    bestScore: state.bestScore,
    currentScore: state.currentScore,
  };

  const selectCard = (id) => {
    console.log("selected card:", id);
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <MainTitle>Memory Game</MainTitle>
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
      <Footer>
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/smashicons"
            title="Smashicons"
          >
            Smashicons
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </Footer>
    </Wrapper>
  );
}

export default App;
