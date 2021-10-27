import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 80%;
`;

const CardList = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

export default CardList;
