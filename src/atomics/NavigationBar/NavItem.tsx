import React from "react";
import styled from "styled-components";

const ItemStyle = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: #eeeeee;
  }

  @media screen and (max-width: 760px) {
    padding: 0.8rem 0;
    padding-left: 0.5rem;
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: #fff;
      color: black;
    }
  }
`;

const NavItem: React.FC = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default NavItem;
