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
  width: ${(props) => props.width || "97%"};
  heigth: ${(props) => props.height || "95vh"};
  min-height: ${(props) => props.height || "95vh"};
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.5);
  border-radius: 14px;
  padding: 5px 30px;
`;

export default DetailContainer;
