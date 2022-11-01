import React from "react";
import "./Header.css";
import Clock from "../Clock/Clock";
//1초마다 코드실행하고 싶으면 setInterval 쓰면 됩니다
const Header = () => {
  return (
    <>
      <div className="header-container">
        <h1>circle Weather</h1>
        <Clock mobile="true" />
      </div>
    </>
  );
};

export default Header;
