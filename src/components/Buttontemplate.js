import React, { useState } from "react";
import styled, { css } from "styled-components";

const Inputformstyle = styled.div`
  background: #f8f9fa;
  position: absolute;
  top: 638px;
  z-index: 2;
  width: 512px;
  height: 130px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
  display: flex;
  justify-content: center;
`;

const Inputstyle = styled.input`
  margin-top: 20px;
  width: 350px;
  height: 35px;
  border: 1px solid #e9ecef;
  padding-left: 20px;
  font-size: 15px;
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
  transition: 0.125s all ease-in;

  outline: none;

  z-index: 3;
  ${(props) =>
    props.isopen &&
    css`
      background: #ff6b6b;

      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
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
      {isopen && (
        <Inputformstyle>
          <Inputstyle placeholder="할 일을 입력 후, ENTER를 누르세요"></Inputstyle>
        </Inputformstyle>
      )}
      <Buttonstyle isopen={isopen} onClick={togglefunc}>
        +
      </Buttonstyle>
    </>
  );
}
export default Buttontemplate;
