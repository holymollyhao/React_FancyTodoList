import React from "react";
import styled from "styled-components";

const Datestyle = styled.div`
  padding-top: 4rem;
  padding-left: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .numTodo {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
`;

function DateTemplate() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <Datestyle>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="numTodo">할 일 5개 남음</div>
    </Datestyle>
  );
}

export default DateTemplate;
