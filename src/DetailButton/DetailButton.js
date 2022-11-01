import React from "react";
import styled from "styled-components";

const DetailButton = ({ width, height, children }) => {
  return (
    <StyledButton width={width} height={height}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid lightgray;
  width: ${(props) => props.width || "210px"};
  heigth: ${(props) => props.height || "210px"};
  min-height: 210px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.58);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
`;

export default DetailButton;
