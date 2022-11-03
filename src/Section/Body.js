import React from "react";
import "./Body.css";
import DetailContainer from "../DetailContainer/DetailContainer";
import DetailButton from "../DetailButton/DetailButton";
import DetailCountryW from "../DetailContainer/DetailCountryW";

const Body = () => {
  return (
    <>
      <div className="body-container">
        <div className="item" style={{ width: "100%", height: "100%" }}>
          <DetailContainer width="95%" height="80vh">
            <DetailCountryW />
          </DetailContainer>
        </div>
        <div className="button-container">
          {/* 모바일 사이즈
          <DetailButton width="125px" height="10vh"> 
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton> */}

          {/* 컴퓨터 사이즈 */}
          <DetailButton width="210px" height="20vh">
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton>
          <DetailButton width="210px" height="20vh">
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton>
          <DetailButton width="210px" height="20vh">
            <h1>Korea</h1>
            <h4>이미지</h4>
            <span>24ºC</span>
          </DetailButton>
          <DetailButton width="210px" height="20vh">
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
