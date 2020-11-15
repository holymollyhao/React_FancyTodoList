import React from "react";
import styled from "styled-components";

const Weekday = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일"
];
const Datestyle = styled.div`
  font-size: 4rem;
`;

function Date() {
  return <Datestyle></Datestyle>;
}

export default Date;
