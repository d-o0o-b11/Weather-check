import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Location from "../img/Location.png";
import LocationW from "../img/LocationW.png";
import "./Clock.css";

const Clock = ({ color, location }) => {
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

  return (
    <StyledClock color={color}>
      <div className="clock-container">
        <h1 className="item2">{timer}</h1>
        <div className="location">
          {color === "white" ? <img src={LocationW} /> : <img src={Location} />}
          <span>{location}</span>
        </div>
      </div>
    </StyledClock>
  );
};

const StyledClock = styled.div`
  margin-right: 50px;
  color: ${(props) => props.color || "black"};
`;

export default Clock;
