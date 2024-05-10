import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Img = styled("img")`
  height: 50px;
  width: 100%;
`;
const Button = styled("button")`
  border: 2px solid orange;
  height: 100px;
  padding: 0 45px;
  width: 100%;
  background: white;
  border-radius: 20px;
  color: orange;
  font-size: 40px;
  &:focus {
    color: white;
    background-color: orange;
  }
  &:active {
    color: white;
    background-color: orange;
    height: 120px;
    width: 90%;
  }
`;

const Buttons = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 150px;
`;

const ButtonMore = () => {
  return (
    <Buttons>
      <Link to={"/shop/"}>
        <Img
          src="https://cdn-icons-png.flaticon.com/512/892/892646.png"
          alt=""
        />
      </Link>
      <Link to={"/more"}>
        <Button> More . . . </Button>
      </Link>
      <Link to={"/more"}>
        <Img
          src="https://cdn-icons-png.freepik.com/256/892/892662.png?semt=ais_hybrid"
          alt=""
        />
      </Link>
    </Buttons>
  );
};

export default ButtonMore;
