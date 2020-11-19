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

  .checkbox {
    margin-right: 2rem;
  }

  .taskname {
    flex: 7;
  }
  .Deleteboxstyle {
    flex: 1;
    color: #dee2e6;
    &:hover {
      color: #ff8787;
    }
    &:active {
      color: #fa5252;
    }
  }
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
      <div className="taskname">{todo.taskName}</div>
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
