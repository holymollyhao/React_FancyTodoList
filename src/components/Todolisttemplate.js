import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Todoelemstyle = styled.div`
  height: 3rem;
  display: flex;
  flex: none;
  justify-content: center;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  align-items: center;
  &:hover {
    ${MdDelete} {
      display: initial;
    }
  }

  .Deleteboxstyle {
    flex: 1;
    color: #dee2e6;
    display: none;
    &:hover {
      color: #ff8787;
    }
    &:active {
      color: #fa5252;
    }
  }
`;

const Taskboxstyle = styled.div`
  flex: 7;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

const Checkboxstyle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

function Todoelem({ todo }) {
  return (
    <Todoelemstyle>
      <Checkboxstyle done={todo.done}>{todo.done && <MdDone />}</Checkboxstyle>
      <Taskboxstyle done={todo.done}>{todo.taskName}</Taskboxstyle>
      <MdDelete size={25} className="Deleteboxstyle" />
    </Todoelemstyle>
  );
}

function Todolisttemplate({ todolist }) {
  return (
    <>
      {todolist.map((todos) => (
        <Todoelem key={todos.id} todo={todos} />
      ))}
    </>
  );
}

export default Todolisttemplate;
