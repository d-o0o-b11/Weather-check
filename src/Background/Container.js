import React from "react";
import styled from "styled-components";

const Container = ({ width, heigth, background, children }) => {
  return (
    <StyledContainer width={width} heigth={heigth} background={background}>
      {children}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: ${(props) => props.background || "#d4dde2"};
  margin: 0 auto;
  display: flex; //중앙 배치
  justify-content: center; //중앙 배치
  align-items: center; //중앙 배치
  width: ${(props) => props.width || "100%"};
  heigth: ${(props) => props.heigth || "100vh"};
  min-height: ${(props) => props.heigth || "100vh"};
`;

export default Container;
