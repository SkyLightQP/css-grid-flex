import React from "react";
import styled from "styled-components";

const TitleStyle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 900;
  font-size: 1.8rem;
  text-transform: uppercase;
`;

const NavTitle: React.FC = () => {
  return <TitleStyle>Lorem</TitleStyle>;
};

export default NavTitle;
