import React, { useState } from "react";
import styled from "styled-components";
import Location from "../img/Location.png";
import "./Clock.css";

const Clock = ({ mobile }) => {
  const [timer, setTimer] = useState("00:00:00");

  const currentTimer = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    setTimer(`${hours}:${minutes}:${seconds}`);
  };

  const startTimer = () => {
    setInterval(currentTimer, 1000);
  };

  startTimer();

  return { mobile } ? (
    <h3>모바일 {mobile}</h3>
  ) : (
    <StyledClock>
      <div className="clock-container">
        <h1>{timer}</h1>
        <div>
          <img src={Location} width="50px" />
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
