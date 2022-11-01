import React from "react";
import styled from "styled-components";

const DetailContainer = ({ width, height, children }) => {
  return (
    <StyledDetail width={width} height={height}>
      {children}
    </StyledDetail>
  );
};

const StyledDetail = styled.div`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  width: ${(props) => props.width || "97%"};
  heigth: ${(props) => props.height || "95vh%"};
  min-height: 95vh;
  margin: 0 auto;
  // color: ${(props) => props.color || "gray"};
  // background: ${(props) => props.background || "white"};
  background: rgba(255, 255, 255, 0.5);
  filter: blur(2px);
  border-radius: 14px;
`;

export default DetailContainer;
