import React, { useState } from "react";
import styled from "styled-components";
import { BoxJs } from "./BoxJs";

const Name = styled("text")`
  color: black;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Block = styled("div")`
  width: 250px;
  height: 430px;
  border-radius: 20px;
  margin-top: 30px;
  background-color: white;
  background: linear-gradient(#eeebeb, #eeebeb, #eeebeb, #eeebeb, #f6f5f5);
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Img = styled("img")`
  max-height: 95%;
  height: auto;
  width: 95%;
  border-top-right-radius: 20px;
  max-width: 250px;
`;
const Divmg = styled("div")`
  height: 55%;
  width: auto;
  border-top-right-radius: 20px;
  max-width: 250px;
  transition: all 6s;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: start;
`;
const Blocks = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NameGarde = styled("div")`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
const Star = styled("img")`
  height: 20px;
`;

const Time = styled("img")`
  height: 25px;
  margin-left: 5px;
`;

const BlockBot = styled("div")`
  width: 100%;
  height: 30%;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

const TimeCook = styled("h3")`
  font-size: 15px;
  margin: 0;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  margin-left: 5px;
  font-style: italic;
`;

const Textss = styled("div")`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: start;
  align-items: center;
`;

const TextssBasket = styled("div")`
  display: flex;
  width: 95%;
  height: 40%;
  justify-content: end;
  align-items: start;
  margin-top: -10px;
`;

const Header = styled("h1")`
  font-size: 25px;
  margin: 0;
  font-weight: 900;
  font-style: italic;
  color: black;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-left: 10px;
`;

const Header2 = styled("h3")`
  font-size: 15px;
  margin: 0;
  margin-left: 10px;
  margin-top: 10px;
  font-weight: 500;
  font-style: italic;
  color: grey;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;

const MainBox = styled("div")`
  height: auto;

  width: 100%;
  scrollbar-width: none;
  display: flex;
  align-items: center;
  margin-top: 60px;

  justify-content: center;
`;

const Inside = styled("div")`
  width: 78%;
`;

const Basket = styled("img")`
  height: 100%;
`;
const Bow = styled("img")`
  height: 50px;
  margin-top: -35px;
  margin-left: 230px;
  rotate: 320deg;
`;

const Box = () => {
  const [hovered, setHovered] = useState(true);
  function handleHover() {
    setHovered(!hovered);
  }
  return (
    <MainBox>
      <Inside>
        <Header>Recommendations</Header>
        <Header2>35 678 orders</Header2>
        <Blocks>
          {BoxJs.map((d) => (
            <Block>
              <Divmg onMouseEnter={handleHover} onMouseLeave={handleHover}>
                {hovered ? (
                  <Img src={d.rasm} alt="" />
                ) : (
                  <Img src={d.hoverasm} alt="" />
                )}
              </Divmg>
              <NameGarde>
                <Name>{d.name}</Name>
                <Star src={d.baxo} alt="" />
              </NameGarde>
              <BlockBot>
                <Textss style={{ backgroundColor: "orange" }}>
                  <Time src={d.portsiya} alt="" />
                  <TimeCook> {d.quantity}</TimeCook>
                </Textss>
                <Bow
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/gold-gift-bow-11010487-8860221.png?f=webp"
                  alt=""
                />
                <Textss>
                  <Time src={d.time} alt="" />
                  <TimeCook style={{ textDecoration: "line-through" }}>
                    {d.Ttime}
                  </TimeCook>
                </Textss>
                <Textss style={{ marginTop: "15px" }}>
                  <Time src={d.kalorimg} alt="" />
                  <TimeCook>{d.calories}</TimeCook>
                </Textss>
                <TextssBasket>
                  <Basket src={d.basket} alt="" />
                </TextssBasket>
              </BlockBot>
            </Block>
          ))}
        </Blocks>
      </Inside>
    </MainBox>
  );
};

export default Box;
