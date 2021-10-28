import styled from "styled-components";

export const Component = styled.footer`
  display: flex;
  align-items: center;
  height: 5ch;
  padding-left: 1rem;
  background: #aaa;
`;

const Footer = () => {
  return (
    <Component>
      Icons made by{" "}
      <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
        Smashicons
      </a>{" "}
      from{" "}
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </Component>
  );
};

export default Footer;
