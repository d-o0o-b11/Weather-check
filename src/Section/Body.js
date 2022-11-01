import React from "react";
import "./Body.css";
import DetailContainer from "../DetailContainer/DetailContainer";
import DetailButton from "../DetailButton/DetailButton";

const Body = () => {
  return (
    <>
      <div className="body-container">
        <div className="item" style={{ width: "100%", height: "100%" }}>
          <DetailContainer width="95%" height="95vh" />
        </div>
        <div className="button-container">
          <DetailButton width="40%" height="40vh">
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton>
          <DetailButton width="40%" height="40vh">
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton>
          <DetailButton width="40%" height="40vh">
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton>
          <DetailButton width="40%" height="40vh">
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton>
        </div>
      </div>
    </>
  );
};

export default Body;
