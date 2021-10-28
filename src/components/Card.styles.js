import styled from "styled-components";

export const Container = styled.article`
  --base-size: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(2 / 3 * var(--base-size));
  height: var(--base-size);
  margin: 0 2rem 2rem 0;
  background: linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%);
  transition: transform 0.07s ease-in;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 2px 2px 10px 2px #fff;
  }
`;

export const Name = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  order: 2;
  font-size: 1rem;
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
