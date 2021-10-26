import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const CardList = ({ children, ...restProps }) => {
  return <List {...restProps}>{children}</List>;
};

export default CardList;
