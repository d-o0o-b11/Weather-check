import React, { useEffect, useState } from "react";
import Background from "../Background/Background";
import Container from "../Background/Container";
import Header from "../Section/Header";
import Body from "../Section/Body";

const Main = () => {
  //if 낮이면 #d4dde2
  //오후면 ~~
  //새벽이면 ~~ >> Container에 color로 넘기기
  // const [color, SetColor] = useState("");
  // let current = new Date(); //현재 시간을 가진 Date객체 생성
  // if (current.getHours() <= 12)
  //   //낮
  //   SetColor("#81beff, #a0d0ff, #bfe2fe");
  // else if (current.getHours() <= 18)
  //   //오후
  //   SetColor("#B893B5, #D6A0B0, #F0ADB4, #F3D8CD");

  const [color, SetColor] = useState("");
  const [backcolor, SetBackColor] = useState("");
  let current = new Date();

  const ChangeBackground = () => {
    if (current.getHours() <= 12) {
      //낮
      SetColor("#81beff, #a0d0ff, #bfe2fe");
      SetBackColor("#D4DDE2");
    } else if (current.getHours() <= 18) {
      //오후
      SetColor("#B893B5, #D6A0B0, #F0ADB4, #F3D8CD");
      SetBackColor("#F2EFE8");
    }
    //밤
    else {
      SetColor("#0C1228, #0F2650, #183E6F");
      SetBackColor("#D4DDE2");
    }
  };
  useEffect(() => {
    ChangeBackground();
  }, []);

  console.log(color);

  return (
    <Container background={backcolor}>
      <Background background={color}>
        <Header />
        <Body />
      </Background>
    </Container>
  );
};

export default Main;
