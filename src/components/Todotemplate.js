import React from "react";
import styled from "styled-components";
import Date from "./Date";

const TodoTemplateBlock = styled.div`
  display: flex;
  flex: none;
  flex-direction: column;
  width: 512px;
  height: 768px;
  background: white;
  border-radius: 1rem;
`;

const UpperTemplateBlock = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #e9ecef;
  flex: 1;
`;

const LowerTemplateBlock = styled.div`
  flex: 3;
`;

function TodoTemplate({ children }) {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  return (
    <TodoTemplateBlock>
      <UpperTemplateBlock>
        <Date date={10} />
      </UpperTemplateBlock>
      <LowerTemplateBlock>{children}</LowerTemplateBlock>
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
