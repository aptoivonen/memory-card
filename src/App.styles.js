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
  background: #ccc;
`;

export const MainTitle = styled.h1`
  margin: 0 auto 0 1ch;
  font-size: 3rem;
  letter-spacing: 0.5ch;
`;

export const Main = styled.main`
  flex: 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  background: #ddd;
`;
