import React from "react";
import styled from "styled-components";

const Background = ({ background, children }) => {
  console.log("확인:" + background);
  return (
    <StyledBackGround background={background}>{children}</StyledBackGround>
  );
};

const StyledBackGround = styled.div`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  width: 97%;
  heigth: 95vh;
  min-height: 95vh;
  margin: 0 auto;
  margin: 10px 0;
  // color: ${(props) => props.color || "gray"};
  // background: ${(props) => props.background || "white"};
  //background: linear-gradient(#81beff, #a0d0ff, #bfe2fe);
  background: linear-gradient(${(props) => props.background || "white"});
  box-shadow: 0px 4px 4px #abb6be;
`;

export default Background;
