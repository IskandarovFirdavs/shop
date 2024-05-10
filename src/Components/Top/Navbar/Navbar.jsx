import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
const NavbarDiv = styled("div")`
  width: 77%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const NavbarDiv2 = styled("div")`
  width: 90%;
  height: 100px;
  align-items: start;
  justify-content: space-around;
  display: flex;
`;
const NavInside = styled("div")`
  width: 25%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  display: flex;
`;

const Nav = styled(Link)`
  margin: 0;
  font-size: 40px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 900;
  color: orange;
  text-align: center;
  text-decoration: none;
`;

const NavImg = styled("img")`
  height: 50px;
`;
const SearchImg = styled("img")`
  height: 30px;
`;
const AccountImg = styled("img")`
  height: 50px;
`;

const Input = styled("input")`
  width: 100%;
  height: 50%;
  padding: 10px;
  border: 1px solid #aeaeae66;
  border-radius: 10px;

  &:focus-visible {
    outline: none;
    /* border: 1px solid #aeaeae66; */
  }
`;

const Navs = styled("div")`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Accounts = styled(Link)`
  width: 11%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: black;
`;

const Links = styled(NavLink)`
  color: white;
  font-weight: 500;
  text-decoration: none;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
`;

const LeftSide = styled("div")`
  width: 20%;
  justify-content: center;
  height: 100%;
  align-items: center;
  display: flex;
`;
const RightSide = styled("div")`
  width: 75%;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  display: flex;
`;
const RightSideLinks = styled("div")`
  width: 100%;
  justify-content: space-evenly;
  height: 100%;
  align-items: center;
  display: flex;
`;

const Header2 = styled("div")`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 50px;
`;

const AllDiv = styled("div")`
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Navbar = () => {
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
    <AllDiv>
      <NavbarDiv>
        <NavInside>
          <Navs>
            <Links to={"/shop/"}>
              <NavImg
                src="https://cdn-icons-png.flaticon.com/512/3649/3649552.png"
                alt=""
              />
            </Links>
            <Nav to={"/shop/"}>EasilY</Nav>
          </Navs>
        </NavInside>{" "}
        <RightSide>
          {width <= 800 ? (
            <Header2>
              <div className="dropdown">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3810/3810964.png"
                  alt="Cinque Terre"
                  height="50"
                />
                <div className="dropdown-content">
                  <div className="dropdown-content">
                    <Accounts to={"/sign-in"}>
                      <AccountImg
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/login-verified-6251835-5117015.png"
                        alt=""
                      />
                      <h3>Sign in</h3>
                    </Accounts>{" "}
                    <Accounts to={"/choosen"}>
                      <AccountImg
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/like-4612658-3824365.png"
                        alt=""
                      />
                      <h3>Choosen</h3>
                    </Accounts>{" "}
                    <Accounts to={"/basket"}>
                      <AccountImg
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/add-to-basket-5168435-4323753.png?f=webp"
                        alt=""
                      />
                      <h3>Basket</h3>
                    </Accounts>{" "}
                    <Accounts to={"/search"}>
                      <AccountImg
                        src="https://cdn3d.iconscout.com/3d/premium/thumb/search-8041129-6414771.png?f=webp"
                        alt=""
                      />
                      <h3>Search</h3>
                    </Accounts>
                  </div>
                </div>
              </div>
            </Header2>
          ) : (
            <NavbarDiv2>
              <Accounts to={"/sign-in"}>
                <AccountImg
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/login-verified-6251835-5117015.png"
                  alt=""
                />
                <h3>Sign in</h3>
              </Accounts>{" "}
              <Accounts to={"/choosen"}>
                <AccountImg
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/like-4612658-3824365.png"
                  alt=""
                />
                <h3>Choosen</h3>
              </Accounts>{" "}
              <Accounts to={"/basket"}>
                <AccountImg
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/add-to-basket-5168435-4323753.png?f=webp"
                  alt=""
                />
                <h3>Basket</h3>
              </Accounts>{" "}
              <Accounts to={"/search"}>
                <AccountImg
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/search-8041129-6414771.png?f=webp"
                  alt=""
                />
                <h3>Search</h3>
              </Accounts>
            </NavbarDiv2>
          )}
        </RightSide>
      </NavbarDiv>
    </AllDiv>
  );
};

export default Navbar;
