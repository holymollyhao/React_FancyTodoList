import React from "react";
import styled from "styled-components";
import DateTemplate from "./Date";

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
  flex: 2;
`;

function TodoTemplate({ children }) {
  return (
    <TodoTemplateBlock>
      <UpperTemplateBlock>
        <DateTemplate />
      </UpperTemplateBlock>
      <LowerTemplateBlock>{children}</LowerTemplateBlock>
    </TodoTemplateBlock>
  );
}

export default TodoTemplate;
