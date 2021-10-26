import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  padding: 1rem;
  background: greenyellow;
  border: 1px solid black;
`;

export const Name = styled.h2`
  font-size: 2rem;
`;

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
