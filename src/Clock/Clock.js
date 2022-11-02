import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Location from "../img/Location.png";
import "./Clock.css";

const Clock = () => {
  const [timer, setTimer] = useState("00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  // useEffect(() => {
  //   localStorage.setItem("time", timer);
  //   console.log("변함");
  // }, [timer]);

  return (
    <StyledClock>
      <div className="clock-container">
        <h1 className="item2">{timer}</h1>
        <div className="location">
          <img src={Location} />
          <span>Busan</span>
        </div>
      </div>
    </StyledClock>
  );
};

const StyledClock = styled.div`
  margin-right: 50px;
`;

export default Clock;
