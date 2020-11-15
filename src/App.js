import React, { useReducer } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/Todotemplate";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    margin-bottom: 10rem;
    background: #e9ecef;
  }
`;

const InitialState = {
  input: "",
  todolist: [
    {
      id: 1,
      taskName: "과업#1",
      done: true
    },
    {
      id: 2,
      taskName: "과업#2",
      done: false
    },
    {
      id: 3,
      taskName: "과업#3",
      done: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "DONE":
      console.log("finished task");

      break;
    default:
      console.log("default action");
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate todolists={InitialState.todolist}></TodoTemplate>
    </>
  );
}
