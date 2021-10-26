import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 180px;
  height: 250px;
  padding: 2.5rem;
  background: greenyellow;
  border: 1px solid black;
`;

export const Name = styled.h2`
  order: 2;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  color: #333;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
