import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const All = styled("div")`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Inside = styled("div")`
  width: 75%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Img = styled("img")`
  height: 150px;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 900;
  &:hover {
    color: orange;
  }
`;
const Pick = () => {
  return (
    <All>
      <Inside>
        <Links to={"https://iskandarovfirdavs.github.io/AllMaps/"}>
          Tashkent
        </Links>
        <Links to={"https://iskandarovfirdavs.github.io/QarshiMap/"}>
          Qarshi
        </Links>
        <Links to={"https://iskandarovfirdavs.github.io/TermizMap/"}>
          Termiz
        </Links>
      </Inside>
      <Img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/map-2872705-2409421.png"
        alt=""
      />
    </All>
  );
};

export default Pick;
