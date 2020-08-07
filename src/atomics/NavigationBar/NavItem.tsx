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
`;

const NavItem: React.FC = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default NavItem;
