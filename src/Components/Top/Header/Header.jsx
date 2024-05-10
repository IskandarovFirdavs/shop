import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./Header.css";
import { Link } from "react-router-dom";
const Head = styled("div")`
  height: 35px;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3efef;
`;

const HeaderDiv = styled("div")`
  width: 78%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LocationIcon = styled("img")`
  height: 60%;
  margin-left: 15px;
`;

const Location = styled("div")`
  width: 13%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  @media only screen and (max-width: 510px) {
    width: 15%;
  }
  @media only screen and (max-width: 470px) {
    width: 18%;
  }
  @media only screen and (max-width: 400px) {
    width: 25%;
  }
`;

const Links = styled(Link)`
  text-decoration: none;
  text-align: center;
  color: black;
  @media only screen and (max-width: 1050px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 880px) {
    font-size: 8px;
  }
`;
const LinksP = styled("p")`
  text-decoration: none;
  text-align: center;
  width: 20%;
  color: black;
  @media only screen and (max-width: 1050px) {
    font-size: 12px;
  }
  @media only screen and (max-width: 950px) {
    font-size: 10px;
  }
  @media only screen and (max-width: 880px) {
    font-size: 8px;
  }
  @media only screen and (max-width: 400px) {
    width: 30%;
    font-size: 6px;
  }
`;

const EngIcon = styled("img")`
  height: 20px;
`;
const Languages = styled("div")`
  width: 6%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Head>
      <HeaderDiv>
        <Location>
          <LocationIcon
            src="https://cdn3d.iconscout.com/3d/premium/thumb/location-4996158-4168123.png?f=webp"
            alt=""
          />
          <Links>City : Tashkent</Links>
        </Location>
        <Links to={"/pick-point"}>Pick-up points</Links>
        <LinksP style={{ color: "#a6a6a6" }}>
          We will deliver your order for free - in just 1 day!
        </LinksP>
        <Links style={{ color: "orange" }} to={"/question-answer"}>
          Question-answer
        </Links>
        <Links to={"/my-orders"}>My orders</Links>
        <Languages>
          <EngIcon
            src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
            alt=""
          />
          <div class="dropdown">
            <button class="dropbtn">
              <Links to={"/eng"}>ENG</Links>
            </button>
            <div class="dropdown-content">
              <Links to={"/ru"}>
                <EngIcon
                  src="https://www.shareicon.net/data/2016/06/14/592313_ru_256x256.png"
                  alt=""
                />
                RU
              </Links>
              <Links to={"/uzb"}>
                <EngIcon
                  src="https://cdn-icons-png.flaticon.com/512/197/197416.png"
                  alt=""
                />
                UZB
              </Links>
            </div>
          </div>
        </Languages>
      </HeaderDiv>
    </Head>
  );
};

export default Header;
