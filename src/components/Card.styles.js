import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 250px;
  padding: 1rem 0;
  background: greenyellow;
  border: 1px solid black;

  & + & {
    margin-left: 2rem;
  }
`;

export const Name = styled.h2`
  order: 2;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.3ch;
  color: #333;
  border-top: 1px solid black;
`;

export const Image = styled.img`
  max-width: 100%;
  padding: 1rem;
  object-fit: cover;
`;
