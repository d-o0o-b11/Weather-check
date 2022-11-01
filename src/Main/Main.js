import React, { useState } from "react";
import Background from "../Background/Background";
import Container from "../Background/Container";
import Header from "../Header/Header";

const Main = () => {
  //if 낮이면 #d4dde2
  //오후면 ~~
  //새벽이면 ~~ >> Container에 color로 넘기기

  return (
    <Container>
      <Background>
        <Header />
      </Background>
    </Container>
  );
};

export default Main;
