import React from "react";
import "./Types.css";
import { Link } from "react-router-dom";
const Types = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <ul className="UlL">
        <li className="LiLi">
          <Link className="Aa" to={"/electronics"}>
            Electronics
          </Link>
          <Link className="Aa" to={"/appliances"}>
            Appliances
          </Link>
          <Link className="Aa" to={"/clothes"}>
            Clothes
          </Link>
          <Link className="Aa" to={"/sport"}>
            Sport
          </Link>
          <Link className="Aa" to={"/accessories"}>
            Accessories
          </Link>
          <Link className="Aa" to={"/beauty"}>
            Beauty
          </Link>
          <Link className="Aa" to={"/health"}>
            Health
          </Link>
          <Link className="Aa" to={"/game"}>
            Game
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Types;
