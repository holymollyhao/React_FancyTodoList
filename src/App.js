import React from "react";
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

export default function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate></TodoTemplate>
    </>
  );
}
