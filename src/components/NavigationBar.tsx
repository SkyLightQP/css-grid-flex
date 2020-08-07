import React from "react";
import styled from "styled-components";
import NavTitle from "../atomics/NavigationBar/NavTitle";
import NavItem from "../atomics/NavigationBar/NavItem";

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 2rem 6rem;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const NavItemListStyle = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const NavigationBar: React.FC = () => {
  return (
    <NavContainer>
      <NavTitle />

      <NavItemListStyle>
        <NavItem>Ipsum</NavItem>
        <NavItem>simply</NavItem>
        <NavItem>dummy</NavItem>
        <NavItem>text</NavItem>
      </NavItemListStyle>
    </NavContainer>
  );
};

export default NavigationBar;
