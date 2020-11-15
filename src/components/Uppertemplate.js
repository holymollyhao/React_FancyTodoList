import React from "react";
import styled from "styled-components";

const UpperTemplateBlock = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #e9ecef;
  flex-grow: 1;
`;

function UpperTemplate() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  return <UpperTemplateBlock />;
}

export default UpperTemplate;
