import React, { useState } from "react";
import styled from "styled-components";
import { BoxJs } from "../Center/Box/BoxJs";

const Name = styled("text")`
  color: #7fb600;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
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
  justify-content: space-around;
`;
const Img = styled("img")`
  max-height: 75%;
  height: auto;
  width: 95%;
  border-top-right-radius: 20px;
  max-width: 250px;
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
  width: 200px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`;
const Star = styled("img")`
  height: 70%;
`;

const Time = styled("img")`
  height: 17px;
  margin-left: 5px;
`;

const BlockBot = styled("div")`
  width: 80%;
  height: 120px;
  margin-top: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: start;
`;

const TimeCook = styled("h1")`
  font-size: 12px;
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  margin-left: 5px;
  font-style: italic;
`;

const Textss = styled("div")`
  display: flex;
  width: 100%;
  height: 33%;
  align-items: center;
`;

const Header = styled("text")`
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  color: #046c00;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
`;
const ImageBoxA = styled("a")`
  overflow: hidden;
  display: block;
  border-radius: 20px;
`;

const Searching = styled("div")`
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #8d8d8d;
  width: 78%;
`;
const SearchDiv = styled("div")`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const NavInput = styled("input")`
  width: 100%;
  height: 38px;
  color: grey;
  border: none;
  border-radius: 21px;

  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: 20px;
  padding-left: 15px;
  &:focus-visible {
    outline: none;
  }
`;
const SearchIcon = styled("img")`
  height: 40px;
  width: 40px;
  background-color: #c8c8c8;
  border-radius: 20px;
`;

const NotFoundImg = styled("img")`
  height: 100%;
  width: 100%;
`;

const Div = styled("div")`
  height: auto;

  width: 100%;
  scrollbar-width: none;
  display: flex;
  align-items: center;
  margin-top: 60px;

  justify-content: center;
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

const BlocksDiv = styled("div")`
  width: 78%;
`;

const Bow = styled("img")`
  height: 50px;
  margin-top: -30px;
  margin-left: 170px;
  rotate: 320deg;
`;
const TextssBasket = styled("div")`
  display: flex;
  width: 95%;
  height: 40%;
  justify-content: end;
  align-items: start;
  margin-top: -10px;
`;

const Basket = styled("img")`
  height: 100%;
`;

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const FilteredData = BoxJs.filter((element) => {
    return element.name
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });
  const [hovered, setHovered] = useState(true);
  function handleHover() {
    setHovered(!hovered);
  }
  return (
    <div>
      <SearchDiv>
        <Searching>
          <NavInput
            id="Search"
            type="search"
            placeholder="Search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <SearchIcon
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"
            alt=""
          />
        </Searching>
      </SearchDiv>
      <Div>
        <BlocksDiv>
          <Blocks>
            {FilteredData.length ? (
              FilteredData.map((d) => (
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
              ))
            ) : (
              <NotFoundImg
                src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?resize=400x300&vertical=center"
                alt=""
              />
            )}
          </Blocks>
        </BlocksDiv>
      </Div>
    </div>
  );
};

export default Search;
