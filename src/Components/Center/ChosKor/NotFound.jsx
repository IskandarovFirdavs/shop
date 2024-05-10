import React from "react";
import styled from "styled-components";

const All = styled("div")`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <All>
      <h1>Here is empty !</h1>
    </All>
  );
};

export default NotFound;
