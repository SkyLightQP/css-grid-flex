import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f6f6f6;
  height: 45%;
  border-radius: 30px;
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  align-self: center;

  box-shadow: 0px 2px 20px #dedede;

  @media (prefers-color-scheme: dark) {
    color: black;
    box-shadow: 0px 2px 10px #dedede;
  }
`;

const NoticeBar: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default NoticeBar;
