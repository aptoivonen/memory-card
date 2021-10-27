import styled from "styled-components";

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 250px;
  margin: 0 2rem 2rem 0;
  padding: 1rem 0;
  background: greenyellow;
  transition: transform 0.07s ease-in;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 2px 2px 10px 2px #fff;
  }
`;

export const Name = styled.h2`
  order: 2;
  font-size: 1.5rem;
  text-align: center;
  letter-spacing: 0.3ch;
  color: #333;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
  max-width: 100%;
  padding: 1rem;
  object-fit: cover;
`;
