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
  padding: 1rem;
  background: #ccc;
`;

export const MainTitle = styled.h1`
  margin-right: auto;
  font-size: 1.5rem;
`;

export const Main = styled.main`
  flex: 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
`;

export const Footer = styled.footer`
  height: 100px;
  padding: 1rem;
  background: #aaa;
`;
