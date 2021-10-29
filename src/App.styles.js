import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  background: #5b5c5a;
`;

export const MainTitle = styled.h1`
  margin: 0 auto 0 1ch;
  color: var(--light-text-color);
  font-size: 1rem;
  letter-spacing: 0.5ch;

  @media (min-width: 640px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1400px) {
    font-size: 3rem;
  }
`;

export const Main = styled.main`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  background: #f4f3cd;
`;
