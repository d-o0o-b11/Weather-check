import React, { useEffect, useState } from "react";
import "./Header.css";
import Clock from "../Clock/Clock";
import LOGO from "../img/logo.png";

import useCurrentLocation from "../CurrentLocation/useCurrentLocation";
import { geolocationOptions } from "../constants/geolocationOptions";

const { kakao } = window;

//1초마다 코드실행하고 싶으면 setInterval 쓰면 됩니다
const Header = ({ color }) => {
  // const { location: currentLocation, error: currentError } =
  //   useCurrentLocation(geolocationOptions);
  const [Current_address, SetCurrent_address] = useState("");

  useEffect(() => {
    //   const getAddr = (lat, lng) => {
    //     let geocoder = new kakao.maps.services.Geocoder();
    //     console.log("실행");
    //     let coord = new kakao.maps.LatLng(lat, lng);
    //     let callback = (result, status) => {
    //       if (status === kakao.maps.services.Status.OK) {
    //         console.log(result);
    //       }
    //     };
    //     geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    //   };
    //   let latitude = localStorage.getItem("latitude");
    //   let longitude = localStorage.getItem("longitude");
    //   // console.log(latitude, longitude);
    //   getAddr(latitude, longitude);
    // });
    console.log("useEffect는 들어옴");
    const getAddr = (lat, lng) => {
      let geocoder = new kakao.maps.services.Geocoder();
      let coord = new kakao.maps.LatLng(lat, lng);
      let callback = (result, status) => {
        console.log("status " + status);
        console.log(
          "kakao.maps.services.Status.OK " + kakao.maps.services.Status.OK
        );

        if (status === kakao.maps.services.Status.OK) {
          console.log(status === kakao.maps.services.Status.OK);
          console.log(result);
          SetCurrent_address(
            result[0].address.region_1depth_name +
              result[0].address.region_2depth_name
          );
        }
      };
      geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    };
    let latitude = localStorage.getItem("latitude");
    let longitude = localStorage.getItem("longitude");
    // console.log(latitude, longitude);
    console.log("latitude: " + latitude + "  longitude: " + longitude);
    getAddr(latitude, longitude);
  });

  // setTimeout(() => {
  //   const getAddr = (lat, lng) => {
  //     let geocoder = new kakao.maps.services.Geocoder();
  //     console.log("실행");
  //     let coord = new kakao.maps.LatLng(lat, lng);
  //     let callback = (result, status) => {
  //       if (status === kakao.maps.services.Status.OK) {
  //         console.log(result);
  //       }
  //     };
  //     geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
  //   };
  //   let latitude = localStorage.getItem("latitude");
  //   let longitude = localStorage.getItem("longitude");
  //   // console.log(latitude, longitude);
  //   getAddr(latitude, longitude);
  // }, [5000]);

  // 222
  // useEffect(() => {
  //   kakao.maps.load(() => {
  //     const container = document.getElementById("myMap");
  //     const options = {
  //       center: new kakao.maps.LatLng(33.450701, 126.570667),
  //       level: 3,
  //     };
  //     const map = new kakao.maps.Map(container, options);

  //     var marker = new kakao.maps.Marker({
  //       map: map,
  //       position: new kakao.maps.LatLng(33.450701, 126.570667),
  //     });

  //     var services = kakao.maps.services;
  //     if (!services) {
  //       console.log("kakao.maps.services 를 찾을 수 없음 :", kakao.maps);
  //       return;
  //     } else {
  //       var geocoder = services.Geocoder();

  //       var callback = function (result, status) {
  //         if (status === kakao.maps.services.Status.OK) {
  //           console.log(result);
  //         }
  //       };
  //       geocoder.addressSearch(marker.getLng(), marker.getLat(), callback);
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="header-container">
        <img src={LOGO} />
        <Clock color={color} location={Current_address} />
        {/* <div id="myMap" style={{ width: "500px", height: "500px" }}></div> */}
      </div>
    </>
  );
};

export default Header;
