import { useState } from "react";
import cards from "./cards";
import GlobalStyle from "./components/GlobalStyle";
import { Wrapper, Header, MainTitle, Main, Footer } from "./App.styles";
import Score from "./components/Score";

function App() {
  const [state, setState] = useState({
    bestScore: 0,
    currentScore: 0,
    currentLevel: 1,
    selectedCards: [],
    currentLevelCards: null,
  });

  const score = {
    bestScore: state.bestScore,
    currentScore: state.currentScore,
  };

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <MainTitle>Memory Game</MainTitle>
        <Score score={score} />
      </Header>
      <Main></Main>
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
