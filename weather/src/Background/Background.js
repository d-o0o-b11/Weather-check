import React from "react";
import styled from "styled-components";

const Background = ({ children, color, background }) => {
  return (
    <StyledBackGround color={color} background={background} Î>
      {children}
    </StyledBackGround>
  );
};

const StyledBackGround = styled.div`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  width: 97%;
  heigth: 97vh;
  min-height: 95vh;
  margin: 0 auto;
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
  background: linear-gradient(#81beff, #a0d0ff, #bfe2fe);
  box-shadow: 3px 3px 10px #abb6be;
`;

export default Background;
