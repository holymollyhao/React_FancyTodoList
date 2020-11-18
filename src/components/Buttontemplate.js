import React, { useState } from "react";
import styled, { css } from "styled-components";

const Inputformstyle = styled.div`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  position: absolute;
  z-index: 2;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Buttonstyle = styled.button`
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  width: 90px;
  height: 90px;

  font-size: 60px;
  color: white;
  font-weight: bold;

  border-radius: 50%;
  border-color: transparent;
  background: #20c997;

  position: relative;
  top: -45px;

  ${(props) =>
    props.isopen &&
    css`
      background: white;
    `}
`;

function Buttontemplate() {
  const [isopen, setopen] = useState(false);

  const togglefunc = () => {
    console.log("onclick!");
    setopen(!isopen);
  };

  return (
    <>
      {isopen && <Inputformstyle></Inputformstyle>}
      <Buttonstyle isopen={isopen} onClick={togglefunc}>
        +
      </Buttonstyle>
    </>
  );
}
export default Buttontemplate;
